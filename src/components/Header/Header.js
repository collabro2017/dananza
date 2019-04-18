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
// import "../../res/css/drop_menu.css"

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

    window.jQuery = $;
    window.$ = $;
    global.jQuery = $;
    
    const bootstrap = require('bootstrap');

    this.setState({headerType: nextProps.type})
  }

  componentDidMount() {
    this.setState({headerType: this.props.type});

    $(document).ready(function () {
      $('.mobile_navbar_toggler').on('click', function() 
      {
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
    })
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
                    <Link to="/seller_page">Adza Page</Link>
                  </li>
                  <li>
                    <Link to="/seller_dashboard">Campaign</Link>
                  </li>
                  <li>
                    <Link to="/seller_messages">Messages</Link>
                  </li>
                  <li className="dropdown dropdown-user">
                    <a href="javascript:;" className="dropdown-toggle seller_toggle" 
                        data-toggle="dropdown" 
                        data-hover="dropdown" 
                        data-close-others="false"
                    >
                      <img alt="" className="img-circle seller_toggle" src={require("../../res/img/drop_menu_profile.png")} />
                      <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-default seller ">
                        <li>
                            <a href="#">
                                My Profile 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                My Dashboard 
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Account Settings
                            </a>
                        </li>
                        <li class="divider"> </li>
                        <li>
                            <a href="#">
                                Login to Other Accounts<img  className="menu_icon" src={require("../../res/img/drop_menu_icon_user.png")}/>
                            </a>
                        </li>
                        <li class="other_act_img">
                            <a className="other_links" href="#">
                             <img src={require("../../res/img/drop_menu_item1.png")}/>
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item2.png")}/>                                
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item3.png")}/>                                
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item4.png")}/>
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item5.png")}/>
                            </a>
                            <div class="more">+2</div>
                        </li>
                        <li>
                            <a href="#">
                                Switch to Buyer <img src={require("../../res/img/drop_menu_icon_swt.png")}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Help <img src={require("../../res/img/drop_menu_icon_help.png")}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Log Out<img src={require("../../res/img/drop_menu_icon_logout.png")}/>
                            </a>
                        </li>
                    </ul>
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
                        <img alt="" className="img-circle" src={require("../../res/img/logged_user.png")} />
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-default">
                        <li>
                            <Link to="/buyer_profile">My Profile </Link>
                        </li>
                        <li>
                            <Link to="/buyer_landing">My Dashboard </Link>
                        </li>
                        <li>
                            <Link to="/buyer_settings">Account Setting</Link>
                        </li>
                        <li className="divider"> </li>
                        <li>
                            <Link to="/seller_dashboard">
                                Switch to Buyer
                                <img src={require("../../res/img/switch.png")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/help">
                                Help 
                                <img src={require("../../res/img/help.png")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                              logout
                                <img src={require("../../res/img/logout.png")}/>
                            </Link>
                        </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <button id="navbar_toggler1" className="navbar_toggler_open mobile_navbar_toggler" type="button">
                <span className="navbar_toggler_icon"></span>
              </button>
              <div className="nav_mobile_menu" style={{display:'none'}}>
                <ul className="nav_mobile_list">
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
                        <img alt="" className="img-circle" src={require("../../res/img/logged_user.png")} />
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-default">
                        <li>
                            <Link to="/buyer_profile">My Profile </Link>
                        </li>
                        <li>
                            <Link to="/buyer_landing">My Dashboard </Link>
                        </li>
                        <li>
                            <Link to="/buyer_settings">Account Setting</Link>
                        </li>
                        <li className="divider"> </li>
                        <li>
                            <Link to="/seller_dashboard">
                                Switch to Buyer
                                <img src={require("../../res/img/switch.png")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/help">
                                Help 
                                <img src={require("../../res/img/help.png")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                              logout
                                <img src={require("../../res/img/logout.png")}/>
                            </Link>
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
                    <a data-toggle="modal" data-target="#myModal">Sign Up</a>
                    <div id="myModal" className="modal fade modal-custom" role="dialog">
                      <div className="modal-dialog modal-dialog-custom">
                        <div className="modal-content modal-content-custom">
                          <div className="modal-header modal-header-custom">
                            <h4 className="modal-title">Join Dananza</h4>
                          </div>
                          <div className="modal-body">
                            <Link>
                              <div className="facebook-part col-md-12">
                                <button className="facebook position-relative">
                                    <i className="fa fa-facebook-square facebook-custom"></i>
                                    <span>Sign Up with Facebook</span>
                                </button>
                              </div>
                            </Link>
                            <Link to="/signup">
                              <div className="google-part col-md-12">
                                <button className="google position-relative">
                                  <i className="fa fa-google"></i>
                                  <span>Sign Up with Google</span>
                                </button>
                              </div>
                            </Link>
                            <div className="border-line col-md-12">
                              <span className="thin-line col-md-5"></span>
                              <span className="or">or</span>
                              <span className="thin-line col-md-5"></span>
                            </div>
                            <Link to="/signup">
                              <div className="email-part col-md-12">
                                  <button className="email position-relative">
                                      <i className="fa fa-envelope-o email-custom"></i>
                                      <span>Sign Up By Email</span>
                                  </button>
                              </div>
                            </Link>
                            <div className="footer-line col-md-12">
                                <span className="label">Already a Member?
                                    <a className="signin" id="signin" data-toggle="modal" data-target="#login">Sign In</a>
                                </span>    
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </li>
                  <li>
                    <a className="signin" id="signin" data-toggle="modal" data-target="#login">Log In</a>
                    <div id="login" className="modal fade modal-custom" role="dialog">
                      <div className="modal-dialog modal-dialog-custom">
                        <div className="modal-content modal-content-custom">
                          <div className="modal-header modal-header-custom">
                            <h4 className="modal-title">Log In</h4>
                          </div>
                          <div className="modal-body">
                            <form className="login-form" action="index.html" method="post" novalidate="novalidate">
                                <div className="alert alert-danger display-hide">
                                    <button className="close" data-close="alert"></button>
                                    <span> Enter any username and password. </span>
                                </div>
                                <div className="form-group">
                                    <label className="control-label visible-ie8 visible-ie9 label-custom">Username</label>
                                    <input className="form-control form-control-solid placeholder-no-fix input-custom"
                                    type="text" autocomplete="off" placeholder="Username" name="username"></input>
                                </div>
                                <div className="form-group">
                                    <label className="control-label visible-ie8 visible-ie9 label-custom">Password</label>
                                    <input className="form-control form-control-solid placeholder-no-fix input-custom"
                                    type="password" autocomplete="off" placeholder="Password" name="password"></input>
                                </div>
                                <div className="form-actions form-actions-custom">
                                    <Link to="/buyer_landing">
                                      <button type="submit" className="btn green uppercase">Login</button>
                                    </Link>
                                    <label className="rememberme check mt-checkbox mt-checkbox-outline">
                                        <input type="checkbox" name="remember" value="1"></input>
                                        <span>Remember</span>
                                    </label>
                                    <a href="javascript:;" id="forget-password" className="forget-password">Forgot Password?</a>
                                </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
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
                  <Link to="/signup">Sign Up</Link>
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
                              <Link to="/signup">Sign Up</Link>
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
