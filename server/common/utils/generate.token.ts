import crypto from "crypto"

const generateSecureOtp = (expiresIn: number = 10): string => {
 const otp = parseInt(crypto.randomBytes(3).toString("hex"), 16) % 1000000
 return otp.toString().padStart(6, "0")
}

const generateOtpWithExpiry = (expiresIn: number = 10): { otp: string; expires_at: Date } => {
 const otp = generateSecureOtp()
 const expiresAt = new Date(Date.now() + expiresIn * 1000)
 return { otp, expires_at: expiresAt }
}

export { generateSecureOtp, generateOtpWithExpiry }