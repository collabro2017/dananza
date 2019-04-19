import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { increment, decrement } from "../store/reducers/stepCounter";
import SellerSidebar from "../components/Sidebar/SellerSidebar";

import "../res/css/Seller_Dashboard_Order.css"

class SellerOrders extends React.Component{

  state={'headerType': "seller"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Seller Orders"
  }

  render(){
    return (
    	<div className="dashboard_seller">
	    	<div className="page-content seller_order">
    				<SellerSidebar navitem={"orders"}/>
            <div className="page-result-wrapper">
      				<div className="page-result">
                <label className="title">Overview Analytics</label>
                <div className="order-by">
                  <span className="grey">Order Status:</span>
                  <FormControl>
                    <Select value={"all"} 
                        inputProps={{
                          name: 'orderby',
                          id: 'orderby-simple',
                        }}>
                      <MenuItem value={'all'}>All Orders</MenuItem>
                      <MenuItem value={'order1'}>Order1</MenuItem>
                      <MenuItem value={'order2'}>Order2</MenuItem>
                      <MenuItem value={'order3'}>Order3</MenuItem>
                      <MenuItem value={'order4'}>Order4</MenuItem>
                    </Select>
                  </FormControl>
                  <a className="add-channel">+ Add Another Channel</a>
                </div>
                <div className="page-result-content">
                  <label className="subtitle">Needs Your Approval</label>
                  <div className="order active">
                    <img src={require("../res/img/order1.png")} />
                    <div className="order-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/ad_campaign.png")} />
                          <span>Ad Campaign</span>
                          <a>axel92</a>
                        </span>
                        <span className="header-right">
                          <span className="price">$300</span>
                          <img src={require("../res/img/message.png")} />
                          Message
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="order-timeline">
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
                        <button className="btn btn-default btn-yellow btn-radius">
                          <img src={require("../res/img/review.png")} />
                          Review Media
                        </button>
                      </div>
                    </div>
                  </div>
                  <label className="subtitle">Ready for Launch</label>
                  <div className="order active">
                    <img src={require("../res/img/order2.png")} />
                    <div className="order-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/instagram_sq.png")} />
                          <span>Instagram Story for</span>
                          <a>jane_123</a>
                        </span>
                        <span className="header-right">
                          <span className="price">$100</span>
                          <img src={require("../res/img/message.png")} />
                          Message
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="order-timeline">
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
                  <label className="subtitle">Completed Orders</label>
                  <div className="order">
                   <img src={require("../res/img/order3.png")} />
                    <div className="order-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/twitter_sq.png")} />
                          <span>Twitter Ad for </span>
                          <a>sollen_dior </a>
                        </span>
                        <span className="header-right">
                          <span className="price">$65</span>
                          <img src={require("../res/img/message.png")} />
                          Message
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="order-timeline">
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
                  <div className="order">
                    <img src={require("../res/img/order4.png")} />
                    <div className="order-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/instagram_sq.png")} />
                          <span>Instagram Ad for </span>
                          <a>beastyboyy</a>
                        </span>
                        <span className="header-right">
                          <span className="price">$100</span>
                          <img src={require("../res/img/message.png")} />
                          Message
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="order-timeline">
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
                  <div className="order">
                  <img src={require("../res/img/order5.png")} />
                    <div className="order-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/ad_campaign.png")} />
                          <span>Ad Campaign for </span>
                          <a>martin_values</a>
                        </span>
                        <span className="header-right">
                          <span className="price">$400</span>
                          <img src={require("../res/img/message.png")} />
                          Message
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="order-timeline">
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
                  <div className="order">
                    <img src={require("../res/img/order1.png")} />
                    <div className="order-content">
                      <div className="content-header">
                        <span className="header-left">
                          <img src={require("../res/img/instagram_sq.png")} />
                          <span>Instagram Ad for </span>
                          <a>marie_condo</a>
                        </span>
                        <span className="header-right">
                          <span className="price">$100</span>
                          <img src={require("../res/img/message.png")} />
                          Message
                        </span>
                      </div>
                      <div className="content-body">
                        <div className="order-timeline">
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
                <div className="pagination">
                  <a className="btn btn-default hidden" id="prev" hidden> &lt; </a>
                  <div className="btn-group" data-toggle="buttons" id="pages">
                    <label className="btn btn-page active">
                        <input type="radio" className="toggle"/> 1 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 2 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 3 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 4 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 5 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 6 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 7 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 8 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 9 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 10 </label>
                </div>
                <a className="btn btn-default" id="next"> > </a>
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
)(SellerOrders);
