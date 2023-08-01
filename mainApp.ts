import express from "express"
import cors from "cors"
import { Application } from "express"
import { Request } from "express"
import { Response } from "express"
import authorRouter from "./router/authorRouter"
import articleRouter from "./router/articleRouter"
import friendRouter from "./router/friendRouter"

export const mainApp = (app:Application)=>{
    app.use(express.json())
    app.use(cors())
    app.use("/api/v1/authorRouter",authorRouter)
    app.use("/api/v1/articleRouter", articleRouter)
    app.use("/api/v1/friendRouter", friendRouter)

    app.get("/", (req:Request, res:Response)=>{
        try {
            return res.status(200).json({
                message:"api live........"
            })
        } catch (error) {
            return res.status(400).json({
                message:"aError message",
                data: error
            })
        }
    })
}
