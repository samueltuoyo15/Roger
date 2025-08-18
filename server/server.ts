import express from "express"
import { createServer } from "http"
import helmet from "helmet"
import authRoute from "@/routes/auth.route"
//import cookieParser from "cookie-parser"
import requestLogger from "@/middleware/request.logger"
import logger from "@/common/utils/logger"
import dotenv from "dotenv"
dotenv.config()    

const app = express()
app.use(express.json())
app.use(requestLogger)
app.use(helmet())
app.use("/api/v1/auth", authRoute)
const server = createServer(app)


const startServer = async () => {
    try{
        app.listen(Number(process.env.PORT!), "0.0.0.0", () => {
             logger.info(`app is running in ${process.env.NODE_ENV} environment`)
        })
    } catch(error){
        logger.error("Error starting app", error)
        process.exit(1)
    }
}

startServer()

process.on("unhandledRejection", (reason, promise) => {
  logger.error("unhandled Rejection at:", promise, "reason:", reason)
  process.exit(1)
})

process.on("uncaughtException", (error) => {
  logger.error("uncaughtException", error)
  process.exit(1)
})