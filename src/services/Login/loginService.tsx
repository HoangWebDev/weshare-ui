import * as instance from '~/utils/httpRequest';

export const login = async (username: string, password: string) => {
    try {
        const result = await instance.postApi('users/login', {
            username,
            password,
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getUserProfile = async (id: number) => {
    try {
        const result = await instance.getApiId(`users`, id);
        return result;
    } catch (error) {
        console.log(error);
    }
};
