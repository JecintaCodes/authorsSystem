import express, { Application } from "express"
import { mainApp } from "./mainApp"
import env from "dotenv"
import { DataBase } from "./config/DataBase"
env.config();

 const port:number = parseInt(process.env.PORT!);
const app:Application = express();
mainApp(app)
 const server = app.listen(port, ()=>{
    DataBase();
    console.log(`port is listening to ${port}`);
 })

 process.on("uncaughtException",(err:Error)=>{
    console.log(" server is shutting down due to uncaughtException");
    console.log("uncaughtException", err)
    process.exit(1);
 })
 process.on("unhandledRejection",(reason:any)=>{
    console.log(" server is shutting down due to unhandledRejection");
    console.log("u;unhandledRejection", reason)
   
    server.close(()=>{
        process.exit(1);
    })
 })