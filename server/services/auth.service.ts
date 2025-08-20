import logger from "@/common/utils/logger"
import { prisma } from "@/prisma/prisma.config"
import { generateOtpWithExpiry } from "@/common/utils/generate.token"
import { AppError } from "@/common/utils/app.error"

const registerUserService = async (username: string, phone: string) => {
    let user = await prisma.user.findUnique({
    where: { phone }
   })

   if (user) {
    throw new Error("User already exists")
   }

   user = await prisma.user.create({ data: { username, phone } })

   
   const { otp, expires_at } = generateOtpWithExpiry(10)
   await prisma.otp.create({ data: { phone, expires_at, code: otp } })
   
    logger.info("user registered successfully")
    return user 
}

export { registerUserService }