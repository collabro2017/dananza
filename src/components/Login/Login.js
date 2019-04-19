import React from "react";
import { Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";

import "../../res/bootstrap/css/bootstrap.min.css"
import "../../res/font-awesome/css/font-awesome.min.css"
import "../../res/css/components.min.css"
import "../../res/css/global.css"
import "../../res/css/header.css"
import "../../res/css/header_search.css"
import "../../res/css/layout.min.css"
import "../../res/css/login.min.css";

import $ from "jquery";


class Login extends React.Component{

    constructor(props) {
      super(props);
      this.routeChange = this.routeChange.bind(this);
    }

    routeChange(){
      this.props.history.push("/buyer_landing");
    }
    componentDidUpdate(){
      $('.modal-backdrop').remove();
    }

    render(){
      return (
          <div className="modal-dialog modal-dialog-custom">
            <div className="modal-content modal-content-custom">
              <div className="modal-header modal-header-custom">
                <h4 className="modal-title">Log In</h4>
              </div>
              <div className="modal-body">
                <form className="login-form" action="index.html" method="post" noValidate="novalidate">
                    <div className="alert alert-danger display-hide">
                        <button className="close" data-close="alert"></button>
                        <span> Enter any username and password. </span>
                    </div>
                    <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9 label-custom">Username</label>
                        <input className="form-control form-control-solid placeholder-no-fix input-custom"
                        type="text" autoComplete="off" placeholder="Username" name="username"></input>
                    </div>
                    <div className="form-group">
                        <label className="control-label visible-ie8 visible-ie9 label-custom">Password</label>
                        <input className="form-control form-control-solid placeholder-no-fix input-custom"
                        type="password" autoComplete="off" placeholder="Password" name="password"></input>
                    </div>
                    <div className="form-actions form-actions-custom">
                        <Link>
                          <button type="submit" className="btn green uppercase" onClick={this.routeChange}>Login</button>
                        </Link>
                        <label className="rememberme check mt-checkbox mt-checkbox-outline">
                            <input type="checkbox" name="remember" value="1" />Remember
                            <span></span>
                        </label>
                        <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
                    </div>
                </form>
              </div>
            </div>
          </div>
      )}
};

export default withRouter(Login);
