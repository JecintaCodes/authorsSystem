import mongoose from "mongoose"
import { iAuthor } from "../utils/InterFace"


interface iAuthorData extends iAuthor, mongoose.Document{}

const authorModel = new mongoose.Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    avatar:{
        type: String
    },
    avatarId:{
        type: String
    },
    article:[
        {
            type: mongoose.Types.ObjectId,
            ref: "articles"
        }
    ]
   
},
{timestamps: true},
)

export default mongoose.model<iAuthorData>("author",authorModel)