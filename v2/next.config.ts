import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  serverExternalPackages: [
    "@prisma/client",
    "bcryptjs",
    "pdf-lib",
    "qrcode",
    "@aws-sdk/client-s3",
    "@aws-sdk/client-sesv2",
    "@aws-sdk/s3-request-presigner",
    "node-forge",
    "@signpdf/signpdf",
    "@signpdf/placeholder-pdf-lib",
    "@signpdf/signer-p12",
    "@signpdf/utils",
  ],
};

export default nextConfig;
