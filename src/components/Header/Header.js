import React from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions, sellerActions, buyerActions } from '../../store/actions';
import { withRouter } from "react-router-dom";
import avatarDefault from '../../res/img/userinfo_img.png';

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

class Header extends React.Component{
  state = {
    headerType: "",
    show_search: true,
    user_type: "buyer",
    has_seller_acct: false
  };
  toggleflag = 0;
  goAdza = false;

  constructor(props) {
    super(props);

    this.validateToken = this.validateToken.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillReceiveProps( nextProps ){
    window.jQuery = $;
    window.$ = $;
    global.jQuery = $;
    
    const bootstrap = require('bootstrap');
    const { loggedIn, type, user, profile, user_type } = nextProps;

    if (this.goAdza == true && nextProps.AdzaprofileId !== undefined) {
      this.props.history.push("/seller_page/"+nextProps.AdzaprofileId);
      this.goAdza = false;
    }

    if( profile !== undefined ){
      this.setState({has_seller_acct: profile.has_seller_acct}) 
    }

    this.setState({headerType: nextProps.type}) 

    // Handle Search Box on Header
    if( window.location.pathname === '/' || window.location.pathname === '/signup' )
       this.setState({ show_search: false});
    else
       this.setState({ show_search: true }); 

    if( user_type === 'seller' )
      this.setState({ user_type: "seller" }) 
    else
      this.setState({ user_type: "buyer" }) 

    // Handle Header Type for Buyer and Seller
    if( loggedIn !== undefined )
    {
      if(type === "seller" || this.state.user_type === "seller")
      {
        this.setState({ headerType: "seller"});
      }
      else
      {
        this.setState({ headerType: "buyer"});
      }
    }
    if ( !loggedIn )
    {
      this.setState({ headerType: "static"});
    }

    this.validateToken(nextProps);
  }

  componentDidMount() {
    this.setState({headerType: this.props.type});

    const { dispatch, loggedIn } = this.props;
    if( loggedIn !== undefined )
    {
      dispatch( buyerActions.getBuyerProfile() );
    }
  };

  componentDidUpdate(prevProps,prevState,prevContext){
    if(prevState.headerType !== "seller" && prevState.headerType !== "buyer" && prevState.headerType !== "static"){
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
    const { dispatch } = this.props;
    dispatch( userActions.logout() )
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

    if( (!loggedIn || loggedIn === undefined ) 
        && window.location.pathname !== '/' 
        && window.location.pathname !== '/about'
        && window.location.pathname !== '/help'
        && window.location.pathname !== '/cart'
        && window.location.pathname !== '/checkout'
        && window.location.pathname !== '/blogs'
        && window.location.pathname !== '/signup'
        && window.location.pathname !== '/results'
      )
    {  
        this.props.history.push('/');
    }
  }

  switchToSeller(){
    const { dispatch } = this.props;
    dispatch( userActions.switchToSeller() );

    this.props.history.push('/seller_dashboard');
  }
  switchToBuyer(){
    const { dispatch } = this.props;
    dispatch( userActions.switchToBuyer() );

    this.props.history.push('/buyer_landing');
  }
  /*
    header types:
      static : for general pages such as About, Help & Support
      homepage : for homepage
      seller : for seller pages
      buyer : for buyer pages
  */
  renderSwitchHeader(){

    const {profile} = this.props;

    let BuyerAvatar;
    if( profile !== undefined && profile.profile_photo !== undefined )
      BuyerAvatar = <img className="profile" src={require("../../assets/avatar/"+profile.profile_photo)} alt=""/>
    else
      BuyerAvatar = <img className="profile" src={ avatarDefault } alt=""/>

    if( this.state.headerType === 'seller' ) // Seller Pages
    {
        return (
          <div className="header_search seller_header">
            <div className="nav_bar">
              <div className="logo">
                <Link to="/"><img src={logoUrl}  alt=""/></Link>
              </div>
              { this.state.show_search  > 0 &&
              <div className="input-icon">
                <i className="fa fa-search input"></i>
                <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?"/>
                <Link to="/results" className="btn green search-but">Search</Link>
              </div>
              }
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
                      {<img className="img-circle seller_toggle" src={require("../../res/img/drop_menu_profile.png")} alt="" />}
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
                             <img src={require("../../res/img/drop_menu_item1.png")} alt=""/>
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item2.png")} alt=""/>                                
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item3.png")} alt=""/>                                
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item4.png")} alt=""/>
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item5.png")} alt=""/>
                            </a>
                            <div class="more">+2</div>
                        </li>
                        <li>
                            <a href="#" onClick={this.switchToBuyer.bind(this)}>
                                Switch to Buyer <img src={require("../../res/img/drop_menu_icon_swt.png")}  alt=""/>
                            </a>
                        </li>
                        <li>
                            <Link to="/help">
                              <a href="#">
                                  Help <img src={require("../../res/img/drop_menu_icon_help.png")}  alt=""/>
                              </a>
                             </Link>
                        </li>
                        <li>
                            <a href="#" onClick={ this.logout }>
                                Log Out<img src={require("../../res/img/drop_menu_icon_logout.png")}  alt=""/>
                            </a>
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
                  { this.state.show_search  > 0 &&
                  <li>
                    <div className="input-icon">
                      <i className="fa fa-search input"></i>
                      <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?" />
                      <Link to="/results"><button className="btn green search-but">Search</button></Link>
                    </div>
                  </li>
                  }
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
                      <img className="img-circle seller_toggle" src={require("../../res/img/drop_menu_profile.png")} alt=""/>
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
                                Login to Other Accounts<img  className="menu_icon" src={require("../../res/img/drop_menu_icon_user.png")} alt=""/>
                            </Link>
                        </li>
                        <li class="other_act_img">
                            <a className="other_links" href="#">
                             <img src={require("../../res/img/drop_menu_item1.png")} alt=""/>
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item2.png")} alt=""/>                                
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item3.png")} alt=""/>                                
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item4.png")} alt=""/>
                            </a>
                            <a className="other_links" href="#">
                              <img src={require("../../res/img/drop_menu_item5.png")} alt=""/>
                            </a>
                            <div class="more">+2</div>
                        </li>
                        <li>
                            <a href="#" onClick={this.switchToBuyer.bind(this)}>
                                Switch to Buyer <img src={require("../../res/img/drop_menu_icon_swt.png")}  alt=""/>
                            </a>
                        </li>
                        <li>
                            <Link to="/help">
                                  Help <img src={require("../../res/img/drop_menu_icon_help.png")}  alt=""/>
                            </Link>
                        </li>
                        <li>
                            <a href="#" onClick={ this.logout }>
                                Log Out<img src={require("../../res/img/drop_menu_icon_logout.png")}  alt=""/>
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
    else if( this.state.headerType === 'buyer' ) // Buyer Pages
    {
        return ( 
          <div className="header_search buyer_header">
            <div className="nav_bar">
              <div className="logo">
                <Link to="/"><img src={logoUrl}/></Link>
              </div>

              { this.state.show_search  > 0 &&
              <div className="input-icon">
                <i className="fa fa-search input"></i>
                <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?" />
                <Link to="/results"><button className="btn green search-but">Search</button></Link>
              </div>
              }
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
                        {BuyerAvatar}
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
                        { this.state.has_seller_acct === true &&
                        <li>
                            <a onClick={this.switchToSeller.bind(this)}>
                                Switch to Seller
                                <img src={require("../../res/img/switch.png")} alt=""/>
                            </a>
                        </li>
                        }
                        <li>
                            <Link to="/help">
                                Help 
                                <img src={require("../../res/img/help.png")} alt=""/>
                            </Link>
                        </li>
                        <li>
                            <a href="#" onClick={ this.logout }>
                                Log Out<img src={require("../../res/img/drop_menu_icon_logout.png")}  alt=""/>
                            </a>
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
                  { this.state.show_search  > 0 &&
                  <li>
                    <div className="input-icon">
                      <i className="fa fa-search input"></i>
                      <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?" />
                      <Link to="/results"><button className="btn green search-but">Search</button></Link>
                    </div>
                  </li>
                  }
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
                        <img className="img-circle" src={require("../../res/img/logged_user.png")} alt=""/>
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
                        { this.state.has_seller_acct === true &&
                        <li>
                            <Link to="/seller_dashboard">
                                Switch to Seller
                                <img src={require("../../res/img/switch.png")}  alt=""/>
                            </Link>
                        </li>
                        }
                        <li>
                            <Link to="/help">
                                Help 
                                <img src={require("../../res/img/help.png")}  alt=""/>
                            </Link>
                        </li>
                        <li>
                            <a href="#" onClick={ this.logout }>
                                Log Out<img src={require("../../res/img/drop_menu_icon_logout.png")}  alt=""/>
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
    else if( this.state.headerType === 'homepage' ) // Homepage
    {
        return (
          <div className="header_section">
            <div className="nav_bar">
              <div className="logo">
                <Link to="/"><img src={logoUrl} alt=""/></Link>
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
                    <Link to="/signup" className="btn bg-yellow btn-small">Become an Adza</Link>
                  </li>
                </ul>
              </div>
            </div>   
            <div className="nav_mobile_menu" style={{display:'none'}}>
              <div className="nav_bar">
                <div className="logo">
                  <Link to="/"><img src={logoUrl} alt=""/></Link>
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
                    <Link to="/signup" className="btn bg-yellow btn-small">Become an Adza</Link>
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
                    <Link to="/"><img src={logoUrl} alt=""/></Link>
                </div>
                { this.state.show_search  > 0 &&
                <div className="input-icon">
                    <i className="fa fa-search input"></i>
                    <input type="text" className="form-control search-input" placeholder="Where do you want to see your ad?" />
                    <Link to="/results" className="btn bg-blue search-but color-white">Search</Link>
                </div>
                }
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
                            <Link to="/signup" className="menu_adza">Become an Adza</Link>
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
                  <Link to="/signup" className="btn bg-yellow btn-small">Become an Adza</Link>
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
  const { loggedIn, user, user_type } = state.authentication;
  const { AdzaprofileId} = state.seller;
  const { profile } = state.buyer;

  return {
    loggedIn,
    user,
    AdzaprofileId,
    profile,
    user_type
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
