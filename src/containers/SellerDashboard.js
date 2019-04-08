import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment, decrement } from "../store/reducers/stepCounter";

import "../res/css/Danaza_Dashboard_Seller.css"

class SellerDashboard extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "Seller Dashboard"
  }

  render(){
    return (
    	<div className="dashboard_seller">
	    	<div className="page-content">
				<div className="page-sidebar">
					<div className="section target-tree">
						<div className="image">
							<img alt="" src={require("../res/img/profile_photo.png")}/>
							<h1> Target Tree </h1>
						</div>
						<div className="dial">
							<input className="knob" data-fgcolor="#2ab7c9" data-width="100%" data-min="0" data-displayprevious="true" value="44" readOnly=""/>
						</div>
						<div className="dial">
							<input className="knob" data-fgcolor="#2ab7c9" data-width="100%" data-min="0" data-displayprevious="true" value="99" readOnly=""/>
						</div>
						<div className="dial">
							<input className="knob" data-fgcolor="#2ab7c9" data-width="100%" data-min="0" data-displayprevious="true" value="98" readOnly=""/>
						</div>
						<div className="dial">
							<input className="rate" data-fgcolor="#2ab7c9" data-width="100%" data-max="5.0" data-displayprevious="true" value="5.0" readOnly=""/>
							<i className="fa fa-star"></i>
						</div>
					</div>
					<div className="section">
						<div className="btn-group" data-toggle="buttons" id="pages">
		                    <label className="btn btn-default active">
		                    	<i className="fa fa-shopping-cart"></i>
		                        <input type="radio" className="toggle"/> Orders
		                    </label>
		                    <label className="btn btn-default">
		                    	<i className=" fa fa-bar-chart"></i>
		                        <input type="radio" className="toggle"/> Analytics
		                    </label>
		                    <label className="btn btn-default">
		                    	<i className="fa fa-calendar"></i>
		                        <input type="radio" className="toggle"/> Calendar
		                    </label>
		                    <label className="btn btn-default">
		                    	<i className="fa fa-user"></i>
		                        <input type="radio" className="toggle"/> Seller's Page
		                    </label>
		                    <label className="btn btn-default">
		                    	<i className="fa fa-comment-o"></i>
		                        <input type="radio" className="toggle"/> Messages
		                    </label>
		                </div>
					</div>
				</div>
				<div className="page-result">
					<label className="title">Edit Your Profile Page</label>
					<div className="form-group">
						<label className="subtitle">Seller’s Description</label>
						<div>
							<div className="formcontrol row">
								<label className="col-md-2 controllabel"> Profile photo</label>
								<div className="col-md-10 controlcontent">
									<img alt="" src={require("../res/img/profile_photo.png")} />
									<div className="right-control col-md-8">
										<a className="btn dark btn-outline btn-radius">
											<i className="fa fa-file-image-o"></i>
											<b>Choose Photo</b>
										</a>
										<div>This photo is your identity in Dananza.</div>
									</div>
								</div>
							</div>
							<div className="formcontrol row">
								<label className="col-md-2 controllabel">
									Describe Your Company (100characters)
								</label>
								<div className="col-md-10 controlcontent">
									<textarea className="form-control btn-radius" placeholder="Official Account of Target Tree Miami"></textarea>
								</div>
							</div>
							<div className="formcontrol row">
								<label className="col-md-2 controllabel">
									Location
								</label>
								<div className="col-md-10 controlcontent">
									<div className="input-icon">
					                    <i className="fa fa-map-pin"></i>
					                    <input type="text" className="form-control btn-radius" placeholder="Miami, Florida"/>
					                </div>
								</div>
							</div>
							<div className="formcontrol row">
								<label className="col-md-2 controllabel">
									Gallery
								</label>
								<div className="col-md-10 controlcontent block">
									<div className="input-icon">
					                    <i className="fa fa-file-image-o"></i>
					                    <input type="text" className="form-control drag-file btn-radius" value="Drag files to upload or select files from your library"/>
					                </div>
					                <div className="images">
										<div className="item">
											<img alt="" src={require("../res/img/dragupload1.png")} />
											<img alt="" className="closebut" src={require("../res/img/close.png")} />
										</div>
										<div className="item">
											<img alt="" src={require("../res/img/dragupload2.png")} />
											<img alt="" className="closebut" src={require("../res/img/close.png")} />
										</div>
										<div className="item">
											<img alt="" src={require("../res/img/dragupload3.png")} />
											<img alt="" className="closebut" src={require("../res/img/close.png")} />
										</div>
									</div>
								</div>
							</div>
							<div className="formcontrol row">
								<label className="col-md-2 controllabel">
									Audience Description
								</label>
								<div className="col-md-10 controlcontent block">
									<div className="sub-control"><b>Age Range</b></div>
									<div className="feature-slider">
			                            <div id="age" className="noUi-ltblue"></div>
			                            <label className="dark-grey" id="age_result"></label>
			                        </div>

			                        <div className="sub-control"><b>Gender Distribution</b></div>
									<div className="feature-slider">
										<label className="col-md-1 no-padding-left">
											Male
											<div id="male">0%</div>
										</label>
			                            <div id="gender" className="col-md-10"></div>
			                            <label className="col-md-1">
			                            	Female
			                            	<div id="female">0%</div>
			                        	</label>
			                        </div>

			                        <div className="sub-control"><b>Location</b></div>
									<div className="col-md-12 no-padding-left">
										<div className="input-icon">
						                    <i className="fa fa-map-pin"></i>
						                    <input type="text" className="form-control btn-radius" placeholder=""/>
						                </div>
									</div>

			                        <div className="sub-control"><b>Interests</b></div>
									<div className="col-md-12 no-padding-left">
										<div className="input-icon">
						                    <i className="fa fa-pencil"></i>
						                    <input type="text" className="form-control btn-radius" placeholder=""/>
						                </div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<label className="subtitle">
								Edit Channels
								<a className="add-channel">+ Add Another Channel</a>
							</label>
							<div className="formcontrol channel block">
								<img alt="" src={require("../res/img/facebook_sq.png")} />
								<b>@targettree</b>
								<i className="fa fa-user"></i>
								<b>60k+</b>
								<div className="toolbox">
									<a className="fa fa-pencil"></a>
									<a className="fa fa-trash"></a>
								</div>
							</div>
							<div className="formcontrol channel block">
								<img alt="" src={require("../res/img/instagram_sq.png")} />
								<b>@targettree</b>
								<i className="fa fa-user"></i>
								<b>60k+</b>
								<div className="toolbox">
									<a className="fa fa-pencil"></a>
									<a className="fa fa-trash"></a>
								</div>
							</div>
							<div className="formcontrol channel block">
								<img alt="" src={require("../res/img/youtube_sq.png")} />
								<b>@targettree</b>
								<i className="fa fa-user"></i>
								<b>60k+</b>
								<div className="toolbox">
									<a className="fa fa-pencil"></a>
									<a className="fa fa-trash"></a>
								</div>
							</div>
						</div>
						<div className="ad_listings">
							<label className="subtitle">
								Ad Listings
								<a className="add-channel">+ Add Another Listing</a>
							</label>
							<div className="instagram">
								<div className="ad_list_head">
									<img alt="" src={require("../res/img/instagram_sq.png")} />
									<div className="ad_title">Instagram Story - Product View</div>
									<div className="ad_value">$100</div>
									<div className="ad_toolbox">
										<a className="fa fa-pencil"></a>
										<a className="fa fa-trash"></a>
									</div>
								</div>
								<div className="ad_list_content">
									<img alt="" src={require("../res/img/ad_list1.png")} />
									<div className="">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
									</div>
								</div>
							</div>
							<div className="facebook">
								<div className="ad_list_head">
									<img alt="" src={require("../res/img/facebook_sq.png")} />
									<div className="ad_title">Facebook - Advertise Your Business/Product</div>
									<div className="ad_value">$100</div>
									<div className="ad_toolbox">
										<a className="fa fa-pencil"></a>
										<a className="fa fa-trash"></a>
									</div>
								</div>
								<div className="ad_list_content">
									<img alt="" src={require("../res/img/ad_list2.png")} />
									<div className="">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
									</div>
								</div>
							</div>
							<div className="business">
								<div className="ad_list_head">
									<img alt="" src={require("../res/img/youtube_sq.png")} />
									<div className="ad_title">Have Your Business/Product Featured</div>
									<div className="ad_value">$100</div>
									<div className="ad_toolbox">
										<a className="fa fa-pencil"></a>
										<a className="fa fa-trash"></a>
									</div>
								</div>
								<div className="ad_list_content">
									<img alt="" src={require("../res/img/ad_list3.png")} />
									<div className="">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
									</div>
								</div>
							</div>
						</div>
						<div className="action_group">
							<button className="btn btn-blue left"><img alt="" src={require("../res/img/eye_white.png")} /> Preview</button>
							<button className="btn btn-yellow right"><img alt="" src={require("../res/img/check_black.png")} /> Save</button>
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
    stepCounter: state.stepCounter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increment: () => increment(),
      decrement: () => decrement()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerDashboard);
