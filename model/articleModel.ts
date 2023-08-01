import mongoose from "mongoose"
import { iArticle } from "../utils/InterFace"


interface iArticleData extends iArticle, mongoose.Document{}

const articleModel = new mongoose.Schema({
    title:{
        type: String
    },
    content:{
        type: String
    },
    description:{
        type: String
    },
    authorID:{
        type: String
    },
    image:{
        type: String
    },
    friend:{
        type: String
    },
    imageID:{
        type: String
    },
    coverImage:{
        type: []
    },
    likes:{
        type: []
    },
    
    rating:[{
        type: mongoose.Types.ObjectId,
        ref:"ratings"
    }],
    author:{
      type: mongoose.Types.ObjectId,
      ref: "authors"
    },
},
{timestamps: true},
)

export default mongoose.model<iArticleData>("article",articleModel)