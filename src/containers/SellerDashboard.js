import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Nouislider from 'react-nouislider';
import ReactTags from "react-tag-autocomplete";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import SellerSidebar from "../components/Sidebar/SellerSidebar";

import "../res/css/Seller_Dashboard_Sellers_Page.css"
import "../res/icheck/skins/ltblue.css"
import "../res/css/nouislider.css"
import "../res/css/components/tag.css"
import "../res/css/components/slider.css"
import "../res/css/components/select.css"

class SellerDashboard extends React.Component{

  state={'headerType': "seller",
 		'age_start': 0,
  		'age_end': 60,
  		'male_percent' : 0,
  		'female_percent' : 100,
  		'startDate': null,
		tags: [
	        { name: "Apples" },
	        { name: "Pears" }
		],
		suggestions: [
			{ name: "Bananas" },
			{ name: "Mangos" },
			{ name: "Lemons" },
			{ name: "Lemonfffffas" },
			{ name: "Lemonfefes" },
			{ name: "Apricots"}
		],
		'locations' : [],
		'interests' : [],
		'mediaType' : 'Instagram',
		'channel' : 'Instagram'
  }

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Seller Dashboard"
  }
  onAgeSlide = (render, handle, value, un, percent) => {
    this.setState({
      'age_start':value[0].toFixed(0), 
      'age_end':value[1].toFixed(0)
    });
  }
  
  onGenderSlide = (render, handle, value, un, percent) => {
  	const male_percent = value[0].toFixed(0);
  	const female_percent = 100 - male_percent;
    this.setState({
      'male_percent': male_percent, 
      'female_percent': female_percent
    });
  }

  onChangeMediatype = event => {
	this.setState({ ['mediaType']: event.target.value });
  };
  onChangeChannel = event => {
	this.setState({ ['channel']: event.target.value });
  };

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

  handleInterestsDelete (i) {
    const interests = this.state.interests.slice(0)
    interests.splice(i, 1)
    this.setState({ interests })
  }
 
  handleInterestsAddition (location) {
    const interests = [].concat(this.state.interests, location)
    
    if( !this.state.interests.some(item => location.name === item.name ))
    	this.setState({ interests: [...this.state.interests, location]})
  }

  render(){
  	const { age_start, age_end } = this.state;
  	const { male_percent, female_percent } = this.state;

    return (
    	<div className="dashboard_seller">
	    	<div className="page-content sellers_page">
				<SellerSidebar navitem={"sellers_page"}/>
				<div className="page-result-wrapper">
					<div className="page-result">
						<label className="title">Edit Your Profile Page</label>
						
						<label className="subtitle">Seller’s Description</label>
						<div className="control-list">
							<div className="formcontrol row">
								<label className="col-sm-2 controllabel"> Profile photo</label>
								<div className="col-sm-10 controlcontent">
									<img className="profile" src={require("../res/img/profile_photo.png")}/>
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
									<textarea className="form-control btn-radius" placeholder="Official Account of Target Tree Miami"></textarea>
								</div>
							</div>
							<div className="formcontrol row">
								<label className="col-sm-2 controllabel">
									Location
								</label>
								<div className="col-sm-10 controlcontent">
									<div className="input-icon">
					                    <img src={require('../res/img/minami.png')}/>
					                    <input type="text" className="form-control btn-radius"/>
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
										    start={[age_start, age_end]}
										    connect
										    onSlide={this.onAgeSlide}
										/>

			                            <label className="age-result">
			                            { age_start } - { age_end }yrs Old</label>
			                        </div>

			                        <div className="sub-control"><b>Gender Distribution</b></div>
									<div className="feature-slider" id="gender">
										<label className="col-sm-1 no-padding-left">
											Male
											<div id="male">{male_percent}%</div>
										</label>
										<div id="seller_page_gender" className="col-sm-10">
											<Nouislider											
											    range={{min: 0, max: 100}}
											    start={[male_percent]}
											    connect
											    onSlide={this.onGenderSlide}
											/>
										</div>

			                            <label className="col-sm-1">
			                            	Female
			                            	<div id="female">{female_percent}%</div>
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
											    tags={this.state.locations}
											    suggestions={this.state.suggestions}
											    handleDelete={this.handleLocationDelete.bind(this)}
											    handleAddition={this.handleLocationAddition.bind(this)}
											    classNames = {{root:"inner-tag react-tags"}} />
						                </div>
									</div>

			                        <div className="sub-control"><b>Interests</b></div>
									<div className="col-sm-12 no-padding-left">
										<div className="input-icon">
											<img src={require("../res/img/pencil.png")}/>
						                    <ReactTags
												placeholder=""
												inputAttributes={{ maxLength: 15}}
												allowNew={true}
												addOnBlur={true}
											    tags={this.state.interests}
											    suggestions={this.state.suggestions}
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
						<div className="channel-list" id="channelList">
							<div className="channel">
								<div className="channel-show" data-toggle="collapse" data-parent="#channelList" href="#collapse_channel_1" aria-expanded="false">
									<img className="icon" src={require("../res/img/instagram_sq.png")}/>
									<b>@targettree</b>
									<i className="fa fa-user"></i>
									<b>60k+</b>
									<div className="toolbox">
										<a>
											<img src={require("../res/img/delete.png")}/>
										</a>
									</div>
								</div>
								<div id="collapse_channel_1" className="dropdown-edit collapse" aria-expanded="false">
									<label>Media Type</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="Instagram" readOnly/>
								    	<img className="control-icon" src={require('../res/img/instagram_sq.png')} />
									</div>
									<label>User Name</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="@targettree" readOnly/>
										<i className="fa fa-user control-icon"></i>
									</div>
									<label>Link to Channel</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="https://instagram.com/targettree" readOnly/>
										<img className="control-icon" src={require("../res/img/link.png")}/>
									</div>
									<label># of Followers</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="62,350" readOnly/>
										<img className="control-icon" src={require("../res/img/followers.png")}/>
									</div>
								</div>
							</div>
							<div className="channel">
								<div className="channel-show" data-toggle="collapse" data-parent="#channelList" href="#collapse_channel_2" aria-expanded="false">
									<img className="icon" src={require("../res/img/facebook_sq.png")}/>
									<b>Targettree</b>
									<i className="fa fa-user"></i>
									<b>60k+</b>
									<div className="toolbox">
										<a>
											<img src={require("../res/img/delete.png")}/>
										</a>
									</div>
								</div>
								<div id="collapse_channel_2" className="dropdown-edit collapse" aria-expanded="false">
									<label>Media Type</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="Facebook" readOnly/>
								    	<img className="control-icon" src={require('../res/img/facebook_sq.png')} />
									</div>
									<label>User Name</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="Targettree" readOnly/>
										<i className="fa fa-user control-icon"></i>
									</div>
									<label>Link to Channel</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="https://facebook.com/targettree" readOnly/>
										<img className="control-icon" src={require("../res/img/link.png")}/>
									</div>
									<label># of Followers</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="66,350" readOnly/>
										<img className="control-icon" src={require("../res/img/followers.png")}/>
									</div>
								</div>
							</div>

							<div className="channel">
								<div className="channel-show" data-toggle="collapse" data-parent="#channelList" href="#collapse_channel_3" aria-expanded="false">
									<img className="icon" src={require("../res/img/youtube_sq.png")}/>
									<b>targettree</b>
									<i className="fa fa-user"></i>
									<b>60k+</b>
									<div className="toolbox">
										<a>
											<img src={require("../res/img/delete.png")}/>
										</a>
									</div>
								</div>
								<div id="collapse_channel_3" className="dropdown-edit collapse" aria-expanded="false">
									<label>Media Type</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="Youtube" readOnly/>
								    	<img className="control-icon" src={require('../res/img/youtube_sq.png')} />
									</div>
									<label>User Name</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="targettree" readOnly/>
										<i className="fa fa-user control-icon"></i>
									</div>
									<label>Link to Channel</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="https://youtube.com/targettree" readOnly/>
										<img className="control-icon" src={require("../res/img/link.png")}/>
									</div>
									<label># of Followers</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="68,350" readOnly/>
										<img className="control-icon" src={require("../res/img/followers.png")}/>
									</div>
								</div>
							</div>
						</div>
						<label className="subtitle">
							Ad Listings
							<a className="add-channel">+ Add Another Listing</a>
						</label>
						<div className="ad_listings" id="ADList">
							<div className="ad-list">
								<div className="ad-list-show">
									<div className="ad_list_head">
										<img className="icon" src={require("../res/img/instagram_sq.png")}/>
										<div className="ad_title">Instagram Story - Product View</div>
										<div className="ad_value">$100</div>
										<div className="ad_toolbox">
											<a data-toggle="collapse" data-parent="#ADList" href="#collapse_adlist_1" aria-expanded="false">
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
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
										</div>
									</div>
								</div>
								<div id="collapse_adlist_1" className="dropdown-edit packed collapse" aria-expanded="false">
									<label>Choose Channel</label>
									<div className="material-select media-type">
										<FormControl>
										  <Select
										    value={this.state.channel}
										    onChange={this.onChangeChannel}
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
										<input type="text" className="form-control radius-formcontrol" value="Instagram Story - Product Review"/>
										<img className="control-icon" src={require("../res/img/pencil.png")}/>
									</div>
									<label>Price</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="100"/>
										<img className="control-icon" src={require("../res/img/dollar.png")}/>
									</div>
									<label>Featured Photo ( 833 px X 1167 px )</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="image-instagram.jpg"/>
										<img className="control-icon" src={require("../res/img/followers.png")}/>
										<a className="fa fa-remove close-but"></a>
									</div>
									<label>Details (300 characters)</label>
									<div>
										<textarea className="form-control radius-formcontrol detail-textarea" maxLength="300" defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'></textarea>
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
							<div className="ad-list">
								<div className="ad-list-show">
									<div className="ad_list_head">
										<img className="icon" src={require("../res/img/facebook_sq.png")}/>
										<div className="ad_title">Facebook - Advertise Your Business/Product</div>
										<div className="ad_value">$100</div>
										<div className="ad_toolbox">
											<a data-toggle="collapse" data-parent="#ADList" href="#collapse_adlist_2" aria-expanded="false">
												<img src={require("../res/img/pencil.png") }/>
											</a>
											<a>
												<img src={require("../res/img/delete.png")}/>
											</a>
										</div>
									</div>
									<div className="ad_list_content">
										<img src={require("../res/img/ad_list2.png")}/>
										<div className="">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
										</div>
									</div>
								</div>
								<div id="collapse_adlist_2" className="dropdown-edit packed collapse" aria-expanded="false">
									<label>Choose Channel</label>
									<div className="material-select media-type">
										<FormControl>
										  <Select
										    value={this.state.channel}
										    onChange={this.onChangeChannel}
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
										<input type="text" className="form-control radius-formcontrol" value="Instagram Story - Product Review"/>
										<img className="control-icon" src={require("../res/img/pencil.png")}/>
									</div>
									<label>Price</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="100"/>
										<img className="control-icon" src={require("../res/img/dollar.png")}/>
									</div>
									<label>Featured Photo ( 833 px X 1167 px )</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="image-instagram.jpg"/>
										<img className="control-icon" src={require("../res/img/followers.png")}/>
										<a className="fa fa-remove close-but"></a>
									</div>
									<label>Details (300 characters)</label>
									<div>
										<textarea className="form-control radius-formcontrol detail-textarea" maxLength="300" defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'></textarea>
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
							<div className="ad-list">
								<div className="ad-list-show">
									<div className="ad_list_head">
										<img className="icon" src={require("../res/img/youtube_sq.png")}/>
										<div className="ad_title">Have Your Business/Product Featured</div>
										<div className="ad_value">$100</div>
										<div className="ad_toolbox">
											<a data-toggle="collapse" data-parent="#ADList" href="#collapse_adlist_3" aria-expanded="false">
												<img src={require("../res/img/pencil.png")}/>
											</a>
											<a>
												<img src={require("../res/img/delete.png")}/>
											</a>
										</div>
									</div>
									<div className="ad_list_content">
										<img src={require("../res/img/ad_list3.png")}/>
										<div className="">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
										</div>
									</div>
								</div>
								<div id="collapse_adlist_1" className="dropdown-edit packed collapse" aria-expanded="false">
									<label>Choose Channel</label>
									<div className="material-select media-type">
										<FormControl>
										  <Select
										    value={this.state.channel}
										    onChange={this.onChangeChannel}
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
										<input type="text" className="form-control radius-formcontrol" value="Instagram Story - Product Review"/>
										<img className="control-icon" src={require("../res/img/pencil.png")}/>
									</div>
									<label>Price</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="100"/>
										<img className="control-icon" src={require("../res/img/dollar.png")}/>
									</div>
									<label>Featured Photo ( 833 px X 1167 px )</label>
									<div>
										<input type="text" className="form-control radius-formcontrol" value="image-instagram.jpg"/>
										<img className="control-icon" src={require("../res/img/followers.png")}/>
										<a className="fa fa-remove close-but"></a>
									</div>
									<label>Details (300 characters)</label>
									<div>
										<textarea className="form-control radius-formcontrol detail-textarea" maxLength="300" defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut'></textarea>
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
						</div>
						<div className="action_group">
							<button className="btn btn-blue left"><img src={require("../res/img/eye_white.png")}/> Preview</button>
							<Link to="/seller_page" className="btn btn-yellow right"><img src={require("../res/img/check_black.png")}/> Save</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {

    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerDashboard);
