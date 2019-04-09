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
import { Link } from 'react-router-dom';

import "../../res/bootstrap/css/bootstrap.min.css"
import "../../res/font-awesome/css/font-awesome.min.css"
import "../../res/css/components.min.css"
import "../../res/css/global.css"
import "../../res/css/header.css"
import "../../res/css/header_search.css"

import $ from "jquery";

import logoUrl from '../../res/img/logo.png';

const styles = theme => ({
  
});

class Header extends React.Component{
  state = {
    headerType: "static"
  };

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps( nextProps ){
    this.setState({headerType: nextProps.type})
  }

  componentDidMount() {
    this.setState({headerType: this.props.type});

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

  /*
    header types:
      static : for general pages such as About, Help & Support
      homepage : for homepage
      seller : for seller pages
      buyer : for buyer pages
  */
  renderSwitchHeader(){

    if( this.state.headerType == 'seller' ) // Seller Pages
        return ( 'seller_header' );
    else if( this.state.headerType == 'buyer' ) // Buyer Pages
        return ( 'buyer_header' );
    else if( this.state.headerType == 'homepage' ) // Homepage
    {
        return (
          <div className="header_section">
            <div className="nav_bar">
              <div className="logo">
                <Link to="/"><img src={logoUrl}/></Link>
              </div>
              <div className="nav_menu justify-content-end">
                <button id="navbar_toggler" className="navbar_toggler_open mobile_navbar_toggler" type="button">
                  <span className="navbar_toggler_icon"></span>
                </button>
                <ul className="nav_menu_list">
                  <li>
                    <Link to="/about">About</Link>
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
                  <Link to="/about">About</Link>
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
    else // Static Pages
    {
        return ( 
          <div class="header_search">
              <div class="nav_bar">
                  <div class="logo">
                      <Link to="/"><img src={logoUrl}/></Link>
                      <div class="input-icon">
                          <i class="fa fa-search input"></i>
                          <input type="text" class="form-control search-input" placeholder="Where do you want to see your ad?" />
                          <a class="btn bg-blue search-but color-white">Search</a>
                      </div>
                  </div>
                  <div class="nav_menu justify-content-end">
                      <ul class="nav_menu_list">
                          <li>
                              <Link to="/about">About</Link>
                          </li>
                          <li>
                              <a href="#">Sign Up</a>
                          </li>
                          <li>
                              <a href="#">Log In</a>
                          </li>
                          <li class="menu_last_li">
                              <a href="#" class="menu_adza">Become an Adza</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
        );
    }
  }

  render(){
    return (
      <div>
        { this.renderSwitchHeader() }
      </div>
    );
  }
};

export default withStyles(styles)(Header);
