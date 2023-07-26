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
    artdescriptionicle:{
        type: String
    },
    authorId:{
        type: String
    },
    Image:{
        type: String
    },
    ImageId:{
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