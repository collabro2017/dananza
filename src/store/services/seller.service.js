import { authHeader } from '../helpers';
import { userInfo } from '../helpers';
import { apiConfig } from '../config';

export const sellerService = {
    setProfile
};

const apiRoot = apiConfig.apiRoot;

function setProfile(sellerprofile) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({id: userInfo().id})
    };

    return fetch( apiRoot + `/adza`, requestOptions)
        .then(handleResponse)
        .then(seller => {
            const updateOptions = {
                method: 'PUT',
                headers: { ...authHeader(), 'Content-Type': 'application/json' },
                body: JSON.stringify({sellerprofile,id: userInfo().id})
            };
            return fetch( apiRoot + `/adza`, requestOptions)
                .then(handleResponse)
                .then(seller=>{});
        });
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