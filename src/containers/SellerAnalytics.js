import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment, decrement } from "../store/reducers/stepCounter";
import SellerSidebar from "../components/Sidebar/SellerSidebar";
import Knob from 'react-canvas-knob';

import "../res/css/Seller_Dashboard_Analytics.css"

class SellerAnalytics extends React.Component{

  state={'headerType': "seller"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Seller Analytics"
  }

  render(){
    return (
    	<div className="dashboard_seller">
	    	<div className="page-content seller_analytics">
  				<SellerSidebar navitem={"analytics"}/>
          <div className="page-result-wrapper">
    				<div className="page-result">
              <div className="col-sm-12">
                <label className="title">
                  Overview Analytics
                  <a className="right btn-export">
                    Export&nbsp;&nbsp;
                    <img src={require('../res/img/export.png')}/>
                  </a>
                </label>
              </div>
              <div className="page-result-content">
                <div className="row">
                  <div className="col-sm-6 whiteback">
                    <h1>$1,999</h1>
                    Total Earned this Month
                  </div>
                  <div className="col-sm-6 whiteback">
                    <h1>200</h1>
                    Orders Created
                  </div>
                </div>
                <div className="row">
                  <div className="dial col-sm-3">
                    <Knob
                      value={99}
                      fgColor={'#2ab7c9'}
                      bgColor={'#ffffff'}
                      className="knob"
                      displayprevious="true"
                      width="100"
                      height="100"
                      thickness={0.12}
                      displayInput={false}
                      displayCustom={()=>(<div class='knobedit'><input value={'99%'}/></div>)}
                    />              
                    <h6>Order Completed</h6>
                  </div>
                  <div className="dial col-sm-3">
                    <Knob
                      value={75}
                      fgColor={'#2ab7c9'}
                      bgColor={'#ffffff'}
                      className="knob"
                      displayprevious="true"
                      width="100"
                      height="100"
                      thickness={0.12}
                      displayInput={false}
                      displayCustom={()=>(<div class='knobedit'><input value={'75%'}/></div>)}
                    />
                    <h6>Response Rate</h6>
                  </div>
                  <div className="dial col-sm-3">
                    <Knob
                      value={98}
                      fgColor={'#2ab7c9'}
                      bgColor={'#ffffff'}
                      className="knob"
                      displayprevious="true"
                      width="100"
                      height="100"
                      thickness={0.12}
                      displayInput={false}
                      displayCustom={()=>(<div class='knobedit'><input value={'98%'}/></div>)}
                    />
                    <h6>Delivered on Time</h6>
                  </div>
                  <div className="dial col-sm-3">
                    <Knob
                      value={5.0}
                      max={5.0}
                      fgColor={'#2ab7c9'}
                      bgColor={'#ffffff'}
                      className="knob"
                      displayprevious="true"
                      width="100"
                      height="100"
                      thickness={0.12}
                      displayInput={false}
                      displayCustom={()=>(<div class='knobedit'><input value={'5.0'}/><i className='fa fa-star fa-rate'></i></div>)}
                    />
                    <h6>Rating</h6>
                  </div>
                </div>
                <div className="row">
                  <label className="subtitle">
                    Most Popular Package
                  </label>
                </div>
                <div className="row d-block">
                  <div className="col-sm-12 page-result-content-info">
                    <img src={require('../res/img/sidebar_cart.png')}/>
                    <span className="info-label">90 orders</span>
                    <img src={require('../res/img/eye.png')}/>
                    <span className="info-label">230 views</span>
                  </div>
                  <div className="col-sm-12">
                    <div className="instagram">
                      <div className="instagram-ico">
                        <img src={require("../res/img/instagram_sq.png")} />
                        &nbsp;&nbsp; 
                        <span className="info-label">Instagram Story</span>
                      </div>
                      <div className="instagram-part">
                        <span className="part">
                          <img src={require('../res/img/dollar.png')}/>
                          <span className="info-label">100</span>
                        </span>
                        <span className="part">
                          <img src={require('../res/img/user.png')}/>
                          &nbsp;&nbsp;
                          <span className="info-label">60k+</span>
                        </span>
                        <span className="part">
                          <i className="fa fa-star color-yellow"></i>
                          &nbsp; 
                          <span className="star-info info-label"> 5.0(17)</span>
                        </span>
                        <span className="part">
                          <a href="#">
                            View Package
                            &nbsp;
                            <i className="fa fa-long-arrow-right info-label"></i>
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <label className="subtitle">
                    Engagement
                  </label>
                </div>
                <div className="row d-flex enagement-info">
                  <div className="col-sm-4">
                    <div className="number">130</div>
                    <div className="comment">Reviews</div>
                  </div>
                  <div className="col-sm-4">
                    <div className="number">0</div>
                    <div className="comment">Negative</div>
                  </div>
                  <div className="col-sm-4">
                    <div className="number">70</div>
                    <div className="comment">Not Rated</div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5 enagement-dial">
                    <div className="col-sm-6">
                      <div className="dial">
                        <Knob
                          value={130}
                          max={200}
                          fgColor={'#2ab7c9'}
                          bgColor={'#ffffff'}
                          className="knob"
                          displayprevious="true"
                          width="100"
                          height="100"
                          thickness={0.12}
                          displayInput={false}
                          displayCustom={()=>(<div class='knobedit'><input value={'130'}/></div>)}
                        />
                        <h6>Positive Reviews</h6>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="dial">
                        <Knob
                          value={4}
                          fgColor={'#fac917'}
                          bgColor={'#2ab7c9'}
                          className="knob"
                          clockwise={false}
                          displayprevious="true"
                          width="100"
                          height="100"
                          thickness={0.12}
                          displayInput={false}
                          displayCustom={()=>(<div class='knobedit'><input value={'4%'}/></div>)}
                        />
                        <h6>Order Canceled</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-7 enagement-process">
                    <div className="progbar-title">Profile Completeness</div>
                    <div className="progress progbar-custom">
                        <div className="progress-bar progress-bar-warning enagement-progress" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{'width': '85%'}}>
                        </div>
                        <div className="progress-percent">85%</div>
                    </div>
                    <div className="complete-profile">
                      <a className="more-button f-14">
                        Complete Profile &nbsp; <i className="fa fa-long-arrow-right info-label"></i>
                      </a>
                     </div>
                    <div className="progbar-title">Responsive Rate</div>
                    <div className="progress progbar-custom">

                        <div className="progress-bar progress-bar-warning enagement-progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width': '75%'}}>
                        </div>
                        <div className="progress-percent">75%</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <label className="subtitle">
                      Sales
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 whiteback">
                    <h1>GRAPH</h1>
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
)(SellerAnalytics);
