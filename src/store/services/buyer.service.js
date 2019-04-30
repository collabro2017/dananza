import { authHeader } from '../helpers';
import { apiConfig } from '../config';
import { userService } from './user.service';

export const buyerService = {
    create,
    read,
    update,
    delete: _delete,
};

const apiRoot = apiConfig.apiRoot;

function create ()
{

}

function read ()
{
	const requestOptions = {
        method: 'POST',
        headers: authHeader(),
    };

    return fetch( apiRoot + `/buyer`, requestOptions )
        .then( userService.handleResponse )
        .then( profile => {
            
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('profile', JSON.stringify(profile));

            return profile;
        });
}

function update ()
{
	
}

function _delete ()
{
	
}