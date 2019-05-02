import { sellerConstants } from '../config';

const initialState = {
                      sellerProfileMSG: "",
                      sellerprofile: {
                        'profile_photo': 'user1',
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
      return { };
    case sellerConstants.SET_SELLER_PROFILE_SUCCESS:
      return { sellerProfileMSG: "Succeed setting profile!",
               sellerprofile: action.sellerprofile };
    case sellerConstants.SET_SELLER_PROFILE_FAILURE:
      return { sellerProfileMSG: "Failed setting profile!" };

    case sellerConstants.GET_SELLER_PROFILE_REQUEST:
      return { };
    case sellerConstants.GET_SELLER_PROFILE_SUCCESS:
      return { sellerprofile: action.sellerprofile };
    case sellerConstants.GET_SELLER_PROFILE_FAILURE:
      return { };

    case sellerConstants.GET_SELLER_CHANNEL_REQUEST:
      return { };
    case sellerConstants.GET_SELLER_CHANNEL_SUCCESS:
      return { channel: action.channel };
    case sellerConstants.GET_SELLER_CHANNEL_FAILURE:
      return { };

    case sellerConstants.GET_SELLER_ADLIST_REQUEST:
      return { };
    case sellerConstants.GET_SELLER_ADLIST_SUCCESS:
      return { adlist: action.adlist };
    case sellerConstants.GET_SELLER_ADLIST_FAILURE:
      return { };
      
    default:
      return state
  }
}