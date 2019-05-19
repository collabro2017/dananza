import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { withRouter } from "react-router-dom";
import { buyerActions } from '../store/actions';
import moment from 'moment';

import "../res/css/infoflowPage.css"

class PostCheckout extends React.Component{
  	constructor(props) {
    	super(props);
  	}

  	componentDidMount(){
	    document.title = "PostCheckout"
  	}

	cancelListing( _listingId ) {
  		console.log('cancel listing id = ', _listingId);
  		this.props.dispatch(buyerActions.cancelListingInCart( _listingId ));
  	}

  	createCampaign( _info ) {
  		var cartid = this.props.current_cart.id
  		console.log("campaign_info",_info);
  		this.props.dispatch(buyerActions.createCampaign( cartid, _info ))
  	}

  	render(){

	  	var info = this.props.location.info;
	  		  	console.log('post info = ', info);
	    return (
			<div className="infoflowPage">
				<div className="full_container">
					<div className="post_checkout2">
						<div className="row done">
							<div className="title">You're All Done!</div>
							<div className="content">If your Adza approves your ad, you can expect to see your ads posted on your selected schedule of dates. If not, your payment will be refunded back to your account.</div>
							<div className="pro_line">
								<div className="col-sm-1"></div>
								<div className="pro_line_pos col-sm-2">
									<div>
										<i className="fa fa-check passed"></i>
									</div>
									<div>
										<span> Order Date </span>
									</div>
									<div>
										<span> 03/11</span>
									</div>
								</div>
								<div className="pro_line_pos col-sm-2">
									<div>
										<i className="fa fa-check passed"></i>
									</div>
									<div>
										<span> Media </span>
									</div>
									<div>
										<span> Uploaded</span>
									</div>
								</div>
								<div className="pro_line_pos col-sm-2">
									<div>
										<i className="fa fa-check"></i>
									</div>
									<div>
										<span> Waiting for </span>
									</div>
									<div>
										<span> Adza Approval</span>
									</div>
								</div>
								<div className="pro_line_pos col-sm-2">
									<div>
										<i className="fa fa-check"></i>
									</div>
									<div>
										<span> Ad </span>
									</div>
									<div>
										<span> Launched</span>
									</div>
								</div>
								<div className="pro_line_pos col-sm-2">
									<div>
										<i className="fa fa-check"></i>
									</div>
									<div>
										<span> Buyer </span>
									</div>
									<div>
										<span> Approved </span>
									</div>
								</div>
								<div className="line"></div>
							</div>
						</div>
						<div className="row">
							<div className="cart_des">Order Summary</div>
							<div className="table_camp">
								<h3 className="text">
									{ info.camp_name }
								</h3>
								<table className="table table-striped table-hover">
		                            <thead>
		                                <tr>
		                                    <th> Adza </th>
		                                    <th> Medium </th>
		                                    <th> Schedule Date </th>
    	                                    <th> Qty </th>
		                                    <th> Amount </th>
		                                </tr>
		                            </thead>
		                            <tbody>
	                            	{
	                        			info.cartInfo.listings ? info.cartInfo.listings.map(
	                            			(item, index) => 
		                            		(
		                            			<tr>
				                                    <td>
				                                    	<img src={require("../res/img/" + item.Listing.media_type + "_sq.png")} alt=""/>
				                                    	<Link className="color-dark" to='/seller_page'>{ item.Listing.Channel.username }</Link>
				                                    </td>
				                                    <td> { item.Listing.media_type } </td>
				                                    <td className="add_date">
				                                    	<DatePicker
			                                              className="btn btn-default"
			                                              selected={moment(item.Listing.insert_date, 'DD-MM-YYYY').toDate()}
			                                              onChange={(date,event)=>{this.onChangeStartDate(date,event,0)}}
			                                              placeholderText="Choose Post Date"
			                                              dateFormat="dd/MM/YYYY"
			                                            />
				                                    </td>
    			                                    <td className="qty"> 
				                                    	<div className="qty_value">{ info.qty[index] }</div> 
				                                    </td>
				                                    <td> { item.Listing.price } </td>
				                                </tr>
	                            			)
	                        			): null
	                            	}
		                                <tr>
		                                    <td> </td>
		                                    <td> </td>
		                                    <td> </td>
		                                    <td className="total"> 
												Subtotal                                    	
		                                    </td>
		                                    <td className="total_value"> ${ info.subtotal } </td>
		                                </tr>
		                            </tbody>
		                        </table>
							</div>
							<div className="proceed_chk">
								<div className="checkout" onClick={ this.createCampaign.bind(this, info) }>
									<Link 
										to=
										{{
											pathname: "/buyer_landing",
											info: info
										}}

										>
										Proceed to Dashboard
									</Link>
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
	const { current_cart } = state.buyer;
  return {
  		current_cart
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
)(withRouter(PostCheckout));
