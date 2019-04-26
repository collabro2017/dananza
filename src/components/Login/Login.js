import React from "react";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { userActions } from '../../store/actions';
import $ from 'jquery';

import "../../res/bootstrap/css/bootstrap.min.css"
import "../../res/font-awesome/css/font-awesome.min.css"
import "../../res/css/components.min.css"
import "../../res/css/global.css"
import "../../res/css/header.css"
import "../../res/css/header_search.css"
import "../../res/css/layout.min.css"
import "../../res/css/login.min.css";

class Login extends React.Component{

    constructor(props) {
      super(props);
      this.routeChange = this.routeChange.bind(this);

      // reset login status
      this.props.dispatch(userActions.logout());

      this.state = {
          email: '',
          password: '',
          submitted: false,
          redirected: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    routeChange()
    {
      if(!this.state.redirected)
      {
        this.props.history.push("/buyer_landing");
        this.setState({redirected: true});        
      }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;

        if (email && password) {
            dispatch(userActions.login(email, password));
        }
    }

    componentDidUpdate()
    {
      const { loggedIn } = this.props;
      
      if(loggedIn)
      {
        this.routeChange();
        $('#login').modal('hide');
        $('.fade').click();

      }
    }

    render(){
      const { loggingIn, loggedIn, alert } = this.props;
      const { email, password, submitted } = this.state;
      return (
        <div className="modal-dialog AuthModal">
          <div className="modal-content modal-content-custom">
            <div className="modal-header modal-header-custom">
              <h4 className="modal-title">Sign In</h4>
            </div>
            <div className="modal-body">
              <form name="form" onSubmit={this.handleSubmit}>
                { alert.message != null ?
                  <div className="form-group col-md-12 has-error">
                    <p>{alert.message}</p>
                  </div> 
                  : null
                }
                <div className={"form-group col-md-12" + (submitted && !email ? ' has-error' : '')}>
                  <input className="form-control form-control-solid placeholder-no-fix input-custom"
                          type="text" autoComplete="off" placeholder="Email Address" name="email" value={email} onChange={this.handleChange} />
                </div>
                <div className={"form-group col-md-12" + (submitted && !password ? ' has-error' : '')}>
                  <input className="form-control form-control-solid placeholder-no-fix input-custom"
                          type="password" autoComplete="off" placeholder="Password" name="password" value={password} onChange={this.handleChange} />
                </div>
                <div className={"form-group col-md-12" + (!password || !email ? ' has-error' : '')}>
                    <button className="btn bg-yellow full-width btn-small " disabled={!password || !email}>Login</button>
                    <button id="loginBtn" data-dismiss="modal" hidden></button>
                </div>
              </form>
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

function mapStateToProps(state) {
    const { loggingIn, loggedIn } = state.authentication;
    const { alert } = state;

    return {
        loggingIn,
        loggedIn,
        alert
    };
}

export default connect(
  mapStateToProps
)(withRouter(Login));