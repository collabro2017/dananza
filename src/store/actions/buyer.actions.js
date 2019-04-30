import { buyerConstants } from '../config';
import { buyerService } from '../services';

export const buyerActions = {
    create,
    read,
    update,
    delete: _delete
};

function create ()
{

}

function read()
{
    return dispatch => {

        buyerService.read()
            .then(
                profile => dispatch(success(profile)),
                error => dispatch(failure(error))
            );
    };

    function success(profile) { return { type: buyerConstants.READ, profile } }
    function failure(error) { return { type: buyerConstants.ERROR, error } }

}

function update () 
{

}

function _delete() 
{

}