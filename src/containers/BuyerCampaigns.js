import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import $ from "jquery";
import { Link } from 'react-router-dom';

import BuyerSidebar from "../components/Sidebar/BuyerSidebar";

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import "../res/css/Dananza_Search.css"
import "../res/css/BuyerCampaigns.css"

class BuyerCampaigns extends React.Component{

  state={
    'headerType': "buyer",
    'campaign_status': 'All'
  }

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }
  onChangeRelevance = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount(){
    document.title = "Buyer Campaigns"

    var itemLeft  = parseInt($(".slider-item").css('margin-left'));
    var itemRight  = parseInt($(".slider-item").css('margin-right'));
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

      $(".slider-item:first").animate({'margin-left': itemLeft - itemWidth - itemRight + 'px'}, "slow");
      itemLeft -= itemWidth + itemRight;
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

      $(".slider-item:first").animate({'margin-left': itemLeft + itemWidth + itemRight + 'px'}, "slow");
      itemLeft += itemWidth + itemRight;
      index--;
    });
  }

  render(){
    return (
      <div className="buyer_landing buyer_campaign">
        <div className="page-container">
           <div className="page-content">
              <BuyerSidebar navitem={"campaigns"}/>

              <div className="page-main">
                <div className="page-main-header">
                  <span className="headline-first">
                    Campaigns
                  </span>
                  <div className="pull-right headline-second campaing_selector">
                    Campaign Status: 
                    <Select
                      value={this.state.campaign_status}
                      onChange={this.onChangeCampaign}
                      inputProps={{
                        name: 'campaign',
                        id: 'campaign-selector',
                      }}
                    >
                      <MenuItem value={'All'}>All Campaigns</MenuItem>
                      <MenuItem value={'Status1'}>Status1</MenuItem>
                      <MenuItem value={'Status2'}>Status2</MenuItem>
                      <MenuItem value={'Status3'}>Status3</MenuItem>
                      <MenuItem value={'Status4'}>Status4</MenuItem>
                    </Select>
                  </div>
                </div>
                <hr className="divider-line" />
                <div className="third-title">Pending Campaigns</div>
                <div className="main-slider">
                  <div className="slider-item">
                    <div className="panel-title">
                        <span className="first">Ad Campaign 1</span>
                        <span className="second"><Link to="buyer_messages" className="color-dark"><i className="fa fa-comment-o"></i> Message</Link></span>
                    </div>
                    <div className="panel-body">
                      <div className="campaign-timeline">
                        <div className="step first active">
                          <div className="step-button">
                            <hr className="left" />
                            <hr className="right" />
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                          </div>
                          <div className="step-label">Order Date</div>
                          <div className="step-label">03/11</div>
                        </div>
                        <div className="step active">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Media Uploaded</div>
                          <div className="step-label">03/11</div>
                        </div>
                        <div className="step">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Order Accepted</div>
                        </div>
                        <div className="step">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Ad Launched</div>
                        </div>
                        <div className="step last">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Buyer Approved</div>
                        </div>
                      </div>
                      <div className="message-table">
                        <table className="table">
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
                        <Link to="/new_order" className="btn btn-lg preview-media pull-right"><img src={require("../res/img/review.png")}/>Review Post</Link>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="panel-title">
                        <span className="first">Ad Campaign 1</span>
                        <span className="second"><Link to="buyer_messages" className="color-dark"><i className="fa fa-comment-o"></i> Message</Link></span>
                    </div>
                    <div className="panel-body">
                      <div className="campaign-timeline">
                        <div className="step first active">
                          <div className="step-button">
                            <hr className="left" />
                            <hr className="right" />
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                          </div>
                          <div className="step-label">Order Date</div>
                          <div className="step-label">03/11</div>
                        </div>
                        <div className="step active">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Media Uploaded</div>
                          <div className="step-label">03/11</div>
                        </div>
                        <div className="step">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Order Accepted</div>
                        </div>
                        <div className="step">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Ad Launched</div>
                        </div>
                        <div className="step last">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Buyer Approved</div>
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
                        <Link to="/new_order" className="btn btn-lg preview-media pull-right"><img src={require("../res/img/review.png")}/>Review Post</Link>
                      </div>
                    </div>
                  </div>
                  <div className="slider-item">
                    <div className="panel-title">
                        <span className="first">Ad Campaign 1</span>
                        <span className="second"><Link to="buyer_messages" className="color-dark"><i className="fa fa-comment-o"></i> Message</Link></span>
                    </div>
                    <div className="panel-body">
                      <div className="campaign-timeline">
                        <div className="step first active">
                          <div className="step-button">
                            <hr className="left" />
                            <hr className="right" />
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                          </div>
                          <div className="step-label">Order Date</div>
                          <div className="step-label">03/11</div>
                        </div>
                        <div className="step active">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Media Uploaded</div>
                          <div className="step-label">03/11</div>
                        </div>
                        <div className="step">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Order Accepted</div>
                        </div>
                        <div className="step">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Ad Launched</div>
                        </div>
                        <div className="step last">
                          <div className="step-button">
                            <a className="circle">
                              <img src={require('../res/img/check.png')}/>
                            </a>
                            <hr className="left" />
                            <hr className="right" />
                          </div>
                          <div className="step-label">Buyer Approved</div>
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
                        <Link to="/new_order" className="btn btn-lg preview-media pull-right"><img src={require("../res/img/review.png")}/>Review Post</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="indicator">
                  <a className="next"><i className="fa fa-angle-right"></i></a> 
                  <a className="previous"><i className="fa fa-angle-left"></i></a>
                </div>
                
                <hr className="divider-line"/>
                <div className="third-title">Completed Campaigns</div>
                <div className="page-result-content">  
                  <div className="campaign active">
                    <img src={require("../res/img/order1.png")} />
                    <div className="campaign-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/ad_campaign.png")} />
                          <span>Ad Campaign</span>
                          <a>axel92</a>
                        </span>
                        <span className="header-right">
                          <span className="price">$300</span>
                          <Link to="/seller_messages"><img src={require("../res/img/message.png")} />Message</Link>
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="campaign-timeline">
                          <div className="step first active">
                            <div className="step-button">
                              <hr className="left" />
                              <hr className="right" />
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                            </div>
                            <div className="step-label">Order Date</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Media Uploaded</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Order Accepted</div>
                          </div>
                          <div className="step">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Ad Launched</div>
                          </div>
                          <div className="step last">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Buyer Approved</div>
                          </div>
                        </div>
                      </div>
                      <div className="content-footer">
                        <Link to="/new_order" className="btn btn-default btn-yellow btn-radius">
                          <img src={require("../res/img/review.png")} />
                          Review Media
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <div className="campaign active">
                    <img src={require("../res/img/order2.png")} />
                    <div className="campaign-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/instagram_sq.png")} />
                          <span>Instagram Story for</span>
                          <a>jane_123</a>
                        </span>
                        <span className="header-right">
                          <span className="price">$100</span>
                          <Link to="/seller_messages"><img src={require("../res/img/message.png")} />Message</Link>
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="campaign-timeline">
                          <div className="step first active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Order Date</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Media Uploaded</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Order Accepted</div>
                            <div className="step-label">03/12</div>
                          </div>
                          <div className="step">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Ad Launched</div>
                          </div>
                          <div className="step last">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Buyer Approved</div>
                          </div>
                        </div>
                      </div>
                      <div className="content-footer">
                        <button className="btn btn-default btn-yellow btn-radius">
                        <img src={require("../res/img/launch.png")} />
                          Launch Ad
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="campaign">
                   <img src={require("../res/img/order3.png")} />
                    <div className="campaign-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/twitter_sq.png")} />
                          <span>Twitter Ad for </span>
                          <a>sollen_dior </a>
                        </span>
                        <span className="header-right">
                          <span className="price">$65</span>
                          <Link to="/seller_messages"><img src={require("../res/img/message.png")} />Message</Link>
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="campaign-timeline">
                          <div className="step first active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Order Date</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Media Uploaded</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Order Accepted</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Ad Launched</div>
                          </div>
                          <div className="step last active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left" />
                              <hr className="right" />
                            </div>
                            <div className="step-label">Buyer Approved</div>
                          </div>
                        </div>
                      </div>
                      <div className="content-footer">
                        <button className="btn btn-default btn-transparent btn-radius">
                        <img src={require("../res/img/eye.png")} />
                          View This Ad
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="campaign">
                    <img src={require("../res/img/order4.png")} />
                    <div className="campaign-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/instagram_sq.png")} />
                          <span>Instagram Ad for </span>
                          <a>beastyboyy</a>
                        </span>
                        <span className="header-right">
                          <span className="price">$100</span>
                          <Link to="/seller_messages"><img src={require("../res/img/message.png")} />Message</Link>
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="campaign-timeline">
                          <div className="step first active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Order Date</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Media Uploaded</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Order Accepted</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Ad Launched</div>
                          </div>
                          <div className="step last active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Buyer Approved</div>
                          </div>
                        </div>
                      </div>
                      <div className="content-footer">
                        <button className="btn btn-default btn-transparent btn-radius">
                        <img src={require("../res/img/eye.png")} />
                          View This Ad
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="campaign">
                    <img src={require("../res/img/order5.png")} />
                    <div className="campaign-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/ad_campaign.png")} />
                          <span>Ad Campaign for </span>
                          <a>martin_values</a>
                        </span>
                        <span className="header-right">
                          <span className="price">$400</span>
                          <Link to="/seller_messages"><img src={require("../res/img/message.png")} />Message</Link>
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="campaign-timeline">
                          <div className="step first active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Order Date</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Media Uploaded</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Order Accepted</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Ad Launched</div>
                          </div>
                          <div className="step last active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Buyer Approved</div>
                          </div>
                        </div>
                      </div>
                      <div className="content-footer">
                        <button className="btn btn-default btn-transparent btn-radius">
                          <img src={require("../res/img/eye.png")} />
                          View This Ad
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="campaign">
                    <img src={require("../res/img/order1.png")} />
                    <div className="campaign-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/instagram_sq.png")} />
                          <span>Instagram Ad for </span>
                          <a>marie_condo</a>
                        </span>
                        <span className="header-right">
                          <span className="price">$100</span>
                          <Link to="/seller_messages"><img src={require("../res/img/message.png")} />Message</Link>
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="campaign-timeline">
                          <div className="step first active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Order Date</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Media Uploaded</div>
                            <div className="step-label">03/11</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Order Accepted</div>
                          </div>
                          <div className="step active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Ad Launched</div>
                          </div>
                          <div className="step last active">
                            <div className="step-button">
                              <a className="circle">
                                <img src={require('../res/img/check.png')}/>
                              </a>
                              <hr className="left"/>
                              <hr className="right"/>
                            </div>
                            <div className="step-label">Buyer Approved</div>
                          </div>
                        </div>
                      </div>
                      <div className="content-footer">
                        <button className="btn btn-default btn-transparent btn-radius">
                        <img src={require("../res/img/eye.png")} />
                          View This Ad
                        </button>
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
)(BuyerCampaigns);
