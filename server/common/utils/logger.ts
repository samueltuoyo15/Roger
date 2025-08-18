import pino from "pino"

const logger = pino({
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    ...process.env.NODE_ENV !== "production" && {
        transport: {
            target: "pino-pretty",
            options: {
                colorize: true
            }
        }
    }
})

export default logger



