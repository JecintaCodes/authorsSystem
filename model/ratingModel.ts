import mongoose from "mongoose"
import { iRating } from "../utils/InterFace"

interface iRatingData extends iRating, mongoose.Document{}

const RateModel = new mongoose.Schema({
    rate:{
        type: Number
    },
    ratedBy:{
        type: String
    },
    article:{
        type:mongoose.Types.ObjectId,
        ref: "articles"
    },
},
{timestamps: true},
)

export default mongoose.model<iRatingData>("rate",RateModel)