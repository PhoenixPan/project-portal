import axios from 'axios';
import axiosRetry from 'axios-retry';
import isJson from 'is-json';

axiosRetry(axios, {
    retries: 1,
    retryDelay: (retryCount) => {
        return retryCount * 1;
    },
});

const buildErrorResponse = (error) => {
    return {
        error: true,
        statusCode: error.response ? error.response.status : -1,
        statusText: error.response ? error.response.statusText : '',
        data: error.response
            ? isJson(error.response.data)
                ? error.response.data
                : { Message: error.response.data }
            : { Message: error.message },
    };
};

export const httpGet = (url, options) => {
    return axios.get(url, options).catch((error) => {
        return new Promise((resolve, reject) => {
            resolve(buildErrorResponse(error));
        });
    });
};

export const httpPost = (url, options, err) => {
    return axios.post(url, options).catch((error) => {
        return new Promise((resolve, reject) => {
            resolve(buildErrorResponse(error));
        });
    });
};

export const httpPut = (url, options, err) => {
    return axios.put(url, options).catch((error) => {
        return new Promise((resolve, reject) => {
            resolve(buildErrorResponse(error));
        });
    });
};
