-- CreateEnum
CREATE TYPE "Currency" AS ENUM ('ARG', 'COP', 'USD');

-- CreateEnum
CREATE TYPE "Active" AS ENUM ('user', 'admin', 'superAdmin');

-- CreateTable
CREATE TABLE "Branch" (
    "id" UUID NOT NULL,
    "address" TEXT NOT NULL,
    "manager" JSONB NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ConfigurationStore" (
    "id" UUID NOT NULL,
    "banner" JSONB NOT NULL,
    "footer" JSONB NOT NULL,
    "card" JSONB NOT NULL,
    "searchBar" JSONB NOT NULL,
    "cart" JSONB NOT NULL,

    CONSTRAINT "ConfigurationStore_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Membership" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "currency" "Currency" NOT NULL DEFAULT 'USD',

    CONSTRAINT "Membership_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PaymentPlatform" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "PaymentPlatform_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PayPlatConfig" (
    "id" UUID NOT NULL,
    "credential" JSONB NOT NULL,

    CONSTRAINT "PayPlatConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "active" "Active" NOT NULL DEFAULT 'user',

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Store" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypeBsuness" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "TypeBsuness_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
