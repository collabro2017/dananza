import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import $ from "jquery";

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

    var itemLeft  = parseInt($(".slider-item").css('margin-left'));
    var itemWidth   = parseInt($(".slider-item").css('width'));
    var index     = 1;
    var sliderItemCount = $(".slider-item").length;

    if(sliderItemCount == index) {
      $(".indicator .next").addClass('disabled');
    }

    if(index == 1) {
      $(".indicator .previous").addClass('disabled');
    }

    $(".next").click(function () {
      if(sliderItemCount == index+1) {
        $(".indicator .next").addClass('disabled');
      }
      else{
        $(".indicator .next").removeClass('disabled');  
      }
      $(".indicator .previous").removeClass('disabled');  

      $(".slider-item:first").animate({'margin-left': itemLeft - itemWidth + 'px'}, "slow");
      itemLeft -= itemWidth;
      index++;
    });

    $(".previous").click(function () {
      if(index == 2) {
        $(".indicator .previous").addClass('disabled');
      }
      else{
        $(".indicator .previous").removeClass('disabled');  
      }
      $(".indicator .next").removeClass('disabled');  

      $(".slider-item:first").animate({'margin-left': itemLeft + itemWidth + 'px'}, "slow");
      itemLeft += itemWidth;
      index--;
    });
  }

  render(){
    return (
      <div className="buyer_landing buyer_campaign">
        <div className="page-container">
           <div className="page-content">
              <BuyerSidebar />

              <div class="page-main">
                <div class="page-main-header">
                  <span class="headline-first">
                    Campaigns
                  </span>
                  <span class="headline-second pull-right">
                    Campaign Status:&nbsp;&nbsp;&nbsp;
                  
                    <span class="dropdown dropdown-user">
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                            All Campaigns
                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-default">
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
                <hr class="divider-line" />
                <span class="third-title">Pending Campaigns</span>
                <br/>
                <br/>
                <div class="main-slider">
                  <div class="slider-item">
                    <div class="panel-title">
                        <span class="first">Ad Campaign 1</span>
                        <span class="second"><img src={require("../res/img/messages.png")}/>Message</span>
                    </div>
                    <div class="panel-body">
                      <div class="mt-element-step">
                          <div class="row step-line">
                                <div class="mt-step-col first done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Order Date</span></div>
                                    <div class="mt-step-content "><span>03/11</span></div>
                                </div>
                                <div class="mt-step-col done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Media Uploaded</span></div>
                                    <div class="mt-step-content "><span>03/11</span></div>
                                </div>
                                <div class="mt-step-col done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Order Accepted</span></div>
                                    <div class="mt-step-content "><span>03/12</span></div>
                                </div>
                                <div class="mt-step-col done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Ad Laundched</span></div>
                                    <div class="mt-step-content "><span>03/12</span></div>
                                </div>
                                <div class="mt-step-col last">
                                    <div class="mt-step-number bg-white">&nbsp;</div>
                                    <div class="mt-step-title "><span>Approve</span></div>
                                    <div class="mt-step-content "><span>Your Ad</span></div>
                                </div>
                          </div>                            
                      </div>
                      <div class="message-table">
                        <table class="table">
                          <thead>
                            <tr style={{'backgroundColor': '#f1f6f9'}}>
                              <th><span class="left">adza</span></th>
                              <th>Medium</th>
                              <th>Schedule Date</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{'height':'73px'}}>
                              <td><img class="left" src={require("../res/img/themainmenu_1.png")}/>@themainmenu</td>
                              <td>Instagram Story</td>
                              <td>03/10/2019</td>
                              <td>$100</td>
                            </tr>
                            <tr class="end">
                              <td><img class="left" src={require("../res/img/themainmenu_2.png")}/>@themainmenu</td>
                              <td>Blog Post</td>
                              <td>03/10/2019</td>
                              <td>$100</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="cancel">
                        <a href="#"><img src={require("../res/img/remove.png")}/> Cancel Ad</a>
                        <button class="btn btn-lg preview-media pull-right"><img src={require("../res/img/review.png")}/>Review Media</button>
                      </div>
                    </div>
                  </div>
                  <div class="slider-item">
                    <div class="panel-title">
                        <span class="first">Ad Campaign 1</span>
                        <span class="second"><img src={require("../res/img/messages.png")}/>Message</span>
                    </div>
                    <div class="panel-body">
                      <div class="mt-element-step">
                          <div class="row step-line">
                                <div class="mt-step-col first done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Order Date</span></div>
                                    <div class="mt-step-content "><span>03/11</span></div>
                                </div>
                                <div class="mt-step-col done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Media Uploaded</span></div>
                                    <div class="mt-step-content "><span>03/11</span></div>
                                </div>
                                <div class="mt-step-col done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Order Accepted</span></div>
                                    <div class="mt-step-content "><span>03/12</span></div>
                                </div>
                                <div class="mt-step-col done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Ad Laundched</span></div>
                                    <div class="mt-step-content "><span>03/12</span></div>
                                </div>
                                <div class="mt-step-col last">
                                    <div class="mt-step-number bg-white">&nbsp;</div>
                                    <div class="mt-step-title "><span>Approve</span></div>
                                    <div class="mt-step-content "><span>Your Ad</span></div>
                                </div>
                          </div>                            
                      </div>
                      <div class="message-table">
                        <table class="table table-condensed">
                          <thead>
                            <tr style={{'backgroundColor': '#f1f6f9'}}>
                              <th><span class="left">adza</span></th>
                              <th>Medium</th>
                              <th>Schedule Date</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{'height':'73px'}}>
                              <td><img class="left" src={require("../res/img/themainmenu_1.png")}/>@themainmenu</td>
                              <td>Instagram Story</td>
                              <td>03/10/2019</td>
                              <td>$100</td>
                            </tr>
                            <tr class="end">
                              <td><img class="left" src={require("../res/img/themainmenu_2.png")}/>@themainmenu</td>
                              <td>Blog Post</td>
                              <td>03/10/2019</td>
                              <td>$100</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="cancel">
                        <a href="#"><img src={require("../res/img/remove.png")}/> Cancel Ad</a>
                        <button class="btn btn-lg preview-media pull-right"><img src={require("../res/img/review.png")}/>Review Media</button>
                      </div>
                    </div>
                  </div>
                  <div class="slider-item">
                    <div class="panel-title">
                        <span class="first">Ad Campaign 1</span>
                        <span class="second"><img src={require("../res/img/messages.png")}/>Message</span>
                    </div>
                    <div class="panel-body">
                      <div class="mt-element-step">
                          <div class="row step-line">
                                <div class="mt-step-col first done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Order Date</span></div>
                                    <div class="mt-step-content "><span>03/11</span></div>
                                </div>
                                <div class="mt-step-col done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Media Uploaded</span></div>
                                    <div class="mt-step-content "><span>03/11</span></div>
                                </div>
                                <div class="mt-step-col done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Order Accepted</span></div>
                                    <div class="mt-step-content "><span>03/12</span></div>
                                </div>
                                <div class="mt-step-col done">
                                    <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div class="mt-step-title "><span>Ad Laundched</span></div>
                                    <div class="mt-step-content "><span>03/12</span></div>
                                </div>
                                <div class="mt-step-col last">
                                    <div class="mt-step-number bg-white">&nbsp;</div>
                                    <div class="mt-step-title "><span>Approve</span></div>
                                    <div class="mt-step-content "><span>Your Ad</span></div>
                                </div>
                          </div>                            
                      </div>
                      <div class="message-table">
                        <table class="table table-condensed">
                          <thead>
                            <tr style={{'backgroundColor': '#f1f6f9'}}>
                              <th><span class="left">adza</span></th>
                              <th>Medium</th>
                              <th>Schedule Date</th>
                              <th>Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr style={{'height':'73px'}}>
                              <td><img class="left" src={require("../res/img/themainmenu_1.png")}/>@themainmenu</td>
                              <td>Instagram Story</td>
                              <td>03/10/2019</td>
                              <td>$100</td>
                            </tr>
                            <tr class="end">
                              <td><img class="left" src={require("../res/img/themainmenu_2.png")}/>@themainmenu</td>
                              <td>Blog Post</td>
                              <td>03/10/2019</td>
                              <td>$100</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div class="cancel">
                        <a href="#"><img src={require("../res/img/remove.png")}/> Cancel Ad</a>
                        <button class="btn btn-lg preview-media pull-right"><img src={require("../res/img/review.png")}/>Review Media</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="indicator">
                  <a class="next"><i class="fa fa-angle-right"></i></a> 
                  <a class="previous"><i class="fa fa-angle-left"></i></a>
                </div>
                <br/><br/><br/>
                  <hr class="divider-line"/>
                  <div class="page-main-content row">
                    <span class="fourth-title">Completed Campaigns</span>
                    <div class="panel-item">
                      <div class="panel-left">
                        <img src={require("../res/img/male.png")} class="img-item"/>
                      </div>

                      <div class="panel-right">
                        <div class="header">
                          <img src={require("../res/img/twitter1.png")}/>
                          <span class="social-link">
                            Twitter Ad&nbsp;&nbsp;
                            <a>@themainmenu</a>
                          </span>
                          <span class="price pull-right">
                            $65 &nbsp;&nbsp;&nbsp;
                            <i class="fa fa-comment-o"></i>Message
                          </span>
                        </div>
                        <div class="mt-element-step">
                          <div class="row step-line">
                              <div class="mt-step-col first done">
                                  <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div class="mt-step-title "><span>Order Date</span></div>
                                  <div class="mt-step-content "><span>03/11</span></div>
                              </div>
                              <div class="mt-step-col done">
                                  <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div class="mt-step-title "><span>Media Uploaded</span></div>
                                  <div class="mt-step-content "><span>03/11</span></div>
                              </div>
                              <div class="mt-step-col done">
                                  <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div class="mt-step-title "><span>Order Accepted</span></div>
                                  <div class="mt-step-content "><span>03/12</span></div>
                              </div>
                              <div class="mt-step-col done">
                                  <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div class="mt-step-title "><span>Ad Laundched</span></div>
                                  <div class="mt-step-content "><span>03/12</span></div>
                              </div>
                              <div class="mt-step-col done last">
                                  <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div class="mt-step-title "><span>Approve</span></div>
                                  <div class="mt-step-content "><span>Your Ad</span></div>
                              </div>
                          </div>
                        </div>
                        <div class="footer">
                          <hr class="footer bg-grey"/>
                          <span class="social-link"><img src={require("../res/img/eye.png")}/>
                          View This Ad</span>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="page-main-content row">
                  <div class="panel-item">
                    <div class="panel-left">
                      <img src={require("../res/img/male1.png")} class="img-item"/>
                    </div>

                    <div class="panel-right">
                      <div class="header">
                        <img src={require("../res/img/instagram1.png")}/>
                        <span class="social-link">
                          Instagram Post&nbsp;&nbsp;
                          <a>@beastyboyy</a>
                        </span>
                        <span class="price pull-right">
                          $100 &nbsp;&nbsp;&nbsp;
                          <i class="fa fa-comment-o"></i>Message
                        </span>
                      </div>
                      <div class="mt-element-step">
                        <div class="row step-line">
                              <div class="mt-step-col first done">
                                  <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div class="mt-step-title "><span>Order Date</span></div>
                                  <div class="mt-step-content "><span>03/11</span></div>
                              </div>
                              <div class="mt-step-col done">
                                  <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div class="mt-step-title "><span>Media Uploaded</span></div>
                                  <div class="mt-step-content "><span>03/11</span></div>
                              </div>
                              <div class="mt-step-col done">
                                  <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div class="mt-step-title "><span>Order Accepted</span></div>
                                  <div class="mt-step-content "><span>03/12</span></div>
                              </div>
                              <div class="mt-step-col done">
                                  <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div class="mt-step-title "><span>Ad Laundched</span></div>
                                  <div class="mt-step-content "><span>03/12</span></div>
                              </div>
                              <div class="mt-step-col done last">
                                  <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div class="mt-step-title "><span>Approve</span></div>
                                  <div class="mt-step-content "><span>Your Ad</span></div>
                              </div>
                          </div>                       
                      </div>
                        <div class="footer">
                          <hr class="footer bg-grey"/>
                          <img src={require("../res/img/eye.png")}/>
                          View This Ad
                        </div>
                    </div>
                  </div>
                </div>
                <div class="page-main-content row">
                  <div class="panel-item">
                    <div class="panel-left">
                      <img src={require("../res/img/male2.png")} class="img-item"/>
                    </div>

                    <div class="panel-right">
                      <div class="header">
                        <img src={require("../res/img/twitter1.png")}/>
                        <span class="social-link">
                          Ad Campaign&nbsp;&nbsp;
                          <a>@Target Tree</a>
                        </span>
                        <span class="price pull-right">
                          $400 &nbsp;&nbsp;&nbsp;
                          <i class="fa fa-comment-o"></i>Message
                        </span>
                      </div>
                      <div class="mt-element-step">
                        <div class="row step-line">
                            <div class="mt-step-col first done">
                                <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div class="mt-step-title "><span>Order Date</span></div>
                                <div class="mt-step-content "><span>03/11</span></div>
                            </div>
                            <div class="mt-step-col done">
                                <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div class="mt-step-title "><span>Media Uploaded</span></div>
                                <div class="mt-step-content "><span>03/11</span></div>
                            </div>
                            <div class="mt-step-col done">
                                <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div class="mt-step-title "><span>Order Accepted</span></div>
                                <div class="mt-step-content "><span>03/12</span></div>
                            </div>
                            <div class="mt-step-col done">
                                <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div class="mt-step-title "><span>Ad Laundched</span></div>
                                <div class="mt-step-content "><span>03/12</span></div>
                            </div>
                            <div class="mt-step-col done last">
                                <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div class="mt-step-title "><span>Approve</span></div>
                                <div class="mt-step-content "><span>Your Ad</span></div>
                            </div>
                          </div>                        
                      </div>
                      <div class="footer">
                        <hr class="footer bg-grey"/>
                        <img src={require("../res/img/eye.png")}/>
                        View This Ad
                      </div>
                    </div>
                  </div>
                </div>
                <div class="page-main-content row">
                  <div class="panel-item">
                    <div class="panel-left">
                      <img src={require("../res/img/male3.png")} class="img-item"/>
                    </div>

                    <div class="panel-right">
                      <div class="header">
                        <img src={require("../res/img/instagram1.png")}/>
                        <span class="social-link">
                          Instagram Ad&nbsp;&nbsp;
                          <a>@marie_condo</a>
                        </span>
                        <span class="price pull-right">
                          $100 &nbsp;&nbsp;&nbsp;
                          <i class="fa fa-comment-o"></i>Message
                        </span>
                      </div>
                      <div class="mt-element-step">
                        <div class="row step-line">
                            <div class="mt-step-col first done">
                                <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div class="mt-step-title "><span>Order Date</span></div>
                                <div class="mt-step-content "><span>03/11</span></div>
                            </div>
                            <div class="mt-step-col done">
                                <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div class="mt-step-title "><span>Media Uploaded</span></div>
                                <div class="mt-step-content "><span>03/11</span></div>
                            </div>
                            <div class="mt-step-col done">
                                <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div class="mt-step-title "><span>Order Accepted</span></div>
                                <div class="mt-step-content "><span>03/12</span></div>
                            </div>
                            <div class="mt-step-col done">
                                <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div class="mt-step-title "><span>Ad Laundched</span></div>
                                <div class="mt-step-content "><span>03/12</span></div>
                            </div>
                            <div class="mt-step-col done last">
                                <div class="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div class="mt-step-title "><span>Approve</span></div>
                                <div class="mt-step-content "><span>Your Ad</span></div>
                            </div>
                          </div>                        
                        </div>
                        <div class="footer">
                          <hr class="footer bg-grey"/>
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
