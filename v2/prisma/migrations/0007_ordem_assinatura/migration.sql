-- CreateEnum
CREATE TYPE "OrdemAssinatura" AS ENUM ('PARALELA', 'SEQUENCIAL');

-- AlterTable
ALTER TABLE "Contrato" ADD COLUMN     "ordemAssinatura" "OrdemAssinatura" NOT NULL DEFAULT 'PARALELA';

-- AlterTable
ALTER TABLE "ContratoParte" ADD COLUMN     "ordem" INTEGER NOT NULL DEFAULT 0;

