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
    get_latest_campaign,
    create_new_cart,
    add_list_to_cart,
    get_current_cart_listings,
    cancel_listing_in_cart,
    clean_cart,
    get_contact,
    create_contact,
    send_message,
    fetch_messages,
    create_saved_adza,
    delete_buyer_profile: _delete_buyer_profile,
    fetch_Saved_Adza
};

const apiRoot = apiConfig.apiRoot;

function create_buyer_profile ( _newBuyer )
{
    const requestOptions = 
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_newBuyer)
    }

    return fetch( apiRoot + `/buyer`, requestOptions )
        .then( userService.handleResponse )
        .then( message => {
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

function create_new_campaign( _cartid, _info ) 
{
    const reqOpt = {
        method: 'POST',
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify( {info: _info, cartid: _cartid })
    }

    return fetch( apiRoot + `/campaign`, reqOpt )
        .then( userService.handleResponse )
        .then( message =>{
            return message
    });
}

function get_latest_campaign() 
{
    const reqOpt = {
        method: 'GET',
        headers: { ...authHeader(), "Content-Type": "application/json" }
    }

    return fetch( apiRoot + `/campaign/latest`, reqOpt )
        .then( userService.handleResponse )
        .then( campaign =>{
            return campaign
    });
}

function create_new_cart () 
{
    const reqOpt = {
        method: 'POST',
        headers: { ...authHeader(), "Content-Type": "application/json" },
    }

    return fetch( apiRoot + `/cart`, reqOpt )
        .then( userService.handleResponse )
        .then( cart => {
            localStorage.setItem('cart', JSON.stringify(cart));
            return cart;
    });
}

function add_list_to_cart ( _cur_cart_id, _newListingId, _sellerId ) 
{
    const reqOpt = {
        method: 'POST',
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify({ cartid: _cur_cart_id, newlisting: _newListingId, sellerid: _sellerId })
    }

    return fetch( apiRoot + `/cart/addListing`, reqOpt )
        .then( userService.handleResponse )
        .then( message =>{
            return message
    });
}

function get_current_cart_listings( _cartId ) 
{
    const reqOpt = {
        method: "POST",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify({cartid: _cartId})
    };

    return fetch(apiRoot + `/cart/cartListings`, reqOpt)
        .then( userService.handleResponse )
        .then( listings => {
            return listings;
        });
}

function cancel_listing_in_cart( _cartid, _lisingId )
{
    const reqOpt = {
        method: "POST",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify({cartid: _cartid})
    }

    return fetch(apiRoot + `/cart/${_lisingId}`, reqOpt)
    .then( userService.handleResponse )
    .then( message => 
        {
            // return message
            return get_current_cart_listings();
    });
}

function clean_cart( _cartid )
{
    const reqOpt = {
        method: "DELETE",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify({cartid: _cartid})
    }

    return fetch(apiRoot + `/cart/`, reqOpt)
    .then( userService.handleResponse )
    .then( message => 
        {
            return get_current_cart_listings();
    });
}

function get_contact( s_type )
{
    const reqOpt = {
        method: "POST",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify({s_type: s_type})
    }

    return fetch(apiRoot + `/message/contact/`, reqOpt)
    .then( userService.handleResponse )
    .then( contact => {
        return contact;
    });
}

function create_contact( s_type, adzaId )
{
    const reqOpt = {
        method: "POST",
        headers: { ...authHeader(), "Content-Type": "application/json" },
    }

    return fetch(apiRoot + `/message/buyer/connect/${adzaId}`, reqOpt)
    .then( userService.handleResponse )
    .then( contact => {
        return contact;
    });
}

function send_message( s_type, _sellerId, _text, _addr )
{
    const reqOpt = {
        method: "POST",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify({ s_type: s_type, to: _sellerId, message: _text, contactId: _addr })
    }

    return fetch(apiRoot + `/message/send`, reqOpt)
    .then( userService.handleResponse )
    .then( contact => {
        return contact;
    });
}

function fetch_messages( s_type, contact)
{
    const reqOpt = {
        method: "POST",
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify({ s_type: s_type, contact })
    }

    return fetch(apiRoot + `/message/fetch`, reqOpt)
    .then( userService.handleResponse )
    .then( messages => {
        return messages;
    });
}

function create_saved_adza( _adzaId ){
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), "Content-Type": "application/json" },
        body: JSON.stringify({ AdzaProfileId: _adzaId })
    };

    return fetch( apiRoot + `/buyer/saved`, requestOptions )
        .then( userService.handleResponse )
        .then( adzas => {
            return adzas;
        });
}

function fetch_Saved_Adza(){
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

