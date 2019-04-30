import { sellerConstants } from '../config';

export function seller(state = {}, action) {
  switch (action.type) {
    case sellerConstants.SET_PROFILE_REQUEST:
      return {
        dealingSeller: true
      };
    case sellerConstants.SET_PROFILE_SUCCESS:
      return {};
    case sellerConstants.SET_PROFILE_FAILURE:
      return {  };
    default:
      return state
  }
}