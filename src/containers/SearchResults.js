import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment, decrement } from "../store/reducers/stepCounter";

import "../res/bootstrap-select/css/bootstrap-select.min.css"
import "../res/css/global.css"
import "../res/css/Dananza_Search.css"
import "../res/icheck/skins/ltblue.css"
import "../res/css/nouislider.css"

class SearchResults extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "Search Results"
  }

  render(){
    return (
    	<div className="search_page full_container">
			<div className="page-navbar">
				<div className="page-navbar-content">
					<div className="btn-group" data-toggle="buttons">
						<label className="btn btn-default">
							<input type="checkbox" className="toggle"/>
							Facebook
						</label>
						<label className="btn btn-default">
							<input type="checkbox" className="toggle"/>
							Instagram
						</label>
						<label className="btn btn-default">
							<input type="checkbox" className="toggle"/>
							Twitter
						</label>
						<label className="btn btn-default">
							<input type="checkbox" className="toggle"/>
							LinkedIn
						</label>
						<label className="btn btn-default">
							<input type="checkbox" className="toggle"/>
							YouTube
						</label>
						<label className="btn btn-default">
							<input type="checkbox" className="toggle"/>
							Blog
						</label>
						<label className="btn btn-default">
							<input type="checkbox" className="toggle"/>
							Podcasts
						</label>
					</div>
				</div>
			</div>
			<div className="page-container">
				<div className="page-bar bg-white">
					<div className="sort-by">
						<span className="grey">Sort by:</span>
						<select value="Relevance" className="bs-select" data-width="120px">
							<option>Relevance</option>
							<option>Relevance1</option>
							<option>Relevance2</option>
							<option>Relevance3</option>
							<option>Relevance4</option>
						</select>
					</div>
				</div>
				<div className="page-content">
					<div className="page-sidebar">
						<div className="section">
							<span className="title"> Medium Type </span>
							<div className="content">
								<ul className="sub-menu">
									<li className="active">
										<div className="nav-link nav-toggle">
											<label>
			                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
			                                </label>
											<a>Social Media</a>
										</div>
										<ul className="sub-menu">
											<li>
												<div className="nav-link">
													<label>
					                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
					                                </label>
													<a>Facebook</a>
												</div>
											</li>
											<li>
												<div className="nav-link">
													<label>
					                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
					                                </label>
													<a>Instagram</a>
												</div>
											</li>
											<li>
												<div className="nav-link">
													<label>
					                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
					                                </label>
													<a>Twitter</a>
												</div>
											</li>
											<li>
												<div className="nav-link">
													<label>
					                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
					                                </label>
													<a>Linkedin</a>
												</div>
											</li>
											<li>
												<div className="nav-link">
													<label>
					                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
					                                </label>
													<a>YouTube</a>
												</div>
											</li>
											<li>
												<div className="nav-link">
													<label>
					                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
					                                </label>
													<a>Pinterest</a>
												</div>
											</li>
										</ul>
									</li>
									<li>
										<div className="nav-link">
											<label>
			                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
			                                </label>
											<a>Websites</a>
										</div>
									</li>
									<li>
										<div className="nav-link">
											<label>
			                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
			                                </label>
											<a>Podcasts</a>
										</div>
									</li>
									<li>
										<div className="nav-link">
											<label>
			                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
			                                </label>
											<a>Print</a>
										</div>
									</li>
									<li>
										<div className="nav-link">
											<label>
			                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
			                                </label>
											<a>Sponsorships</a>
										</div>
									</li>
									<li>
										<div className="nav-link">
											<label>
			                                    <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
			                                </label>
											<a>Billboards</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div className="split"></div>
						<div className="section">
							<span className="title">Audience Features</span>
							<div className="content">
								<div className="features">
									<div className="sub-title"> Interests </div>
									<input className="danaza-input-full" type="text" name="interests" placeholder="Type Audience Interests"/>
									<div className="results">
										<div className="item">
											<span>Food</span>
											<a className="fa fa-remove"></a>
										</div>
										<div className="item">
											<span>Events</span>
											<a className="fa fa-remove"></a>
										</div>
										<div className="item">
											<span>Restaurants</span>
											<a className="fa fa-remove"></a>
										</div>
									</div>
								</div>
								<div className="features">
									<div className="sub-title"> Location </div>
									<input className="danaza-input-full" type="text" name="location" placeholder="Enter City, State, or Zip Code|"/>
									<div className="results">
										<div className="item">
											<span>San Diego</span>
											<a className="fa fa-remove"></a>
										</div>
										<div className="item">
											<span>Palm Springs</span>
											<a className="fa fa-remove"></a>
										</div>
										<div className="item">
											<span>Malibu</span>
											<a className="fa fa-remove"></a>
										</div>
										<div className="item">
											<span>Los Angeles</span>
											<a className="fa fa-remove"></a>
										</div>
										<div className="item">
											<span>Pacedena</span>
											<a className="fa fa-remove"></a>
										</div>
									</div>
								</div>
								<div className="features">
									<div className="sub-title"> Reach </div>
									<div className="feature-slider">
		                                <div id="reach" className="noUi-ltblue"></div>
		                                <label className="dark-grey" id="reach_result"></label>
		                            </div>
								</div>
								<div className="features">
									<div className="sub-title"> Gender </div>
									<div className="feature-slider">
		                                <div id="gender" className="noUi-gradient"></div>
		                                <div className="dark-grey" id="reach_result">
		                                	<label>Male</label>
		                                	<label className="right">Female</label>
		                                </div>
		                            </div>
								</div>
								<div className="features">
									<div className="sub-title"> Age Range </div>
									<div className="feature-slider">
		                                <div id="age" className="noUi-ltblue"></div>
		                                <label className="dark-grey" id="age_result"></label>
		                            </div>
								</div>
							</div>
						</div>
						<div className="split"></div>
						<div className="section">
							<span className="title">Price Range</span>
							<div className="content price-range">
								<div className="price-form">
									<div>$</div>
									<input className="danaza-input-small" type="text" name="pricefrom"/>
								</div>
								<label>to</label>
								<div className="price-form">
									<div>$</div>
									<input className="danaza-input-small" type="text" name="priceto"/>
								</div>
								<a className="btn">></a>
							</div>
						</div>
						<div className="split"></div>
						<div className="section">
							<span className="title">Ad Launch Date</span>
							<div className="content datetime">
								<input className="btn btn-default" placeholder="Select Date/s" readOnly/>
								<img src={require("../res/img/datetime.png")} />
								<div className="bs-caret">
									<i className="caret"></i>
								</div>
							</div>
						</div>
						<div className="split"></div>
						<div className="section">
							<span className="title">Average Rating</span>
							<div className="content average-rating">
								<label>
		                            <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
		                            <i className="fa fa-star"></i>
		                            <span>5.0</span>
		                        </label>
		                        <label>
		                            <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
		                            <i className="fa fa-star"></i>
		                            <span>4.0</span>
		                        </label>
		                        <label>
		                            <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
		                            <i className="fa fa-star"></i>
		                            <span>3.0</span>
		                        </label>
		                        <label>
		                            <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
		                            <i className="fa fa-star"></i>
		                            <span>2.0</span>
		                        </label>
		                        <label>
		                            <input type="checkbox" className="icheck" data-checkbox="icheckbox_square-ltblue"/>
		                            <i className="fa fa-star"></i>
		                            <span>1.0</span>
		                        </label>

							</div>
						</div>
					</div>
					<div className="page-result">
						<div className="page-result-header">
							<li> <i className="fa fa-circle"></i> Sponsored </li>
							<div style={{'display': 'inline-flex', float:'right'}}> 1-20 of 10718 results for <b>"social media"</b></div>
						</div>
						<div className="page-result-content row">
							<div className="col-sm-6 col-md-3">
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
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
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
											<a>+</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
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
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
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
											<a>+</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
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
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
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
											<a>+</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
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
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
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
											<a>+</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
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
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
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
											<a>+</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
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
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
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
											<a>+</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
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
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
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
											<a>+</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
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
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
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
											<a>+</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-md-3">
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
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
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
											<a>+</a>
										</div>
									</div>
								</div>
							</div>

							<div className="col-sm-12 pagination">
								<a className="btn btn-default" id="prev"> {'<'} </a>
								<div className="btn-group" data-toggle="buttons" id="pages">
		                            <label className="btn btn-default active">
		                                <input type="radio" className="toggle"/> 1 </label>
		                            <label className="btn btn-default">
		                                <input type="radio" className="toggle"/> 2 </label>
		                            <label className="btn btn-default">
		                                <input type="radio" className="toggle"/> 3 </label>
		                            <label className="btn btn-default ">
		                                <input type="radio" className="toggle"/> 4 </label>
		                            <label className="btn btn-default">
		                                <input type="radio" className="toggle"/> 5 </label>
		                            <label className="btn btn-default">
		                                <input type="radio" className="toggle"/> 6 </label>
		                            <label className="btn btn-default ">
		                                <input type="radio" className="toggle"/> 7 </label>
		                            <label className="btn btn-default">
		                                <input type="radio" className="toggle"/> 8 </label>
		                            <label className="btn btn-default">
		                                <input type="radio" className="toggle"/> 9 </label>
		                            <label className="btn btn-default ">
		                                <input type="radio" className="toggle"/> 10 </label>
		                        </div>
		                        <a className="btn btn-default" id="next"> {'>'} </a>
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
)(SearchResults);
