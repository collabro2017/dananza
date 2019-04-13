import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import $ from "jquery";
import { increment, decrement } from "../store/reducers/stepCounter";

import "../res/css/Adza_Signup_Dananza.css"

class SignUp extends React.Component{

  state={'headerType': "homepage"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Adza SignUp"

    function changeImage(src) {
		$('.result-panel>img').attr("src","./res/img/image_dashboard_"+src+".png");
	}
  }

  render(){
    return (
      	<div className="adza_signup_section">
		<div className="full_container">
			<div className="row heroblog">
				<div className="image">
				<img src={require("../res/img/Heroimage1.png")}/>
					<div className="col-sm-6 col-md-6">
					</div>
					<div className="col-md-6 col-sm-6 mk_adv_smp color-title">
						Adzas Do It Better
						<div className="finding_best_ad ">
							Promote, sell, and manage ads across all your channels all without a monthly fee.
						</div>
					</div>
				</div>		
			</div>
			<div className="row what_waiting">
				<div className="col-sm-12 info_title">
					What Are You Waiting For?
				</div>
				<div className="col-sm-12 sub_title">
					Sign Up Below & Let’s Make Advertising Simple
				</div>
				<div className="col-sm-12">
					<input type="text" className="form-control" placeholder="Business Name"/>
					<i className="fa fa-briefcase show-icon"></i>
				</div>
				<div className="col-sm-6">
					<input type="text" className="form-control" placeholder="First Name"/>
					<i className="fa fa-user show-icon"></i>
				</div>
				<div className="col-sm-6">
					<input type="text" className="form-control" placeholder="Last Name"/>
					<i className="fa fa-user show-icon"></i>
				</div>
				<div className="col-sm-12">
					<input type="text" className="form-control"  placeholder="Enter Your Email"/>
					<i className="fa fa-envelope-o show-icon"></i>
				</div>
				<div className="col-sm-6">
					<input type="text" className="form-control"  placeholder="Your Password"/>
					<i className="fa fa-key show-icon"></i>
				</div>
				<div className="col-sm-6">
					<input type="text" className="form-control"  placeholder="Confirm Password"/>
					<i className="fa fa-key show-icon"></i>
				</div>
				<div className="col-sm-12 align-center">
					<button className="form-button">
						Next<i className="fa fa-long-arrow-right"></i>
					</button>
				</div>
			</div>
			<div className="row how_works">
				<div className="col-sm-12 info_title">
					How It Works
				</div>
				<div className="col-sm-12">
					<div className="col-sm-4 part">
						<div>
							<img src={require("../res/img/papercopy.png")}/>
						</div>
						<div className="sub-title">
							Build An Adza Page
						</div>
						<div className="sub-content">
							Sign up for free, create a killer Adza page, and get found by buyers that need you.
						</div>
					</div>
					<div className="col-sm-4 part">
						<div>
							<img src={require("../res/img/stamp.png")}/>
						</div>
						<div className="sub-title">
							Your Page, Your Ads
						</div>
						<div className="sub-content">
							When a buyer purchases an ad, you can approve it or message them to fix it up.
						</div>
					</div>
					<div className="col-sm-4 part">
						<div>
							<img src={require("../res/img/papercopy.png")}/>
						</div>
						<div className="sub-title">
							Simplified Selling
						</div>
						<div className="sub-content">
							Your dashboard will tell you when, what, and where to post - plus how hard you’re killing it.
						</div>
					</div>
				</div>
			</div>
			<div className="row preview">
				<div className="select-panel">
					<label className="info_title">
						Here’s a Little Preview
					</label>
					<div className="btn-group" data-toggle="buttons" id="pages">
	                    <label className="btn btn-default active" onClick="changeImage('order')">
	                    	<i className="fa fa-shopping-cart"></i>
	                        <input type="radio" className="toggle"/> Orders
	                    </label>
	                    <label className="btn btn-default" onClick="changeImage('analytics')">
	                    	<i className=" fa fa-bar-chart"></i>
	                        <input type="radio" className="toggle"/> Analytics
	                    </label>
	                    <label className="btn btn-default" onClick="changeImage('calendar')">
	                    	<i className="fa fa-calendar"></i>
	                        <input type="radio" className="toggle"/> Calendar
	                    </label>
	                    <label className="btn btn-default" onClick="changeImage('sellers_page')">
	                    	<i className="fa fa-user"></i>
	                        <input type="radio" className="toggle"/> Seller's Page
	                    </label>
	                    <label className="btn btn-default" onClick="changeImage('messages')">
	                    	<i className="fa fa-comment-o"></i>
	                        <input type="radio" className="toggle"/> Messages
	                    </label>
	                </div>
				</div>
				<div className="result-panel">
					<img src={require("../res/img/image_dashboard_order.png")}/>
				</div>
			</div>
			<div className="row simple_convenient">
				<div className="image-panel">
					<img src={require("../res/img/image_simple.png")}/>
				</div>
				<div className="contents-panel">
					<label className="info_title">
						Simple & Convenient
					</label>
					<div className="sub-title">
						<img src={require("../res/img/icon-less.png")}/>
						Work as Little as Possible
					</div>
					<div className="sub-content">
						All Adzas face a vetting process to confirm you are the owner of the accounts you say you are. Profile stats are automatically loaded from most channels so you work as little as possible.
					</div>
					<div className="sub-title">
						<img src={require("../res/img/affordable.png")}/>
						Only for a Small Fee
					</div>
					<div className="sub-content">
						When you sell an ad spot, you’ll only be charged a small 6% fee which is only about 6% the fee of the “other guys”. Our platform is open to everyone meaning you can just send everyone to your Dananza page and have everything organized in one spot. Let’s skip the emails, calls, and bargaining because we’re not in 1999 anymore.
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
)(SignUp);
