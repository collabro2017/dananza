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
import { withRouter } from "react-router-dom";
import { buyerActions } from '../store/actions';

import BuyerSidebar from "../components/Sidebar/BuyerSidebar";

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import "../res/css/Dananza_Search.css"
import "../res/css/BuyerCampaigns.css"

class BuyerCampaigns extends React.Component{

  state={
    'headerType': "buyer",
    'campaign_status': 'All',
    allCampaigns: []
  }

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )

    this.props.dispatch(buyerActions.getAllCampaigns());
  }

  componentWillReceiveProps( nextprops ) {
    this.setState({ allCampaigns: nextprops.campaigns });
    if(!this.state.allCampaigns) this.props.dispatch(buyerActions.createNewCampaign()); 
  }

  onChangeRelevance = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount(){

    document.title = "Buyer Campaigns"

    var index     = 1;
    var sliderItemCount = $(".slider-item").length;

    if(sliderItemCount == index) {
      $(".indicator .next").addClass('disabled');
    }

    if(index == 1) {
      $(".indicator .previous").addClass('disabled');
    }

    $(window).resize(function(){
      if( $(".page-sidebar").css('display') == 'none' )
        $(".slider-item:first").css('margin-left', 'calc(((( -100vw )*0.74445) - 15px)*'+(index-1)+')');
      else
        $(".slider-item:first").css('margin-left', 'calc(((( -100vw + 330px )*0.74445) - 15px)*'+(index-1)+')');
    });

    $(".next").click(function () {
      var itemWidth   = parseInt($(".slider-item").css('width'));
      if(sliderItemCount == index+1) {
        $(".indicator .next").addClass('disabled');
      }
      else{
        $(".indicator .next").removeClass('disabled');  
      }
      $(".indicator .previous").removeClass('disabled');  

      index++;
      if( $(".page-sidebar").css('display') == 'none' )
        $(".slider-item:first").css('margin-left', 'calc(((( -100vw )*0.74445) - 15px)*'+(index-1)+')');
      else
        $(".slider-item:first").css('margin-left', 'calc(((( -100vw + 330px )*0.74445) - 15px)*'+(index-1)+')');
    });

    $(".previous").click(function () {
      var itemWidth   = parseInt($(".slider-item").css('width'));
      if(index == 2) {
        $(".indicator .previous").addClass('disabled');
      }
      else{
        $(".indicator .previous").removeClass('disabled');  
      }
      $(".indicator .next").removeClass('disabled');  
    
      index--;
      if( $(".page-sidebar").css('display') == 'none' )
        $(".slider-item:first").css('margin-left', 'calc(((( -100vw )*0.74445) - 30px)*'+(index-1)+')');
      else
        $(".slider-item:first").css('margin-left', 'calc(((( -100vw + 330px )*0.74445) - 30px)*'+(index-1)+')');
    });
  }

  render(){
    if( !this.state.allCampaigns ) return;
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
                {
                  this.state.allCampaign ? this.state.allCampaigns.map(
                    (item, index) =>(
                      <div className="slider-item">
                        <div className="panel-title">
                          <span className="first">{ item.campaign_name }</span>
                          <span className="second">  
                            <Link to="buyer_messages" className="color-dark">
                              <i className="fa fa-comment-o"></i> Message
                            </Link>
                          </span>
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
                              {
                                item.Campaign_Listings.map(
                                  (l_items, l_index) =>(
                                    <tr style={{'height':'73px'}}>
                                      <td>
                                        <img 
                                          className="left" 
                                          src={require("../res/img/themainmenu_1.png")}/>
                                          { this.state.allCampaigns[index].Campaign_Listings[l_index].Listing.title }
                                      </td>
                                      <td>{ this.state.allCampaigns[index].Campaign_Listings[l_index].Listing.media_type }</td>
                                      <td>{ this.state.allCampaigns[index].Campaign_Listings[l_index].Listing.insert_date.substring(0, 10) }</td>
                                      <td>{ this.state.allCampaigns[index].Campaign_Listings[l_index].Listing.price }</td>
                                    </tr>
                                  )
                                )
                              }
                              </tbody>
                            </table>
                          </div>
                          <div className="cancel">
                            <a href="#"><img src={require("../res/img/remove.png")}/> Cancel Ad</a>
                            <Link to="/new_order" className="btn btn-lg preview-media pull-right"><img src={require("../res/img/review.png")}/>Review Post</Link>
                          </div>
                        </div>
                      </div>
                    )) : ''
                }
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
  const { campaigns } = state.buyer;
  return {
    campaigns
  };  
};

const mapDispatchToProps = dispatch => {
  return {
     dispatch, 
  }
  
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(BuyerCampaigns));
