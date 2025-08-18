-- CreateTable
CREATE TABLE "public"."user" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "phone" TEXT NOT NULL,
    "profile_picture" TEXT,
    "is_verified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."otp" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "expires_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "otp_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "public"."user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_key" ON "public"."user"("phone");

-- CreateIndex
CREATE INDEX "otp_phone_idx" ON "public"."otp"("phone");
