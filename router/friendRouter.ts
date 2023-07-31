import  {Router} from "express"
import { beFriend, unFriend } from "../controller/friendController"

const friendRouter = Router()

friendRouter.route("/:authorID/:friendID/be-friend").post(beFriend);
friendRouter.route("/:authorID/:friendID/un-friend").post(unFriend);

export default friendRouter