-- DropForeignKey
ALTER TABLE "Lotto" DROP CONSTRAINT "Lotto_agronomoId_fkey";

-- AlterTable
ALTER TABLE "Lotto" ALTER COLUMN "agronomoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Lotto" ADD CONSTRAINT "Lotto_agronomoId_fkey" FOREIGN KEY ("agronomoId") REFERENCES "FilieraPeople"("id") ON DELETE SET NULL ON UPDATE CASCADE;
