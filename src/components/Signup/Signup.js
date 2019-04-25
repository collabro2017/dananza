import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { userActions } from '../../store/actions';

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
    state = {"mode":""};

    constructor(props) {
      super(props);

      this.state = {
          user: {
              firstName: 'FName',
              lastName: 'LName',
              businessName: 'BName',
              email: 'test@user.com',
              password: '123456',
              cfm_password: '123456'
          },
          submitted: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    changeModeEmail(){
      this.setState({mode:"email"});
    }
    changeModeMenu(){
      this.setState({mode:"menu"});
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.email && user.password && user.businessName && user.password === user.cfm_password ) {
            delete user.cfm_password;
            dispatch(userActions.register(user));
        }
    }

    render(){
      const { registering  } = this.props;
      const { user, submitted } = this.state;

      if(this.state.mode != "email"){
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
                      <button className="email position-relative" type="button" onClick={()=>{this.changeModeEmail();}}>
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
        );
      }
      else{
        return (
          <div className="modal-dialog AuthModal">
            <div className="modal-content modal-content-custom">
              <div className="modal-header modal-header-custom">
                <h4 className="modal-title">Join Dananza</h4>
              </div>
              <div className="modal-body">
                <form name="form" onSubmit={this.handleSubmit}>
                  <div className="user-info">
                    <div className="row">
                      <div className="col-sm-6 controllabel">
                          BusinessName
                      </div>
                      <div className="col-sm-6">
                          <input type="text" name="businessName" value={user.businessName} onChange={this.handleChange}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 controllabel">
                          Email
                      </div>
                      <div className="col-sm-6">
                          <input type="email" name="email" value={user.email} onChange={this.handleChange}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 controllabel">
                          FirstName
                      </div>
                      <div className="col-sm-6">
                          <input type="text" name="firstName" value={user.firstName} onChange={this.handleChange}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 controllabel">
                          LastName
                      </div>
                      <div className="col-sm-6">
                          <input type="text" name="lastName" value={user.lastName} onChange={this.handleChange}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 controllabel">
                          Enter New Password
                      </div>
                      <div className="col-sm-6">
                          <input type="password" name="password" value={user.password} onChange={this.handleChange}/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 controllabel">
                          Confirm Your Password
                      </div>
                      <div className="col-sm-6">
                          <input type="password" name="cfm_password" value={user.cfm_password} onChange={this.handleChange}/>
                      </div>
                    </div>
                    <div className="action">
                      <button className="btn btn-submit">Submit</button>
                      <button className="btn btn-cancel" onClick={()=>{this.changeModeMenu()}}>Back</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      }
    }
};

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

export default connect(
  mapStateToProps
)(Signup);