import React from "react";
import { bindActionCreators } from "redux";
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

import AccountSettingSidebar from "../components/Sidebar/AccountSettingSidebar";

import "../res/css/AccountSetting_Account.css"
import "../res/icheck/skins/ltblue.css"
import "../res/css/nouislider.css"
import "../res/css/components/tag.css"
import "../res/css/components/slider.css"
import "../res/css/components/select.css"

class AccountSettingAccount extends React.Component{

  state={'headerType': "buyer"
  }

  constructor(props)
  {
    super(props);
    props.changeHeaderType( this.state.headerType )
    this.state.sellerprofile = props.sellerprofile;
  }

  componentDidMount()
  {
    document.title = "Seller Dashboard";
  }

  render(){
    return (
    	<div className="account_setting">
	    	<div className="page-content account_tab">
				<AccountSettingSidebar navitem={"account"}/>
				<div className="page-result-wrapper">
					<div className="page-result">
            <div className="title">
              Account
              <div className="goto">
                <span className="unneccessary">Want to update your public profile?&nbsp;</span>
                <Link to="/buyer_profile"> Go to My Profile <i className="fa fa-long-arrow-right"></i></Link>
              </div>
            </div>
            <hr/>
            <form className="form">
              <div className="row">
                <div className="col-sm-3 control-label">
                  Full Name
                </div>
                <div className="col-sm-9">
                  <input className="form-control" value="Alyssa Edwards"/>
                  <img className="show-icon" src={require('../res/img/username.png')}/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3 control-label">
                  Email
                </div>
                <div className="col-sm-9">
                  <input className="form-control" value="alyssa_Ee@gmail.com"/>
                  <img className="show-icon" src={require('../res/img/envelope2.png')}/>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3 control-label">
                  Online Status
                  <img className="notice" src={require('../res/img/notice-message.png')}/>
                </div>
                <div className="col-sm-9 material-select">
                  <FormControl>
                    <Select
                      value={'Be Online on Login'}
                      inputProps={{
                        name: 'material',
                        id: 'material-simple',
                      }}
                    >
                      <MenuItem value={'Be Online on Login'}>
                        <img className="select-icon" src={require('../res/img/online.png')} />
                        Be Online on Login
                      </MenuItem>
                      <MenuItem value={'Be Online on Login'}>
                         <img className="select-icon" src={require('../res/img/online.png')} />
                        Be Online on Login
                      </MenuItem>
                      <MenuItem value={'Be Online on Login'}>
                        <img className="select-icon" src={require('../res/img/online.png')} />
                        Be Online on Login
                      </MenuItem>
                      <MenuItem value={'Be Online on Login'}>
                        <img className="select-icon" src={require('../res/img/online.png')} />
                        Be Online on Login
                      </MenuItem>
                    </Select>
                  </FormControl>
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
                Deactivate Account
              </div>
              <div className="col-sm-9 text-content">
                <label className="quiz">
                  What is going to happen when you deactivate your account?
                </label>
                <ul>
                  <li>Your profile and Ads won’t show in Dananza anymore</li>
                  <li>All active orders will be cancelled</li>
                  <li>Reactivate your account within 30 days after deactivating. Your account will be deleted after 30 </li>
                </ul>
              </div>
            </div>
            <div className="form row">
              <div className="col-sm-3 control-label">
                Why Do You Have to Say Goodbye?
              </div>
              <div className="col-sm-9 material-select">
                <FormControl>
                  <Select
                    placeholder="Choose a reason"
                    inputProps={{
                      name: 'material',
                      id: 'material-simple',
                    }}
                  >
                    <MenuItem value={'Be Online on Login'}>
                      Be Online on Login
                    </MenuItem>
                  </Select>
                </FormControl>
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
  	const { sellerProfileMSG, sellerprofile, channel, adlist } = state.seller;

	return {
		user,
		sellerProfileMSG,
		sellerprofile,
		channel,
		adlist
	};
};

const mapDispatchToProps = dispatch => {
  return {dispatch};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AccountSettingAccount));
