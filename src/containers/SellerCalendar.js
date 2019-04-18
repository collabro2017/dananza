import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { increment, decrement } from "../store/reducers/stepCounter";
import SellerSidebar from "../components/Sidebar/SellerSidebar";

import "../res/css/Seller_Dashboard_Calendar.css"

class SellerCalendar extends React.Component{

  state={'headerType': "seller"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Seller Calendar"
  }

  render(){
    return (
    	<div className="dashboard_seller">
	    	<div className="page-content seller_calendar">
  				<SellerSidebar navitem={"calendar"}/>
          <div className="page-result-wrapper">
    				<div className="page-result">
              <div className="col-sm-12">
                <label className="subtitle">
                  Today, April 13, 2019
                </label>
              </div>
              <div className="page-result-content">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="upcoming-box">
                      <div className="user-profile">
                        <img src={require("../res/img/user1.png")} />
                      </div>
                      <div>
                        <div className="username"><b>johndeaux</b></div>
                        <div className="detail">
                          <img src={require("../res/img/instagram_sq.png")} />
                          <div><b>Instagram Story</b></div>
                          <div className="date">
                            <b>Date:&nbsp</b>
                            <span className="darkgrey">March 18, 2018, 8:00 AM</span>
                          </div>
                        </div>
                        <div className="row actions">
                          <div className="col-sm-6">
                            <button className="btn-yellow">
                              <img src={require("../res/img/message.png")} />
                              Message Buyer
                            </button>
                          </div>
                          <div className="col-sm-6">
                            <button className="btn-yellow">
                              <img src={require("../res/img/view.png")} />
                              View Order
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <button className="btn btn-default trans-select">
                      2 More...
                      <div className="caret">
                      </div>
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="title">
                      <button className="btn btn-circle"> &lt; </button>
                      <button className="btn btn-circle"> &gt; </button>
                      <span>March 2019</span>
                      <div className="btn-group calendar-btn-group" data-toggle="buttons" id="pages">
                            <label className="btn btn-default">
                                <input type="radio" className="toggle" /> Day
                            </label>
                            <label className="btn btn-default">
                                <input type="radio" className="toggle" /> Week
                            </label>
                            <label className="btn btn-default active">
                                <input type="radio" className="toggle" /> Month
                            </label>
                            <label className="btn btn-default">
                                <input type="radio" className="toggle" /> Year
                            </label>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="calendar">
                      <div className="row-week">
                        <div className="col-week"> Sun </div>
                        <div className="col-week"> Mon </div>
                        <div className="col-week"> Tue </div>
                        <div className="col-week"> Wed </div>
                        <div className="col-week"> Thu </div>
                        <div className="col-week"> Fri </div>
                        <div className="col-week darkgrey"> Sat </div>
                      </div>
                      <div className="row-week">
                        <div className="col-day grey back-grey"> <div className="date">24</div> </div>
                        <div className="col-day grey"> <div className="date">25</div> </div>
                        <div className="col-day grey"> <div className="date">26</div> </div>
                        <div className="col-day grey"> <div className="date">27</div> </div>
                        <div className="col-day grey"> <div className="date">28</div> </div>
                        <div className="col-day"> <div className="date">1</div> </div>
                        <div className="col-day back-grey"> <div className="date">2</div> </div>
                      </div>
                      <div className="row-week">
                        <div className="col-day back-grey"> <div className="date">3</div> </div>
                        <div className="col-day">
                          <div className="date">4</div>
                          <div className="events">
                            <img src={require("../res/img/user1.png")}/>
                            <img src={require("../res/img/user1.png")}/>
                            <img src={require("../res/img/user1.png")}/>
                          </div>
                        </div>
                        <div className="col-day"> <div className="date">5</div> </div>
                        <div className="col-day"> <div className="date">6</div> </div>
                        <div className="col-day"> <div className="date">7</div> </div>
                        <div className="col-day"> <div className="date">8</div> </div>
                        <div className="col-day back-grey"> <div className="date">9</div> </div>
                      </div>
                      <div className="row-week">
                        <div className="col-day back-grey"> <div className="date">10</div> </div>
                        <div className="col-day"> <div className="date">11</div> </div>
                        <div className="col-day"> <div className="date">12</div> </div>
                        <div className="col-day"> <div className="date">13</div> </div>
                        <div className="col-day"> <div className="date">14</div> </div>
                        <div className="col-day"> <div className="date">15</div> </div>
                        <div className="col-day back-grey"> <div className="date">16</div> </div>
                      </div>
                      <div className="row-week">
                        <div className="col-day back-grey"> <div className="date">17</div> </div>
                        <div className="col-day"> <div className="date active">18</div> </div>
                        <div className="col-day"> <div className="date">19</div> </div>
                        <div className="col-day"> <div className="date">20</div> </div>
                        <div className="col-day"> <div className="date">21</div> </div>
                        <div className="col-day"> <div className="date">22</div> </div>
                        <div className="col-day back-grey"> <div className="date">23</div> </div>
                      </div>
                      <div className="row-week">
                        <div className="col-day back-grey"> <div className="date">24</div> </div>
                        <div className="col-day"> <div className="date">25</div> </div>
                        <div className="col-day"> <div className="date">26</div> </div>
                        <div className="col-day"> <div className="date">27</div> </div>
                        <div className="col-day"> <div className="date">28</div> </div>
                        <div className="col-day"> <div className="date">29</div> </div>
                        <div className="col-day back-grey"> <div className="date">30</div> </div>
                      </div>
                      <div className="row-week">
                        <div className="col-day back-grey"> <div className="date">31</div> </div>
                        <div className="col-day grey"> <div className="date">1</div> </div>
                        <div className="col-day grey"> <div className="date">2</div> </div>
                        <div className="col-day grey"> <div className="date">3</div> </div>
                        <div className="col-day grey"> <div className="date">4</div> </div>
                        <div className="col-day grey"> <div className="date">5</div> </div>
                        <div className="col-day grey back-grey"> <div className="date">6</div> </div>
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
)(SellerCalendar);
