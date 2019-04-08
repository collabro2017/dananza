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
// import "../../res/css/global.css"
import "../../res/css/header.css"

import $ from "jquery";

import logoUrl from '../../res/img/logo.png';

const styles = theme => ({
  
});

class Header extends React.Component{
  componentDidMount() {
    $('.mobile_navbar_toggler').on('click', function() 
    {
      console.log( "clicked" );
      if( !$('.nav_mobile_menu').hasClass('show') ) 
      {
        $('.nav_mobile_menu').addClass('show');
        $('.mobile_navbar_toggler').removeClass('navbar_toggler_open');
        $('.mobile_navbar_toggler').addClass('navbar_toggler_close');
      }
      else 
      {
        $('.nav_mobile_menu').removeClass('show');
        $('.mobile_navbar_toggler').removeClass('navbar_toggler_close');
        $('.mobile_navbar_toggler').addClass('navbar_toggler_open');
      }
      $('.nav_mobile_menu').slideToggle(200);
    });
  }

  render(){
    return (
      <div className="header_section">
        <div className="nav_bar">
          <div className="logo">
            <img src={logoUrl}/>
          </div>
          <div className="nav_menu justify-content-end">
            <button id="navbar_toggler" className="navbar_toggler_open mobile_navbar_toggler" type="button">
              <span className="navbar_toggler_icon"></span>
            </button>
            <ul className="nav_menu_list">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Sign Up</a>
              </li>
              <li>
                <a href="#">Log In</a>
              </li>
              <li className="menu_last_li">
                <a href="#" className="btn bg-yellow btn-small">Become an Adza</a>
              </li>
            </ul>
          </div>
        </div>   
        <div className="nav_mobile_menu" style={{display:'none'}}>
          <ul className="nav_mobile_list">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
            <li>
              <a href="#">Log In</a>
            </li>
            <li className="menu_last_li">
              <a href="#" className="menu_adza">Become an Adza</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
};

export default withStyles(styles)(Header);
