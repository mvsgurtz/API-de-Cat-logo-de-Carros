-- CreateTable
CREATE TABLE "car" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "brand" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "km" INTEGER NOT NULL,

    CONSTRAINT "car_pkey" PRIMARY KEY ("id")
);
