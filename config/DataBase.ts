import mongoose from "mongoose"
import env from "dotenv"
env.config()

const Base: string = process.env.MONGO!


export const DataBase = async()=>{
mongoose.connect(Base).then(()=>{
    console.log(`connected on ${Base}`)
})
}