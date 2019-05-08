import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import BuyerSidebar from "../components/Sidebar/BuyerSidebar";

import "../res/css/BuyerSaved.css"

class BuyerSaved extends React.Component{

  state={
	'headerType': "buyer", 
	'searchText': ''}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Buyer Saved"
  }
  handleSearchField( event ){
  	console.log( this.state.searchText )
  	this.props.history.push("/results?s="+this.state.searchText);
  }
  render(){
    return (
    	<div className="buyer_saved">
			<div className="page-container">
				<div className="page-content">
					<BuyerSidebar navitem={"saved"}/>
					<div className="page-main">
						<div className="page-main-header">
							<span className="headline-first">
								Saved Adzas
							</span>
							<span className="headline-second pull-right">
								<i className="fa fa-search input"></i>
		                    	<input type="text" className="form-control search-input" placeholder="Search for saved Adza" 
									onChange={event => {this.setState({searchText: event.target.value})}}
								    onKeyPress={event => {
						                if (event.key === 'Enter') {
						                  this.handleSearchField()
						                }
						            }}
		                    	/>
							</span>
						</div>
						<hr className="divider-line" />
						<div className="adzas row">
							<div className="col-md-12>">
								<div className="col-md-4">
									<div className="item active">
										<div className="item-header">
											<div className="title">
												@themiamimenu
											</div>
											<div className="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
											</div>
											<div className="types">
												<a className="btn btn-default btn-type btn-food">Food</a>
												<a className="btn btn-default btn-type btn-topchef">TopChef</a>
												<a className="btn btn-default btn-type btn-millenials">Millenials</a>
												<div className="hide-end"></div>
											</div>
										</div>
										<div className="item-image">
											<img src={require("../res/img/item1.png")}/>
										</div>
										<div className="item-footer">
											<div className="reach">
												<i className="fa fa-user"></i>
												<span> 60k+</span> 
											</div>
											<div className="rating">
												<i className="fa fa-star"></i>
												<span> 5.0(17)</span> 
											</div>
											<div className="price">
												<span className="small"> Starting at </span>
												<span className="value"> $100 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="item active">
										<div className="item-header">
											<div className="title">
												@themiamimenu
											</div>
											<div className="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/twitter.png")} />
											</div>
											<div className="types">
												<a className="btn btn-default btn-type btn-marketing">Marketing</a>
												<a className="btn btn-default btn-type btn-website">Website</a>
												<a className="btn btn-default btn-type btn-restaurant">Restaurant</a>
												<div className="hide-end"></div>
											</div>
										</div>
										<div className="item-image">
											<img src={require("../res/img/peoples.png")} />
										</div>
										<div className="item-footer">
											<div className="reach">
												<i className="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div className="rating">
												<i className="fa fa-star"></i>
												<span> 5.0(25)</span> 
											</div>
											<div className="price">
												<span className="small"> Starting at </span>
												<span className="value"> $200 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="item active">
										<div className="item-header">
											<div className="title">
												@Go Pros
											</div>
											<div className="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/www.png")} />
											</div>
											<div className="types">
												<a className="btn btn-default btn-type btn-mlami">Mlami</a>
												<a className="btn btn-default btn-type btn-sports">Sports</a>
												<a className="btn btn-default btn-type btn-marketing">Marketing</a>
												<div className="hide-end"></div>
											</div>
										</div>
										<div className="item-image">
											<img src={require("../res/img/athlete.png")} />
										</div>
										<div className="item-footer">
											<div className="reach">
												<i className="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div className="rating">
												<i className="fa fa-star"></i>
												<span> 5.0(80)</span> 
											</div>
											<div className="price">
												<span className="small"> Starting at </span>
												<span className="value"> $50 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12>">
								<div className="col-md-4">
									<div className="item active">
										<div className="item-header">
											<div className="title">
												@themiamimenu
											</div>
											<div className="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/twitter.png")} />
												<img src={require("../res/img/www.png")} />
											</div>
											<div className="types">
												<a className="btn btn-default btn-type btn-food">Mlami</a>
												<a className="btn btn-default btn-type btn-millenials">Millenials</a>
												<a className="btn btn-default btn-type btn-restaurant">Restaurant</a>
												<div className="hide-end"></div>
											</div>
										</div>
										<div className="item-image">
											<img src={require("../res/img/female.png")} />
										</div>
										<div className="item-footer">
											<div className="reach">
												<i className="fa fa-user"></i>
												<span> 60k+</span> 
											</div>
											<div className="rating">
												<i className="fa fa-star"></i>
												<span> 5.0(17)</span> 
											</div>
											<div className="price">
												<span className="small"> Starting at </span>
												<span className="value"> $100 </span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="item active">
										<div className="item-header">
											<div className="title">
												@themiamimenu
											</div>
											<div className="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
											</div>
											<div className="types">
												<a className="btn btn-default btn-type btn-technology">Technology</a>
												<a className="btn btn-default btn-type btn-food">Food</a>
												<a className="btn btn-default btn-type btn-millenials">Millenials</a>
												<div className="hide-end"></div>
											</div>
										</div>
										<div className="item-image">
											<img src={require("../res/img/b3.png")} />
										</div>
										<div className="item-footer">
											<div className="reach">
												<i className="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div className="rating">
												<i className="fa fa-star"></i>
												<span> 5.0(25)</span> 
											</div>
											<div className="price">
												<span className="small"> Starting at </span>
												<span className="value"> $200 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="item active">
										<div className="item-header">
											<div className="title">
												@Go Pros
											</div>
											<div className="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/www.png")} />
											</div>
											<div className="types">
												<a className="btn btn-default btn-type btn-marketing">Marketing</a>
												<a className="btn btn-default btn-type btn-website">Website</a>
												<a className="btn btn-default btn-type btn-millenials">Millenials</a>
												<div className="hide-end"></div>
											</div>
										</div>
										<div className="item-image">
											<img src={require("../res/img/spoon.png")} />
										</div>
										<div className="item-footer">
											<div className="reach">
												<i className="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div className="rating">
												<i className="fa fa-star"></i>
												<span> 5.0(80)</span> 
											</div>
											<div className="price">
												<span className="small"> Starting at </span>
												<span className="value"> $50 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-12>">
								<div className="col-md-4">
									<div className="item active">
										<div className="item-header">
											<div className="title">
												@themiamimenu
											</div>
											<div className="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/twitter.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/www.png")} />
											</div>
											<div className="types">
												<a className="btn btn-default btn-type btn-mlami">Mlami</a>
												<a className="btn btn-default btn-type btn-sports">Sports</a>
												<a className="btn btn-default btn-type btn-millenials">Millenials</a>
												<div className="hide-end"></div>
											</div>
										</div>
										<div className="item-image">
											<img src={require("../res/img/basketball.png")} />
										</div>
										<div className="item-footer">
											<div className="reach">
												<i className="fa fa-user"></i>
												<span> 60k+</span> 
											</div>
											<div className="rating">
												<i className="fa fa-star"></i>
												<span> 5.0(17)</span> 
											</div>
											<div className="price">
												<span className="small"> Starting at </span>
												<span className="value"> $100 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="item active">
										<div className="item-header">
											<div className="title">
												@themiamimenu
											</div>
											<div className="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
												<img src={require("../res/img/twitter.png")} />
											</div>
											<div className="types">
												<a className="btn btn-default btn-type btn-millenials">Millernals</a>
												<a className="btn btn-default btn-type btn-restaurant">Restaurant</a>
												<a className="btn btn-default btn-type btn-food">Food</a>
												<div className="hide-end"></div>
											</div>
										</div>
										<div className="item-image">
											<img src={require("../res/img/bread.png")} />
										</div>
										<div className="item-footer">
											<div className="reach">
												<i className="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div className="rating">
												<i className="fa fa-star"></i>
												<span> 5.0(25)</span> 
											</div>
											<div className="price">
												<span className="small"> Starting at </span>
												<span className="value"> $200 </span>
												<a><img src={require("../res/img/delete.png")} /></a>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-4">
									<div className="item active">
										<div className="item-header">
											<div className="title">
												@Go Pros
											</div>
											<div className="sites">
												<img src={require("../res/img/instagram.png")} />
												<img src={require("../res/img/facebook.png")} />
												<img src={require("../res/img/youtube.png")} />
											</div>
											<div className="types">
												<a className="btn btn-default btn-type btn-food">Food</a>
												<a className="btn btn-default btn-type btn-topchef">Topchef</a>
												<a className="btn btn-default btn-type btn-millenials">Millernals</a>
												<div className="hide-end"></div>
											</div>
										</div>
										<div className="item-image">
											<img src={require("../res/img/item1.png")} />
										</div>
										<div className="item-footer">
											<div className="reach">
												<i className="fa fa-user"></i>
												<span> 100k+</span> 
											</div>
											<div className="rating">
												<i className="fa fa-star"></i>
												<span> 5.0(80)</span> 
											</div>
											<div className="price">
												<span className="small"> Starting at </span>
												<span className="value"> $50 </span>
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
)(BuyerSaved);
