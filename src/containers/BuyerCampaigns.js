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

import "../res/css/Dananza_Search.css"
import "../res/css/BuyerCampaigns.css"

class BuyerCampaigns extends React.Component{

  state={'headerType': "buyer"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Buyer Campaigns"
  }

  render(){
    return (
      <div className="buyer_landing buyer_campaign">
        <div className="page-container">
           <div className="page-content">
              <BuyerSidebar />

              <div className="page-main">
                <div className="page-main-header">
                  <span className="headline-first">
                    Campaigns
                  </span>
                  <span className="headline-second pull-right">
                    Campaign Status:&nbsp;&nbsp;&nbsp;
                  
                    <span className="dropdown dropdown-user">
                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            All Campaigns
                            <i className="fa fa-angle-down"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-default">
                            <li>
                                <a href="page_user_profile_1.html">
                                    All Campaigns </a>
                            </li>
                            <li>
                                <a href="app_calendar.html">
                                    Needs Your Approval </a>
                            </li>
                            <li>
                                <a href="app_todo.html">
                                    Completed Campaigns
                                </a>
                            </li>
                        </ul>
                    </span>
                  </span>
                </div>
                <hr className="divider-line" />
                <span className="third-title">Pending Campaigns</span>
                <div className="page-main-content row">
                    <div className="panel">
                        <div className="panel-title">
                            <span className="first">Ad Campaign 1</span>
                            <span className="second"><img src={require("../res/img/messages.png")}/>Message</span>
                        </div>
                        <div className="panel-body">
                          <div className="mt-element-step">
                              <div className="row step-line">
                                  <div className="col-md-1">
                                  </div>
                                    <div className="col-md-2 mt-step-col first done">
                                        <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                        <div className="mt-step-title "><span>Order Date</span></div>
                                        <div className="mt-step-content "><span>03/11</span></div>
                                    </div>
                                    <div className="col-md-2 mt-step-col done">
                                        <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                        <div className="mt-step-title "><span>Media Uploaded</span></div>
                                        <div className="mt-step-content "><span>03/11</span></div>
                                    </div>
                                    <div className="col-md-2 mt-step-col done">
                                        <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                        <div className="mt-step-title "><span>Order Accepted</span></div>
                                        <div className="mt-step-content "><span>03/12</span></div>
                                    </div>
                                    <div className="col-md-2 mt-step-col">
                                        <div className="mt-step-number bg-white">&nbsp;</div>
                                        <div className="mt-step-title "><span>Ad Laundched</span></div>
                                    </div>
                                    <div className="col-md-2 mt-step-col last">
                                        <div className="mt-step-number bg-white">&nbsp;</div>
                                        <div className="mt-step-title "><span>Approve</span></div>
                                        <div className="mt-step-content "><span>Your Ad</span></div>
                                    </div>
                              </div>                            
                          </div>
                          <div className="message-table">
                            <table className="table table-condensed">
                              <thead>
                                <tr style={{'backgroundColor': '#f1f6f9'}}>
                                  <th><span className="left">adza</span></th>
                                  <th>Medium</th>
                                  <th>Schedule Date</th>
                                  <th>Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr style={{'height':'73px'}}>
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
                  <hr className="divider-line"/>
                  <div className="page-main-content row">
                    <span className="fourth-title">Completed Campaigns</span>
                    <div className="panel-item">
                      <div className="panel-left">
                        <img src={require("../res/img/male.png")} className="img-item"/>
                      </div>

                      <div className="panel-right">
                        <div className="header">
                          <img src={require("../res/img/twitter1.png")}/>Twitter Ad&nbsp;&nbsp;
                          <a>@themainmenu</a>
                          <span className="pull-right">$65 &nbsp;&nbsp;&nbsp;<img src={require("../res/img/messages.png")} />Message</span>
                        </div>
                        <div className="mt-element-step">
                          <div className="row step-line">
                            <div className="col-md-1">
                            </div>
                              <div className="col-md-2 mt-step-col first done">
                                  <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div className="mt-step-title "><span>Order Date</span></div>
                                  <div className="mt-step-content "><span>03/11</span></div>
                              </div>
                              <div className="col-md-2 mt-step-col done">
                                  <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div className="mt-step-title "><span>Media Uploaded</span></div>
                                  <div className="mt-step-content "><span>03/11</span></div>
                              </div>
                              <div className="col-md-2 mt-step-col done">
                                  <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div className="mt-step-title "><span>Order Accepted</span></div>
                                  <div className="mt-step-content "><span>03/12</span></div>
                              </div>
                              <div className="col-md-2 mt-step-col">
                                  <div className="mt-step-number bg-white">&nbsp;</div>
                                  <div className="mt-step-title "><span>Ad Laundched</span></div>
                              </div>
                              <div className="col-md-2 mt-step-col last">
                                  <div className="mt-step-number bg-white">&nbsp;</div>
                                  <div className="mt-step-title "><span>Approve</span></div>
                                  <div className="mt-step-content "><span>Your Ad</span></div>
                              </div>
                          </div>
                        </div>
                        <div className="footer">
                          <hr className="footer bg-grey"/>
                          <img src={require("../res/img/eye.png")}/>
                          View This Ad
                        </div>
                    </div>
                  </div>
                </div>
                <div className="page-main-content row">
                  <div className="panel-item">
                    <div className="panel-left">
                      <img src={require("../res/img/male1.png")} className="img-item"/>
                    </div>

                    <div className="panel-right">
                      <div className="header">
                        <img src={require("../res/img/instagram1.png")}/>Instagram Post&nbsp;&nbsp;
                        <a>@beastyboyy</a>
                        <span className="pull-right">$100 &nbsp;&nbsp;&nbsp;<img src={require("../res/img/messages.png")} />Message</span>
                      </div>
                      <div className="mt-element-step">
                        <div className="row step-line">
                            <div className="col-md-1">
                            </div>
                          <div className="col-md-2 mt-step-col first done">
                              <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                              <div className="mt-step-title "><span>Order Date</span></div>
                              <div className="mt-step-content "><span>03/11</span></div>
                          </div>
                          <div className="col-md-2 mt-step-col done">
                              <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                              <div className="mt-step-title "><span>Media Uploaded</span></div>
                              <div className="mt-step-content "><span>03/11</span></div>
                          </div>
                          <div className="col-md-2 mt-step-col done">
                              <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                              <div className="mt-step-title "><span>Order Accepted</span></div>
                              <div className="mt-step-content "><span>03/12</span></div>
                          </div>
                          <div className="col-md-2 mt-step-col">
                              <div className="mt-step-number bg-white">&nbsp;</div>
                              <div className="mt-step-title "><span>Ad Laundched</span></div>
                          </div>
                          <div className="col-md-2 mt-step-col last">
                              <div className="mt-step-number bg-white">&nbsp;</div>
                              <div className="mt-step-title "><span>Approve</span></div>
                              <div className="mt-step-content "><span>Your Ad</span></div>
                          </div>
                        </div>                        
                      </div>
                        <div className="footer">
                          <hr className="footer bg-grey"/>
                          <img src={require("../res/img/eye.png")}/>
                          View This Ad
                        </div>
                    </div>
                  </div>
                </div>
                <div className="page-main-content row">
                  <div className="panel-item">
                    <div className="panel-left">
                      <img src={require("../res/img/male2.png")} className="img-item"/>
                    </div>

                    <div className="panel-right">
                      <div className="header">
                        <img src={require("../res/img/twitter1.png")}/>Ad Campaign&nbsp;&nbsp;
                        <a>@Target Tree</a>
                        <span className="pull-right">$400 &nbsp;&nbsp;&nbsp;<img src={require("../res/img/messages.png")} />Message</span>
                      </div>
                      <div className="mt-element-step">
                        <div className="row step-line">
                          <div className="col-md-1">
                          </div>
                            <div className="col-md-2 mt-step-col first done">
                                <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div className="mt-step-title "><span>Order Date</span></div>
                                <div className="mt-step-content "><span>03/11</span></div>
                            </div>
                            <div className="col-md-2 mt-step-col done">
                                <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div className="mt-step-title "><span>Media Uploaded</span></div>
                                <div className="mt-step-content "><span>03/11</span></div>
                            </div>
                            <div className="col-md-2 mt-step-col done">
                                <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div className="mt-step-title "><span>Order Accepted</span></div>
                                <div className="mt-step-content "><span>03/12</span></div>
                            </div>
                            <div className="col-md-2 mt-step-col">
                                <div className="mt-step-number bg-white">&nbsp;</div>
                                <div className="mt-step-title "><span>Ad Laundched</span></div>
                            </div>
                            <div className="col-md-2 mt-step-col last">
                                <div className="mt-step-number bg-white">&nbsp;</div>
                                <div className="mt-step-title "><span>Approve</span></div>
                                <div className="mt-step-content "><span>Your Ad</span></div>
                            </div>
                          </div>                        
                        </div>
                        <div className="footer">
                          <hr className="footer bg-grey"/>
                          <img src={require("../res/img/eye.png")}/>
                          View This Ad
                        </div>
                    </div>
                  </div>
                </div>
                <div className="page-main-content row">
                  <div className="panel-item">
                    <div className="panel-left">
                      <img src={require("../res/img/male3.png")} className="img-item"/>
                    </div>

                    <div className="panel-right">
                      <div className="header">
                        <img src={require("../res/img/instagram1.png")}/>Instagram Ad&nbsp;&nbsp;
                        <a>@marie_condo</a>
                        <span className="pull-right">$100 &nbsp;&nbsp;&nbsp;<img src={require("../res/img/messages.png")} />Message</span>
                      </div>
                      <div className="mt-element-step">
                        <div className="row step-line">
                          <div className="col-md-1">
                          </div>
                            <div className="col-md-2 mt-step-col first done">
                                <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div className="mt-step-title "><span>Order Date</span></div>
                                <div className="mt-step-content "><span>03/11</span></div>
                            </div>
                            <div className="col-md-2 mt-step-col done">
                                <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div className="mt-step-title "><span>Media Uploaded</span></div>
                                <div className="mt-step-content "><span>03/11</span></div>
                            </div>
                            <div className="col-md-2 mt-step-col done">
                                <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div className="mt-step-title "><span>Order Accepted</span></div>
                                <div className="mt-step-content "><span>03/12</span></div>
                            </div>
                            <div className="col-md-2 mt-step-col">
                                <div className="mt-step-number bg-white">&nbsp;</div>
                                <div className="mt-step-title "><span>Ad Laundched</span></div>
                            </div>
                            <div className="col-md-2 mt-step-col last">
                                <div className="mt-step-number bg-white">&nbsp;</div>
                                <div className="mt-step-title "><span>Approve</span></div>
                                <div className="mt-step-content "><span>Your Ad</span></div>
                            </div>
                          </div>                        
                        </div>
                        <div className="footer">
                          <hr className="footer bg-grey"/>
                          <img src={require("../res/img/eye.png")}/>
                          View This Ad
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
)(BuyerCampaigns);
