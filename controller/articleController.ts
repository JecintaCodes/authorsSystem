 import express, { Request, Response } from "express"
import authorModel from "../model/authorModel"
import articleModel from "../model/articleModel";
import mongoose from "mongoose";
import cloudinary from "../config/cloudinary";


export const createArticle = async(req:Request,res:Response):Promise<Response>=>{
try {
    const { email, description, content, title ,image, imageID}= req.body;
    const {authorID} = req.params;
    // const author = await authorModel.findOne(email)
    const author:any = await authorModel.findById({authorID})


    const {secure_url, public_id} =await cloudinary.uploader.upload(req.file.path);
    const  article = await authorModel.create({
        description, 
        content, 
        title ,
        authorID:author_Id,// author_Id,
        author,
        image:secure_url, //secure_url
        imageID:public_id, //public_id
    })

author?.article?.push(new mongoose.Types.ObjectId(article._id));

author!.save()

return res.status(201).json({
    message: "Article Created",
  
})
} catch (error) {
    return res.status(404).json({
        message: " article not ctrated ",
        data: error
    })
}
}

export const getAuthorArticle = async(req:Request,res:Response):Promise<Response>=>{
    try {
        
        const {authorId} = req.params;

        const author: any = await authorModel.findById(authorId).populate({
            path:"articles",
            options: {
                sort:{
                    createdAt: -1,
                }
            }
        });
        return res.status(200).json({
            message:"gotten athor articles",
            data: author
        })
    } catch (error) {
        return res.status(404).json({
            message:"author articles not gotten",
            data: error.message,
        });
    }
};

export const likeAuthorArticle = async(req:Request,res:Response)=>{
    try {
        const {authorID, articleID} = req.params;

        const user: any = await authorModel.findById(articleID);

        if (user){
            const likeArticle: any = await articleModel.findById(articleID);

            if(likeArticle){
                return res.status(404).json({
                    message: "article not found",
                })
            }

            if(likeArticle.likes.includes(user._id)) {
                return res.status(409).json({
                    message:"you have liked this article"
                })
            }
            likeArticle.likes?.push(user._id);
            likeArticle?.save()
            
            return res.status(201).json({
                message:`post liked by ${user.name}`
            })

        }else{
            return res.status(404).json({
                message: "you cant do this",
            })
        }


    } catch (error) {
        return res.status(404).json({
            message: "you cant like ithis ",
            data: error.message
        })
    }
}

export const unLikeAuthorArticle = async(req:Request,res:Response)=>{
    try {
        
const {authorID, articleID} = req.params;

        const user: any = await authorModel.findById(authorID)

if (user){

    const unlikearticle: any = await articleModel.findById(articleID);

    unlikearticle?.likes?.pull(new mongoose.Types.ObjectId(user?._id));
    unlikearticle?.save();

    return res.status(201).json({
        message: `article unliked by ${user.name}`,
        data: unlikearticle
    })

}else{
    return res.status(404).json({
        message: "you cant dislike it"
    })
}
    } catch (error) {
        return res.status(404).json({
            message: "you cant dislike it",
            data: error.message
        })
    }
}

export const getAllArticles = async (req: any, res: Response) => {
    try {
      const author: any = await articleModel.find();
  
      res.status(201).json({
        message: "veiwing all Article",
        data: author,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error Found",
        data: error.message,
      });
    }
  };
  
  export const getFriendArticles = async (req: any, res: Response) => {
    try {
      const { authorID } = req.params;
  
      const authors = await authorModel.findById(authorID);
      const article = await articleModel.find();
  
      const author: any = await authorModel.findById(authorID).populate({
        path: "articles",
        options: {
          sort: {
            createdAt: -1,
          },
        },
      });
  
      let data = article?.filter((el: any) =>
        authors?.friends!.includes(el.authorID),
      );
  
      res.status(201).json({
        message: "Author's Article ",
        data,
      });
    } catch (error) {
      res.status(404).json({
        message: "Error Found",
        data: error.message,
      });
    }
  };