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

import SellerSidebar from "../components/Sidebar/SellerSidebar";

import "../res/css/Seller_Dashboard_Sellers_Page.css"
import "../res/icheck/skins/ltblue.css"
import "../res/css/nouislider.css"
import "../res/css/components/tag.css"
import "../res/css/components/slider.css"
import "../res/css/components/select.css"

class SellerDashboard extends React.Component{

  state={'headerType': "seller",
  		'suggestions': [
			{ name: "Bananas" },
			{ name: "Mangos" },
			{ name: "Lemons" },
			{ name: "Lemonfffffas" },
			{ name: "Lemonfefes" },
			{ name: "Apricots"}
		],
		sellerprofile: {
			'profile_photo': 'user1',
			'profile_description': "",
			'profile_location': "",
			'image_gallery':[],
	 		'audience_age_min': 0,
	  		'audience_age_max': 60,
	  		'audience_male_percent' : 0,
			'audience_locations' : [],
			'audience_interests' : [],	
		},
		channels: [],
		adlist: [],
		'mediaType' : 'Instagram',
		'channel' : 'Instagram'
  }

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Seller Dashboard";
  }

  componentDidUpdate(){
	$(".channel-show").click(function () {
  		$(this).next().slideToggle();
  	});
	$(".edit-adlist").click(function () {
  		var id = $(this).attr('data-toggle');
  		debugger;
  		$("#"+id).slideToggle();
  	});
  	
  }

  componentWillMount(){
  	const { dispatch } = this.props;
  	dispatch(sellerActions.getProfile());
  	dispatch(sellerActions.getChannel());
  	dispatch(sellerActions.getAdlist());
  }

  componentWillReceiveProps(props){
  	if (props.sellerprofile != undefined) {
  		this.setState({sellerprofile:props.sellerprofile});
  	}
  	if (props.channel != undefined) {
  		this.setState({channels:props.channel});
  	}
  	if (props.adlist != undefined) {
  		console.log(props.adlist);
  		this.setState({adlist:props.adlist});
  	}
  }

  onAgeSlide = (render, handle, value, un, percent) => {
  	const {sellerprofile} = this.state;
    this.setState({
    	sellerprofile:{
			...sellerprofile,
			'audience_age_min':value[0].toFixed(0), 
			'audience_age_max':value[1].toFixed(0)
		}
	});
  }
  
  onGenderSlide = (render, handle, value, un, percent) => {
  	const audience_male_percent = value[0].toFixed(0);
  	const {sellerprofile} = this.state;
    this.setState({
    	sellerprofile:{
    		...sellerprofile,
    		audience_male_percent
    	}
    });
  }

  onChangeAdlist = (name,index,event) => {
	var adlist = this.state.adlist.slice(0);
	adlist[index][name] = event.target.value;
    this.setState({adlist});
  };

  onChangeChannel = event => {
	const {sellerprofile} = this.state;
    this.setState({
		channel: event.target.value
    });
  };

  onChangeProfile = (name,event) => {
	const {sellerprofile} = this.state;
    this.setState({
    	sellerprofile:{
    		...sellerprofile,
    		[name]: event.target.value
    	}
    });
  }

  handleLocationDelete (i) {
    const {sellerprofile} = this.state;
    const audience_locations = sellerprofile.audience_locations.slice(0);
    audience_locations.splice(i, 1)
    this.setState({
    	sellerprofile:{
    		...sellerprofile,
    		audience_locations
    	}
    });
  }
 
  handleLocationAddition (location) {
    const {sellerprofile} = this.state;
    const audience_locations = [].concat(sellerprofile.audience_locations, location)

    if( audience_locations.length > 5 )
    	return;
    
    if( !sellerprofile.audience_locations.some(item => location.name === item.name )){
    	this.setState({
	    	sellerprofile:{
	    		...sellerprofile,
	    		audience_locations
	    	}
	    });
    }
  }

  handleInterestsDelete (i) {
    const {sellerprofile} = this.state;
    const audience_interests = sellerprofile.audience_interests.slice(0)
    audience_interests.splice(i, 1)
    this.setState({
    	sellerprofile:{
    		...sellerprofile,
    		audience_interests
    	}
    });
  }
 
  handleInterestsAddition (interest) {
    const {sellerprofile} = this.state;
    const audience_interests = [].concat(sellerprofile.audience_interests, interest)
    
    if( !sellerprofile.audience_interests.some(item => interest.name === item.name )){
    	this.setState({
	    	sellerprofile:{
	    		...sellerprofile,
	    		audience_interests
	    	}
	    });
    }
  }

  handleSubmit () {
  	const { sellerprofile } = this.state;
  	const { dispatch } = this.props;
  	dispatch(sellerActions.setProfile(sellerprofile));
  }

  showFollows(number){
  	if (number >= 1000) {
  		var str = "" + Math.floor(number/1000) + 'k';
  		if (number % 1000) {
  			str+='+';
  		}
  		return str;
  	}
  	return number;
  }

  render(){
  	const { audience_age_min, audience_age_max, audience_male_percent, 
  			audience_locations, audience_interests,
  			profile_photo, profile_description, profile_location } = this.state.sellerprofile;
  	const { suggestions,mediaType, channel, channels, adlist } = this.state;

    return (
    	<div className="dashboard_seller">
	    	<div className="page-content sellers_page">
				<SellerSidebar navitem={"sellers_page"}/>
				<div className="page-result-wrapper">
					<div className="page-result">
						<label className="title">Edit Your Profile Page</label>
						
						<label className="subtitle">Seller’s Description</label>
						<label className="warning"> {this.props.sellerProfileMSG} </label>
						<div className="control-list">
							<div className="formcontrol row">
								<label className="col-sm-2 controllabel"> Profile photo</label>
								<div className="col-sm-10 controlcontent">
									<img className="profile" src={require("../res/img/"+profile_photo+".png")}/>
									<div className="right-control col-sm-8">
										<a className="btn dark btn-outline btn-radius">
											<i className="fa fa-file-image-o"></i>
											<b> Change Photo</b>
										</a>
										<div>This photo is your identity in Dananza.</div>
									</div>
								</div>
							</div>
							<div className="formcontrol row">
								<label className="col-sm-2 controllabel">
									Describe Your Company (140 characters)
								</label>
								<div className="col-sm-10 controlcontent">
									<textarea value={profile_description} onChange={(event)=>{this.onChangeProfile("profile_description",event)}}
										className="form-control btn-radius" placeholder="Official Account of Target Tree Miami"></textarea>
								</div>
							</div>
							<div className="formcontrol row">
								<label className="col-sm-2 controllabel">
									Location
								</label>
								<div className="col-sm-10 controlcontent">
									<div className="input-icon">
					                    <img src={require('../res/img/minami.png')}/>
					                    <input value={profile_location} onChange={(event)=>{this.onChangeProfile("profile_location",event)}}
					                    	type="text" className="form-control btn-radius"/>
					                </div>
								</div>
							</div>
							<div className="formcontrol row">
								<label className="col-sm-2 controllabel">
									Gallery
								</label>
								<div className="col-sm-10 controlcontent block">
									<div className="input-icon">
					                    <i className="fa fa-file-image-o"></i>
					                    <input type="text" className="form-control drag-file btn-radius" value="Drag files to upload or select files from your library"/>
					                </div>
					                <div className="images">
										<div className="item">
											<img src={require("../res/img/dragupload1.png")}/>
											<img className="closebut" src={require("../res/img/close.png")}/>
										</div>
										<div className="item">
											<img src={require("../res/img/dragupload2.png")}/>
											<img className="closebut" src={require("../res/img/close.png")}/>
										</div>
										<div className="item">
											<img src={require("../res/img/dragupload3.png")}/>
											<img className="closebut" src={require("../res/img/close.png")}/>
										</div>
									</div>
								</div>
							</div>
							<div className="formcontrol row">
								<label className="col-sm-2 controllabel">
									Audience Description
								</label>
								<div className="col-sm-10 controlcontent block">
									<div className="sub-control"><b>Age Range</b></div>
									<div className="feature-slider noUi-ltblue">

										<Nouislider
										    range={{min: 0, max: 60}}
										    start={[audience_age_min, audience_age_max]}
										    connect
										    onSlide={this.onAgeSlide}
										/>

			                            <label className="age-result">
			                            { audience_age_min } - { audience_age_max }yrs Old</label>
			                        </div>

			                        <div className="sub-control"><b>Gender Distribution</b></div>
									<div className="feature-slider" id="gender">
										<label className="col-sm-1 no-padding-left">
											Male
											<div id="male">{audience_male_percent}%</div>
										</label>
										<div id="seller_page_gender" className="col-sm-10">
											<Nouislider											
											    range={{min: 0, max: 100}}
											    start={[audience_male_percent]}
											    connect
											    onSlide={this.onGenderSlide}
											/>
										</div>

			                            <label className="col-sm-1">
			                            	Female
			                            	<div id="female">{100-audience_male_percent}%</div>
			                        	</label>
			                        </div>

			                        <div className="sub-control"><b>Location</b></div>
									<div className="col-sm-12 no-padding-left">
										<div className="input-icon">
						                    <img src={require('../res/img/minami.png')}/>
						                    <ReactTags
												placeholder=""
												inputAttributes={{ maxLength: 15}}
												allowNew={true}
												addOnBlur={true}
											    tags={audience_locations}
											    suggestions={suggestions}
											    handleDelete={this.handleLocationDelete.bind(this)}
											    handleAddition={this.handleLocationAddition.bind(this)}
											    classNames = {{root:"inner-tag react-tags"}} />
						                </div>
									</div>

			                        <div className="sub-control"><b>audience_interests</b></div>
									<div className="col-sm-12 no-padding-left">
										<div className="input-icon">
											<img src={require("../res/img/pencil.png")}/>
						                    <ReactTags
												placeholder=""
												inputAttributes={{ maxLength: 15}}
												allowNew={true}
												addOnBlur={true}
											    tags={audience_interests}
											    suggestions={suggestions}
											    handleDelete={this.handleInterestsDelete.bind(this)}
											    handleAddition={this.handleInterestsAddition.bind(this)}
											    classNames = {{root:"outer-tag react-tags"}} />
						                </div>
									</div>
								</div>
							</div>
						</div>
						<label className="subtitle">
							Edit Channels
							<a className="add-channel">+ Add Another Channel</a>
						</label>
						<div className="channel-list">
							{
								channels.map(
									(item,index)=>(
										<div className="channel">
											<div className="channel-show">
												<img className="icon" src={require("../res/img/"+item.media_type+"_sq.png")}/>
												<b>{item.username}</b>
												<i className="fa fa-user"></i>
												<b>{this.showFollows(item.follows)}</b>
												<div className="toolbox">
													<a>
														<img src={require("../res/img/delete.png")}/>
													</a>
												</div>
											</div>
											<div className="dropdown-edit collapse">
												<label>Media Type</label>
												<div>
													<input type="text" className="form-control radius-formcontrol" value={item.media_type} readOnly/>
											    	<img className="control-icon" src={require("../res/img/"+item.media_type+"_sq.png")} />
												</div>
												<label>User Name</label>
												<div>
													<input type="text" className="form-control radius-formcontrol" value={item.username} readOnly/>
													<i className="fa fa-user control-icon"></i>
												</div>
												<label>Link to Channel</label>
												<div>
													<input type="text" className="form-control radius-formcontrol" value={item.linked_channel} readOnly/>
													<img className="control-icon" src={require("../res/img/link.png")}/>
												</div>
												<label># of Followers</label>
												<div>
													<input type="text" className="form-control radius-formcontrol" value={item.follows} readOnly/>
													<img className="control-icon" src={require("../res/img/followers.png")}/>
												</div>
											</div>
										</div>
									)
								)
							}
						</div>
						<label className="subtitle">
							Ad Listings
							<a className="add-channel">+ Add Another Listing</a>
						</label>
						<div className="ad_listings">
							{
								adlist.map(
									(item,index)=>(
										<div className="ad-list">
											<div className="ad-list-show">
												<div className="ad_list_head">
													<img className="icon" src={require("../res/img/instagram_sq.png")}/>
													<div className="ad_title">{item.title}</div>
													<div className="ad_value">${item.price}</div>
													<div className="ad_toolbox">
														<a data-toggle={"collapse_adlist_"+index} className="edit-adlist">
															<img src={require("../res/img/pencil.png")}/>
														</a>
														<a>
															<img src={require("../res/img/delete.png")}/>
														</a>
													</div>
												</div>
												<div className="ad_list_content">
													<img src={require("../res/img/ad_list1.png")}/>
													<div className="">
														{item.description}
													</div>
												</div>
											</div>
											<div className="dropdown-edit packed collapse" data-toggle={"collapse_adlist_"+index}>
												<label>Choose Channel</label>
												<div className="material-select media-type">
													<FormControl>
													  <Select
													    value={item.media_type}
													    onChange={(event)=>{this.onChangeAdlist("media_type",index,event)}}
													    inputProps={{
													      name: 'material',
													      id: 'material-simple',
													    }}
													  >
													    <MenuItem value={'Instagram'}>
													    	<img src={require('../res/img/instagram_sq.png')} />
													    	Instagram
													    </MenuItem>
													    <MenuItem value={'Facebook'}>
													   		<img src={require('../res/img/facebook_sq.png')} />
													    	Facebook
													    </MenuItem>
													    <MenuItem value={'Twitter'}>
													    	<img src={require('../res/img/twitter_sq.png')} />
													    	Twitter
													    </MenuItem>
													  </Select>
													</FormControl>
												</div>
												<label>Listing Title</label>
												<div>
													<input type="text" className="form-control radius-formcontrol"
														value={item.title} onChange={(event)=>{this.onChangeAdlist("title",index,event)}}/>
													<img className="control-icon" src={require("../res/img/pencil.png")}/>
												</div>
												<label>Price</label>
												<div>
													<input type="text" className="form-control radius-formcontrol"
														value={item.price} onChange={(event)=>{this.onChangeAdlist("price",index,event)}}/>
													<img className="control-icon" src={require("../res/img/dollar.png")}/>
												</div>
												<label>Featured Photo ( 833 px X 1167 px )</label>
												<div>
													<input type="text" className="form-control radius-formcontrol"
														value={item.title} onChange={(event)=>{this.onChangeAdlist("featured_photo",index,event)}}/>
													<img className="control-icon" src={require("../res/img/followers.png")}/>
													<a className="fa fa-remove close-but"></a>
												</div>
												<label>Details (300 characters)</label>
												<div>
													<textarea className="form-control radius-formcontrol detail-textarea" maxLength="300" 
														value={item.title} onChange={(event)=>{this.onChangeAdlist("description",index,event)}}/>
													<i className="fa fa-commenting-o control-icon"></i>
												</div>
												<div className="action">
													<button className="btn btn-outline btn-radius btn-cancel">
														<i className="fa fa-long-arrow-left"></i>
														Cancel
													</button>
													<button className="btn btn-outline btn-radius btn-save">
														<i className="fa fa-check"></i>
														Save
													</button>
												</div>
											</div>
										</div>
									)
								)
							}
						</div>
						<div className="action_group">
							<button className="btn btn-blue left"><img src={require("../res/img/eye_white.png")}/> Preview</button>
							<button className="btn btn-yellow right" onClick={this.handleSubmit.bind(this)}><img src={require("../res/img/check_black.png")}/> Save</button>
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
)(withRouter(SellerDashboard));
