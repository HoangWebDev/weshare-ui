interface IPostModel {
    id_posts?: number | null;
    id_user: number;
    content?: string;
    image?: string;
    created_at?: Date;
    updated_at?: Date;
}

class PostModel implements IPostModel {
    id_posts?: number | null;
    id_user: number;
    content?: string;
    image?: string;
    created_at?: Date;
    updated_at?: Date;

    constructor(id_posts: number | null,
        id_user: number,
        content: string,
        image: string,
        created_at: Date,
        updated_at: Date
    ) {
        this.id_posts = id_posts;
        this.id_user = id_user;
        this.content = content;
        this.image = image;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}

export default PostModel