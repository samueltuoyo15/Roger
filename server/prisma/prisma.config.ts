import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient({
    log: ["query", "info", "warn", "error"],
})

async function connectToDb() {
  try {
    console.log("⏳ Connecting to Postgres with Prisma...")
    await prisma.$connect()
    console.log("✅ Connected to Postgres!")
  } catch (error) {
    console.error("❌ Error connecting to Postgres:", error)
    process.exit(1)
  }
}
export { prisma, connectToDb }
