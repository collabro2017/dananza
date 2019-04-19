import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../store/reducers/stepCounter";
import { Link } from 'react-router-dom';


import "../res/css/infoflowPage.css"

class PostCheckout extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "PostCheckout"
  }

  render(){
    return (
		<div className="infoflowPage">
			<div className="full_container">
				<div className="post_checkout2">
					<div className="row done">
						<div className="title">You're All Done!</div>
						<div className="content">If your Adza approves your ad, you can expect to see your ads posted on your selected schedule of dates. If not, your payment will be refunded back to your </div>
						<div className="pro_line">
							<div className="col-md-1"></div>
							<div className="pro_line_pos col-md-2">
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
							<div className="pro_line_pos col-md-2">
								<div>
									<i className="fa fa-check passed"></i>
								</div>
								<div>
									<span> Mecia </span>
								</div>
								<div>
									<span> Uploaded</span>
								</div>
							</div>
							<div className="pro_line_pos col-md-2">
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
							<div className="pro_line_pos col-md-2">
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
							<div className="pro_line_pos col-md-2">
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
								Ad Campagin 1 <i className="fa fa-pencil"></i>
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
	                                    	@themainmenu 
	                                    </td>
	                                    <td> Instagram Story </td>
	                                    <td> 03/10/2019 </td>
	                                    <td className="qty"> 
	                                    	<div className="qty_value">1</div> 
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
	                                    	@themainmenu 
	                                    </td>
	                                    <td> Blog Post </td>
	                                    <td> 03/10/2019 </td>
	                                    <td className="qty"> 
	                                    	<div className="qty_value">1</div> 
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
											Total                                    	
	                                    </td>
	                                    <td className="total_value"> $200 </td>
	                                    <td></td>
	                                </tr>
	                            </tbody>
	                        </table>
						</div>
						<div className="proceed_chk">
							<div className="checkout">
								<Link to="/dashborad">Proceed to Dashboard</Link>
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
)(PostCheckout);
