import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import BuyerSidebar from "../components/Sidebar/BuyerSidebar";

import "../res/css/BuyerMessages.css"

class BuyerMessages extends React.Component{

  state={'headerType': "buyer"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Buyer Messages"
  }

  render(){
    return (
    	<div className="buyer_landing buyer_campaign buyer_messages">
        <div className="page-container">
          <div className="page-content">
            <BuyerSidebar navitem={"messages"}/>

            <div class="page-main message-main">
              <div class="page-panel">
                <div class="user-search">
                  <input class="form-control" type="text" placeholder="Search" />
                  <i class="fa fa-search"></i>
                </div>
                <div class="btn-group" data-toggle="buttons" id="pages">
                  <label class="btn active">
                    <img src={require("../res/img/user1.png")} alt=""/>
                    <div class="detail">
                      <div class="f-16"> AdamInTech</div>
                      <div class="f-13 darkgrey"> Wonderful! When do you...</div>
                      <div class="f-11 lightgrey"> 1 hour ago</div>
                    </div>
                    <input type="radio" class="toggle" />
                  </label>
                  <label class="btn">
                    <img src={require("../res/img/user1.png")} alt=""/>
                    <div class="detail">
                      <div class="f-16"> AdamInTech</div>
                      <div class="f-13 darkgrey"> Wonderful! When do you...</div>
                      <div class="f-11 lightgrey"> 1 hour ago</div>
                    </div>
                    <input type="radio" class="toggle" />
                  </label>
                  <label class="btn">
                    <img src={require("../res/img/user1.png")} alt=""/>
                    <div class="detail">
                      <div class="f-16"> AdamInTech</div>
                      <div class="f-13 darkgrey"> Wonderful! When do you...</div>
                      <div class="f-11 lightgrey"> 1 hour ago</div>
                    </div>
                    <input type="radio" class="toggle" />
                  </label>
                  <label class="btn">
                    <img src={require("../res/img/user1.png")} alt=""/>
                    <div class="detail">
                      <div class="f-16"> AdamInTech</div>
                      <div class="f-13 darkgrey"> Wonderful! When do you...</div>
                      <div class="f-11 lightgrey"> 1 hour ago</div>
                    </div>
                    <input type="radio" class="toggle" />
                  </label>
                  <label class="btn">
                    <img src={require("../res/img/user1.png")} alt=""/>
                    <div class="detail">
                      <div class="f-16"> AdamInTech</div>
                      <div class="f-13 darkgrey"> Wonderful! When do you...</div>
                      <div class="f-11 lightgrey"> 1 hour ago</div>
                    </div>
                    <input type="radio" class="toggle" />
                  </label>
                  <label class="btn">
                    <img src={require("../res/img/user1.png")} alt=""/>
                    <div class="detail">
                      <div class="f-16"> AdamInTech</div>
                      <div class="f-13 darkgrey"> Wonderful! When do you...</div>
                      <div class="f-11 lightgrey"> 1 hour ago</div>
                    </div>
                    <input type="radio" class="toggle" />
                  </label>
                  <label class="btn">
                    <img src={require("../res/img/user1.png")} alt=""/>
                    <div class="detail">
                      <div class="f-16"> AdamInTech</div>
                      <div class="f-13 darkgrey"> Wonderful! When do you...</div>
                      <div class="f-11 lightgrey"> 1 hour ago</div>
                    </div>
                    <input type="radio" class="toggle" />
                  </label>
                  <label class="btn">
                    <img src={require("../res/img/user1.png")} alt=""/>
                    <div class="detail">
                      <div class="f-16"> AdamInTech</div>
                      <div class="f-13 darkgrey"> Wonderful! When do you...</div>
                      <div class="f-11 lightgrey"> 1 hour ago</div>
                    </div>
                    <input type="radio" class="toggle" />
                  </label>
                </div>
              </div>
              <div class="page-message">
                <div class="user-profile">
                  <div class="profile-image">
                    <img src={require("../res/img/user1.png")} alt=""/>
                  </div>
                  <div class="profile-detail">
                    <div class="f-16"> AdamInTech </div>
                    <div class="rating">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <span class="rating-num">5.0</span>
                      <span class="review-num">(17 Reviews)</span>
                    </div>
                  </div>
                  <div class="action">
                    <a class="btn btn-yellow">View Profile</a>
                    <a>
                      <i class="fa fa-trash"></i>
                    </a>
                  </div>
                </div>
                <div class="date darkgrey">
                  Friday, February 22, 2019
                </div>
                <div class="message-content">
                  <div class="history">
                    <div class="sender">
                      <img class="profile" src={require("../res/img/user1.png")} alt=""/>
                      <span class="f-16"> AdamInTech </span>
                    </div>
                    <div class="history-content">
                      <div class="content-row">
                        <div class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                          
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

                        Quis autem vel eum iure reprehenderit qui in ea voluptate</div>
                        <div class="date">
                          9:47 AM
                        </div>
                      </div>
                      <div class="content-row">
                        <div class="text">
                          At vero eos et accusamus et iusto odio dignissimos
                        </div>
                        <div class="date">
                          10:01 AM
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="history">
                    <div class="sender">
                      <img class="profile" src={require("../res/img/user1.png")} alt=""/>
                      <span class="f-16"> AnnaSay </span>
                    </div>
                    <div class="history-content">
                      <div class="content-row">
                        <div class="text">Voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.

                        Quis autem vel eum iure reprehenderit qui in ea voluptate. At vero eos et accusamus sed quia consequuntur magni dolores
                        </div>
                        <div class="date">
                          1:06 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="send-message">
                  <i class="fa fa-paperclip lightgrey pin-icon"></i>
                  <div class="wrapper">
                    <input class="form-control" type="text" />
                    <i class="fa fa-smile-o lightgrey"></i>
                  </div>
                  <button class="btn btn-yellow">
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
)(BuyerMessages);
