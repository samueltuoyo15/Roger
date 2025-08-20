import { NextFunction, Request, Response } from "express"
import { registerUserService } from "@/services/auth.service"
import logger from "@/common/utils/logger"

const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<any> => {
  try {
   const { phone, username } = req.body
   await registerUserService(username, phone)

    return res.status(201).json({ success: true, message: "Your account has been created successfully, kindly check your phone for the otp" })
  } catch (error) {
    next(error)
  }
}

export { registerUser }
