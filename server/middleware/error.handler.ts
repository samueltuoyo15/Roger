import { ErrorRequestHandler  } from "express"

const errorHandler: ErrorRequestHandler = (err, req, res) => {
    console.error(err.stack)
    res.status(err.status || 500).json({ message: err.message || "Internal server error"})
}

export default errorHandler