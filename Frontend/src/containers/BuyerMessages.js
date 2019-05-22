import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { withRouter } from "react-router-dom";
import { buyerActions, userActions } from '../store/actions';
import { sellerActions } from '../store/actions';

import BuyerSidebar from "../components/Sidebar/BuyerSidebar";
import avatarDefault from '../res/img/default_avatar.png';

import "../res/css/BuyerMessages.css"
import { apiConfig } from '../store/config';
const uploadRoot = apiConfig.uploadRoot;

class BuyerMessages extends React.Component{

  state =
  {
    'headerType': "buyer",
    contact: [],
    message: [],
    currentAdza: {},
    currentMsg: [],
    flag: false
  }

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount() {
    document.title = "Buyer Messages"
  }

  componentWillMount() {
    if(this.props.location.adzaInfo)
    {
      this.props.location.adzaInfo.Campaign_Listings.map(
        (item, index) => 
          (
            this.props.dispatch(buyerActions.createContact('buyer', item.AdzaProfileId))
          )
      )
    }
    else
    {
      this.props.dispatch(buyerActions.getContact('buyer'));
    }
  }

  componentWillReceiveProps ( nextprops ) {
    const { init_contact, info, messages } = nextprops;

    if(init_contact && !this.state.flag){
      this.props.dispatch(buyerActions.getContact('buyer'))
    }

    if (messages) {
      this.setState({message:messages});
    }

    if(info && !this.state.flag)
    {
      this.setState({ contact: info.contact, flag: true})
      if (info.contact.length) {
        this.setState({currentAdza: info.contact[0]})
        this.props.dispatch(buyerActions.fetchMessages( 'buyer', info.contact[0]));
      }
    }
  }

  componentDidUpdate() {
    console.log('this state = ', this.state, this.state.currentMsg);
  }

  dealMail(adza){
    
    if (adza && adza.length > 15) {
      return adza.substr(0,15) + ' ...';
    }
      return adza;
  }

  dealTime(time){
    var now = new Date();
    var diff = now - time;
    var div = Math.floor(diff / 31536000000);
    if (div) {
      return div + " year(s) ago";
    }
    div = Math.floor(diff / 2678400000);
    if (div) {
      return div + " month(s) ago";
    }
    div = Math.floor(diff / 604800000);
    if (div) {
      return div + " week(s) ago";
    }
    div = Math.floor(diff / 86400000);
    if (div) {
      return div + " day(s) ago";
    }
    div = Math.floor(diff / 3600000);
    if (div) {
      return div + " hour(s) ago";
    }
    div = Math.floor(diff / 60000);
    if (div) {
      return div + " minute(s) ago";
    }
    return "Now";
  }

  showSender(prev,now){
    if(prev.sender !== now.sender){
      return (
        <div className="sender">
          <img className="profile" src={require("../res/img/user1.png")} alt=""/>
          <span className="f-16"> {now.sender} </span>
        </div>
      );
    }
  }

  showDate(prev,now){
    var dif = now.time - prev.time;
    if(prev.sender !== now.sender || Math.floor(dif / 60000)){
      var str = "";
      if (now.time.getHours()>12) {
        str = (now.time.getHours()-12)+":"+now.time.getMinutes()+" PM";
      }
      else if (now.time.getHours()<12) {
        str = now.time.getHours()+":"+now.time.getMinutes()+" AM";
      }
      else{
        str = now.time.getHours()+":"+now.time.getMinutes()+" PM";
      }
      return (
        <div className="date">
          {str}
        </div>
      );
    }
  }

  showMail(item,index){
    if(item && index )
    {
      var prev = this.state.message[index-1];
      if(index === 0)
        prev = {
                sender: "",
                time: item.message_time,
                mail: ""
              };
      return (
        <div className="history">
          {this.showSender(prev,item)}
          <div className="history-content">
            <div className="content-row">
              <div className="text">
                <div className="paragraph">
                  {item.message_text}
                </div>
              </div>
              {this.showDate(prev,item)}
            </div>
          </div>
        </div>
      );
    }
  }

  fetchMsg( _adza){
    this.setState({currentAdza: _adza})
    this.props.dispatch(buyerActions.fetchMessages( 'buyer', _adza ));
  }

  sendMessage(){
    if(this.state.currentAdza)
    {
      this.props.dispatch(buyerActions.sendMessage(
        'buyer',
        this.state.currentAdza.AdzaProfileId, 
        this.state.currentMsg,
        this.state.currentAdza.id
      ))  
    }
  }

  getMessage(e){
    this.setState({ currentMsg: e.target.value })
  }

  onError(e){
    e.target.src = avatarDefault;
  }

  showAvatar(id){
    return <img src={uploadRoot+"/adza_avatar/"+id+".png?"+new Date()} onError={this.onError}/>
  }

  render(){
    return (
      <div className="dashboard_seller">
        <div className="page-content seller_message">
          <BuyerSidebar navitem={"message"}/>
          <div className="page-result-wrapper">
            <div className="page-result">
              <div className="page-panel">
                <div className="user-search">
                  <input className="form-control" type="text" placeholder="Search" />
                  <i className="fa fa-search"></i>
                </div>
                <div className="btn-group" data-toggle="buttons" id="pages">
                  {
                     this.state.contact && this.state.contact.length ? this.state.contact.map(
                      (seller, index)=>(
                        <label className="btn" onClick={this.fetchMsg.bind(this, seller)}>
                          {this.showAvatar(seller.Adza_Profile.UserId)}
                          <div className="detail">
                            <div className="f-16"> { seller.Adza_Profile.User.f_name + ' ' + seller.Adza_Profile.User.l_name } </div>
                            <div className="f-13 darkgrey"> { this.dealMail( seller) }</div>
                            <div className="f-11 lightgrey"> { this.dealTime( seller) } </div>
                          </div>
                          <input type="radio" className="toggle"/>
                        </label>
                      )
                    ): ''
                  }
                </div>
              </div>
              <div className="page-message">
                <div className="user-profile">
                  <img className="profile-photo" src={require("../res/img/user1.png")} alt=""/>
                  <span className="f-16"> AdamInTech </span>
                  <div className="action">
                    <a href="#" className="btn btn-yellow">View Profile</a>
                    <a href="#">
                      <img src={require("../res/img/delete.png")} alt=""/>
                    </a>
                  </div>
                </div>
                <div className="date darkgrey">
                  Friday, February 22, 2019
                </div>
                <div className="message-content">
                  {
                    this.state.currentMsg.map(
                      (item,index)=>(this.showMail(item,index))
                    )
                  }
                  { this.state.currentMsg }
                </div>
                <div className="send-message">
                  <i className="fa fa-paperclip lightgrey pin-icon"></i>
                  <div className="wrapper">
                    <input className="form-control" type="text" onChange={ this.getMessage.bind(this)}/>
                    <i className="fa fa-smile-o lightgrey"></i>
                  </div>
                  <button className="btn btn-yellow" onClick={ this.sendMessage.bind(this)}>
                    Send
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { info, init_contact, messages } = state.buyer;

  return {
    info,
    init_contact,
    messages
  }
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyerMessages);
