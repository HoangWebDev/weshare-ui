import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

httpRequest.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export const getApi = async (url: string, options = {}) => {
    const response = await httpRequest.get(url, options);
    return response.data;
}

export const getApiId = async (url: string, id: number) => {
    const response = await httpRequest.get(url + `/` + id);
    return response.data;
}

export const postApi = async (url: string, options = {}) => {
    const response = await httpRequest.post(url, options);
    return response.data;
}

export const putApi = async (url: string, options = {}) => {
    const response = await httpRequest.put(url, options);
    return response.data;
}

export const deleteApi = async (url: string, options = {}) => {
    const response = await httpRequest.delete(url, options);
    return response.data;
}
export default httpRequest;
