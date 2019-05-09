import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import ReactTags from "react-tag-autocomplete";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { buyerActions } from '../store/actions';

import BuyerSidebar from "../components/Sidebar/BuyerSidebar";
import 'icheck/skins/all.css';
import {Checkbox, Radio, RadioGroup} from 'react-icheck';

import "../res/icheck/skins/ltblue.css"
import "../res/css/components/tag.css"
// import "../res/css/Dananza_Search.css"
import "../res/css/BuyerProfile.css"

import Avatar from 'react-avatar-edit'
import avatarDefault from '../res/img/userinfo_img.png';

class BuyerProfile extends React.Component{

  state={
          'headerType': "buyer",
          username: '',
          description: '',
          job_type: '',
          business_name: '',
          location: '',
          linkedAccount: '',
          websites: '',
          workplace: '',
          accounts:[],
          accountlength:[],
          locations : [],
          preview: avatarDefault,
          avatar_src: null
        }


  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType );

    this.props.dispatch(buyerActions.read());
    this.handleJobType = this.handleJobType.bind(this);

    // Avatar
    this.onCrop = this.onCrop.bind(this)
    this.onClose = this.onClose.bind(this)
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
  }

  componentWillReceiveProps (nextprops) {

    const { profile } = nextprops;

    if(profile)
    {
      this.setState({
        username: profile.username ? profile.username : '',
        description: profile.profile_description ? profile.profile_description : 'Hello World!',
        job_type: profile.job_type ? profile.job_type : 'Freelancer',
        business_name: profile.business_name ? profile.business_name : 'kcc',
        location: profile.location ? profile.location : '',
        linkedAccount: profile.linkedAccount ? profile.linkedAccount : '',
        websites: profile.websites ? profile.websites : '',
      });
    }
  }

  handleJobType(e) {
    e.preventDefault();
    console.log('job type = ', e.target.value);
    if(e.target.checked)
    {
      this.setState({ job_type: e.target.value});
    }
  }

  handleSubmit() {
    const { dispatch } = this.props;
    dispatch(buyerActions.update(this.state));
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
  }

  addAccount(){
    var length = this.state.accountlength.length;
    var add = this.state.accountlength[length-1] + 1;
    this.setState({
                    accountlength:[...this.state.accountlength,add],
                    accounts:[...this.state.accounts,
                            {mediatype:'',linkedaccount:'',websites:'',username:''} ]
                  });
  }
  removeAccount(key){
    var accountlength = this.state.accountlength.slice(0);
    accountlength.splice(key,1);
    var accounts = this.state.accounts.slice(0);
    accounts.splice(key,1);
    this.setState({accountlength, accounts});
  }
  getValue(index,item,event){
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
      alert("File is too big!");
      elem.target.value = "";
    };
  }

  render(){
    const { profile } = this.props;
    let preview_image = "";

    if ( this.state.preview ) {
      preview_image =  <img src={this.state.preview} alt="Preview" />
    } 

    return (
      <div className="buyer_landing buyer_profile">
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
                          value={ this.state.description }
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
                            <RadioGroup className="mt-radio-list" name="radio" value="Business Owner">
                                <Radio
                                  value="Business Owner"
                                  radioClass="iradio_minimal-blue"
                                  increaseArea="20%"
                                  label="Business Owner"
                                  onClick={ this.handleJobType }
                                  checked={ this.state.job_type === "Business Owner" }
                                />
                                <Radio
                                  value="Freelancer"
                                  radioClass="iradio_minimal-blue"
                                  increaseArea="20%"
                                  label="Freelancer"
                                   defaultChecked
                                  onClick={ this.handleJobType }
                                  checked={ this.state.job_type === "Freelancer" }
                                />
                                <Radio
                                  value="Employee"
                                  radioClass="iradio_minimal-blue"
                                  increaseArea="20%"
                                  label="Employee"
                                  onClick={ this.handleJobType }
                                  checked={ this.state.job_type === "Employee" }
                                />
                                <Radio
                                  value="Agency"
                                  radioClass="iradio_minimal-blue"
                                  increaseArea="20%"
                                  label="Agency"
                                  onClick={ this.handleJobType }
                                  checked={ this.props.job_type === "Agency" }
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
                               value={ this.state.business_name }/>
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
                            tags={this.state.locations}
                            suggestions={this.state.suggestions}
                            handleDelete={this.handleLocationDelete.bind(this)}
                            handleAddition={this.handleLocationAddition.bind(this)}
                            classNames = {{root:"inner-tag react-tags"}} />
                            <img src={require("../res/img/minami.png")} className="placeholder-img"/>
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
                            <img src={require("../res/img/play.png")} className="placeholder-img"/>
                            <input type="text" className="form-control btn-radius" placeholder="Choose Media Type"/>
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
                                   value={ this.state.username }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="formcontrol row">
                        <label className="col-md-2 controllabel">
                          
                        </label>
                        <div className="col-md-10 controlcontent">
                          <div className="input-icon">
                            <img src={require("../res/img/link.png")} className="placeholder-img"/>
                            <input type="text" className="form-control btn-radius" placeholder="Linked Account"/>
                          </div>
                        </div>
                      </div>
                      <div className="formcontrol row">
                        <label className="col-md-2 controllabel">
                          Websites
                        </label>
                        <div className="col-md-10 controlcontent">
                          <div className="input-icon">
                            <img src={require("../res/img/link.png")} className="placeholder-img"/>
                            <input type="text" className="form-control btn-radius" placeholder="https://itsmichaelaseyra.com"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div aria-live='polite' aria-relevant='additions removals'>
                    {
                      this.state.accountlength.map(
                      (key,index)=>(
                            <div className="account" key={key}>
                              <div className="formcontrol row">
                                <label className="col-md-2 controllabel">
                                  Linked Accounts{index}
                                </label>
                                <div className="col-md-10 controlcontent">
                                  <div className="input-icon">
                                    <img src={require("../res/img/play.png")} className="placeholder-img"/>
                                    <input value={this.state.accounts[index].mediatype} onChange={(text)=>{this.getValue(index,'mediatype',text);}} type="text" className="form-control btn-radius" placeholder="Choose Media Type"/>
                                  </div>
                                </div>
                              </div>
                              <div className="formcontrol row">
                                <label className="col-md-2 controllabel">
                                  
                                </label>
                                <div className="col-md-10 controlcontent">
                                  <div className="input-icon">
                                    <img src={require("../res/img/username.png")} className="placeholder-img"/>
                                    <input value={this.state.accounts[index].username} onChange={(text)=>{this.getValue(index,'username',text);}} type="text" className="form-control btn-radius" placeholder="Username"/>
                                  </div>
                                </div>
                              </div>
                              <div className="formcontrol row">
                                <label className="col-md-2 controllabel">
                                  
                                </label>
                                <div className="col-md-10 controlcontent">
                                  <div className="input-icon">
                                    <img src={require("../res/img/link.png")} className="placeholder-img"/>
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
                                    <img src={require("../res/img/link.png")} className="placeholder-img"/>
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
            </div>
          </div>
        </div>
        <div className="action_group">
          <button className="btn btn-blue left"><img src={require("../res/img/eye_white.png")}/> Preview</button>
          <button className="btn btn-yellow right" onClick={this.handleSubmit.bind(this)}><img src={require("../res/img/check_black.png")}/> Save</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { profile } = state.buyerProfile
  return {
    profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BuyerProfile));
