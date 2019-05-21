import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import SellerSidebar from "../components/Sidebar/SellerSidebar";

import "../res/css/Seller_Dashboard_Messages.css"

class SellerMessages extends React.Component{

  state={'headerType': "seller",
          users: [
            {
              username: "AdmamInTech",
              recentmail: "HHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
              time: new Date(2019,3,26,17,33,15)
            },
            {
              username: "David Json",
              recentmail: "Good! Go on!",
              time: new Date(2019,3,25,17,30,15)
            },
            {
              username: "Okid rio",
              recentmail: "Can you tell me how to get Linden Street?",
              time: new Date(2019,3,24,17,50,15)
            },
            {
              username: "Kyo",
              recentmail: "My name is An Guk Chol. Can you help me?",
              time: new Date(2019,2,25,16,50,15)
            },
            {
              username: "Leonard",
              recentmail: "I'm a photographer. Can you advertise my photo?",
              time: new Date(2019,3,24,17,30,15)
            },
            {
              username: "Yooser",
              recentmail: "I wanna advertise my brands in Twitter.",
              time: new Date(2019,3,16,16,30,15)
            },
            {
              username: "David Jason",
              recentmail: "Would you like to advertise your products with me?",
              time: new Date(2019,0,26,17,30,15)
            },
            {
              username: "Desmond Kal",
              recentmail: "It's almost done. I will be sending it shortly.",
              time: new Date(2018,4,26,16,30,15)
            },
            {
              username: "Andres Iniesta",
              recentmail: "All right. Thanks.:)",
              time: new Date(2019,2,26,17,25,15)
            },
            {
              username: "Lisa Strong",
              recentmail: "You are most welcome! Sorry for delay.",
              time: new Date(2019,3,26,16,30,2)
            },
            {
              username: "Vennesa Bond",
              recentmail: "No probs just take your time.",
              time: new Date(2019,3,25,17,54,15)
            }
          ],
          history: [
            {
              sender: "AdamInTech",
              time: new Date(2019,3,26,9,47,30),
              mail: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            },
            {
              sender: "AdamInTech",
              time: new Date(2019,3,26,9,47,40),
              mail: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            },
            {
              sender: "AdamInTech",
              time: new Date(2019,3,26,9,47,50),
              mail: "Quis autem vel eum iure reprehenderit qui in ea voluptate"
            },
            {
              sender: "AdamInTech",
              time: new Date(2019,3,26,10,1,50),
              mail: "At vero eos et accusamus et iusto odio dignissimos"
            },
            {
              sender: "AnnaSay",
              time: new Date(2019,3,26,1,6,50),
              mail: "Voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
            },
            {
              sender: "AnnaSay",
              time: new Date(2019,3,26,1,6,55),
              mail: "Quis autem vel eum iure reprehenderit qui in ea voluptate. At vero eos et accusamus sed quia consequuntur magni dolores"
            }
          ]
        }

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentWillMount(){
    
  }

  componentDidMount(){
    document.title = "Seller Messages"
  }

  dealMail(str){
    if (str.length > 15) {
      return str.substr(0,15) + ' ...';
    }
    return str;
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
    var prev = this.state.history[index-1];
    if(index === 0)
      prev = {
              sender: "",
              time: item.time,
              mail: ""
            };
    return (
      <div className="history">
        {this.showSender(prev,item)}
        <div className="history-content">
          <div className="content-row">
            <div className="text">
              <div className="paragraph">
                {item.mail}
              </div>
            </div>
            {this.showDate(prev,item)}
          </div>
        </div>
      </div>
    );

  }

  render(){
    return (
    	<div className="dashboard_seller">
	    	<div className="page-content seller_message">
  				<SellerSidebar navitem={"message"}/>
          <div className="page-result-wrapper">
    				<div className="page-result">
              <div className="page-panel">
                <div className="user-search">
                  <input className="form-control" type="text" placeholder="Search" />
                  <i className="fa fa-search"></i>
                </div>
                <div className="btn-group" data-toggle="buttons" id="pages">
                  {
                    this.state.users.map(
                      (user,index)=>(
                        <label className="btn">
                          <img src={require("../res/img/user1.png")} alt=""/>
                          <div className="detail">
                            <div className="f-16"> {user.username} </div>
                            <div className="f-13 darkgrey"> {this.dealMail(user.recentmail)}</div>
                            <div className="f-11 lightgrey"> {this.dealTime(user.time)} </div>
                          </div>
                          <input type="radio" className="toggle"/>
                        </label>
                      )
                    )
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
                    this.state.history.map(
                      (item,index)=>(this.showMail(item,index))
                    )
                  }
                </div>
                <div className="send-message">
                  <i className="fa fa-paperclip lightgrey pin-icon"></i>
                  <div className="wrapper">
                    <input className="form-control" type="text"/>
                    <i className="fa fa-smile-o lightgrey"></i>
                  </div>
                  <button className="btn btn-yellow">
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
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {

    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerMessages);
