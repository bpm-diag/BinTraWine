/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `collaboratorId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "collaboratorId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Collaborator" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FilieraPeople" (
    "id" SERIAL NOT NULL,
    "createdId" INTEGER NOT NULL,
    "collaborationId" INTEGER NOT NULL,

    CONSTRAINT "FilieraPeople_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lotto" (
    "id" INTEGER NOT NULL,
    "agronomoId" INTEGER NOT NULL,

    CONSTRAINT "Lotto_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collaborator_id_key" ON "Collaborator"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilieraPeople_id_key" ON "FilieraPeople"("id");

-- CreateIndex
CREATE UNIQUE INDEX "FilieraPeople_collaborationId_key" ON "FilieraPeople"("collaborationId");

-- CreateIndex
CREATE UNIQUE INDEX "Lotto_agronomoId_key" ON "Lotto"("agronomoId");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_collaboratorId_fkey" FOREIGN KEY ("collaboratorId") REFERENCES "Collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FilieraPeople" ADD CONSTRAINT "FilieraPeople_createdId_fkey" FOREIGN KEY ("createdId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FilieraPeople" ADD CONSTRAINT "FilieraPeople_collaborationId_fkey" FOREIGN KEY ("collaborationId") REFERENCES "Collaborator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lotto" ADD CONSTRAINT "Lotto_agronomoId_fkey" FOREIGN KEY ("agronomoId") REFERENCES "FilieraPeople"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
