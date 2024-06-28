import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const getApi = async (url: string, options = {}) => {
    const response = await instance.get(url, options);
    return response.data;
}

export const getApiId = async (url: string, id: number) => {
    const response = await instance.get(url + `/` + id);
    return response.data;
}

export const postApi = async (url: string, options = {}) => {
    const response = await instance.post(url, options);
    return response.data;
}

export const putApi = async (url: string, options = {}) => {
    const response = await instance.put(url, options);
    return response.data;
}

export const deleteApi = async (url: string, options = {}) => {
    const response = await instance.delete(url, options);
    return response.data;
}
export default instance;
