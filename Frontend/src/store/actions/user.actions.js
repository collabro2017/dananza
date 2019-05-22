import { userConstants } from '../config';
import { userService } from '../services';
import { alertActions, buyerActions, sellerActions } from './';
//import { history } from '../helpers'

export const userActions = {
    login,
    logout,
    register,
    registerAsSeller,
    getAll,
    delete: _delete,
    switchToSeller,
    switchToBuyer,
    updateUserInfo,
    updatePassword,
    updateQA
};

let socket;
function createSocket(UserID){
    return dispatch => {
        socket = new WebSocket('ws://localhost:8989');
        socket.onopen = () => {
            socket.send(JSON.stringify({
              type: userConstants.ADD_USER,
              UserID
            }));
        }
        socket.onmessage = (event) => {
            const data = JSON.parse(event.data)
            switch (data.type) {
              case userConstants.ADD_MESSAGE:
                if (data.s_type == "buyer")
                    dispatch({type:userConstants.ADD_BUYER_MESSAGE,data});
                else if (data.s_type == "seller")
                    dispatch({type:userConstants.ADD_SELLER_MESSAGE,data});
                break;
              default:
                break;
            }
        }
        socket.onclose = function onclose() {
            socket.close();
        };
    };
}

function sendSellerMessage(message,authorId,readerId){
    socket.send(JSON.stringify({
      type: userConstants.ADD_MESSAGE,
      message,
      authorId,
      readerId,
      s_type: 'seller'
    }));
}

function sendBuyerMessage(message,authorId,readerId){
    socket.send(JSON.stringify({
      type: userConstants.ADD_MESSAGE,
      message,
      authorId,
      readerId,
      s_type: 'buyer'
    }));
}

function login(email, password, isSocial="false") {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password, isSocial)
            .then(
                user => { 
                    dispatch(success(user));
                    dispatch(buyerActions.getBuyerProfile());
                    dispatch(buyerActions.createNewCart());
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error("Failed Login."));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {

    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success(user));
                    dispatch(buyerActions.createBuyerProfile(user));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function registerAsSeller(user){
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success(user));
                    dispatch(sellerActions.createProfile(user));
                    dispatch(alertActions.success("Registeration with seller success! And you loggedin."));
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        userService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.GETALL_REQUEST } }
    function success(users) { return { type: userConstants.GETALL_SUCCESS, users } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }
}

function updateUserInfo(info){
    return dispatch => {
        dispatch(request());

        userService.update(info)
            .then(
                users => {
                    dispatch(success());
                    dispatch(alertActions.success('Updated Successfully'));
                },
                error => {
                    dispatch(failure(error))
                    dispatch(alertActions.error('Error: Can\t update your setting.'));
                }
            );
    };

    function request() { return { type: userConstants.UPDATE_USERINFO_REQUEST } }
    function success() { return { type: userConstants.UPDATE_USERINFO_SUCCESS } }
    function failure(error) { return { type: userConstants.UPDATE_USERINFO_FAILURE, error } }
}

function updatePassword(pwd){
    return dispatch => {
        dispatch(request());

        userService.updatePassword(pwd)
            .then(
                data => {
                    dispatch(success(data.success))
                    if( data.success === true )
                        dispatch(alertActions.success('Updated Successfully'));
                    else
                        dispatch(alertActions.error('Current password isn\'t correct!'));
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.UPDATE_PWD_REQUEST } }
    function success(res) { return { type: userConstants.UPDATE_PWD_SUCCESS, result:res } }
    function failure(error) { return { type: userConstants.UPDATE_PWD_FAILURE, error } }
}

function updateQA( data ){
    return dispatch => {
        dispatch(request());

        userService.updateQA( data )
            .then(
                data => {
                    dispatch(success(data.success))
                    if( data.success === true )
                        dispatch(alertActions.success(data.message));
                    else
                        dispatch(alertActions.error('An Error is occured!'));
                },
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: userConstants.UPDATE_QA_REQUEST } }
    function success(res) { return { type: userConstants.UPDATE_QA_SUCCESS, result:res } }
    function failure(error) { return { type: userConstants.UPDATE_QA_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        userService.delete(id)
            .then(
                user => { 
                    dispatch(success(id));
                },
                error => {
                    dispatch(failure(id, error));
                }
            );
    };

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}


function switchToSeller(){
    return { type: userConstants.USERTYPE, user_type: "seller" };
}

function switchToBuyer(){
    return { type: userConstants.USERTYPE, user_type: "buyer" };
}
