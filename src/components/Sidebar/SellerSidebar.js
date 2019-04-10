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

import "../../res/css/SellerSidebar.css"

const drawerWidth = 240;


const SellerSidebar = props => {
  const { open, classes } = props;
  return (
        <div className="page-sidebar">
          <div className="section target-tree">
            <div className="image">
              <img alt="" src={require("../../res/img/profile_photo.png")}/>
              <h1> Target Tree </h1>
            </div>
            <div className="dial">
              <input className="knob" data-fgcolor="#2ab7c9" data-width="100%" data-min="0" data-displayprevious="true" value="44" readOnly=""/>
            </div>
            <div className="dial">
              <input className="knob" data-fgcolor="#2ab7c9" data-width="100%" data-min="0" data-displayprevious="true" value="99" readOnly=""/>
            </div>
            <div className="dial">
              <input className="knob" data-fgcolor="#2ab7c9" data-width="100%" data-min="0" data-displayprevious="true" value="98" readOnly=""/>
            </div>
            <div className="dial">
              <input className="rate" data-fgcolor="#2ab7c9" data-width="100%" data-max="5.0" data-displayprevious="true" value="5.0" readOnly=""/>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="section">
            <div className="btn-group" data-toggle="buttons" id="pages">
              <Link to="/seller_orders">
                <label className="btn btn-default">
                  <i className="fa fa-shopping-cart"></i>
                    <input type="radio" className="toggle"/> Orders
                </label>
              </Link>
              <Link to="/seller_analytics">
                <label className="btn btn-default">
                  <i className=" fa fa-bar-chart"></i>
                    <input type="radio" className="toggle"/> Analytics
                </label>
              </Link>
              <Link to="/seller_calendar">
                <label className="btn btn-default">
                  <i className="fa fa-calendar"></i>
                    <input type="radio" className="toggle"/> Calendar
                </label>
              </Link>
              <Link to="/seller_page">
                <label className="btn btn-default">
                  <i className="fa fa-user"></i>
                    <input type="radio" className="toggle"/> Seller's Page
                </label>
              </Link>
              <Link to="/seller_messages">
                <label className="btn btn-default">
                  <i className="fa fa-comment-o"></i>
                    <input type="radio" className="toggle"/> Messages
                </label>
              </Link>
          </div>
        </div>
      </div>
  );
};

export default (SellerSidebar);
