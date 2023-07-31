import { Router } from "express";
import { createArticle, getAllArticles, getFriendArticles, likeAuthorArticle, unLikeAuthorArticle } from "../controller/articleController";

const articleRouter:any = Router();

articleRouter.route("/createarticle/:_authorId").post(createArticle)
articleRouter.route("/likearticle/_authorId/_articleId").post(likeAuthorArticle)
articleRouter.route("/likearticle/_authorId/_articleId").get(getAllArticles)
articleRouter.route("/likearticle/_authorId/_articleId").get(getFriendArticles)
articleRouter.route("/unlikeArticle/:_authorId/_articleId").post(unLikeAuthorArticle)

export default articleRouter