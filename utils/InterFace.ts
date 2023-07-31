
export interface iArticle{
    title?:string
    content?: string
    description?: string
    authorId?: string
    image?: string
    imageId?: string
    coverImage?: string
    rating?: []
    likes?: []
    author?: []
}


export interface iRating{
    rate?:number
    ratedBy?: string
    article?: {}
}

export interface iAuthor{
    name?: string
    email?: string
    password?: string
    avatar?: string
    avatarId?: string
    olarticle?: {} []
}
