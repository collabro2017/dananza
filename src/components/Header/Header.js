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
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { userActions } from '../../store/actions';
import { sellerActions } from '../../store/actions';
import { withRouter } from "react-router-dom";

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
    headerType: ""
  };
  toggleflag = 0;
  goAdza = false;

  constructor(props) {
    super(props);

    this.validateToken = this.validateToken.bind(this);
  }

  componentWillReceiveProps( nextProps ){
    window.jQuery = $;
    window.$ = $;
    global.jQuery = $;
    
    const bootstrap = require('bootstrap');
    const { loggedIn, type } = nextProps;

    if (this.goAdza == true && nextProps.AdzaprofileId != undefined) {
      this.props.history.push("/seller_page/"+nextProps.AdzaprofileId);
      this.goAdza = false;
    }

    this.setState({headerType: nextProps.type}) 
    
    if(loggedIn)
    {
      if(type == "seller")
      {
        this.setState({ headerType: "seller"});
      }
      else if(type == "buyer")
      {
        this.setState({ headerType: "buyer"});
      }
    }
    if ( !loggedIn && type == 'static')
    {
      this.setState({ headerType: "static"});
    }

    this.validateToken(nextProps);
  }

  componentDidMount() {
    this.setState({headerType: this.props.type});
  };

  componentDidUpdate(prevProps,prevState,prevContext){
    if(prevState.headerType != "seller" && prevState.headerType != "buyer" && prevState.headerType != "static"){
      $('.header_search .mobile_navbar_toggler').on('click', function() 
      {
        if( $('.nav_mobile_menu').css('display') == 'none' ) 
        {
          $('.mobile_navbar_toggler').removeClass('navbar_toggler_open');
          $('.mobile_navbar_toggler').addClass('navbar_toggler_close');
        }
        else 
        {
          $('.mobile_navbar_toggler').removeClass('navbar_toggler_close');
          $('.mobile_navbar_toggler').addClass('navbar_toggler_open');
        }
        $('.nav_mobile_menu').slideToggle(200);
      });
    }
    $('.header_section .mobile_navbar_toggler').on('click', function() 
    {
      if( $('.nav_mobile_menu').css('display') == 'none' ) 
      {
        $('.mobile_navbar_toggler').removeClass('navbar_toggler_open');
        $('.mobile_navbar_toggler').addClass('navbar_toggler_close');
      }
      else 
      {
        $('.mobile_navbar_toggler').removeClass('navbar_toggler_close');
        $('.mobile_navbar_toggler').addClass('navbar_toggler_open');
      }
      $('.nav_mobile_menu').slideToggle(200);
    });
  }

  logout()
  {
    this.props.dispatch(userActions.logout());
  }

  showSellerProfile()
  {
    const { dispatch } = this.props;
    this.goAdza = true;
    dispatch(sellerActions.moveMySellerPage());
  }

  validateToken(nextProps)
  {
    const { loggedIn, type } = nextProps;

    if( (!loggedIn || loggedIn == "undefined") 
        && window.location.pathname != '/' 
        && window.location.pathname != '/about'
        && window.location.pathname != '/help'
        && window.location.pathname != '/cart'
        && window.location.pathname != '/checkout'
        && window.location.pathname != '/uploadfiles'
      )
    {  
        this.props.history.push('/');
    }
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
          <div className="header_search seller_header">
            <div className="nav_bar">
              <div className="logo">
                <Link to="/"><img src={logoUrl}/></Link>
              </div>
              <div className="input-icon">
                <i className="fa fa-search input"></i>
                <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?"/>
                <Link to="/results" className="btn green search-but">Search</Link>
              </div>
              <div className="nav_menu">
                <ul className="nav_menu_list">
                  <li>
                    <a onClick={this.showSellerProfile.bind(this)}>Adza Page</a>
                  </li>
                  <li>
                    <Link to="/seller_orders">Campaign</Link>
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
                            <Link to="/seller_page">
                              <a href="#">
                                  My Profile 
                              </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/seller_dashboard">
                              <a href="#">
                                  My Dashboard 
                              </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/account_setting_account">
                              <a href="#">
                                  Account Settings
                              </a>
                            </Link>
                        </li>
                        <li class="divider"> </li>
                        <li>
                            <Link to="/">
                              <a href="#">
                                  Login to Other Accounts<img  className="menu_icon" src={require("../../res/img/drop_menu_icon_user.png")}/>
                              </a>
                            </Link>
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
                            <Link to="/buyer_landing">
                              <a href="#">
                                  Switch to Buyer <img src={require("../../res/img/drop_menu_icon_swt.png")}/>
                              </a>
                            </Link>
                        </li>
                        <li>
                            <Link to="/help">
                              <a href="#">
                                  Help <img src={require("../../res/img/drop_menu_icon_help.png")}/>
                              </a>
                             </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={ this.logout }>
                              <a href="#">
                                  Log Out<img src={require("../../res/img/drop_menu_icon_logout.png")}/>
                              </a>
                            </Link>
                        </li>
                    </ul>
                  </li>
                </ul>
                <button id="navbar_toggler" className="navbar_toggler_open mobile_navbar_toggler" type="button">
                  <span className="navbar_toggler_icon"></span>
                </button>
              </div>
              <div className="nav_mobile_menu" style={{display:"none"}}>
                <ul className="nav_mobile_list">
                  <li>
                    <div className="input-icon">
                      <i className="fa fa-search input"></i>
                      <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?" />
                      <Link to="/results"><button className="btn green search-but">Search</button></Link>
                    </div>
                  </li>
                  <li>
                    <a onClick={this.showSellerProfile.bind(this)}>Adza Page</a>
                  </li>
                  <li>
                    <Link to="/seller_orders">Campaign</Link>
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
                            <a onClick={this.showSellerProfile.bind(this)}>My Profile</a>
                        </li>
                        <li>
                            <Link to="/seller_dashboard">
                                My Dashboard 
                            </Link>
                        </li>
                        <li>
                            <Link to="/account_setting_account">
                                Account Settings
                            </Link>
                        </li>
                        <li class="divider"> </li>
                        <li>
                            <Link to="/">
                                Login to Other Accounts<img  className="menu_icon" src={require("../../res/img/drop_menu_icon_user.png")}/>
                            </Link>
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
                            <Link to="/buyer_landing">
                                Switch to Buyer <img src={require("../../res/img/drop_menu_icon_swt.png")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/help">
                                  Help <img src={require("../../res/img/drop_menu_icon_help.png")}/>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" onClick={ this.logout }>
                                  Log Out<img src={require("../../res/img/drop_menu_icon_logout.png")}/>
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
    else if( this.state.headerType == 'buyer' ) // Buyer Pages
    {
        return ( 
          <div className="header_search buyer_header">
            <div className="nav_bar">
              <div className="logo">
                <Link to="/"><img src={logoUrl}/></Link>
              </div>
              <div className="input-icon">
                <i className="fa fa-search input"></i>
                <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?" />
                <Link to="/results"><button className="btn green search-but">Search</button></Link>
              </div>
              <div className="nav_menu">
                <ul className="nav_menu_list">
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
                    <a href="javascript:;"
                       className="dropdown-toggle"
                       data-toggle="dropdown"
                       data-hover="dropdown"
                       data-close-others="false">
                        <img alt="" className="img-circle" src={require("../../res/img/logged_user.png")} />
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-default seller">
                        <li>
                            <Link to="/buyer_profile">My Profile </Link>
                        </li>
                        <li>
                            <Link to="/buyer_landing">My Dashboard </Link>
                        </li>
                        <li>
                            <Link to="/account_setting_account">Account Setting</Link>
                        </li>
                        <li className="divider"> </li>
                        <li>
                            <Link to="/seller_dashboard">
                                Switch to Seller
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
                            <Link to="/" onClick={ this.logout }>
                              logout
                                <img src={require("../../res/img/logout.png")}/>
                            </Link>
                        </li>
                    </ul>
                  </li>
                </ul>
                <button id="navbar_toggler" className="navbar_toggler_open mobile_navbar_toggler" type="button">
                  <span className="navbar_toggler_icon"></span>
                </button>
              </div>
              <div className="nav_mobile_menu" style={{display:'none'}}>
                <ul className="nav_mobile_list">
                  <li>
                    <div className="input-icon">
                      <i className="fa fa-search input"></i>
                      <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?" />
                      <Link to="/results"><button className="btn green search-but">Search</button></Link>
                    </div>
                  </li>
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
                    <a href="javascript:;"
                       className="dropdown-toggle"
                       data-toggle="dropdown"
                       data-hover="dropdown"
                       data-close-others="false">
                        <img alt="" className="img-circle" src={require("../../res/img/logged_user.png")} />
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-default seller">
                        <li>
                            <Link to="/buyer_profile">My Profile </Link>
                        </li>
                        <li>
                            <Link to="/buyer_landing">My Dashboard </Link>
                        </li>
                        <li>
                            <Link to="/account_setting_account">Account Setting</Link>
                        </li>
                        <li className="divider"> </li>
                        <li>
                            <Link to="/seller_dashboard">
                                Switch to Seller
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
              <div className="nav_menu">
                <button id="navbar_toggler" className="navbar_toggler_open mobile_navbar_toggler" type="button">
                  <span className="navbar_toggler_icon"></span>
                </button>
                <ul className="nav_menu_list">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <a data-toggle="modal" data-target="#myModal">Sign Up</a>
                    
                  </li>
                  <li>
                    <a data-toggle="modal" data-target="#login">Log In</a>
                  </li>
                  <li className="menu_last_li">
                    <Link to="/seller_dashboard" className="btn bg-yellow btn-small">Become an Adza</Link>
                  </li>
                </ul>
              </div>
            </div>   
            <div className="nav_mobile_menu" style={{display:'none'}}>
              <div className="nav_bar">
                <div className="logo">
                  <Link to="/"><img src={logoUrl}/></Link>
                </div>
                <div className="nav_menu">
                  <button id="navbar_toggler" className="navbar_toggler_open mobile_navbar_toggler" type="button">
                    <span className="navbar_toggler_icon"></span>
                  </button>
                </div>
              </div>
              <ul className="nav_mobile_list">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a data-toggle="modal" data-target="#myModal">Sign Up</a>
                  
                </li>
                <li>
                  <a data-toggle="modal" data-target="#login">Log In</a>
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
                </div>
                <div className="input-icon">
                    <i className="fa fa-search input"></i>
                    <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?" />
                    <Link to="/results" className="btn bg-blue search-but color-white">Search</Link>
                </div>
                <div className="nav_menu">
                    <ul className="nav_menu_list">
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                          <a data-toggle="modal" data-target="#myModal">Sign Up</a>
                        </li>
                        <li>
                          <a data-toggle="modal" data-target="#login">Log In</a>
                        </li>
                        <li className="menu_last_li">
                            <Link to="/seller_dashboard" className="menu_adza">Become an Adza</Link>
                        </li>
                    </ul>
                    <button id="navbar_toggler" className="navbar_toggler_open mobile_navbar_toggler" type="button">
                      <span className="navbar_toggler_icon"></span>
                    </button>
                </div>
                <div className="nav_mobile_menu" style={{display:'none'}}>
              <ul className="nav_mobile_list">
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                  <a data-toggle="modal" data-target="#myModal">Sign Up</a>
                </li>
                <li>
                  <a data-toggle="modal" data-target="#login">Log In</a>
                </li>
                <li className="menu_last_li">
                  <Link to="/seller_dashboard" className="btn bg-yellow btn-small">Become an Adza</Link>
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

const mapStateToProps = state => {

  const { loggedIn } = state.authentication;
  const { AdzaprofileId} = state.seller;

  return {
    loggedIn,
    AdzaprofileId
  };
};

const mapDispatchToProps = dispatch =>
{
  return { 
    dispatch,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header));

// export default withStyles(styles)(Header);
