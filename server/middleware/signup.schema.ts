import { Request, Response, NextFunction } from "express"
import joi from "joi"

const NIGERIA_PHONE_REGEX = /^(0|\+234)[7-9][0-1]\d{8}$/

const signUpValidationSchema = joi.object({
  username: joi.string().min(4).max(15).alphanum().required().messages({
    "string.empty": "Username is required",
    "string.min": "Username must be at least 4 characters",
    "string.max": "Username cannot exceed 15 characters",
    "string.alphanum": "Username can only contain letters and numbers"
  }),
  phone: joi.string().pattern(NIGERIA_PHONE_REGEX).required().messages({
    "string.empty": "Phone number is required",
    "string.pattern.base": "Phone must be a valid Nigerian number (e.g., 08012345678)"
  })
})

export const validateSignUpInput = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.body)
  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).json({
      message: "Validation Error",
      error: [{ field: "body", message: "Request body is required" }]
    })
    return 
  }

  const { error } = signUpValidationSchema.validate(req.body, {
    abortEarly: false,
    allowUnknown: false
  })

  if (error) {
    res.status(400).json({
      success: false,
      message: "Sign Up Validation Error",
      error: error.details.map((detail) => ({
        field: detail.path.join("."),
        message: detail.message.replace(/"/g, "")
      }))
    })
    return 
  }

  next()
}

export default validateSignUpInput