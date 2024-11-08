/*
  Warnings:

  - You are about to drop the column `test` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "test",
ALTER COLUMN "avatar" DROP NOT NULL,
ALTER COLUMN "active" SET DEFAULT true;