import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import logger from "@/common/utils/logger"
import { config } from "dotenv"
config()    

const app = express()
const server = createServer(app)
const io = new Server(server)

io.on("connection", socket => {
    socket.on("chat-message", (message) => {
        io.emit("message", message)
    })
})

const startServer = async () => {
    try{
        server.listen(process.env.PORT, () => {
             logger.info(`Server is running in ${process.env.NODE_ENV} environment`)
        })
    } catch(error){
        logger.error("Error starting server", error)
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