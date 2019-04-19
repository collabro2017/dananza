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
        <div className="modal-dialog AuthModal">
          <div className="modal-content modal-content-custom">
            <div className="modal-header modal-header-custom">
              <h4 className="modal-title">Sign In</h4>
            </div>
            <div className="modal-body">
              <div className="form-group col-md-12">
                <input className="form-control form-control-solid placeholder-no-fix input-custom"
                        type="text" autoComplete="off" placeholder="Username" name="username" />
              </div>
              <div className="form-group col-md-12">
                <input className="form-control form-control-solid placeholder-no-fix input-custom"
                        type="text" autoComplete="off" placeholder="password" name="password" />
              </div>
              <div className="form-group col-md-12">
                  <button className="btn bg-yellow full-width" type="button" data-dismiss="modal" onClick={this.routeChange}>
                      Login
                  </button>
              </div>
              <div className="footer-line col-md-12">
                <div className="footer-container">
                  <a className="signin pull-left" id="signin" data-toggle="modal" data-target="#myModal" data-dismiss="modal">Forgot password?</a>
                  <a className="signin pull-right" id="signin" data-toggle="modal" data-target="#myModal" data-dismiss="modal">Sign Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      )}
};

export default withRouter(Login);
