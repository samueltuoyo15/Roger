import logger from "@/common/utils/logger"
import { prisma } from "@/prisma/prisma.config"
import { Request, Response } from "express"

const registerUser = async (req: Request, res: Response): Promise<any> => {
  logger.info("Registering user...")
  try {
   const { phone, username } = req.body
   let user = await prisma.user.findUnique({
    where: { phone }
   })

   if (user) {
    return res.status(400).json({ success: false, message: "User already exists" })
   }
    
   user = await prisma.user.create({
        data: { username, phone }
    })
    logger.info("user registered successfully")
    const allUsers = await prisma.user.findMany()
    console.log("Current users in database:", allUsers)
    return res.status(201).json({ success: true, message: "Your account has been created successfully, kindly check your what'app for the otp" })
  } catch (error) {
    logger.error("Error registering user:", error)
    return res.status(500).json({ message: "Internal Server Error" })
  }
}

export { registerUser }
