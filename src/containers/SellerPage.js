import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../store/reducers/stepCounter";
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "../res/css/infoflowPage.css"
import "../res/css/sellers.css"
import $ from "jquery";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Sellers extends React.Component{
  state={"startDate":[],"headerType":"seller"};

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType );
    this.onChangeStartDate = this.onChangeStartDate.bind(this);
  }

  componentDidMount(){
    document.title = "Sellers"
  }
  onChangeStartDate(date,event,i) {
    var temp = this.state.startDate.slice(0);
    console.log(event);
    temp[i] = date;
    this.setState({
      startDate: [...temp]
    });
  };

  render(){
    return (
    <div className="dashboard_seller">
      <div className="sellers container">
        <div className="row">
          <div className="sidebar col-md-3">
            <div className="section target_tree">
              <div className="image">
                <img src={require("../res/img/profile_photo.png")} />
                <div className="tree">Target Tree</div>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <span className="reviews_star"> 5.0 (17 Reviews)</span>
                  <div className="official">
                    Official Account of Target Tree Miami
                  </div>
                  <div className="msg">
                    <Link to="/seller_messages" className="message_link">Message</Link>
                  </div>
                <div className="divider"></div>
              </div>
            </div>
            <div className="from_avg">
              <div className="from">
                <img class="channel_img" src={require("../res/img/map_maker.png")} />From
                <span className="value">Miami</span>
              </div>
              <div className="avg">
                <img class="channel_img" src={require("../res/img/clock.png")} />Avg. Response Time
                <span className="value">8 hrs</span>
              </div>
            </div>
            <div className="channels">
              <img class="channel_img" src={require("../res/img/play.png")} />Channels
              <span className="social_icons">
                <img src={require("../res/img/instagram.png")} />
                <img src={require("../res/img/facebook.png")} />
                <img src={require("../res/img/youtube.png")} />
              </span>
            </div>
            <div className="audience">
              <h4><i className="fa fa-user"></i> Audience Attributes</h4>
              <div className="info row">
                <div className="felid col-md-4">
                  Age
                </div>
                <div className="value col-md-6">
                  30-45 yrs old
                </div>
              </div>
              <div className="info row">
                <div className="felid col-md-4">
                  Gender
                </div>
                <div className="value col-md-6">
                  Men 40%<br/> 
                  Female 60%
                </div>
              </div>
              <div className="info row">
                <div className="felid col-md-4">
                  Location
                </div>
                <div className="value col-md-6">
                  Miami<br/> 
                  Los Angeles<br/>
                  San Francisco
                </div>
              </div>
              <div className="info row">
                <div className="felid col-md-4">
                  Interests
                </div>
                <div className="value col-md-6">
                  Local Events,Local Dining, Gyms, Sports, Local News, Local Activities, Trendy Restaurants, Trendy Bars, Local Guides, Local Business, Professional Sports, Craft Breweries, Miami
                </div>
              </div>
            </div>
          </div>
          <div className="sellers_content col-md-9">
            <div className="row slider">
              {/*<img src={require("../res/img/sellers_slider1.png")} />*/}
              <Carousel showThumbs={false}>
                        <div>
                            <img src={require("../res/img/sellers_slider1.png")} />
                        </div>
                        <div>
                            <img src={require("../res/img/sellers_slider1.png")} />
                        </div>
                        <div>
                            <img src={require("../res/img/sellers_slider1.png")} />
                        </div>
                    </Carousel>
            </div>
            <div className="row listings">
              <div className="portlet-title">
                          <div className="caption">
                              Listings 
                          </div>
                          <div className="tools">
                              <a href="javascript:;" className="collapse" data-original-title="" title=""> </a>
                              <a href="#portlet-config" data-toggle="modal" className="config" data-original-title="" title=""> </a>
                              <a href="javascript:;" className="reload" data-original-title="" title=""> </a>
                              <a href="javascript:;" className="remove" data-original-title="" title=""> </a>
                          </div>
                      </div>
                      <div className="portlet-body">
                          <div className="panel-group accordion" id="accordion3">
                              <div className="panel panel-default">
                                  <div className="panel-heading">
                                      <h4 className="panel-title">
                                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_1" aria-expanded="false">
                                            <img src={require("../res/img/tab_title_insta.png")} />
                                            Instagram<span>@targettree
                                            <i className="fa fa-angle-up">
                                            </i></span>
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapse_3_1" className="panel-collapse collapse" aria-expanded="false">
                                      <div className="panel-body">
                                        <div className="body_header">
                                          <div className="header_posts">
                                            <div className="col-sm-3">
                                              <i className="fa fa-user"></i>Followers
                                            </div>
                                            <div className="col-sm-3">  
                                              <i className="fa fa-user"></i>Engagement Rate
                                            </div>
                                            <div className="col-sm-3">
                                              <i className="fa fa-commenting"></i>Avg Comments
                                            </div>
                                            <div className="col-sm-3">
                                              <i className="fa fa-clone"></i>Posts per Week
                                            </div>
                                          </div>
                                          <div className="header_posts_value">
                                            <div className="col-sm-3">
                                              11k
                                            </div>
                                            <div className="col-sm-3">
                                              2.95%
                                            </div>
                                            <div className="col-sm-3">
                                              30
                                            </div>
                                            <div className="col-sm-3">
                                              2.95%
                                            </div>
                                          </div>
                                        </div>
                                          <div className="body_content">
                                             <div className="item">
                                               <div className="story row">
                                                 <div className="col-sm-4 ins_story">
                                                 <img src={require("../res/img/themainmenu_1.png")} />
                                                 Instagram Story
                                                 </div>
                                                 <div className="col-sm-4 datetime">
                                                    <DatePicker
                                                      className="btn btn-default"
                                                      selected={this.state.startDate[0]}
                                                      onChange={(date,event)=>{this.onChangeStartDate(date,event,0)}}
                                                      placeholderText="Choose Post Date"
                                                      dateFormat="YYYY-MM-dd"
                                                    />
                                                    <i className="fa fa-calendar"></i> 
                                                 </div>
                                                 <div className="col-sm-4">
                                                   <a href="#">$100 <i className="fa fa-cart-plus"></i></a>
                                                 </div>
                                               </div>
                                             </div>
                                             <div className="item post row">
                                               <div className="col-sm-4">
                                                 <img src={require("../res/img/themainmenu_1.png")} /> Instagram Post
                                               </div>
                                               <div className="col-sm-4 datetime">
                                                    <DatePicker
                                                      className="btn btn-default"
                                                      selected={this.state.startDate[1]}
                                                      onChange={(date,event)=>{this.onChangeStartDate(date,event,1)}}
                                                      placeholderText="Choose Post Date"
                                                      dateFormat="YYYY-MM-dd"
                                                    />
                                                    <i className="fa fa-calendar"></i> 
                                                 </div>
                                               <div className="col-sm-4">
                                                 <a href="#">$100 <i className="fa fa-cart-plus"></i></a>
                                               </div>
                                             </div>
                                             <div className="item video row">
                                               <div className="col-sm-4">
                                                 <img src={require("../res/img/themainmenu_1.png")} />Instagram Video
                                               </div>
                                               <div className="col-sm-4 datetime">
                                                    <DatePicker
                                                      className="btn btn-default"
                                                      selected={this.state.startDate[2]}
                                                      onChange={(date,event)=>{this.onChangeStartDate(date,event,2)}}
                                                      placeholderText="Choose Post Date"
                                                      dateFormat="YYYY-MM-dd"
                                                    />
                                                    <i className="fa fa-calendar"></i> 
                                                 </div>
                                               <div className="col-sm-4">
                                                 <a href="#">$100 <i className="fa fa-cart-plus"></i></a>
                                               </div>
                                             </div>
                                           </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading">
                                      <h4 className="panel-title">
                                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_2" aria-expanded="false">
                                            <img src={require("../res/img/tab_title_facebook.png")} />Facebook<span>@targettree<i className="fa fa-angle-up"></i></span>
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapse_3_2" className="panel-collapse collapse" aria-expanded="false">
                                      <div className="panel-body">
                                        <div className="body_header">
                                          <div className="header_posts">
                                            <div className="col-sm-3">
                                              <i className="fa fa-user"></i>Followers
                                            </div>
                                            <div className="col-sm-3">  
                                              <i className="fa fa-user"></i>Engagement Rate
                                            </div>
                                            <div className="col-sm-3">
                                              <i className="fa fa-commenting"></i>Avg Comments
                                            </div>
                                            <div className="col-sm-3">
                                              <i className="fa fa-clone"></i>Posts per Week
                                            </div>
                                          </div>
                                          <div className="header_posts_value">
                                            <div className="col-sm-3">
                                              11k
                                            </div>
                                            <div className="col-sm-3">
                                              2.95%
                                            </div>
                                            <div className="col-sm-3">
                                              30
                                            </div>
                                            <div className="col-sm-3">
                                              2.95%
                                            </div>
                                          </div>
                                        </div>
                                          <div className="body_content">
                                             <div className="item">
                                               <div className="story row">
                                                 <div className="col-sm-4 ins_story">
                                                 <img src={require("../res/img/themainmenu_1.png")} />
                                                 Instagram Story
                                                 </div>
                                                 <div className="col-sm-4 datetime">
                                                    <DatePicker
                                                      className="btn btn-default"
                                                      selected={this.state.startDate[3]}
                                                      onChange={(date,event)=>{this.onChangeStartDate(date,event,3)}}
                                                      placeholderText="Choose Post Date"
                                                      dateFormat="YYYY-MM-dd"
                                                    />
                                                    <i className="fa fa-calendar"></i> 
                                                 </div>
                                                 <div className="col-sm-4">
                                                   <a href="#">$100 <i className="fa fa-cart-plus"></i></a>
                                                 </div>
                                               </div>
                                             </div>
                                             <div className="item post row">
                                               <div className="col-sm-4">
                                                 <img src={require("../res/img/themainmenu_1.png")} /> Instagram Post
                                               </div>
                                               <div className="col-sm-4 datetime">
                                                    <DatePicker
                                                      className="btn btn-default"
                                                      selected={this.state.startDate[4]}
                                                      onChange={(date,event)=>{this.onChangeStartDate(date,event,4)}}
                                                      placeholderText="Choose Post Date"
                                                      dateFormat="YYYY-MM-dd"
                                                    />
                                                    <i className="fa fa-calendar"></i> 
                                                 </div>
                                               <div className="col-sm-4">
                                                 <a href="#">$100 <i className="fa fa-cart-plus"></i></a>
                                               </div>
                                             </div>
                                             <div className="item video row">
                                               <div className="col-sm-4">
                                                 <img src={require("../res/img/themainmenu_1.png")} />Instagram Video
                                               </div>
                                               <div className="col-sm-4 datetime">
                                                    <DatePicker
                                                      className="btn btn-default"
                                                      selected={this.state.startDate[5]}
                                                      onChange={(date,event)=>{this.onChangeStartDate(date,event,5)}}
                                                      placeholderText="Choose Post Date"
                                                      dateFormat="YYYY-MM-dd"
                                                    />
                                                    <i className="fa fa-calendar"></i> 
                                                 </div>
                                               <div className="col-sm-4">
                                                 <a href="#">$100 <i className="fa fa-cart-plus"></i></a>
                                               </div>
                                             </div>
                                           </div>
                                      </div>
                                  </div>        
                              </div>
                              <div className="panel panel-default">
                                  <div className="panel-heading">
                                      <h4 className="panel-title">
                                        <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_3" aria-expanded="false">
                                            <img src={require("../res/img/tab_title_yuto.png")} />YouTube<span>targettree<i className="fa fa-angle-up"></i></span>
                                          </a>
                                      </h4>
                                  </div>
                                  <div id="collapse_3_3" className="panel-collapse collapse" aria-expanded="false">
                                      <div className="panel-body">
                                        <div className="body_header">
                                          <div className="header_posts">
                                            <div className="col-sm-3">
                                              <i className="fa fa-user"></i>Followers
                                            </div>
                                            <div className="col-sm-3">  
                                              <i className="fa fa-user"></i>Engagement Rate
                                            </div>
                                            <div className="col-sm-3">
                                              <i className="fa fa-commenting"></i>Avg Comments
                                            </div>
                                            <div className="col-sm-3">
                                              <i className="fa fa-clone"></i>Posts per Week
                                            </div>
                                          </div>
                                          <div className="header_posts_value">
                                            <div className="col-sm-3">
                                              11k
                                            </div>
                                            <div className="col-sm-3">
                                              2.95%
                                            </div>
                                            <div className="col-sm-3">
                                              30
                                            </div>
                                            <div className="col-sm-3">
                                              2.95%
                                            </div>
                                          </div>
                                        </div>
                                          <div className="body_content">
                                             <div className="item">
                                               <div className="story row">
                                                 <div className="col-sm-4 ins_story">
                                                 <img src={require("../res/img/themainmenu_1.png")} />
                                                 Instagram Story
                                                 </div>
                                                 <div className="col-sm-4 datetime">
                                                    <DatePicker
                                                      className="btn btn-default"
                                                      selected={this.state.startDate[6]}
                                                      onChange={(date,event)=>{this.onChangeStartDate(date,event,6)}}
                                                      placeholderText="Choose Post Date"
                                                      dateFormat="YYYY-MM-dd"
                                                    />
                                                    <i className="fa fa-calendar"></i> 
                                                 </div>
                                                 <div className="col-sm-4">
                                                   <a href="#">$100 <i className="fa fa-cart-plus"></i></a>
                                                 </div>
                                               </div>
                                             </div>
                                             <div className="item post row">
                                               <div className="col-sm-4">
                                                 <img src={require("../res/img/themainmenu_1.png")} /> Instagram Post
                                               </div>
                                               <div className="col-sm-4 datetime">
                                                    <DatePicker
                                                      className="btn btn-default"
                                                      selected={this.state.startDate[7]}
                                                      onChange={(date,event)=>{this.onChangeStartDate(date,event,7)}}
                                                      placeholderText="Choose Post Date"
                                                      dateFormat="YYYY-MM-dd"
                                                    />
                                                    <i className="fa fa-calendar"></i> 
                                                 </div>
                                               <div className="col-sm-4">
                                                 <a href="#">$100 <i className="fa fa-cart-plus"></i></a>
                                               </div>
                                             </div>
                                             <div className="item video row">
                                               <div className="col-sm-4">
                                                 <img src={require("../res/img/themainmenu_1.png")} />Instagram Video
                                               </div>
                                               <div className="col-sm-4 datetime">
                                                    <DatePicker
                                                      className="btn btn-default"
                                                      selected={this.state.startDate[8]}
                                                      onChange={(date,event)=>{this.onChangeStartDate(date,event,8)}}
                                                      placeholderText="Choose Post Date"
                                                      dateFormat="YYYY-MM-dd"
                                                    />
                                                    <i className="fa fa-calendar"></i> 
                                                 </div>
                                               <div className="col-sm-4">
                                                 <a href="#">$100 <i className="fa fa-cart-plus"></i></a>
                                               </div>
                                             </div>
                                           </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="row reviews">
                    <div className="caption">
                      Reviews
                      <span className="mark_star"><i className="fa fa-star"></i>  5.0</span> <span className="reviews_star">(17 Reviews)</span>
                    </div>
                    <div className="review_lists">
                      <div className="person">
                        <img src={require("../res/img/review_thum1.png")} />
                        maximsalveson
                        <i className="fa fa-star"></i> 5.0
                      </div>
                      <div className="content">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!
                      </div>
                      <div className="divider"></div>

                      <div className="person">
                        <img src={require("../res/img/review_thum1.png")} /> maximsalveson
                        <i className="fa fa-star"></i> 5.0
                      </div>
                      <div className="content">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!
                      </div>
                      <div className="divider"></div>

                      <div className="person">
                        <img src={require("../res/img/review_thum1.png")} /> maximsalveson
                        <i className="fa fa-star"></i> 5.0
                      </div>
                      <div className="content">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!
                      </div>
                      <div className="divider"></div>
                      <div className="seemore">
                        <button>See More <i className="fa fa-angle-down"></i></button>
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
)(Sellers);
