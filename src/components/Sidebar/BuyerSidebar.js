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

import "../../res/css/BuyerSidebar.css"

const drawerWidth = 240;


const BuyerSidebar = props => {
  const { open, classes } = props;
  return (
    <div className="page-sidebar">
      <div className="userinfo">
        <img src={require("../../res/img/userinfo_img.png")} />
        <h3>Michaela Seyra</h3>
        <h5>@michaela_Syr</h5>
      </div>
      <div className="selector">
        <ul className="page-sidebar-menu">
          <li className="nav-item">
            <Link to="/buyer_profile">
              <img className="nav-icon" src={require("../../res/img/person.png")} /> Profile Page
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/buyer_saved">
              <img className="nav-icon" src={require("../../res/img/saved.png")} />Saved
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/buyer_campaigns"> 
              <img className="nav-icon" src={require("../../res/img/champaigns.png")} />Campaigns
            </Link>
          </li>
          <li className="nav-item last">
            <Link to="/buyer_messages">
              <img className="nav-icon" src={require("../../res/img/messages.png")} />Messages
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default (BuyerSidebar);