import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment, decrement } from "../store/reducers/stepCounter";

import "../res/css/BuyerSaved.css"

class BuyerSaved extends React.Component{

  state={'headerType': "buyer"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Buyer Saved"
  }

  render(){
    return (
    	<div className="buyer_saved">
			<div class="page-container">
				<div class="page-content">
					<div class="page-sidebar">
						<div class="userinfo">
							<img src={require("../res/img/userinfo_img.png")} />
							<h3>Michaela Seyra</h3>
							<h5>@michaela_Syr</h5>
						</div>
						<div class="selector">
							<ul class="page-sidebar-menu">
								<li class="nav-item">
									<a> <img class="nav-icon" src={require("../res/img/person.png")}/> Profile Page</a>
								</li>
								<li class="nav-item">
									<a> <img class="nav-icon" src={require("../res/img/saved.png")}/>Saved</a>
								</li>
								<li class="nav-item">
									<a> <img class="nav-icon" src={require("../res/img/champaigns.png")}/>Campaigns</a>
								</li>
								<li class="nav-item last">
									<a> <img class="nav-icon" src={require("../res/img/messages.png")}/>Messages</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="page-main">
						<div class="page-main-header">
							<span class="headline-first">
								Saved Adzas
							</span>
							<span class="headline-second pull-right">
								<i class="fa fa-search input"></i>
		                    	<input type="text" class="form-control search-input" placeholder="Search..." value="Search for saved Adza"/>
							</span>
						</div>
						<hr class="divider-line" />
						<div class="adzas row">
							<div class="col-md-12>">
								<div class="col-md-4">
									<div class="item active">
										<div class="item-header">
											<div class="title">
												@themiamimenu
											</div>
											<div class="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
												<a class="btn btn-default btn-type btn-food">Food</a>
											</div>
											<div class="types">
												<a class="btn btn-default btn-type btn-millenials">Millennials</a>
												<a class="btn btn-default btn-type btn-topchef">TopChef</a>
											</div>
										</div>
										<div class="item-image">
											<img src={require("../res/img/item1.png")}/>
										</div>
										<div class="item-footer">
											<div class="reach">
												<i class="fa fa-user"></i>
												<span> 60k+</span> 
											</div>
											<div class="rating">
												<i class="fa fa-star"></i>
												<span> 5.0(17)</span> 
											</div>
											<div class="price">
												<span class="small"> Starting at </span>
												<span class="value"> $100 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="item active">
										<div class="item-header">
											<div class="title">
												@themiamimenu
											</div>
											<div class="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/twitter.png")} />
												<a class="btn btn-default btn-type btn-websites">Website</a>
											</div>
											<div class="types">
												<a class="btn btn-default btn-type btn-marketing">Marketing</a>
											</div>
										</div>
										<div class="item-image">
											<img src={require("../res/img/peoples.png")} />
										</div>
										<div class="item-footer">
											<div class="reach">
												<i class="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div class="rating">
												<i class="fa fa-star"></i>
												<span> 5.0(25)</span> 
											</div>
											<div class="price">
												<span class="small"> Starting at </span>
												<span class="value"> $200 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="item active">
										<div class="item-header">
											<div class="title">
												@Go Pros
											</div>
											<div class="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/www.png")} />
												<a class="btn btn-default btn-type btn-sports">Sports</a>
											</div>
											<div class="types">
												<a class="btn btn-default btn-type btn-mlami">Mlami</a>
											</div>
										</div>
										<div class="item-image">
											<img src={require("../res/img/athlete.png")} />
										</div>
										<div class="item-footer">
											<div class="reach">
												<i class="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div class="rating">
												<i class="fa fa-star"></i>
												<span> 5.0(80)</span> 
											</div>
											<div class="price">
												<span class="small"> Starting at </span>
												<span class="value"> $50 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12>">
								<div class="col-md-4">
									<div class="item active">
										<div class="item-header">
											<div class="title">
												@themiamimenu
											</div>
											<div class="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/twitter.png")} />
												<a class="btn btn-default btn-type btn-food">Food</a>
											</div>
											<div class="types">
												<a class="btn btn-default btn-type btn-millenials">Millennials</a>
												<a class="btn btn-default btn-type btn-topchef">TopChef</a>
											</div>
										</div>
										<div class="item-image">
											<img src={require("../res/img/female.png")} />
										</div>
										<div class="item-footer">
											<div class="reach">
												<i class="fa fa-user"></i>
												<span> 60k+</span> 
											</div>
											<div class="rating">
												<i class="fa fa-star"></i>
												<span> 5.0(17)</span> 
											</div>
											<div class="price">
												<span class="small"> Starting at </span>
												<span class="value"> $100 </span>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="item active">
										<div class="item-header">
											<div class="title">
												@themiamimenu
											</div>
											<div class="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/twitter.png")} />
												<a class="btn btn-default btn-type btn-websites">Website</a>
											</div>
											<div class="types">
												<a class="btn btn-default btn-type btn-marketing">Marketing</a>
											</div>
										</div>
										<div class="item-image">
											<img src={require("../res/img/b3.png")} />
										</div>
										<div class="item-footer">
											<div class="reach">
												<i class="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div class="rating">
												<i class="fa fa-star"></i>
												<span> 5.0(25)</span> 
											</div>
											<div class="price">
												<span class="small"> Starting at </span>
												<span class="value"> $200 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="item active">
										<div class="item-header">
											<div class="title">
												@Go Pros
											</div>
											<div class="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/www.png")} />
												<a class="btn btn-default btn-type btn-sports">Sports</a>
											</div>
											<div class="types">
												<a class="btn btn-default btn-type btn-mlami">Mlami</a>
											</div>
										</div>
										<div class="item-image">
											<img src={require("../res/img/spoon.png")} />
										</div>
										<div class="item-footer">
											<div class="reach">
												<i class="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div class="rating">
												<i class="fa fa-star"></i>
												<span> 5.0(80)</span> 
											</div>
											<div class="price">
												<span class="small"> Starting at </span>
												<span class="value"> $50 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-12>">
								<div class="col-md-4">
									<div class="item active">
										<div class="item-header">
											<div class="title">
												@themiamimenu
											</div>
											<div class="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/twitter.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/www.png")} />
												<a class="btn btn-default btn-type btn-food">Food</a>
											</div>
											<div class="types">
												<a class="btn btn-default btn-type btn-millenials">Millennials</a>
												<a class="btn btn-default btn-type btn-topchef">TopChef</a>
											</div>
										</div>
										<div class="item-image">
											<img src={require("../res/img/basketball.png")} />
										</div>
										<div class="item-footer">
											<div class="reach">
												<i class="fa fa-user"></i>
												<span> 60k+</span> 
											</div>
											<div class="rating">
												<i class="fa fa-star"></i>
												<span> 5.0(17)</span> 
											</div>
											<div class="price">
												<span class="small"> Starting at </span>
												<span class="value"> $100 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="item active">
										<div class="item-header">
											<div class="title">
												@themiamimenu
											</div>
											<div class="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/twitter.png")} />
												<a class="btn btn-default btn-type btn-websites">Website</a>
											</div>
											<div class="types">
												<a class="btn btn-default btn-type btn-marketing">Marketing</a>
											</div>
										</div>
										<div class="item-image">
											<img src={require("../res/img/bread.png")} />
										</div>
										<div class="item-footer">
											<div class="reach">
												<i class="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div class="rating">
												<i class="fa fa-star"></i>
												<span> 5.0(25)</span> 
											</div>
											<div class="price">
												<span class="small"> Starting at </span>
												<span class="value"> $200 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-4">
									<div class="item active">
										<div class="item-header">
											<div class="title">
												@Go Pros
											</div>
											<div class="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/www.png")} />
												<a class="btn btn-default btn-type btn-sports">Sports</a>
											</div>
											<div class="types">
												<a class="btn btn-default btn-type btn-mlami">Mlami</a>
											</div>
										</div>
										<div class="item-image">
											<img src={require("../res/img/item1.png")} />
										</div>
										<div class="item-footer">
											<div class="reach">
												<i class="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div class="rating">
												<i class="fa fa-star"></i>
												<span> 5.0(80)</span> 
											</div>
											<div class="price">
												<span class="small"> Starting at </span>
												<span class="value"> $50 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
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
)(BuyerSaved);
