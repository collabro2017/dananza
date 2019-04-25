import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

import "../res/css/infoflowPage.css"

class Cart extends React.Component{

  state={'headerType': "static","startDate":[],"qty":[1,1]}

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
    document.title = "Cart"
    this.setState({
      startDate: [new Date(),new Date()]
    });
  }
  incQty(index){
  	var tmp = this.state.qty;
  	tmp[index] ++;
  	this.setState({"qty":[...tmp]});
  }
  decQty(index){
  	var tmp = this.state.qty;
  	tmp[index] = tmp[index]>1?tmp[index]-1:tmp[index];
  	this.setState({"qty":[...tmp]});
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
								Ad Campagin 1 <button><i className="fa fa-pencil"></i></button>
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
	                                <tr>
	                                    <td>
	                                    	<img src={require("../res/img/instagram_sq.png")} />
	                                    	<Link className="color-dark" to='/seller_page'>@themainmenu</Link>
	                                    </td>
	                                    <td> Instagram Story </td>
	                                    <td className="add_date">
	                                    	<DatePicker
                                              className="btn btn-default"
                                              selected={this.state.startDate[0]}
                                              onChange={(date,event)=>{this.onChangeStartDate(date,event,0)}}
                                              placeholderText="Choose Post Date"
                                              dateFormat="dd/MM/YYYY"
                                            />
	                                    </td>
	                                    <td className="qty"> 
	                                    	<div className="qty_value">{this.state.qty[0]}</div> 
	                                    	<div className="ctrl_value">
	                                    		<button className="inc_value" onClick={()=>{this.incQty(0)}}>
	                                    			<i className="fa fa-angle-up"></i>
	                                    		</button>
	                                    		<button className="dec_value" onClick={()=>{this.decQty(0)}}>
	                                    			<i className="fa fa-angle-down"></i>
	                                    		</button>
	                                    	</div>
	                                    </td>
	                                    <td> $100 </td>
	                                    <td className="del">
	                                    	<button>
	                                    		<i className="fa fa-close"></i>
	                                    	</button>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td>
	                                    	<img src={require("../res/img/blog_sq.png")} />
	                                    	<Link className="color-dark" to='/seller_page'>@themainmenu</Link>
	                                    </td>
	                                    <td> Blog Post </td>
	                                    <td className="add_date">
	                                    	<DatePicker
                                              className="btn btn-default"
                                              selected={this.state.startDate[1]}
                                              onChange={(date,event)=>{this.onChangeStartDate(date,event,1)}}
                                              placeholderText="Choose Post Date"
                                              dateFormat="dd/MM/YYYY"
                                            />
	                                    </td>
	                                    <td className="qty"> 
	                                    	<div className="qty_value">{this.state.qty[1]}</div> 
	                                    	<div className="ctrl_value">
	                                    		<button className="inc_value" onClick={()=>{this.incQty(1)}}>
	                                    			<i className="fa fa-angle-up"></i>
	                                    		</button>
	                                    		<button className="dec_value"  onClick={()=>{this.decQty(1)}}>
	                                    			<i className="fa fa-angle-down"></i>
	                                    		</button>
	                                    	</div>
	                                    </td>
	                                    <td> $100 </td>
	                                    <td className="del">
	                                    	<button>
	                                    		<i className="fa fa-close"></i>
	                                    	</button>
	                                    </td>
	                                </tr>
	                                <tr>
	                                    <td> </td>
	                                    <td> </td>
	                                    <td> </td>
	                                    <td className="total"> 
											Subtotal                                    	
	                                    </td>
	                                    <td className="total_value"> $200 </td>
	                                    <td></td>
	                                </tr>
	                            </tbody>
	                        </table>
						</div>
						<div className="proceed_chk">
							<div className="checkout">
								<Link to='/checkout' className="btn btn-mid bg-yellow color-dark">Proceed to Checkout</Link>
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
)(Cart);
