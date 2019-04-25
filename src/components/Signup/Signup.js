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
              firstName: '',
              lastName: '',
              businessName: '',
              email: '',
              password: '',
              cfm_password: ''
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
            dispatch(userActions.register(user));
        }
    }

    render(){
      const { registering, alert } = this.props;
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
                  { alert.message != null ?
                    <div className="form-group col-md-12 has-error">
                      <p>{alert.message}</p>
                    </div> 
                    : null
                  }
                    <div className={"form-group col-md-12" + (submitted && !user.businessName ? ' has-error' : '')}>
                      <input type="text" placeholder="Business Name" name="businessName" value={user.businessName} onChange={this.handleChange}/>
                    </div>

                    <div className={"form-group col-md-6" + (submitted && !user.firstName ? ' has-error' : '')}>
                      <input type="text" placeholder="First Name" name="firstName" value={user.firstName} onChange={this.handleChange}/>
                    </div>
                    <div className={"form-group col-md-6" + (submitted && !user.lastName ? ' has-error' : '')}>
                      <input type="text" placeholder="Last Name" name="lastName" value={user.lastName} onChange={this.handleChange}/>
                    </div>

                    <div className={"form-group col-md-12" + (submitted && !user.email ? ' has-error' : '')}>
                      <input type="email" placeholder="Enter your Email" name="email" value={user.email} onChange={this.handleChange}/>
                    </div>

                    <div className={"form-group col-md-6" + (submitted && !user.password ? ' has-error' : '')}>
                      <input type="password" placeholder="Your Password" name="password" value={user.password} onChange={this.handleChange}/>
                    </div>
                    <div className={"form-group col-md-6" + (submitted && !user.cfm_password ? ' has-error' : '')}>
                      <input type="password" placeholder="Confirm Password" name="cfm_password" value={user.cfm_password} onChange={this.handleChange}/>
                    </div>

                    <div className="action col-md-12">
                      <button className="btn bg-yellow full-width btn-small" disabled={!user.password || !user.email || !user.firstName || !user.lastName || !user.businessName || user.password != user.cfm_password}>Join</button>
                    </div>
                </form>
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
    }
};

function mapStateToProps(state) {
    const { registering } = state.registration;
    const { alert } = state;

    return {
        registering,
        alert
    };
}

export default connect(
  mapStateToProps
)(withRouter(Signup));