import express, { Request, Response } from "express"
import authorModel from "../model/authorModel"
import bcrypt from "bcrypt"
export const SignUp = async(req:Request,res:Response)=>{
try {
    const { name,email,password,avatar,avatarId,article}= req.body;

    const salt = await bcrypt.genSalt(10);
    const harsh = await bcrypt.hash(password, salt)

const newSign = await authorModel.create({
    name,
    email,
    password: harsh,
    avatar,
    avatarId,
    article
})

return res.status(200).json({
    message: "SignIn",
    data: newSign
})

} catch (error) {
    return res.status(404).json({
        message: "create an account",
        data: error
    })
}
}