import { sellerConstants } from '../config';
import { sellerService } from '../services';

export const sellerActions = {
    setProfile,
    getProfile,
    createChannel,
    deleteChannel,
    getChannel,
    createAdlist,
    deleteAdlist,
    updateAdlist,
    getAdlist,
    getAllProfile,
    moveSellerPage,
    moveMySellerPage,
    moveSellerPagePreview,
    getSearchResult
};

function setProfile(sellerprofile) {
    return dispatch => {
        dispatch(request());

        sellerService.setProfile(sellerprofile)
            .then(
                sellerprofile => { 
                    dispatch(getProfile());
                    dispatch(success(sellerprofile));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    }

    function request() { return { type: sellerConstants.SET_SELLER_PROFILE_REQUEST } }
    function success(sellerprofile) { return { type: sellerConstants.SET_SELLER_PROFILE_SUCCESS, sellerprofile }; }
    function failure(error) { return { type: sellerConstants.SET_SELLER_PROFILE_FAILURE, error } }
}

function getProfile() {
    return dispatch => {
        dispatch(request());

        sellerService.getProfile()
            .then(
                seller => {
                    if(seller != "No Result") 
                        dispatch(success(seller));
                },
                error => {
                    dispatch(failure());
                }
            );
    }

    function request() { return { type: sellerConstants.GET_SELLER_PROFILE_REQUEST } }
    function success(sellerprofile) { return { type: sellerConstants.GET_SELLER_PROFILE_SUCCESS, sellerprofile }; }
    function failure(error) { return { type: sellerConstants.GET_SELLER_PROFILE_FAILURE, error } }
}

function createChannel(channel) {
    return dispatch => {
        dispatch(request());

        sellerService.createChannel(channel)
            .then(
                channel => {
                    dispatch(success());
                    dispatch(getChannel());
                },
                error => {
                    dispatch(failure(error));
                }
            );
    }

    function request() { return { type: sellerConstants.CREATE_SELLER_CHANNEL_REQUEST } }
    function success() { return { type: sellerConstants.CREATE_SELLER_CHANNEL_SUCCESS }; }
    function failure(error) { return { type: sellerConstants.CREATE_SELLER_CHANNEL_FAILURE, error } }
}

function deleteChannel(channelID) {
    return dispatch => {
        dispatch(request());

        sellerService.deleteChannel(channelID)
            .then(
                message => { 
                    dispatch(success());
                    dispatch(getChannel());
                },
                error => {
                    dispatch(failure(error));
                }
            );
    }

    function request() { return { type: sellerConstants.DELETE_SELLER_CHANNEL_REQUEST } }
    function success() { return { type: sellerConstants.DELETE_SELLER_CHANNEL_SUCCESS }; }
    function failure(error) { return { type: sellerConstants.DELETE_SELLER_CHANNEL_FAILURE, error } }
}

function getChannel(){
    return dispatch => {
        dispatch(request());

        sellerService.getChannel()
            .then(
                channel => {
                    if(channel.channels != undefined)
                        dispatch(success(channel.channels));
                    else
                        dispatch(success([]));
                },
                error => {
                    dispatch(failure());
                }
            );
    }

    function request() { return { type: sellerConstants.GET_SELLER_CHANNEL_REQUEST } }
    function success(channel) { return { type: sellerConstants.GET_SELLER_CHANNEL_SUCCESS, channel }; }
    function failure(error) { return { type: sellerConstants.GET_SELLER_CHANNEL_FAILURE, error } }
}

function createAdlist(adlist) {
    return dispatch => {
        dispatch(request());

        sellerService.createAdlist(adlist)
            .then(
                adlist => { 
                    dispatch(success());
                    dispatch(getAdlist());
                },
                error => {
                    dispatch(failure(error));
                }
            );
    }

    function request() { return { type: sellerConstants.CREATE_SELLER_ADLIST_REQUEST } }
    function success() { return { type: sellerConstants.CREATE_SELLER_ADLIST_SUCCESS }; }
    function failure(error) { return { type: sellerConstants.CREATE_SELLER_ADLIST_FAILURE, error } }
}

function updateAdlist(adlist) {
    return dispatch => {
        dispatch(request());

        sellerService.updateAdlist(adlist)
            .then(
                adlist => { 
                    dispatch(success());
                    dispatch(getAdlist());
                },
                error => {
                    dispatch(failure(error));
                }
            );
    }

    function request() { return { type: sellerConstants.UPDATE_SELLER_ADLIST_REQUEST } }
    function success() { return { type: sellerConstants.UPDATE_SELLER_ADLIST_SUCCESS }; }
    function failure(error) { return { type: sellerConstants.UPDATE_SELLER_ADLIST_FAILURE, error } }
}

function deleteAdlist(id) {
    return dispatch => {
        dispatch(request());

        sellerService.deleteAdlist(id)
            .then(
                adlist => { 
                    dispatch(success());
                    dispatch(getAdlist());
                },
                error => {
                    dispatch(failure(error));
                }
            );
    }

    function request() { return { type: sellerConstants.DELETE_SELLER_ADLIST_REQUEST } }
    function success() { return { type: sellerConstants.DELETE_SELLER_ADLIST_SUCCESS }; }
    function failure(error) { return { type: sellerConstants.DELETE_SELLER_ADLIST_FAILURE, error } }
}

function getAdlist(){
    return dispatch => {
        dispatch(request());

        sellerService.getAdlist()
            .then(
                adList => {
                    if(adList.adlist != undefined) 
                        dispatch(success(adList.adlist));
                    else
                        dispatch(success([]));
                },
                error => {
                    dispatch(failure());
                }
            );
    }

    function request() { return { type: sellerConstants.GET_SELLER_ADLIST_REQUEST } }
    function success(adlist) { return { type: sellerConstants.GET_SELLER_ADLIST_SUCCESS, adlist }; }
    function failure(error) { return { type: sellerConstants.GET_SELLER_ADLIST_FAILURE, error } }
}

function getAllProfile(adzaid){
    return dispatch => {
        dispatch(request());

        sellerService.getAllProfile(adzaid)
            .then(
                data => {
                    dispatch(success(data.adzas));
                },
                error => {
                    dispatch(failure());
                }
            );
    }

    function request() { return { type: sellerConstants.GET_SELLER_ALL_PROFILE_REQUEST } }
    function success(adzas) { return { type: sellerConstants.GET_SELLER_ALL_PROFILE_SUCCESS, adzas }; }
    function failure(error) { return { type: sellerConstants.GET_SELLER_ALL_PROFILE_FAILURE, error } }
}

function getSearchResult(){
    return dispatch => {
        dispatch(request());

        sellerService.getSearchResult()
            .then(
                adList => {
                    if(adList.length != undefined) 
                        dispatch(success(adList));
                    else
                        dispatch(success([]));
                },
                error => {
                    dispatch(failure());
                }
            );
    }

    function request() { return { type: sellerConstants.GET_SELLER_ALL_ADLIST_REQUEST } }
    function success(adlist) { return { type: sellerConstants.GET_SELLER_ALL_ADLIST_SUCCESS, adlist }; }
    function failure(error) { return { type: sellerConstants.GET_SELLER_ALL_ADLIST_FAILURE, error } }
}

function moveMySellerPage(){
    return dispatch => {
        dispatch(request());

        sellerService.getProfile()
            .then(
                seller => {
                    if(seller != "No Result") {
                        dispatch(success(seller));
                        dispatch(moveSellerPage(seller.id));
                    }
                },
                error => {
                    dispatch(failure());
                }
            );
    }

    function request() { return { type: sellerConstants.GET_SELLER_PROFILE_REQUEST } }
    function success(sellerprofile) { return { type: sellerConstants.GET_SELLER_PROFILE_SUCCESS, sellerprofile }; }
    function failure(error) { return { type: sellerConstants.GET_SELLER_PROFILE_FAILURE, error } }
}

function moveSellerPage(id){
    return dispatch => {
        dispatch({ type: sellerConstants.MOVE_TO_SELLER_PAGE, adzaId: id });
    }
}

function moveSellerPagePreview(sellerprofile){
    return dispatch => {
        dispatch({ type: sellerConstants.MOVE_TO_SELLER_PAGE_PREVIEW, sellerprofile });
    }
}
