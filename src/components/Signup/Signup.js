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
import "../../res/css/Signup.css"
import "../../res/css/login.min.css";

class Signup extends React.Component{

    constructor(props) {
      super(props);
    }

    render(){
      return (
        <div className="modal-dialog AuthModal">
          <div className="modal-content modal-content-custom">
            <div className="modal-header modal-header-custom">
              <h4 className="modal-title">Join Dananza</h4>
            </div>
            <div className="modal-body">
                <div className="facebook-part col-md-12">
                  <button className="facebook position-relative" type="button" data-dismiss="modal">
                      <i className="fa fa-facebook-square facebook-custom"></i>
                      <span>Sign Up with Facebook</span>
                  </button>
                </div>
                <div className="google-part col-md-12">
                  <button className="google position-relative" type="button" data-dismiss="modal">
                    <img src={require("../../res/img/google+.png")}/>
                    <span>Sign Up with Google</span>
                  </button>
                </div>
              <div className="border-line col-md-12">
                <span className="thin-line col-md-5"></span>
                <span className="or">or</span>
                <span className="thin-line col-md-5"></span>
              </div>
                <div className="email-part col-md-12">
                    <button className="email position-relative" type="button" data-dismiss="modal">
                        <i className="fa fa-envelope-o email-custom"></i>
                        <span>Sign Up By Email</span>
                    </button>
                </div>
              <div className="footer-line col-md-12">
                <div className="footer-container col-md-12">
                  <span className="label">Already a Member? <a className="signin" id="signin" data-toggle="modal" data-target="#login" data-dismiss="modal"> Sign In</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )}
};

export default withRouter(Signup);