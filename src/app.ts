import "reflect-metadata"
import "express-async-errors"
import express from "express"
import cors from "cors"
import handleErrorMiddleware from "./middlewares/HandleError.middleware"
import appRouter from "./routers"


const app = express()
app.use(cors())
app.use(express.json())
appRouter(app)
app.use(handleErrorMiddleware)


export default app
