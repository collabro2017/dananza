import { authHeader } from '../helpers';
import { userInfo } from '../helpers';
import { apiConfig } from '../config';

export const sellerService = {
    setProfile,
    getProfile,
    createChannel,
    deleteChannel,
    getChannel,
    createAdlist,
    updateAdlist,
    deleteAdlist,
    getAdlist,
    getAllProfile,
    getSearchResult
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

            var formData = new FormData();

            var jsonData = JSON.stringify(sellerprofile);
            formData.append('sellerprofile', jsonData );

            // Process Images
            for (var i = 0; i < sellerprofile.image_gallery.length; i++) {
                formData.append('image_gallery', sellerprofile.image_gallery[i], sellerprofile.image_gallery[i].name);
            }

            const updateOptions = {
                method: 'PUT',
                headers: { ...authHeader() },
                body: formData
            };
            return fetch( apiRoot + `/adza`, updateOptions)
                .then(handleResponse)
                .then(seller=>{});
        });
}

function getProfile() {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader() }
    };

    return fetch( apiRoot + `/adza`, requestOptions)
        .then(handleResponse);
}

function createChannel(channel) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(channel)
    };
    return fetch( apiRoot + `/channel`, requestOptions)
        .then(handleResponse);
}

function deleteChannel(channelID) {
    const requestOptions = {
        method: 'delete',
        headers: { ...authHeader() }
    };
    return fetch( apiRoot + `/channel/${channelID}`, requestOptions)
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

function createAdlist(adlist) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(adlist)
    };
    return fetch( apiRoot + `/listing`, requestOptions)
        .then(handleResponse);
}

function updateAdlist(adlist) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(adlist)
    };
    const {id} = adlist;
    return fetch( apiRoot + `/listing/${id}`, requestOptions)
        .then(handleResponse);
}

function deleteAdlist(adlistID) {
    const requestOptions = {
        method: 'delete',
        headers: { ...authHeader() }
    };
    return fetch( apiRoot + `/listing/${adlistID}`, requestOptions)
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

function getAllProfile(adzaid) {
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader(), 'Content-Type': 'application/json' }
    };

    return fetch( apiRoot + `/adza/${adzaid}/adzainfo`, requestOptions)
        .then(handleResponse);
}

function getSearchResult(){
    const requestOptions = {
        method: 'GET',
        headers: { ...authHeader() }
    };

    return fetch( apiRoot + `/search`, requestOptions)
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