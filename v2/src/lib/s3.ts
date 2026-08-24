import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import type { Readable } from "stream";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { Resource } from "sst";

const s3 = new S3Client({ region: "sa-east-1" });

// SST injeta o nome do bucket em runtime via link (Resource.Documentos).
// Cast porque os tipos do Resource só são gerados após o deploy com o link.
function bucket(): string {
  return (Resource as unknown as { Documentos: { name: string } }).Documentos.name;
}

/** URL pré-assinada para o navegador enviar (PUT) o arquivo direto ao S3. */
export async function presignPut(key: string, contentType: string): Promise<string> {
  return getSignedUrl(
    s3,
    new PutObjectCommand({ Bucket: bucket(), Key: key, ContentType: contentType }),
    { expiresIn: 300 }
  );
}

/** Baixa um objeto do S3 como bytes (uso server-side, ex.: gerar PDF assinado). */
export async function getObjectBytes(key: string): Promise<Uint8Array> {
  const out = await s3.send(new GetObjectCommand({ Bucket: bucket(), Key: key }));
  const stream = out.Body as Readable;
  const chunks: Buffer[] = [];
  for await (const chunk of stream) chunks.push(chunk as Buffer);
  return new Uint8Array(Buffer.concat(chunks));
}

/** Envia bytes para o S3 (server-side). */
export async function putObjectBytes(key: string, bytes: Uint8Array, contentType = "application/pdf"): Promise<void> {
  await s3.send(new PutObjectCommand({ Bucket: bucket(), Key: key, Body: bytes, ContentType: contentType }));
}

/** URL pré-assinada para download (GET) de um documento. */
export async function presignGet(key: string, filename?: string): Promise<string> {
  return getSignedUrl(
    s3,
    new GetObjectCommand({
      Bucket: bucket(),
      Key: key,
      ResponseContentDisposition: filename ? `attachment; filename="${filename}"` : undefined,
    }),
    { expiresIn: 120 }
  );
}
