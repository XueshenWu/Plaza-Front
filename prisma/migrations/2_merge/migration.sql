
> v2@0.1.0 migrate:diff /home/xueshen/v2
> dotenv -e .env.local -- npx prisma migrate diff "--from-empty" "--to-schema-datamodel" "prisma/schema.prisma" "--script"

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

