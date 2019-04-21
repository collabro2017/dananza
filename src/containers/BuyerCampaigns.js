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

import { increment, decrement } from "../store/reducers/stepCounter";
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
                                <div className="mt-step-col done">
                                    <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div className="mt-step-title "><span>Ad Laundched</span></div>
                                    <div className="mt-step-content "><span>03/12</span></div>
                                </div>
                                <div className="mt-step-col last">
                                    <div className="mt-step-number bg-white">&nbsp;</div>
                                    <div className="mt-step-title "><span>Approve</span></div>
                                    <div className="mt-step-content "><span>Your Ad</span></div>
                                </div>
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
                                <div className="mt-step-col done">
                                    <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div className="mt-step-title "><span>Ad Laundched</span></div>
                                    <div className="mt-step-content "><span>03/12</span></div>
                                </div>
                                <div className="mt-step-col last">
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
                                <div className="mt-step-col done">
                                    <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                    <div className="mt-step-title "><span>Ad Laundched</span></div>
                                    <div className="mt-step-content "><span>03/12</span></div>
                                </div>
                                <div className="mt-step-col last">
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
                  <div className="page-main-content row">                    
                    <div className="panel-item">
                      <div className="panel-left">
                        <img src={require("../res/img/male.png")} className="img-item"/>
                      </div>

                      <div className="panel-right">
                        <div className="header">
                          <img src={require("../res/img/twitter1.png")}/>
                          <span className="social-link">
                            Twitter Ad
                            <Link to="/seller_page">@themainmenu</Link>
                          </span>
                          <span className="price pull-right">
                            <span className="price">$65</span>
                            <Link to="buyer_messages" className="color-dark"><i className="fa fa-comment-o"></i> Message</Link>
                          </span>
                        </div>
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
                              <div className="mt-step-col done">
                                  <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div className="mt-step-title "><span>Ad Laundched</span></div>
                                  <div className="mt-step-content "><span>03/12</span></div>
                              </div>
                              <div className="mt-step-col done last">
                                  <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div className="mt-step-title "><span>Approve</span></div>
                                  <div className="mt-step-content "><span>Your Ad</span></div>
                              </div>
                          </div>
                        </div>
                        <div className="footer">
                          <hr className="footer bg-grey"/>
                          <span className="social-link"><img src={require("../res/img/eye.png")}/>
                          View This Ad</span>
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
                        <img src={require("../res/img/instagram1.png")}/>
                        <span className="social-link">
                          Instagram Post<Link to="/seller_page">@beastyboyy</Link>
                        </span>
                        <span className="price pull-right">
                          <span className="price">$100</span>
                          <Link to="buyer_messages" className="color-dark"><i className="fa fa-comment-o"></i> Message</Link>
                        </span>
                      </div>
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
                              <div className="mt-step-col done">
                                  <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                  <div className="mt-step-title "><span>Ad Laundched</span></div>
                                  <div className="mt-step-content "><span>03/12</span></div>
                              </div>
                              <div className="mt-step-col done last">
                                  <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
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
                        <img src={require("../res/img/twitter1.png")}/>
                        <span className="social-link">
                          Ad Campaign <Link to="/seller_page">@Target Tree</Link>
                        </span>
                        <span className="price pull-right">
                          <span className="price">$400</span>
                          <Link to="buyer_messages" className="color-dark"><i className="fa fa-comment-o"></i> Message</Link>
                        </span>
                      </div>
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
                            <div className="mt-step-col done">
                                <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div className="mt-step-title "><span>Ad Laundched</span></div>
                                <div className="mt-step-content "><span>03/12</span></div>
                            </div>
                            <div className="mt-step-col done last">
                                <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
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
                        <img src={require("../res/img/instagram1.png")}/>
                        <span className="social-link">
                          Instagram Ad <Link to="/seller_page">@marie_condo</Link>
                        </span>
                        <span className="price pull-right">
                         <span className="price">$100</span>
                          <Link to="buyer_messages" className="color-dark"><i className="fa fa-comment-o"></i> Message</Link>
                        </span>
                      </div>
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
                            <div className="mt-step-col done">
                                <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
                                <div className="mt-step-title "><span>Ad Laundched</span></div>
                                <div className="mt-step-content "><span>03/12</span></div>
                            </div>
                            <div className="mt-step-col done last">
                                <div className="mt-step-number bg-green"><img src={require("../res/img/check.png")}/></div>
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
