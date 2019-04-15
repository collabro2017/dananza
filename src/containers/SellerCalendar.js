import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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
    	<div className="dashboard_seller seller_calendar">
	    	<div className="page-content">
				<SellerSidebar />
				<div className="page-result">
          <div class="col-sm-12">
          <label class="subtitle">
            Today, April 13, 2019
          </label>
        </div>
        <div class="page-result-content">
          <div class="row">
            <div class="col-sm-12">
              <div class="upcoming-box">
                <div class="user-profile">
                  <img src={require("../res/img/user1.png")} />
                </div>
                <div>
                  <div class="username"><b>johndeaux</b></div>
                  <div class="detail">
                    <img src={require("../res/img/instagram_sq.png")} />
                    <div><b>Instagram Story</b></div>
                    <div class="date">
                      <b>Date:&nbsp</b>
                      <span class="darkgrey">March 18, 2018, 8:00 AM</span>
                    </div>
                  </div>
                  <div class="row actions">
                    <div class="col-sm-6">
                      <button class="btn-yellow">
                        <img src={require("../res/img/message.png")} />
                        Message Buyer
                      </button>
                    </div>
                    <div class="col-sm-6">
                      <button class="btn-yellow">
                        <img src={require("../res/img/view.png")} />
                        View Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <select value="2 More..." class="bs-select trans-select" data-width="90px">
                <option>2 More...</option>
                <option>Order1</option>
                <option>Order2</option>
                <option>Order3</option>
                <option>Order4</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="title">
                <button class="btn-circle"> &lt; </button>
                <button class="btn-circle"> &gt; </button>
                <span>March 2019</span>
                <div class="btn-group calendar-btn-group" data-toggle="buttons" id="pages">
                            <label class="btn btn-default">
                                <input type="radio" class="toggle" /> Day
                            </label>
                            <label class="btn btn-default">
                                <input type="radio" class="toggle" /> Week
                            </label>
                            <label class="btn btn-default active">
                                <input type="radio" class="toggle" /> Month
                            </label>
                            <label class="btn btn-default">
                                <input type="radio" class="toggle" /> Year
                            </label>
                        </div>
                      </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="calendar">
                <div class="row-week">
                  <div class="col-week"> Sun </div>
                  <div class="col-week"> Mon </div>
                  <div class="col-week"> Tue </div>
                  <div class="col-week"> Wed </div>
                  <div class="col-week"> Thu </div>
                  <div class="col-week"> Fri </div>
                  <div class="col-week darkgrey"> Sat </div>
                </div>
                <div class="row-week">
                  <div class="col-day grey back-grey"> <div class="date">24</div> </div>
                  <div class="col-day grey"> <div class="date">25</div> </div>
                  <div class="col-day grey"> <div class="date">26</div> </div>
                  <div class="col-day grey"> <div class="date">27</div> </div>
                  <div class="col-day grey"> <div class="date">28</div> </div>
                  <div class="col-day"> <div class="date">1</div> </div>
                  <div class="col-day back-grey"> <div class="date">2</div> </div>
                </div>
                <div class="row-week">
                  <div class="col-day back-grey"> <div class="date">3</div> </div>
                  <div class="col-day">
                    <div class="date">4</div>
                    <div class="events">
                      <img src={require("../res/img/user1.png")}/>
                      <img src={require("../res/img/user1.png")}/>
                      <img src={require("../res/img/user1.png")}/>
                    </div>
                  </div>
                  <div class="col-day"> <div class="date">5</div> </div>
                  <div class="col-day"> <div class="date">6</div> </div>
                  <div class="col-day"> <div class="date">7</div> </div>
                  <div class="col-day"> <div class="date">8</div> </div>
                  <div class="col-day back-grey"> <div class="date">9</div> </div>
                </div>
                <div class="row-week">
                  <div class="col-day back-grey"> <div class="date">10</div> </div>
                  <div class="col-day"> <div class="date">11</div> </div>
                  <div class="col-day"> <div class="date">12</div> </div>
                  <div class="col-day"> <div class="date">13</div> </div>
                  <div class="col-day"> <div class="date">14</div> </div>
                  <div class="col-day"> <div class="date">15</div> </div>
                  <div class="col-day back-grey"> <div class="date">16</div> </div>
                </div>
                <div class="row-week">
                  <div class="col-day back-grey"> <div class="date">17</div> </div>
                  <div class="col-day"> <div class="date active">18</div> </div>
                  <div class="col-day"> <div class="date">19</div> </div>
                  <div class="col-day"> <div class="date">20</div> </div>
                  <div class="col-day"> <div class="date">21</div> </div>
                  <div class="col-day"> <div class="date">22</div> </div>
                  <div class="col-day back-grey"> <div class="date">23</div> </div>
                </div>
                <div class="row-week">
                  <div class="col-day back-grey"> <div class="date">24</div> </div>
                  <div class="col-day"> <div class="date">25</div> </div>
                  <div class="col-day"> <div class="date">26</div> </div>
                  <div class="col-day"> <div class="date">27</div> </div>
                  <div class="col-day"> <div class="date">28</div> </div>
                  <div class="col-day"> <div class="date">29</div> </div>
                  <div class="col-day back-grey"> <div class="date">30</div> </div>
                </div>
                <div class="row-week">
                  <div class="col-day back-grey"> <div class="date">31</div> </div>
                  <div class="col-day grey"> <div class="date">1</div> </div>
                  <div class="col-day grey"> <div class="date">2</div> </div>
                  <div class="col-day grey"> <div class="date">3</div> </div>
                  <div class="col-day grey"> <div class="date">4</div> </div>
                  <div class="col-day grey"> <div class="date">5</div> </div>
                  <div class="col-day grey back-grey"> <div class="date">6</div> </div>
                </div>
              </div>
            </div>
          </div>
        </div>				</div>
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
