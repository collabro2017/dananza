import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment, decrement } from "../store/reducers/stepCounter";
import BuyerSidebar from "../components/Sidebar/BuyerSidebar";

import "../res/css/layout.min.css"
import "../res/css/BuyerLanding.css"

class BuyerLanding extends React.Component{

  state={'headerType': "buyer"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Buyer Dashboard Landing"
  }

  render(){
    return (
      <div className="buyer_landing">
        <div className="page-container">
          <div className="page-content">
            <BuyerSidebar />
            <div className="page-main">
              <div className="page-main-header">
                <span className="headline-first">
                  Latest Campaign
                </span>
                <span className="headline-second pull-right">
                  See All Campaigns <i className="fa fa-long-arrow-right"></i>
                </span>
              </div>
              <hr className="divider-line" />
              <div className="page-main-content row">
                <div className="panel">
                  <div className="panel-title">
                    <span className="first">Ad Campaign 1</span>
                    <span className="second"><img src={require("../res/img/messages.png")}/>Message</span>
                  </div>
                  <div className="panel-body">
                    <div className="mt-element-step">
                      <div className="row step-line">
                        <div className="mt-step-col first done">
                            <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                            <div className="mt-step-title "><span>Order Date</span></div>
                            <div className="mt-step-content "><span>03/11</span></div>
                        </div>
                        <div className="mt-step-col done">
                            <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                            <div className="mt-step-title "><span>Media Uploaded</span></div>
                            <div className="mt-step-content "><span>03/11</span></div>
                        </div>
                        <div className="mt-step-col done">
                            <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                            <div className="mt-step-title "><span>Order Accepted</span></div>
                            <div className="mt-step-content "><span>03/12</span></div>
                        </div>
                        <div className="mt-step-col">
                            <div className="mt-step-number bg-white">&nbsp;</div>
                            <div className="mt-step-title "><span>Ad Laundched</span></div>
                        </div>
                        <div className="mt-step-col last">
                            <div className="mt-step-number bg-white">&nbsp;</div>
                            <div className="mt-step-title "><span>Approve</span></div>
                            <div className="mt-step-content "><span>Your Ad</span></div>
                        </div>
                      </div>
                    </div>
                    <div className="message-table table-responsive">
                      <table className="table">
                        <thead>
                          <tr style={{ 'backgroundColor': '#f1f6f9'}}>
                            <th><span className="left">adza</span></th>
                            <th>Medium</th>
                            <th>Schedule Date</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr style={{ height : '73px' }}>
                            <td><img className="left" src={require("../res/img/themainmenu_1.png")}/>@themainmenu</td>
                            <td>Instagram Story</td>
                            <td>03/10/2019</td>
                            <td>$100</td>
                          </tr>
                          <tr className="end">
                            <td><img className="left" src={require("../res/img/themainmenu_2.png")}/>@themainmenu</td>
                            <td>Blog Post</td>
                            <td>03/10/2019</td>
                            <td>$100</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="cancel">
                      <a href="#"><img src={require("../res/img/remove.png")}/> Cancel Ad</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="page-main-header">
                <span className="headline-first">
                  Saved Adzas
                </span>
                <span className="headline-second pull-right">
                  See All Saved Adzas <i className="fa fa-long-arrow-right"></i>
                </span>
              </div>
              <hr className="divider-line" />
              <div className="adzas row">
                <div className="col-md-4">
                  <div className="item active">
                    <div className="item-header">
                      <div className="title">
                        @themiamimenu
                      </div>
                      <div className="sites">
                        <img src={require("../res/img/instagram.png")}/>
                        <img src={require("../res/img/facebook.png")}/>
                        <img src={require("../res/img/youtube.png")}/>
                        <a className="btn btn-default btn-type btn-food">Food</a>
                      </div>
                      <div className="types">
                        <a className="btn btn-default btn-type btn-millenials">Millennials</a>
                        <a className="btn btn-default btn-type btn-topchef">TopChef</a>
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
                        <a><img src={require("../res/img/delete.png")}/></a>
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
                        <img src={require("../res/img/instagram.png")}/>
                        <img src={require("../res/img/facebook.png")}/>
                        <img src={require("../res/img/youtube.png")}/>
                        <img src={require("../res/img/twitter.png")}/>
                        <a className="btn btn-default btn-type btn-website">Website</a>
                      </div>
                      <div className="types">
                        <a className="btn btn-default btn-type btn-marketing">Marketing</a>
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
                        <img src={require("../res/img/instagram.png")}/>
                        <img src={require("../res/img/facebook.png")}/>
                        <img src={require("../res/img/twitter.png")}/>
                        <img src={require("../res/img/www.png")}/>
                        <a className="btn btn-default btn-type btn-sports">Sports</a>
                      </div>
                      <div className="types">
                        <a className="btn btn-default btn-type btn-mlami">Mlami</a>
                      </div>
                    </div>
                    <div className="item-image">
                      <img src={require("../res/img/athlete.png")}/>
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
                        <a><img src={require("../res/img/delete.png")}/></a>
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
)(BuyerLanding);
