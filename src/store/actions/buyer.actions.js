import { buyerConstants } from '../config';
import { buyerService } from '../services';

export const buyerActions = {
    createBuyerProfile,
    getBuyerProfile,
    updateBuyerProfile,
    controlAction,
    getAllCampaigns,
    delete: _deleteBuyerProfile
};

function createBuyerProfile ( _newBuyer )
{
    return dispatch => {
        buyerService.create_buyer_profile( _newBuyer )
            .then(
                msg => dispatch(controlAction(buyerConstants.CREATE_BUYPER_PROFILE, msg)),
                error => dispatch(controlAction(buyerConstants.ERROR, error))
            );
    };
}

function getBuyerProfile ()
{
    return dispatch => {

        buyerService.read_buyer_profile()
            .then(
                buyer_profile => dispatch(controlAction(buyerConstants.READ_BUYPER_PROFILE, buyer_profile)),
                error => dispatch(controlAction(buyerConstants.ERROR, error))
            )
    };
}

function updateBuyerProfile ( _newData ) 
{
    return  dispatch => {
                buyerService.update_buyer_profile( _newData )
                    .then(
                        msg => dispatch(controlAction(buyerConstants.UPDATE_BUYPER_PROFILE, msg)),
                        error => dispatch(controlAction(buyerConstants.ERROR, error))        
                    );
    };
}

function _deleteBuyerProfile() 
{

}

function getAllCampaigns () 
{
    return dispatch => {
        buyerService.get_all_campaigns()
            .then(
                campaigns => dispatch(controlAction(buyerConstants.GET_ALL_CAMPAIGN, campaigns)),
                error => dispatch(controlAction(buyerConstants.ERROR, error))  
            )
    }
}

function controlAction ( type, data ) 
{
    return {
        type:   type,
                data
    }
}

