import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import PersonIcon from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import "../../res/bootstrap/css/bootstrap.min.css"
import "../../res/font-awesome/css/font-awesome.min.css"
import "../../res/css/components.min.css"
import "../../res/css/global.css"
import "../../res/css/header.css"

import logoUrl from '../../res/img/logo.png';

const styles = theme => ({
  
});

const Header = props => {
  const { classes, handleToggleDrawer } = props;
  return (
    <div class="header_section">
      <div class="nav_bar">
        <div class="logo">
          <img src={logoUrl}/>
        </div>
        <div class="nav_menu justify-content-end">
          <button id="navbar_toggler" class="navbar_toggler_open mobile_navbar_toggler" type="button">
            <span class="navbar_toggler_icon"></span>
          </button>
          <ul class="nav_menu_list">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
            <li class="menu_last_li">
              <a href="#" class="btn bg-yellow btn-small">Become an Adza</a>
            </li>
          </ul>
        </div>
      </div>      
    </div>
  );
};

export default withStyles(styles)(Header);
