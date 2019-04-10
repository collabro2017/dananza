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
import "../../res/css/layout.min.css"

import logoUrl from '../../res/img/logo.png';

import $ from "jquery";

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
    window.jQuery = $;
    window.$ = $;
    global.jQuery = $;
    
    const bootstrap = require('bootstrap');
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
    {
        return (
          <div className="header_search">
            <div className="nav_bar">
              <div className="logo">
                <Link to="/"><img src={logoUrl}/></Link>
                <div className="input-icon">
                  <i className="fa fa-search input"></i>
                  <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?" value=""/>
                  <Link to="/results" className="btn green search-but">Search</Link>
                </div>
              </div>
              <div className="nav_menu justify-content-end">
                <ul className="nav_menu_list">
                  <li>
                    <Link to="/seller_page">Profile</Link>
                  </li>
                  <li>
                    <Link to="/seller_Dashboard">Campaign</Link>
                  </li>
                  <li>
                    <Link to="/seller_messages">Messages</Link>
                  </li>
                  <li className="profile_photo">
                    <img src={require("../../res/img/profile_photo.png")} alt=""/>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        );
    }
    else if( this.state.headerType == 'buyer' ) // Buyer Pages
    {
        return ( 
          <div className="header_search">
            <div className="nav_bar">
              <div className="logo">
                <Link to="/"><img src={logoUrl}/></Link>
                <div className="input-icon">
                  <i className="fa fa-search input"></i>
                  <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?" />
                  <Link to="/results"><button className="btn green search-but">Search</button></Link>
                </div>
              </div>
              <div className="top-menu">
                <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-nav"></a>
                <ul className="nav navbar-nav pull-right">
                  <li>
                    <Link to="/buyer_saved">Saved</Link>
                  </li>
                  <li>
                    <Link to="/buyer_campaigns">Campaigns</Link>
                  </li>
                  <li>
                    <Link to="/buyer_messages"><img src={require("../../res/img/notice-message.png")} style={{margin:'0px 4px 12px'}} alt=""/>Messages</Link>
                  </li>
                  <li>
                    <Link to="/cart"><i className="fa fa-shopping-cart"></i>Cart</Link>
                  </li>
                  <li className="dropdown dropdown-user">
                    <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <img className="img-circle" src={require("../../res/img/logged_user.png")} alt=""/>
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-default">
                      <li>
                          <Link to="/buyer_profile">
                              <i className="icon-user"></i> My Profile </Link>
                      </li>
                      <li>
                          <Link to="/buyer_landing">
                              <i className="icon-calendar"></i> My Dashboard</Link>
                      </li>
                      <li>
                          <Link to="/buyer_settings">
                              <i className="icon-envelope-open"></i> Account Setting</Link>
                      </li>
                      <li className="divider"> </li>
                      <li>
                          <Link to="/seller_dashboard">
                              <i className="icon-rocket"></i> Switch to Seller
                              <span className="badge badge-success"> 7 </span>
                          </Link>
                      </li>
                      <li>
                          <Link to="/help">
                              <i className="icon-lock"></i> Help </Link>
                      </li>
                      <li>
                          <Link to="/">
                              <i className="icon-key"></i> Logout </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
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
                    <Link to="/">Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/buyer_landing">Log In</Link>
                  </li>
                  <li className="menu_last_li">
                    <Link to="/seller_dashboard" className="btn bg-yellow btn-small">Become an Adza</Link>
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
                  <Link to="/">Sign Up</Link>
                </li>
                <li>
                  <Link to="/buyer_landing">Log In</Link>
                </li>
                <li className="menu_last_li">
                    <Link to="/seller_dashboard" className="btn bg-yellow btn-small">Become an Adza</Link>
                </li>
              </ul>
            </div>
          </div>
        );
    }
    else // Static Pages
    {
        return ( 
          <div className="header_search">
              <div className="nav_bar">
                  <div className="logo">
                      <Link to="/"><img src={logoUrl}/></Link>
                      <div className="input-icon">
                          <i className="fa fa-search input"></i>
                          <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?" />
                          <Link to="/results" className="btn bg-blue search-but color-white">Search</Link>
                      </div>
                  </div>
                  <div className="nav_menu justify-content-end">
                      <ul className="nav_menu_list">
                          <li>
                              <Link to="/about">About</Link>
                          </li>
                          <li>
                              <Link to="/">Sign Up</Link>
                          </li>
                          <li>
                              <Link to="/buyer_landing">Log In</Link>
                          </li>
                          <li className="menu_last_li">
                              <Link to="/seller_dashboard" className="menu_adza">Become an Adza</Link>
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
