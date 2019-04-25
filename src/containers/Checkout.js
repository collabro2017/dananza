import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import 'icheck/skins/all.css';
import {Checkbox, Radio, RadioGroup} from 'react-icheck';

import "../res/css/infoflowPage.css"

class Checkout extends React.Component{
  state = {visa:true,paypal:false}
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "Checkout"
  }
  changePayment(index){
  	var tmp = {visa:false, paypal:false};
  	tmp[index] = true;
  	this.setState({...tmp});
  }

  render(){
    return (
		<div className="infoflowPage">
			<div className="checkout full_container">
				<div className="nav_flow row">
					<ul className="">
						<li className="cart actived">
							<Link to="/cart"><span className="step_num">1</span>
							Cart Details
							<i className="fa fa-chevron-right"></i></Link>
						</li>
						<li className="checkout active">
							<span className="step_num">2</span>
							Checkout
							<i className="fa fa-chevron-right"></i>
						</li>
						<li className="upload">
							<span className="step_num">3</span>
							Uploads Media Ad Files
						</li>
					</ul>
				</div>
				<div className="chk_info row">
					<div className="col-md-9 options">
						<div className="title">
							Payment Options
						</div>
						<div className="visa">
							<div className="brand">
								<Radio
								  name="payment_option"
								  value="visa"
								  radioClass="iradio_minimal-red"
								  increaseArea="20%"
								  checked={this.state.visa}
								  onChange={()=>{this.changePayment('visa');}}
								/>
								<img src={require("../res/img/visa_brand.png")} />
								<img src={require("../res/img/mastercard.png")}/>
								<img src={require("../res/img/amex.png")}/>
							</div>
							<div className="input_info">
								<div className="col-md-6">
									Card Number <input type="input" id="card_no" />
								</div>
								<div className="col-md-4">
									Expiration Date <input type="input" id="exp_date" />
								</div>
								<div className="col-md-2">
									CVV <input type="input" id="cvv" />
								</div>
								<div className="col-md-6">
									First Name
									<input type="input" id="f_name" />
								</div>
								<div className="col-md-6">
									Last Name
									<input type="input" id="l_name" />
								</div>
							</div>
						</div>
						<div className="paypal">
							<div className="brand">
								<Radio
								  name="payment_option"
								  value="paypal"
								  radioClass="iradio_minimal-red"
								  increaseArea="20%"
								  checked={this.state.paypal}
								  onChange={()=>{this.changePayment('paypal');}}
								/>
								<img src={require("../res/img/paypal_brand.png")}/>
							</div>
						</div>
					</div>
					<div className="col-md-3 summary">
						<div className="smy_title">Summary</div>
						<div className="site_info">
							<div className="col-md-2">
								<img src={require("../res/img/themainmenu_1.png")}/>
							</div>
							<div className="info_detail col-md-9">
								@themainmenu<br/>
								<p>X1 Instagram Story</p>
								$100
							</div>
						</div>
						<div className="divider"></div>
						<div className="site_info">
							<div className="col-md-2">
								<img src={require("../res/img/themainmenu_2.png")}/>
							</div>
							<div className="info_detail col-md-9">
								@themainmenu<br/>
								<p>X1 Blog Post</p>
								$100
							</div>
						</div>
						<div className="sub_total">
							<div className="sub_title col-md-6 amount_title">Subtotal</div>
							<div className="sub_value col-md-6 value">$200</div>
						</div>
						<div className="other_fee">
							<div className="fee_title col-md-6 amount_title">Other Fees</div>
							<div className="fee_value col-md-6 value">$3.50</div>
						</div>
						<div className="divider"></div>
						<div className="total">
							<div className="total_title col-md-6 amount_title">Total</div>
							<div className="total_value col-md-6 value">$203.50</div>
						</div>
						<div className="confirm">
							<Link className="btn btn-yellow btn-medium color-dark full-width" to="/uploadfiles">Authorize Payment</Link>
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
)(Checkout);
