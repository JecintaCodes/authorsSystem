import express,{Router} from "express"
import { SignUp } from "../controller/authorController"

const authorRouter = express.Router()


authorRouter.route("/create").post(SignUp)

export default authorRouter

