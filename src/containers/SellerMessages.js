import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment, decrement } from "../store/reducers/stepCounter";
import SellerSidebar from "../components/Sidebar/SellerSidebar";

import "../res/css/Seller_Dashboard_Messages.css"

class SellerMessages extends React.Component{

  state={'headerType': "seller"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Seller Messages"
  }

  render(){
    return (
    	<div className="dashboard_seller seller_messages">
	    	<div className="page-content ">
				<SellerSidebar />
				<div className="page-result">
          <div className="page-panel">
            <div className="user-search">
              <input className="form-control" type="text" placeholder="Search" />
              <i className="fa fa-search"></i>
            </div>
            <div className="btn-group" data-toggle="buttons" id="pages">
                      <label className="btn active">
                        <img src={require("../res/img/user1.png")} />
                        <div className="detail">
                          <div className="f-16"> AdamInTech</div>
                          <div className="f-13 darkgrey"> Wonderful! When do you...</div>
                          <div className="f-11 lightgrey"> 1 hour ago</div>
                        </div>
                        <input type="radio" className="toggle"/>
                      </label>
                      <label className="btn">
                        <img src={require("../res/img/user1.png")} />
                        <div className="detail">
                          <div className="f-16"> AdamInTech</div>
                          <div className="f-13 darkgrey"> Wonderful! When do you...</div>
                          <div className="f-11 lightgrey"> 1 hour ago</div>
                        </div>
                        <input type="radio" className="toggle"/>
                      </label>
                      <label className="btn">
                        <img src={require("../res/img/user1.png")} />
                        <div className="detail">
                          <div className="f-16"> AdamInTech</div>
                          <div className="f-13 darkgrey"> Wonderful! When do you...</div>
                          <div className="f-11 lightgrey"> 1 hour ago</div>
                        </div>
                        <input type="radio" className="toggle"/>
                      </label>
                      <label className="btn">
                        <img src={require("../res/img/user1.png")} />
                        <div className="detail">
                          <div className="f-16"> AdamInTech</div>
                          <div className="f-13 darkgrey"> Wonderful! When do you...</div>
                          <div className="f-11 lightgrey"> 1 hour ago</div>
                        </div>
                        <input type="radio" className="toggle"/>
                      </label>
                      <label className="btn">
                        <img src={require("../res/img/user1.png")} />
                        <div className="detail">
                          <div className="f-16"> AdamInTech</div>
                          <div className="f-13 darkgrey"> Wonderful! When do you...</div>
                          <div className="f-11 lightgrey"> 1 hour ago</div>
                        </div>
                        <input type="radio" className="toggle"/>
                      </label>
                      <label className="btn">
                        <img src={require("../res/img/user1.png")} />
                        <div className="detail">
                          <div className="f-16"> AdamInTech</div>
                          <div className="f-13 darkgrey"> Wonderful! When do you...</div>
                          <div className="f-11 lightgrey"> 1 hour ago</div>
                        </div>
                        <input type="radio" className="toggle"/>
                      </label>
                      <label className="btn">
                        <img src={require("../res/img/user1.png")} />
                        <div className="detail">
                          <div className="f-16"> AdamInTech</div>
                          <div className="f-13 darkgrey"> Wonderful! When do you...</div>
                          <div className="f-11 lightgrey"> 1 hour ago</div>
                        </div>
                        <input type="radio" className="toggle"/>
                      </label>
                      <label className="btn">
                        <img src={require("../res/img/user1.png")} />
                        <div className="detail">
                          <div className="f-16"> AdamInTech</div>
                          <div className="f-13 darkgrey"> Wonderful! When do you...</div>
                          <div className="f-11 lightgrey"> 1 hour ago</div>
                        </div>
                        <input type="radio" className="toggle"/>
                      </label>
                  </div>
        </div>
        <div className="page-message">
          <div className="user-profile">
            <img src={require("../res/img/user1.png")} />
            <span className="f-16"> AdamInTech </span>
            <div className="action">
              <a className="btn btn-yellow">View Profile</a>
              <a>
                <i className="fa fa-trash"></i>
              </a>
            </div>
          </div>
          <div className="date darkgrey">
            Friday, February 22, 2019
          </div>
          <div className="message-content">
            <div className="history">
              <div className="sender">
                <img className="profile" src={require("../res/img/user1.png")} />
                <span className="f-16"> AdamInTech </span>
              </div>
              <div className="history-content">
                <div className="content-row">
                  <div className="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                    
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

                  Quis autem vel eum iure reprehenderit qui in ea voluptate</div>
                  <div className="date">
                    9:47 AM
                  </div>
                </div>
                <div className="content-row">
                  <div className="text">
                    At vero eos et accusamus et iusto odio dignissimos
                  </div>
                  <div className="date">
                    10:01 AM
                  </div>
                </div>
              </div>
            </div>
            <div className="history">
              <div className="sender">
                <img className="profile" src={require("../res/img/user1.png")} />
                <span className="f-16"> AnnaSay </span>
              </div>
              <div className="history-content">
                <div className="content-row">
                  <div className="text">Voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

                  Quis autem vel eum iure reprehenderit qui in ea voluptate. At vero eos et accusamus sed quia consequuntur magni dolores
                  </div>
                  <div className="date">
                    1:06 PM
                  </div>
                </div>
              </div>
            </div>
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
    );
  }
}

const mapStateToProps = state => {
  return {
    stepCounter: state.stepCounter
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      increment: () => increment(),
      decrement: () => decrement()
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SellerMessages);
