import { authHeader } from '../helpers';
import { apiConfig } from '../config';
import { userService } from '../services';
import { alertActions } from '../actions'

export const buyerService = {
    create_buyer_profile,
    read_buyer_profile,
    update_buyer_profile,
    get_all_campaigns,
    create_new_campaign,
    add_list_to_cart,
    delete_buyer_profile: _delete_buyer_profile,
    fetchSavedAdza
};

const apiRoot = apiConfig.apiRoot;

function create_buyer_profile ( _newBuyer )
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

function read_buyer_profile ()
{
	const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch( apiRoot + `/buyer`, requestOptions )
        .then( userService.handleResponse )
        .then( buyer_profile => 
        {
            return buyer_profile;
        });
}

function update_buyer_profile ( _newData )
{
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

function _delete_buyer_profile ()
{
}

function get_all_campaigns()
{
    const reqOpt = {
        method: 'GET',
        headers: { ...authHeader(), "Content-Type": "application/json" }
    }

    return fetch( apiRoot + `/campaign`, reqOpt )
        .then( userService.handleResponse )
        .then( campaigns =>{
            return campaigns
        });
}

function create_new_campaign() 
{
    const reqOpt = {
        method: 'POST',
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: { campaign_name: 'MyCamp'}
    }

    return fetch( apiRoot + `/campaign/`, reqOpt )
        .then( userService.handleResponse )
        .then( message =>{
            return message
    });
}

function add_list_to_cart ( _newListingId ) 
{
    const reqOpt = {
        method: 'POST',
        headers: { ...authHeader(), "Content-Type": "application/json" }
    }

    return fetch( apiRoot + `/cart/${_newListingId}`, reqOpt )
        .then( userService.handleResponse )
        .then( message =>{
            return message
    });
}

function fetchSavedAdza(){
    const requestOptions = {
        method: 'GET',
        headers: authHeader(),
    };

    return fetch( apiRoot + `/buyer/saved`, requestOptions )
        .then( userService.handleResponse )
        .then( adzas => {
            return adzas;
        });
}

