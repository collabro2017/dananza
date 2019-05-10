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
  const { open, classes, navitem, avatar } = props;
  return (
    <div className="page-sidebar buyer-sidebar">
        <div className="section target-tree">
          <div className="image">
            {avatar}
            <h1 className="buyer-name">Michaela Seyra</h1>
            <h5 className="buyer-mail">@michaela_Syr</h5>
          </div>
        </div>
        <div className="section">
          <div className="btn-group" data-toggle="buttons" id="pages">
            <Link to="/buyer_profile">
               <label className={navitem=="edit_profile"?"btn btn-default active":"btn btn-default"}>
                <img className="nav-icon" src={require("../../res/img/person.png")} alt=""/>
                  <input type="radio" className="toggle" /> Profile Page
              </label>
            </Link>
            <Link to="/buyer_saved">
               <label className={navitem=="saved"?"btn btn-default active":"btn btn-default"}>
                <img className="nav-icon" src={require("../../res/img/saved.png")} alt=""/>
                  <input type="radio" className="toggle" /> Saved
              </label>
            </Link>  
            <Link to="/buyer_campaigns">   
               <label className={navitem=="campaigns"?"btn btn-default active":"btn btn-default"}>
                <img className="nav-icon" src={require("../../res/img/campaigns.png")} alt=""/>
                  <input type="radio" className="toggle" /> Campaigns
              </label>
            </Link>  
            <Link to="/buyer_messages">
               <label className={navitem=="messages"?"btn btn-default active":"btn btn-default"}>
                <img className="nav-icon" src={require("../../res/img/messages.png")} alt=""/>
                  <input type="radio" className="toggle" /> Messages
              </label>
            </Link>
            </div>
        </div>
      </div>
    
  );
};

export default (BuyerSidebar);
