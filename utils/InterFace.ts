
export interface iArticle{
    title?:string
    content?: string
    description?: string
    authorID?: string
    image?: string
    imageID?: string
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
    avatarID?: string
    olarticle?: {} []
}
