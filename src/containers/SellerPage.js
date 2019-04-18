import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { increment, decrement } from "../store/reducers/stepCounter";

import "../res/bootstrap-select/css/bootstrap-select.min.css"
import "../res/css/global.css"
import "../res/css/Dananza_Search.css"
import "../res/icheck/skins/ltblue.css"
import "../res/css/nouislider.css"

import "../res/css/infoflowPage.css"
import "../res/css/sellers.css"
import $ from "jquery";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class SellerPage extends React.Component{

  state={'headerType': "seller"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Sellers Page"
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
              5.0<span className="reviews_star">(17 Reviews)</span>
              <div className="official">
                Official Account of Target Tree Miami
              </div>
              <div className="msg">
                <a href="#" className="message_link">Message</a>
              </div>
              <div className="divider"></div>
            </div>
          </div>
          <div className="from_avg">
            <div className="from">
              <i className="fa fa-map-pin"></i> From
              <span className="value">Miami</span>
            </div>
            <div className="avg">
              <i className="fa fa-map-pin"></i> Avg. Response Time
              <span className="value">8 hrs</span>
            </div>
          </div>
          <div className="channels">
            <i className="fa fa-map-pin"></i> Channels
            <span className="social_icons">
              <img src={require("../res/img/instagram.png")} />
              <img src={require("../res/img/facebook.png")} />
              <img src={require("../res/img/youtube.png")} />
            </span>
          </div>
          <div className="audience">
            <i className="fa fa-user"></i>
            Audience Attributes
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
                                        <a className="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_1" aria-expanded="false"> Collapsible Group Item #1 </a>
                                    </h4>
                                </div>
                                <div id="collapse_3_1" className="panel-collapse collapse" aria-expanded="false" style={{'height': '0'}}>
                                    <div className="panel-body">
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                            eiusmod. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a className="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_2" aria-expanded="false"> Collapsible Group Item #2 </a>
                                    </h4>
                                </div>
                                <div id="collapse_3_2" className="panel-collapse collapse" aria-expanded="false" style={{'height': '0'}}>
                                    <div className="panel-body" style={{'height': '200px', 'overflowY':'auto'}}>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                            eiusmod. </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a className="btn blue" href="ui_tabs_accordions_navs.html#collapse_3_2" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a className="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_3" aria-expanded="false"> Collapsible Group Item #3 </a>
                                    </h4>
                                </div>
                                <div id="collapse_3_3" className="panel-collapse collapse" aria-expanded="false" style={{'height': '0'}}>
                                    <div className="panel-body">
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                            eiusmod. Brunch 3 wolf moon tempor. </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a className="btn green" href="ui_tabs_accordions_navs.html#collapse_3_3" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">
                                        <a className="accordion-toggle accordion-toggle-styled collapsed" data-toggle="collapse" data-parent="#accordion3" href="#collapse_3_4" aria-expanded="false"> Collapsible Group Item #4 </a>
                                    </h4>
                                </div>
                                <div id="collapse_3_4" className="panel-collapse collapse" aria-expanded="false" style={{'height': '0'}}>
                                    <div className="panel-body">
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
                                            eiusmod. Brunch 3 wolf moon tempor. </p>
                                        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut. </p>
                                        <p>
                                            <a className="btn red" href="ui_tabs_accordions_navs.html#collapse_3_4" target="_blank"> Activate this section via URL </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row reviews">
                  <div className="caption">
                    Reviews
                    <i className="fa fa-star"></i> <span className="mark_star">5.0</span> <span className="reviews_star">(17 Reviews)</span>
                  </div>
                  <div className="review_lists">
                    <div className="person">
                      <img src={require("../res/img/review_thum1.png")} />maximsalveson
                      <i className="fa fa-star"></i> 5.0
                    </div>
                    <div className="content">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!
                    </div>
                    <div className="divider"></div>

                    <div className="person">
                      <img src={require("../res/img/review_thum1.png")} />maximsalveson
                      <i className="fa fa-star"></i> 5.0
                    </div>
                    <div className="content">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!
                    </div>
                    <div className="divider"></div>

                    <div className="person">
                      <img src={require("../res/img/review_thum1.png")} />maximsalveson
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
)(SellerPage);
