import { sellerConstants } from '../config';

const initialState = {
                      sellerProfileMSG: "",
                      sellerprofile: {
                        'profile_photo': 'profile_photo',
                        'profile_description': "",
                        'profile_location': "",
                        'image_gallery':[],
                        'audience_age_min': 0,
                        'audience_age_max': 60,
                        'audience_male_percent' : 0,
                        'audience_locations' : [],
                        'audience_interests' : [],  
                      }
};

export function seller(state = initialState, action) {
  switch (action.type) {

    case sellerConstants.SET_SELLER_PROFILE_REQUEST:
      return state;
    case sellerConstants.SET_SELLER_PROFILE_SUCCESS:
      return { ...state, sellerProfileMSG: "Succeed setting profile!" };
    case sellerConstants.SET_SELLER_PROFILE_FAILURE:
      return { ...state, sellerProfileMSG: "Failed setting profile!" };

    case sellerConstants.GET_SELLER_PROFILE_REQUEST:
      return state;
    case sellerConstants.GET_SELLER_PROFILE_SUCCESS:
      return { ...state, sellerprofile: action.sellerprofile };
    case sellerConstants.GET_SELLER_PROFILE_FAILURE:
      return state;

    case sellerConstants.CREATE_SELLER_CHANNEL_REQUEST:
      return state;
    case sellerConstants.CREATE_SELLER_CHANNEL_SUCCESS:
      return { ...state, sellerProfileMSG: "Succeed creating channel!" };
    case sellerConstants.CREATE_SELLER_CHANNEL_FAILURE:
      return { ...state, sellerProfileMSG: "Failed creating channel!" };

    case sellerConstants.DELETE_SELLER_CHANNEL_REQUEST:
      return state;
    case sellerConstants.DELETE_SELLER_CHANNEL_SUCCESS:
      return { ...state, sellerProfileMSG: "Succeed deleting channel!"};
    case sellerConstants.DELETE_SELLER_CHANNEL_FAILURE:
      return { ...state, sellerProfileMSG: "Failed deleting channel!" };

    case sellerConstants.GET_SELLER_CHANNEL_REQUEST:
      return state;
    case sellerConstants.GET_SELLER_CHANNEL_SUCCESS:
      return { ...state, channel: action.channel };
    case sellerConstants.GET_SELLER_CHANNEL_FAILURE:
      return state;

    case sellerConstants.CREATE_SELLER_ADLIST_REQUEST:
      return state;
    case sellerConstants.CREATE_SELLER_ADLIST_SUCCESS:
      return { ...state, sellerProfileMSG: "Succeed creating adlist!"};
    case sellerConstants.CREATE_SELLER_ADLIST_FAILURE:
      return { ...state, sellerProfileMSG: "Failed creating adlist!" };

    case sellerConstants.UPDATE_SELLER_ADLIST_REQUEST:
      return state;
    case sellerConstants.UPDATE_SELLER_ADLIST_SUCCESS:
      return { ...state, sellerProfileMSG: "Succeed updating adlist!"};
    case sellerConstants.UPDATE_SELLER_ADLIST_FAILURE:
      return { ...state, sellerProfileMSG: "Failed updating adlist!" };

    case sellerConstants.DELETE_SELLER_ADLIST_REQUEST:
      return state;
    case sellerConstants.DELETE_SELLER_ADLIST_SUCCESS:
      return { ...state, sellerProfileMSG: "Succeed deleting adlist!"};
    case sellerConstants.DELETE_SELLER_ADLIST_FAILURE:
      return { ...state, sellerProfileMSG: "Failed deleting adlist!" };

    case sellerConstants.GET_SELLER_ADLIST_REQUEST:
      return state;
    case sellerConstants.GET_SELLER_ADLIST_SUCCESS:
      return { ...state, adlist: action.adlist };
    case sellerConstants.GET_SELLER_ADLIST_FAILURE:
      return state;

    case sellerConstants.GET_SELLER_ALL_PROFILE_REQUEST:
      return state;
    case sellerConstants.GET_SELLER_ALL_PROFILE_SUCCESS:
      return { ...state, sellerinfo: action.adzas };
    case sellerConstants.GET_SELLER_ALL_PROFILE_FAILURE:
      return state;

    case sellerConstants.MOVE_TO_SELLER_PAGE:
      return { ...state, buyer_sellerview: true, AdzaprofileId : action.adzaId};
    case sellerConstants.MOVE_TO_SELLER_PAGE_PREVIEW:
      return { ...state, buyer_sellerview: false, AdzaprofileId : action.sellerprofile.id, sellerprofile:{...action.sellerprofile}};
    
    case sellerConstants.GET_SELLER_ALL_ADLIST_REQUEST:
      return state;
    case sellerConstants.GET_SELLER_ALL_ADLIST_SUCCESS:
      return { ...state, allAdlist: action.adlist };
    case sellerConstants.GET_SELLER_ADLIST_FAILURE:
      return state;
    default:
      return state
  }
}