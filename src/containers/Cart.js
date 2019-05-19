import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import { withRouter } from "react-router-dom";
import { buyerActions } from '../store/actions';
import moment from 'moment';

import "../res/css/infoflowPage.css"

class Cart extends React.Component{

  	state = 
  	{
  		headerType: "static",
  		"startDate":[],
  		"qty":[],
  		subTotal: 0,
  		cartInfo: {},
  		camp: {},
  		cancel_listing_msg: ''
	}

  	constructor(props) {
	    super(props);
	    props.changeHeaderType( this.state.headerType )
 	}

  	onChangeStartDate(date,event,i) {
	    var temp = this.state.startDate.slice(0);
	    temp[i] = date;
	    this.setState({
	      startDate: [...temp]
	    });

  	};

  	componentDidMount(){
	    document.title = "Cart";

	    this.setState({
	      startDate: [new Date(),new Date()]
	    })    	
  	}

  	componentWillMount () {
  		var local_cart = localStorage.getItem('cart');
  		this.props.dispatch(buyerActions.getCurrentCartListings(this.props.current_cart ? this.props.current_cart.id : local_cart.id));
  	}

  	incQty( _index, _price, _Listingid, _sellerId )
  	{
	  	var tmp = this.state.qty, tmp_total = this.state.subTotal;
	  	tmp[_index] ++;
	  	this.setState({ "qty": [...tmp]});
	  	this.handlesubTotal( _Listingid, _sellerId);
  	}

  	decQty( _index, _price, _Listingid, _sellerId )
  	{
	  	var tmp = this.state.qty, tmp_total = this.state.subTotal;
	  	tmp[_index] = tmp[_index] > 1 ? tmp[_index] - 1 : tmp[_index];
	  	this.setState({ "qty" : [...tmp]});
	  	this.handlesubTotal( _Listingid, _sellerId);
  	}

  	handlesubTotal( _id, _sellerId )
  	{
  		var temp = 0;
  		if(this.state.cartInfo.listings)
  		{
			this.state.cartInfo.listings.map(
				(item, index) => {
					temp += item.Listing.price * this.state.qty[index]
				}
			)
  		}
  		this.props.dispatch(buyerActions.addListingToCart(this.props.current_cart.id, _id, _sellerId));
  		this.setState({ subTotal: temp});
  	}

  	handleCartInfo() 
  	{
  		localStorage.setItem('cart', this.state);
  	}

  	handleCampName(e) {
	  	this.setState({
	  		camp: { ...this.state.camp, [e.target.name] : e.target.value }
	  	});
  	}

  	componentWillReceiveProps( nextprops ) {
	
		var temp = [], total_price = 0;

		if(nextprops.cartListings)
		{
			nextprops.cartListings.listings.map(
				(item, index) => {
					temp[index] = item.Counts ? item.Counts : 1;
					total_price += item.Listing.price * temp[index]
				}
			)
		}

		this.setState(
		{
			qty: temp,
			subTotal: total_price,
			cancel_listing_msg: nextprops.cancel_listing_msg,
			cartInfo: nextprops.cartListings
		})
  	}

  	cancelListing( _listingId ) 
  	{
  		var local_cart = localStorage.getItem('cart');
  		var cartid = this.props.current_cart ? this.props.current_cart.id : local_cart.id;
  		this.props.dispatch(buyerActions.cancelListingInCart( cartid, _listingId ));
  	}

  	componentWillUnmount() {
  		this.setState({
  			...this.state
  		})
  	}

	render(){
	    return (
			<div className="infoflowPage">
				<div className="full_container">
					<div className="cartPart">
						<div className="nav_flow row">
							<ul className="">
								<li className="cart active">
									<span className="step_num">1</span>
									Cart Details
									<i className="fa fa-chevron-right"></i>
								</li>
								<li className="checkout">
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
						<div className="row">
							<div className="cart_des">You're a Few Clicks Away from Ad-ing to Your Business</div>
							<div className="table_camp">
								<h3 className="text">
									<input
										className="input_campName" 
										placeholder="Campaign Name"
										autoFocus={ true }
										name="camp_name"
									    onChange={ this.handleCampName.bind(this) }
									/>
									<button><i className="fa fa-pencil"></i></button>
								</h3>
								<table className="table table-striped table-hover">
		                            <thead>
		                                <tr>
		                                    <th> Adza </th>
		                                    <th> Medium </th>
		                                    <th> Schedule Date </th>
		                                    <th> Qty </th>
		                                    <th> Amount </th>
		                                    <th></th>
		                                </tr>
		                            </thead>
		                            <tbody>
	                            	{
	                        			this.state.cartInfo.listings ? this.state.cartInfo.listings.map(
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
				                                    	<div className="qty_value">{this.state.qty[index]}</div> 
				                                    	<div className="ctrl_value">
				                                    		<button className="inc_value" onClick={()=>{this.incQty(index, item.Listing.price, item.Listings.id, item.AdzaProfileId)}}>
				                                    			<i className="fa fa-angle-up"></i>
				                                    		</button>
				                                    		<button className="dec_value" onClick={()=>{this.decQty(index, item.Listing.price, item.Listings.id, item.AdzaProfileId)}}>
				                                    			<i className="fa fa-angle-down"></i>
				                                    		</button>
				                                    	</div>
				                                    </td>
				                                    <td> { item.Listing.price } </td>
				                                    <td className="del">
				                                    	<button onClick={this.cancelListing.bind(this, item.id)}>
				                                    		<i className="fa fa-close"></i>
				                                    	</button>
				                                    </td>
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
		                                    <td className="total_value"> { this.state.subTotal }$ </td>
		                                    <td></td>
		                                </tr>
		                            </tbody>
		                        </table>
							</div>
							<div className="proceed_chk">
								<div className="checkout" onClick={this.handleCartInfo.bind(this)}>
									<Link to={{pathname: '/checkout', info: this.state }} className="btn btn-mid bg-yellow color-dark">Proceed to Checkout</Link>
								</div>
								<div className="note">
									Note: You are not charged until Adza approves your media 
									You will have a chance to upload media for ads after checking out 
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
	const { cartListings, cancel_listing_msg, current_cart } = state.buyer;
  	return {
  		cartListings,
  		cancel_listing_msg,
  		current_cart
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
)(withRouter(Cart));
