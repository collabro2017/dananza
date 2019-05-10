import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ReactTags from "react-tag-autocomplete";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { buyerActions } from '../store/actions';

import BuyerSidebar from "../components/Sidebar/BuyerSidebar";
import 'icheck/skins/all.css';
import {Checkbox, Radio, RadioGroup} from 'react-icheck';

import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';

import "../res/icheck/skins/ltblue.css"
import "../res/css/components/tag.css"
import "../res/css/BuyerProfile.css"

import Avatar from 'react-avatar-edit'
import avatarDefault from '../res/img/userinfo_img.png';
class BuyerProfile extends React.Component{

  state = {
            has_seller_acct: false,
            profile_description: '',
            job_type: '',
            locations: [],
            linkedAccounts:{},
            accounts: [],
            updated: {},
            preview: null,
            profile_photo: null,
            openAlert: false
          }
          
  constructor(props) {
    super(props);
    props.changeHeaderType("buyer");

    this.props.dispatch(buyerActions.getBuyerProfile());
    this.handleJobType = this.handleJobType.bind(this);

    // Avatar
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }

  componentWillReceiveProps (nextProps) {

    const { profile } = nextProps;
    if(profile)
    {
      this.setState ({
        ...nextProps.profile,
      });
    }
   
    const { updated } = nextProps;
    if( updated !== undefined )
    {
      if(nextProps.updated!==this.props.updated){
        this.setState({ openAlert: true });
        this.setState({ updated: updated });
      }
    }
    
  }

  handleJobType(e) {
    this.setState({ job_type: e.target.value });
  }

  handleSubmit() {
    const { dispatch } = this.props;
    dispatch(buyerActions.updateBuyerProfile(this.state));
    // dispatch(buyerActions.getBuyerProfile());
  }

  getDescriptionValue (e) {
    this.setState({ profile_description: e.target.value })
  }
  
  handleLocationDelete (i) {
    const locations = this.state.locations.slice(0)
    locations.splice(i, 1)
    this.setState({ locations })
  }
 
  handleLocationAddition (location) {
    const locations = [].concat(this.state.locations, location)
    if( locations.length > 5 )
      return;
    
    if( !this.state.locations.some(item => location.name === item.name ))
      this.setState({ locations: [...this.state.locations, location]})
  }

  componentDidMount(){
    document.title = "Buyer Profile"
    console.log('state = ', this.state);
  }

  addAccount(){
    this.setState({
      accounts:[...this.state.accounts,
                {  mediatype:'', linkedaccount:'', websites:'', username:'' } ]
    });
  }

  removeAccount(key){
    var accounts = this.state.accounts.slice(0);
    accounts.splice(key,1);
    this.setState({accounts});
  }

  getValue(index, item, event){
    var accounts = this.state.accounts.slice(0);
    accounts[index][item] = event.target.value;
    this.setState({accounts});
  }

  // Avatar
  onClose() {
    this.setState({preview: null})
  }
  
  onCrop(preview) {
    this.setState({preview})
  }
 
  onBeforeFileLoad(elem) {
    if(elem.target.files[0].size > 71680){
      
      this.setState({ openAlert: true });
      this.setState({ updated: {"success":false, "message":"Image size is too big!"} });

      elem.target.value = "";
    };
  }

  handleLinked(e) {
    this.setState({ linkedAccounts: {...this.state.linkedAccounts, [e.target.name]: e.target.value } })
  }

  handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ openAlert: false });
  };

  render(){
    const { profile } = this.props;
    const { profile_photo, updated } = this.state;

    let preview_image;
    if( profile_photo )
      preview_image = <img className="profile" src={require("../res/img/"+profile.profile_photo+".png")}/>
    else
      preview_image = <img className="profile" src={ avatarDefault }/>

    if ( this.state.preview ) {
        preview_image =  <img src={this.state.preview} alt="Preview" />
    } 

    let alertClass = "snackAlert";
    if( updated !== undefined )
    {
      if( updated.success === true )
        alertClass += " success"
      else
        alertClass += " error"
    }

    return (
      <div className="buyer_landing buyer_profile">

      { this.state.openAlert ?
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        className={alertClass}
        open={this.state.openAlert}
        onClose={this.handleCloseSnack}
        message={this.state.updated.message}
        autoHideDuration={6000}
        action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          onClick={this.handleCloseSnack}
        >
          <CloseIcon />
        </IconButton>
      ]}
      />
      : null
      }

        <div className="page-container">
           <div className="page-content">
              <BuyerSidebar navitem={"edit_profile"}/>
              <div className="page-main">
                <div className="page-main-header">
                  <span className="headline-first">
                    Edit Your Profile Page
                  </span>
                  <span className="headline-second pull-right">
                    <Link to="/buyer_profile">View Profile Page <i className="fa fa-long-arrow-right"></i></Link>
                  </span>
                </div>
                <hr className="divider-line" />
                <div className="page-main-content pd-bottom row">
                <form role="form" className="form-horizontal">
                  <div className="form-body" ref="formbody">
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel"> Profile photo</label>
                      <div className="col-md-10 controlcontent">
                        <div className="avatar_preview">
                          { preview_image }
                        </div>
                        <Avatar
                          width={390}
                          height={295}
                          onCrop={this.onCrop}
                          onClose={this.onClose}
                          onBeforeFileLoad={this.onBeforeFileLoad}
                          src={this.state.avatar_src}
                        />
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        Describe<br/>
                        Yourself/Your<br/>
                        Company in a few<br/>
                        words
                      </label>
                      <div className="col-md-10 controlcontent">
                        <textarea 
                          className="form-control btn-radius" 
                          placeholder="Hi there!" rows="5" style={{'height':'120px'}} 
                          value={ this.state.profile_description }
                          onChange={ this.getDescriptionValue.bind(this) }
                        >
                        </textarea>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        What do you do?
                      </label>
                      <div className="col-md-10 controlcontent">
                        <div className="mt-radio-list">
                            <RadioGroup className="mt-radio-list" name="radio" 
                                        value={this.state.job_type} 
                                        onChange={ this.handleJobType.bind(this) }>
                                <Radio
                                  value="Business Owner"
                                  radioClass="iradio_minimal-blue"
                                  increaseArea="20%"
                                  label="Business Owner"
                                />
                                <Radio
                                  value="Freelancer"
                                  radioClass="iradio_minimal-blue"
                                  increaseArea="20%"
                                  label="Freelancer"
                                   defaultChecked
                                />
                                <Radio
                                  value="Employee"
                                  radioClass="iradio_minimal-blue"
                                  increaseArea="20%"
                                  label="Employee"
                                />
                                <Radio
                                  value="Agency"
                                  radioClass="iradio_minimal-blue"
                                  increaseArea="20%"
                                  label="Agency"
                                />
                            </RadioGroup>
                        </div>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        
                      </label>
                      <div className="col-md-10 controlcontent">
                        <p>Which industry does the workplace/business belong to?</p>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        
                      </label>
                      <div className="col-md-10 controlcontent">
                        <input type="text" className="form-control btn-radius" 
                               placeholder="ex: Ad Agency"
                               value={ this.state.job_type }/>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        Location
                      </label>
                      <div className="col-md-10 controlcontent">
                        <div className="input-icon">
                          <ReactTags
                            inputAttributes={{ maxLength: 15, class: "form-control btn-radius"}}
                            placeholder="Miami, Florida"
                            allowNew={true}
                            addOnBlur={true}
                            autofocus={false}
                            tags={ this.state.locations ? this.state.locations : ''}
                            suggestions={this.state.suggestions}
                            handleDelete={this.handleLocationDelete.bind(this)}
                            handleAddition={this.handleLocationAddition.bind(this)}
                            classNames = {{root:"inner-tag react-tags"}} />
                            <img src={require("../res/img/minami.png")} className="placeholder-img" alt=""/>
                        </div>
                      </div>
                    </div>
                    <div className="account">
                      <div className="formcontrol row">
                        <label className="col-md-2 controllabel">
                          Linked Accounts
                        </label>
                        <div className="col-md-10 controlcontent">
                          <div className="input-icon">
                            <img src={require("../res/img/play.png")} className="placeholder-img" alt=""/>
                            <input type="text" className="form-control btn-radius" 
                                   placeholder="Choose Media Type"
                                   name="MediaType"
                                   value={ this.state.linkedAccounts ? this.state.linkedAccounts.MediaType : '' }
                                   onChange={ this.handleLinked.bind(this) }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="formcontrol row">
                        <label className="col-md-2 controllabel">
                          
                        </label>
                        <div className="col-md-10 controlcontent">
                          <div className="input-icon">
                            <img src={require("../res/img/username.png")} className="placeholder-img"/>
                            <input type="text" className="form-control btn-radius" 
                                   placeholder="Username"
                                   name="Username"
                                   value={ this.state.linkedAccounts ? this.state.linkedAccounts.Username : '' }
                                   onChange={ this.handleLinked.bind(this) }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="formcontrol row">
                        <label className="col-md-2 controllabel">
                          
                        </label>
                        <div className="col-md-10 controlcontent">
                          <div className="input-icon">
                            <img src={require("../res/img/link.png")} className="placeholder-img" alt=""/>
                            <input  type="text" className="form-control btn-radius" 
                                    placeholder="Linked Account"
                                    name="linkedAcct"
                                    value={ this.state.linkedAccounts ? this.state.linkedAccounts.linkedAcct : '' }
                                    onChange={ this.handleLinked.bind(this) }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="formcontrol row">
                        <label className="col-md-2 controllabel">
                          Websites
                        </label>
                        <div className="col-md-10 controlcontent">
                          <div className="input-icon">
                            <img src={require("../res/img/link.png")} className="placeholder-img" alt=""/>
                            <input type="text" className="form-control btn-radius" 
                                   placeholder="https://itsmichaelaseyra.com"
                                   name="Website"
                                   value={ this.state.linkedAccounts ? this.state.linkedAccounts.Website : '' }
                                   onChange={ this.handleLinked.bind(this) }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-live='polite' aria-relevant='additions removals'>
                    {
                      this.state.accounts.map(
                      (items,index)=>(
                            <div className="account">
                              <div className="formcontrol row">
                                <label className="col-md-2 controllabel">
                                  Linked Accounts{index}
                                </label>
                                <div className="col-md-10 controlcontent">
                                  <div className="input-icon">
                                    <img src={require("../res/img/play.png")} className="placeholder-img" alt=""/>
                                    <input value={this.state.accounts[index].mediatype} onChange={(text)=>{this.getValue(index,'mediatype',text);}} type="text" className="form-control btn-radius" placeholder="Choose Media Type"/>
                                  </div>
                                </div>
                              </div>
                              <div className="formcontrol row">
                                <label className="col-md-2 controllabel">
                                  
                                </label>
                                <div className="col-md-10 controlcontent">
                                  <div className="input-icon">
                                    <img src={require("../res/img/username.png")} className="placeholder-img" alt=""/>
                                    <input value={this.state.accounts[index].username} onChange={(text)=>{this.getValue(index,'username',text);}} type="text" className="form-control btn-radius" placeholder="Username"/>
                                  </div>
                                </div>
                              </div>
                              <div className="formcontrol row">
                                <label className="col-md-2 controllabel">
                                  
                                </label>
                                <div className="col-md-10 controlcontent">
                                  <div className="input-icon">
                                    <img src={require("../res/img/link.png")} className="placeholder-img" alt=""/>
                                    <input value={this.state.accounts[index].linkedaccount} onChange={(text)=>{this.getValue(index,'linkedaccount',text);}} type="text" className="form-control btn-radius" placeholder="Linked Account"/>
                                  </div>
                                </div>
                              </div>
                              <div className="formcontrol row">
                                <label className="col-md-2 controllabel">
                                  Websites
                                </label>
                                <div className="col-md-10 controlcontent">
                                  <div className="input-icon">
                                    <img src={require("../res/img/link.png")} className="placeholder-img" alt=""/>
                                    <input value={this.state.accounts[index].websites} onChange={(text)=>{this.getValue(index,'websites',text);}} type="text" className="form-control btn-radius" placeholder="https://itsmichaelaseyra.com"/>
                                  </div>
                                </div>
                              </div>
                              <div className="formcontrol row">
                                <label className="col-md-2 controllabel">
                                  
                                </label>
                                <div className="col-md-10 controlcontent actions">
                                  <a className="btn dark btn-outline btn-radius btn-cancel"
                                          onClick={this.removeAccount.bind(this,index)}>
                                    Cancel
                                  </a>
                                </div>
                              </div>
                            </div>
                      ))
                    }
                    </div>
                  </div>
                </form>
                <p><a className="add-website" onClick={this.addAccount.bind(this)}>+ Add Another Account</a></p>
              </div>
              <div className="action_group">
                <button className="btn btn-blue left"><img src={require("../res/img/eye_white.png")} alt=""/> Preview</button>
                <button className="btn btn-yellow right" onClick={this.handleSubmit.bind(this)}><img src={require("../res/img/check_black.png")} alt=""/> Save</button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { profile, updated } = state.buyer
  return {
    profile,
    updated
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BuyerProfile));
