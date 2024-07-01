import * as httpRequest from '~/utils/httpRequest';

export const getPost = async () => {
    try {
        const result = await httpRequest.getApi('posts');
        return result;
    } catch (error) {
        console.log(error);
    }
};
