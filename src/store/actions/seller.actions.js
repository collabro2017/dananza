import { sellerConstants } from '../config';
import { sellerService } from '../services';

export const sellerActions = {
    setProfile,
};

function setProfile(sellerprofile) {
    return dispatch => {
        dispatch(request({ sellerprofile }));

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

    function request(sellerprofile) { return { type: sellerConstants.SET_PROFILE_REQUEST, sellerprofile } }
    function success(sellerprofile) { alert("success"); return { type: sellerConstants.SET_PROFILE_SUCCESS, sellerprofile }; }
    function failure(error) { return { type: sellerConstants.SET_PROFILE_FAILURE, error } }
}
