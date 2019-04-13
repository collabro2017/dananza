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
        <div className="section target-tree">
          <div className="image">
            <img src={require("../../res/img/userinfo_img.png")} />
            <h1 className="buyer-name">Michaela Seyra</h1>
            <h5 className="buyer-mail">@michaela_Syr</h5>
          </div>
        </div>
        <div className="section">
          <div className="btn-group" data-toggle="buttons" id="pages">
            <Link to="/buyer_profile">
              <label className="btn btn-default active">
                <img className="nav-icon" src={require("../../res/img/person.png")} />
                  <input type="radio" className="toggle" /> Profile Page
              </label>
            </Link>
            <Link to="/buyer_saved">
              <label className="btn btn-default">
                <img className="nav-icon" src={require("../../res/img/saved.png")} />
                  <input type="radio" className="toggle" /> Saved
              </label>
            </Link>  
            <Link to="/buyer_campaigns">   
              <label className="btn btn-default">
                <img className="nav-icon" src={require("../../res/img/campaigns.png")} />
                  <input type="radio" className="toggle" /> Campaigns
              </label>
            </Link>  
            <Link to="/buyer_messages">
              <label className="btn btn-default">
                <img className="nav-icon" src={require("../../res/img/messages.png")} />
                  <input type="radio" className="toggle" /> Messages
              </label>
            </Link>
            </div>
        </div>
      </div>
    
  );
};

export default (BuyerSidebar);
