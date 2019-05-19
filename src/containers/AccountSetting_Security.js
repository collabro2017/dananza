import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import Nouislider from 'react-nouislider';
import ReactTags from "react-tag-autocomplete";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {Collapse} from 'react-bootstrap'
import $ from "jquery";

import { sellerActions } from '../store/actions';
import { userActions } from '../store/actions';

import AccountSettingSidebar from "../components/Sidebar/AccountSettingSidebar";

import "../res/css/AccountSetting_Security.css"
import "../res/icheck/skins/ltblue.css"
import "../res/css/nouislider.css"
import "../res/css/components/tag.css"
import "../res/css/components/slider.css"
import "../res/css/components/select.css"

class AccountSettingSecurity extends React.Component{

  state={
    'headerType': "buyer",
    security:{
      currentpwd:"",
      newpwd:"",
      confirmpwd:""
    },
    warning: ""
  }

  constructor(props)
  {
    super(props);
    props.changeHeaderType( this.state.headerType )
    this.state.sellerprofile = props.sellerprofile;
  }

  componentDidMount()
  {
    document.title = "AccountSetting_Security";
  }

  componentWillMount()
  {
    const {dispatch} = this.props;
    dispatch(userActions.getAll());
  }

  componentWillReceiveProps(nextprops)
  {
    if (nextprops.pwd_change != this.props.pwd_change) {
      if (nextprops.pwd_change == false) {
        this.setState({warning:"Wrong Password!",security:{...this.state.security,currentpwd:""}});
      }else {
        this.setState({warning:"Success!",security:{currentpwd:"",newpwd:"",confirmpwd:""}});
      }
    }
  }

  onChangeEdit(name,event)
  {
    this.setState({security:{...this.state.security,[name]:event.target.value},warning:""});
  }

  onSave(event)
  {
    event.preventDefault();
    const {dispatch} = this.props;
    if (this.state.security.newpwd != this.state.security.confirmpwd) {
      this.setState({warning:"Type password correctly."});
    }
    else if(this.state.security.newpwd.length < 6){
      this.setState({warning:"Please input at least 6 characters. Special characters are not allowed."});
    }
    else{
      dispatch(userActions.updatePassword(this.state.security));
    }
  }

  render(){
    const {currentpwd, newpwd, confirmpwd} = this.state.security;
    return (
    	<div className="account_setting">
	    	<div className="page-content security_tab">
				<AccountSettingSidebar navitem={"security"}/>
				<div className="page-result-wrapper">
					<div className="page-result">
            <div className="title">
              Security
            </div>
            <hr/>
            <form className="form" onSubmit={(event)=>{this.onSave(event)}}>
              <div className="row">
                <div className="col-sm-3 control-label">
                  Current Password
                </div>
                <div className="col-sm-9">
                  <input type="password" className="form-control" value={currentpwd} onChange={(e)=>this.onChangeEdit("currentpwd",e)} required/>
                  <img className="show-icon" src={require('../res/img/key.png')} alt=""/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3 control-label">
                  New Password
                </div>
                <div className="col-sm-9">
                  <input type="password" className="form-control" value={newpwd} onChange={(e)=>this.onChangeEdit("newpwd",e)} required/>
                  <img className="show-icon" src={require('../res/img/key.png')} alt=""/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3 control-label">
                  Confirm Password
                </div>
                <div className="col-sm-9">
                  <input type="password" className="form-control" value={confirmpwd} onChange={(e)=>this.onChangeEdit("confirmpwd",e)} required/>
                  <img className="show-icon" src={require('../res/img/key.png')} alt=""/>
                  <label className="warning">{this.state.warning}</label>
                </div>
              </div>
              <div className="row action">
                <div className="col-sm-12">
                  <button className="btn btn-blue right">Save</button>
                </div>
              </div>
            </form>
            <hr/>
            <div className="form row">
              <div className="col-sm-3 control-label">
                Security Question
              </div>
              <div className="col-sm-9 material-select">
                <FormControl>
                  <Select
                    placeholder="Choose a reason"
                    inputProps={{
                      name: 'material',
                      id: 'material-simple',
                      placeholder: 'Choose a reason'
                    }}
                  >
                    <MenuItem value={'Be Online on Login'}>
                      Be Online on Login
                    </MenuItem>
                    <MenuItem value={'Be Online on Login'}>
                      Be Online on Login
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="form row">
              <div className="col-sm-3 control-label">
                
              </div>
              <div className="col-sm-9">
                  <input className="form-control"/>
                  <img className="show-icon" src={require('../res/img/edit_message.png')} alt=""/>
              </div>
            </div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}
const mapStateToProps = state => {
    const { user } = state.authentication;
    const { items,pwd_change } = state.users;

  return {
    items,
    pwd_change
  };
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AccountSettingSecurity));
