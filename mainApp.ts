import express from "express"
import cors from "cors"
import { Application } from "express"
import { Request } from "express"
import { Response } from "express"


export const mainApp = (app:Application)=>{
    app.use(express.json())
    app.use(cors())

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