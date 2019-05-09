import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import SellerSidebar from "../components/Sidebar/SellerSidebar";

import "../res/css/Seller_Dashboard_Calendar.css"
import "react-big-calendar/lib/css/react-big-calendar.css"
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

const localizer = BigCalendar.momentLocalizer(moment)
const myEventsList = []

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
                      <div className="content">
                        <div className="username">johndeaux</div>
                        <div className="detail">
                          <div>
                            <img src={require("../res/img/instagram_sq.png")} />
                            <span>Instagram Story</span>
                          </div>
                          <div className="date">
                            <span>Date:&nbsp;&nbsp;</span>
                            <span className="darkgrey">March 18, 2018, 8:00 AM</span>
                          </div>
                        </div>
                        <div className="row actions">
                          <div className="col-sm-6">
                            <button className="btn btn-yellow">
                              <img src={require("../res/img/message.png")} />
                              Message Buyer
                            </button>
                          </div>
                          <div className="col-sm-6">
                            <button className="btn btn-yellow">
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
                      <div>
                        <img src={require("../res/img/portlet-collapse-icon.png")}/>
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
                  <div className="col-sm-12" style={{ 'height': '600px'}}>
                      <BigCalendar
                            localizer={localizer}
                            events={myEventsList}
                            startAccessor="start"
                            endAccessor="end"
                          />
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
)(SellerCalendar);
