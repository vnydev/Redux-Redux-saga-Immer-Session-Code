const axios = require('axios');

export const Fetch = async (URL, Method, data, headers) => {

    let request = {
        method: Method || 'GET',
        url: URL,
        baseURL: 'http://localhost:3030/v1/',
        headers: {...headers},
        data: {...data}
    }
    return await axios(request);
};