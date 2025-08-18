import { Router } from "express"
import { registerUser } from "@/controllers/auth.controller"
import validateSignUpInput from "@/middleware/signup.schema"

const router = Router()

router.post("/register", validateSignUpInput, registerUser)

export default router