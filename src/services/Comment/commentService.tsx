import * as httpRequest from '~/utils/httpRequest';

export const getCommentByIdPost = async (id_posts: number) => {
    try {
        const result = await httpRequest.getApiId('comments', id_posts);
        return result;
    } catch (error) {
        console.log(error);
    }
};
