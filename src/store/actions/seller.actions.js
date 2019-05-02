import { sellerConstants } from '../config';
import { sellerService } from '../services';

export const sellerActions = {
    setProfile,
    getProfile,
    getChannel,
    getAdlist
};

function setProfile(sellerprofile) {
    return dispatch => {
        dispatch(request());

        sellerService.setProfile(sellerprofile)
            .then(
                sellerprofile => { 
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

function getChannel(){
    return dispatch => {
        dispatch(request());

        sellerService.getChannel()
            .then(
                channel => { 
                    dispatch(success(channel.channels));
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

function getAdlist(){
    return dispatch => {
        dispatch(request());

        sellerService.getAdlist()
            .then(
                adList => { 
                    dispatch(success(adList.adlist));
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