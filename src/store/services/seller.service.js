import { authHeader } from '../helpers';
import { userInfo } from '../helpers';
import { apiConfig } from '../config';

export const sellerService = {
    setProfile,
    getProfile,
    getChannel,
    getAdlist
};

const apiRoot = apiConfig.apiRoot;

function setProfile(sellerprofile) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader() }
    };

    return fetch( apiRoot + `/adza`, requestOptions)
        .then(handleResponse)
        .then(seller => {
            const updateOptions = {
                method: 'PUT',
                headers: { ...authHeader(), 'Content-Type': 'application/json' },
                body: JSON.stringify({sellerprofile})
            };
            return fetch( apiRoot + `/adza`, updateOptions)
                .then(handleResponse)
                .then(seller=>{});
        });
}

function getProfile(sellerprofile) {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader() }
    };

    return fetch( apiRoot + `/adza`, requestOptions)
        .then(handleResponse);
}

function getChannel() {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader() }
    };

    return fetch( apiRoot + `/channel`, requestOptions)
        .then(handleResponse);
}

function getAdlist() {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader() }
    };

    return fetch( apiRoot + `/listing`, requestOptions)
        .then(handleResponse);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                // window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}