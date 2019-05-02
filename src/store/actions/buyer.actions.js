import { buyerConstants } from '../config';
import { buyerService } from '../services';

export const buyerActions = {
    create,
    read,
    update,
    delete: _delete
};

function create ( _newBuyer )
{
    return dispatch => {
        buyerService.create( _newBuyer )
            .then(
                 msg => dispatch(success(msg)),
                 error => dispatch(fail(error))
            );
    };

    function success( msg ) { return { type: buyerConstants.CREATE, msg }}
    function fail ( error ) { return { type: buyerConstants.ERROR, error}}
}

function read()
{
    return dispatch => {

        buyerService.read()
            .then(
                buyer_profile => dispatch(success(buyer_profile)),
                error => dispatch(failure(error))
            );
    };

    function success(buyer_profile) { return { type: buyerConstants.READ, buyer_profile } }
    function failure(error) { return { type: buyerConstants.ERROR, error } }

}

function update () 
{

}

function _delete() 
{

}