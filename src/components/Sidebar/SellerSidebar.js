import React from "react";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";
import Knob from 'react-canvas-knob';

import "../../res/css/SellerSidebar.css"

const drawerWidth = 240;


const SellerSidebar = props => {
  const { open, classes, navitem } = props;
  return (
        <div className="page-sidebar">
          <div className="section target-tree">
            <div className="image">
              <img alt="" src={require("../../res/img/profile_photo.png")}/>
              <h1> Target Tree </h1>
            </div>
            <div className="dial">
              <Knob
                value={44}
                fgColor={'#2ab7c9'}
                className="knob"
                displayprevious="true"
                width="60"
                height="60"
                thickness={0.12}
                displayInput={false}
                displayCustom={()=>(<input value={'44%'}/>)}
              />
              <h6>Response Rate</h6>
            </div>
            <div className="dial">
              <Knob
                value={99}
                fgColor={'#2ab7c9'}
                className="knob"
                displayprevious="true"
                width="60"
                height="60"
                thickness={0.12}
                displayInput={false}
                displayCustom={()=>(<input value={'99%'}/>)}
              />
              <h6>Order Completed</h6>
            </div>
            <div className="dial">
              <Knob
                value={98}
                fgColor={'#2ab7c9'}
                className="knob"
                displayprevious="true"
                width="60"
                height="60"
                thickness={0.12}
                displayInput={false}
                displayCustom={()=>(<input value={'98%'}/>)}
              />
              <h6>Delivered on Time</h6>
            </div>
            <div className="dial">
              <Knob
                max={5.0}
                value={5.0}
                fgColor={'#2ab7c9'}
                className="knob"
                displayprevious="true"
                width="60"
                height="60"
                thickness={0.12}
                displayInput={false}
                displayCustom={()=>(<input value={'5.0'}/>)}
              />
              <h6>Rating</h6>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="section">
            <div className="btn-group" data-toggle="buttons" id="pages">
              <Link to="/seller_orders">
                <label className={navitem=="orders"?"btn btn-default active":"btn btn-default"}>
                  <img src={require('../../res/img/sidebar_cart.png')}/>
                  <input type="radio" className="toggle"/> Orders
                </label>
              </Link>
              <Link to="/seller_analytics">
                <label className={navitem=="analytics"?"btn btn-default active":"btn btn-default"}>
                  <img src={require('../../res/img/sidebar_graph.png')}/>
                  <input type="radio" className="toggle"/> Analytics
                </label>
              </Link>
              <Link to="/seller_calendar">
                <label className={navitem=="calendar"?"btn btn-default active":"btn btn-default"}>
                  <img src={require('../../res/img/sidebar_calendar.png')}/>
                  <input type="radio" className="toggle"/> Calendar
                </label>
              </Link>
              <Link to="/seller_dashboard">
                <label className={navitem=="sellers_page"?"btn btn-default active":"btn btn-default"}>
                  <img src={require('../../res/img/sidebar_user.png')}/>
                  <input type="radio" className="toggle"/> Seller's Page
                </label>
              </Link>
              <Link to="/seller_messages">
                <label className={navitem=="message"?"btn btn-default active":"btn btn-default"}>
                  <img src={require('../../res/img/messages.png')}/>
                  <input type="radio" className="toggle"/> Messages
                </label>
              </Link>
          </div>
        </div>
      </div>
  );
};

export default (SellerSidebar);
