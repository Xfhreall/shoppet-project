-- CreateEnum
CREATE TYPE "Category" AS ENUM ('Any', 'Dog', 'Cat', 'Reptile', 'Bird', 'Fish');

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'Any';
