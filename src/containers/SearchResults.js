import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';

import { increment, decrement } from "../store/reducers/stepCounter";

import 'icheck/skins/all.css';
import {Checkbox, Radio} from 'react-icheck';

import Nouislider from 'react-nouislider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import ReactTags from "react-tag-autocomplete";


import "../res/bootstrap-select/css/bootstrap-select.min.css"
import "../res/css/global.css"
import "../res/css/Dananza_Search.css"
import "../res/icheck/skins/ltblue.css"
import "../res/css/nouislider.css"

const styles = theme => ({
  
});

class SearchResults extends React.Component{

  state={
  		'headerType': "seller",
  		'relevance': 'relevance',
  		'reach_start': 0,
  		'reach_end': 100,
  		'gender_percent' : 0,
  		'age_start': 0,
  		'age_end': 60,
  		'searchText':'Social Media',
  		'startDate': '',
		tags: [
	        { name: "Apples" },
	        { name: "Pears" }
		],
		suggestions: [
			{ name: "Bananas" },
			{ name: "Mangos" },
			{ name: "Lemons" },
			{ name: "Lemonfffffas" },
			{ name: "Lemonfefes" },
			{ name: "Apricots"}
		],
		'locations' : []
  }

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )

    this.setState({
      startDate: new Date()
    });
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
  }

  onChangeRelevance = event => {
	this.setState({ [event.target.name]: event.target.value });
  };
  
  onReachSlide = (render, handle, value, un, percent) => {
    this.setState({
      'reach_start':value[0].toFixed(0), 
      'reach_end':value[1].toFixed(0)
    });
  };
  onAgeSlide = (render, handle, value, un, percent) => {
    this.setState({
      'age_start':value[0].toFixed(0), 
      'age_end':value[1].toFixed(0)
    });
  };
  onGenderSlide = (render, handle, value, un, percent) => {
    this.setState({
      'gender_percent':value[0].toFixed(0), 
    });
  };

  onChangeStartDate(date) {
    this.setState({
      startDate: date
    });
  };



  handleKeywordDelete (i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }
 
  handleKeywordAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    if( tags.length > 5 )
    	return;
    
    if( !this.state.tags.some(item => tag.name === item.name ))
    	this.setState({ tags: [...this.state.tags, tag]})
  }

  handleLocationDelete (i) {
    const locations = this.state.locations.slice(0)
    locations.splice(i, 1)
    this.setState({ locations })
  }
 
  handleLocationAddition (location) {
    const locations = [].concat(this.state.locations, location)
    if( locations.length > 5 )
    	return;
    
    if( !this.state.locations.some(item => location.name === item.name ))
    	this.setState({ locations: [...this.state.locations, location]})
  }



  componentDidMount(){
    document.title = "Search Results"
  };

  render(){
  	const { reach_start, reach_end } = this.state;
  	const { age_start, age_end } = this.state;
  	const { gender_percent } = this.state;

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
						<FormControl>
						  <Select
						    value={this.state.relevance}
						    onChange={this.onChangeRelevance}
						    inputProps={{
						      name: 'relevance',
						      id: 'relevance-simple',
						    }}
						  >
						    <MenuItem value={'relevance'}>Relevance</MenuItem>
						    <MenuItem value={'relevance1'}>Relevance1</MenuItem>
						    <MenuItem value={'relevance2'}>Relevance2</MenuItem>
						    <MenuItem value={'relevance3'}>Relevance3</MenuItem>
						    <MenuItem value={'relevance4'}>Relevance4</MenuItem>
						  </Select>
						</FormControl>
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
											<Checkbox
											  checkboxClass="icheckbox_square-ltblue"
											  increaseArea="20%"
											  label="Social Media"
											  className="icheck"
											/>
										</div>
										<ul className="sub-menu">
											<li>
												<div className="nav-link">
													<Checkbox
													  checkboxClass="icheckbox_square-ltblue"
													  increaseArea="40%"
													  label="Facebook"
													  className="icheck"
													/>
												</div>
											</li>
											<li>
												<div className="nav-link">
													<Checkbox
													  checkboxClass="icheckbox_square-ltblue"
													  increaseArea="40%"
													  label="Instagram"
													  className="icheck"
													/>
												</div>
											</li>
											<li>
												<div className="nav-link">
													<Checkbox
													  checkboxClass="icheckbox_square-ltblue"
													  increaseArea="40%"
													  label="Twitter"
													  className="icheck"
													/>
												</div>
											</li>
											<li>
												<div className="nav-link">
													<Checkbox
													  checkboxClass="icheckbox_square-ltblue"
													  increaseArea="40%"
													  label="Linkedin"
													  className="icheck"
													/>
												</div>
											</li>
											<li>
												<div className="nav-link">
													<Checkbox
													  checkboxClass="icheckbox_square-ltblue"
													  increaseArea="40%"
													  label="YouTube"
													  className="icheck"
													/>
												</div>
											</li>
											<li>
												<div className="nav-link">
													<Checkbox
													  checkboxClass="icheckbox_square-ltblue"
													  increaseArea="40%"
													  label="Pinterest"
													  className="icheck"
													/>
												</div>
											</li>
										</ul>
									</li>
									<li>
										<div className="nav-link">
											<Checkbox
											  checkboxClass="icheckbox_square-ltblue"
											  increaseArea="40%"
											  label="Blogs"
											  className="icheck"
											/>
										</div>
									</li>
									<li>
										<div className="nav-link">
											<Checkbox
											  checkboxClass="icheckbox_square-ltblue"
											  increaseArea="40%"
											  label="Podcasts"
											  className="icheck"
											/>
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
									<ReactTags
										classNames="dananza-audience"
										placeholder="Type Audience Interests"
										inputAttributes={{ maxLength: 15 }}
										allowNew={true}
									    tags={this.state.tags}
									    suggestions={this.state.suggestions}
									    handleDelete={this.handleKeywordDelete.bind(this)}
									    handleAddition={this.handleKeywordAddition.bind(this)} />

								</div>
								<div className="features">
									<div className="sub-title"> Location </div>
									<ReactTags
										classNames="dananza-audience"
										placeholder="Enter City, State, or Zip Code"
										inputAttributes={{ maxLength: 15 }}
										allowNew={true}
									    tags={this.state.locations}
									    handleDelete={this.handleLocationDelete.bind(this)}
									    handleAddition={this.handleLocationAddition.bind(this)} />

								</div>
								<div className="features">
									<div className="sub-title"> Minimum Reach </div>
									<div className="feature-slider noUi-ltblue" id="reach">

									<Nouislider
									    range={{min: 0, max: 100}}
									    start={[ reach_start, reach_end]}
									    connect
									    onSlide={this.onReachSlide}
									  />
		                                <label className="dark-grey">{ reach_start } - { reach_end }k</label>
		                            </div>
								</div>
								<div className="features">
									<div className="sub-title"> Gender </div>
									<div className="feature-slider noUi-ltblue" id="gender">
		                                <Nouislider											
										    range={{min: 0, max: 100}}
										    start={[gender_percent]}
										    connect
										    onSlide={this.onGenderSlide}
										  />
		                                <div className="dark-grey">
		                                	<label>Male</label>
		                                	<label className="right">Female</label>
		                                </div>
		                            </div>
								</div>
								<div className="features">
									<div className="sub-title"> Age Range </div>
									<div className="feature-slider noUi-ltblue" id="age">
										<Nouislider
										    range={{min: 0, max: 60}}
										    start={[age_start, age_end]}
										    connect
										    onSlide={this.onAgeSlide}
										  />
		                                <label className="dark-grey"> { age_start } - { age_end }</label>
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
									<input className="danaza-input-small" type="number" name="pricefrom"/>
								</div>
								<label>to</label>
								<div className="price-form">
									<div>$</div>
									<input className="danaza-input-small" type="number" name="priceto"/>
								</div>
								<button className="btn">></button>
							</div>
						</div>
						<div className="split"></div>
						<div className="section">
							<span className="title">Ad Launch Date</span>
							<div className="content datetime">
								<DatePicker
									className="btn btn-default"
							        selected={this.state.startDate}
							        onChange={this.onChangeStartDate}
							        placeholderText="Select Date/s"
							        dateFormat="YYYY-MM-dd"
							      />
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
									<Checkbox
									  checkboxClass="icheckbox_square-ltblue"
									  increaseArea="10%"
									  className="icheck"
									/>
		                            <i className="fa fa-star"></i>
		                            <span>5.0</span>
		                        </label>
		                        <label>
									<Checkbox
									  checkboxClass="icheckbox_square-ltblue"
									  increaseArea="10%"
									  className="icheck"
									/>
		                            <i className="fa fa-star"></i>
		                            <span>4.0</span>
		                        </label>
		                        <label>
									<Checkbox
									  checkboxClass="icheckbox_square-ltblue"
									  increaseArea="10%"
									  className="icheck"
									/>
		                            <i className="fa fa-star"></i>
		                            <span>3.0</span>
		                        </label>
		                        <label>
									<Checkbox
									  checkboxClass="icheckbox_square-ltblue"
									  increaseArea="10%"
									  className="icheck"
									/>
		                            <i className="fa fa-star"></i>
		                            <span>2.0</span>
		                        </label>
		                        <label>
									<Checkbox
									  checkboxClass="icheckbox_square-ltblue"
									  increaseArea="10%"
									  className="icheck"
									/>
		                            <i className="fa fa-star"></i>
		                            <span>1.0</span>
		                        </label>

							</div>
						</div>
					</div>
					<div className="page-result">
						<div className="page-result-header">
							<li> <i className="fa fa-circle"></i> Sponsored </li>
							<div style={{'display': 'inline-flex', float:'right'}}> 1-20 of 10718 results for <span className="search_keyword color-dark"> "{this.state.searchText}" </span></div>
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
										<div className="keywords">
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
											<img src={require("../res/img/twitter.png")} />
											<img src={require("../res/img/youtube.png")} />
										</div>
										<div className="keywords">
											<a className="btn btn-default btn-type btn-restaurant">Restaurant</a>
											<a className="btn btn-default btn-type btn-topchef">TopChef</a>
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
											<div className="hide-end"></div>
										</div>
									</div>
									<div className="item-image">
										<img src={require("../res/img/item2.png")}/>
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
											<img src={require("../res/img/twitter.png")} />
											<img src={require("../res/img/youtube.png")} />
										</div>
										<div className="keywords">
											<a className="btn btn-default btn-type btn-food">Food</a>
											<a className="btn btn-default btn-type btn-miami">Miami</a>
											<a className="btn btn-default btn-type btn-website">Website</a>
											<div className="hide-end"></div>
										</div>
									</div>
									<div className="item-image">
										<img src={require("../res/img/item4.png")}/>
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
											<img src={require("../res/img/www.png")} />
										</div>
										<div className="keywords">
											<a className="btn btn-default btn-type btn-technology">Technology</a>
											<a className="btn btn-default btn-type btn-sports">Sports</a>
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
											<div className="hide-end"></div>
										</div>
									</div>
									<div className="item-image">
										<img src={require("../res/img/item3.png")}/>
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
										<div className="keywords">
											<a className="btn btn-default btn-type btn-food">Food</a>
											<a className="btn btn-default btn-type btn-topchef">TopChef</a>
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
											<div className="hide-end"></div>
										</div>
									</div>
									<div className="item-image">
										<img src={require("../res/img/item3.png")}/>
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
								<div className="item">
									<div className="item-header">
										<div className="title">
											@themiamimenu
										</div>
										<div className="sites">
											<img src={require("../res/img/instagram.png")} />
											<img src={require("../res/img/facebook.png")} />
											<img src={require("../res/img/youtube.png")} />
										</div>
										<div className="keywords">
											<a className="btn btn-default btn-type btn-food">Food</a>
											<a className="btn btn-default btn-type btn-topchef">TopChef</a>
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
											<div className="hide-end"></div>
										</div>
									</div>
									<div className="item-image">
										<img src={require("../res/img/item5.png")}/>
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
								<div className="item">
									<div className="item-header">
										<div className="title">
											@themiamimenu
										</div>
										<div className="sites">
											<img src={require("../res/img/instagram.png")} />
											<img src={require("../res/img/facebook.png")} />
											<img src={require("../res/img/youtube.png")} />
										</div>
										<div className="keywords">
											<a className="btn btn-default btn-type btn-food">Food</a>
											<a className="btn btn-default btn-type btn-topchef">TopChef</a>
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
											<div className="hide-end"></div>
										</div>
									</div>
									<div className="item-image">
										<img src={require("../res/img/item2.png")}/>
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
								<div className="item">
									<div className="item-header">
										<div className="title">
											@themiamimenu
										</div>
										<div className="sites">
											<img src={require("../res/img/instagram.png")} />
											<img src={require("../res/img/facebook.png")} />
											<img src={require("../res/img/youtube.png")} />
										</div>
										<div className="keywords">
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
								<div className="item">
									<div className="item-header">
										<div className="title">
											@themiamimenu
										</div>
										<div className="sites">
											<img src={require("../res/img/instagram.png")} />
											<img src={require("../res/img/facebook.png")} />
											<img src={require("../res/img/youtube.png")} />
										</div>
										<div className="keywords">
											<a className="btn btn-default btn-type btn-food">Food</a>
											<a className="btn btn-default btn-type btn-topchef">TopChef</a>
											<a className="btn btn-default btn-type btn-millenials">Millenialsddddd</a>
											<div className="hide-end"></div>
										</div>
									</div>
									<div className="item-image">
										<img src={require("../res/img/item4.png")}/>
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
)(withStyles(styles)(SearchResults));
