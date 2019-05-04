import { authHeader } from '../helpers';
import { apiConfig } from '../config';
import { userService } from '../services';
import { alertActions } from '../actions'

export const buyerService = {
    create,
    read,
    update,
    delete: _delete,
};

const apiRoot = apiConfig.apiRoot;

function create ( _newBuyer )
{
    console.log('userid = ', _newBuyer);
    const requestOptions = 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_newBuyer)
    }

    return fetch( apiRoot + `/buyer`, requestOptions )
        .then( userService.handleResponse )
        .then( message => {
            
            console.log('successful creating', message);

            return message
           
        });
}

function read ()
{
	const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch( apiRoot + `/buyer`, requestOptions )
        .then( userService.handleResponse )
        .then( buyer_profile => {
            
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('Buyer Profile', JSON.stringify(buyer_profile));

            return buyer_profile;
        });
}

function update ( _newData )
{
    console.log('update data = ', _newData);
	const requestOptions = {
        method: "PUT",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify( _newData )
    }

    return fetch( apiRoot + `/buyer`, requestOptions )
        .then( userService.handleResponse )
        .then( message =>{
            return message
        });
}

function _delete ()
{
	
}