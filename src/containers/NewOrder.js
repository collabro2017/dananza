import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { increment, decrement } from "../store/reducers/stepCounter";

import "../res/css/new_order.css"


class NewOrder extends React.Component{

  state={'headerType': "static"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "NewOrder"
  }

  render(){
    return (
      <div className="order-dashboard">
        <div class="page-content order-seller">
          <div class="message send">
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                  10:16 April, 2019
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="para">
                    Order Placed: Instagram Story $50
                  </div>
                  <div class="para">
                    Post Date: April 14, 2019
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message send">
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                  10:16 April, 2019
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="para">
                    Please use the following caption on the post: "Memorial Day Sale! 25% off the whole store at www.shop.com when using referral code MEM25". Use the image attached below please.
                  </div>
                  <div class="attachment">
                    <img src={require("../res/img/item2.png")}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message receive action">
            <div class="sender"></div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="para">
                    Send your message with your response
                  </div>
                  <div class="action">
                    <button class="btn btn-accept">
                      Accept
                    </button>
                    <button class="btn btn-reject">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
          </div>
          <div class="message receive action">
            <div class="sender"></div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                  10:16 April, 2019
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="para">
                    Everything looks great! I will post as soon as I get the item.
                  </div>
                  <div class="action">
                    <label class="btn state-accepted">
                      Accepted
                      <i class="fa fa-thumbs-up"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
          </div>
          <div class="message receive action">
            <div class="sender"></div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="link">
                    <img src={require("../res/img/link.png")}/>
                    Include link to post
                  </div>
                  <div class="action">
                    <label class="btn btn-launch">
                      Mark Ad as Launched
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
          </div>
          <div class="message receive action">
            <div class="sender"></div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="link">
                    <img src={require("../res/img/link.png")}/>
                    <a>Instagram.com/post_id31030101</a>
                  </div>
                  <div class="action">
                    <label class="btn state-launched">
                      Ad Launched
                      <i class="fa fa-rocket"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
          </div>
          <div class="message send action">
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                  Pending
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="action">
                    <label class="btn state-awaiting">
                      Awaiting Buyer Approval
                    </label>
                  </div>
                  <div class="para">
                    Please use the following caption on the post: "Memorial Day Sale! 25% off the whole store.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message send action">
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                  7:05 April 14, 2019
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="action">
                    <label class="btn state-approved">
                      Buyer Approved
                      <i class="fa fa-smile-o"></i>
                    </label>
                  </div>
                  <div class="para">
                    Buyer's feedback will be visible after you leave feedback
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message send action issue">
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                  7:05 April 14, 2019
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="action">
                    <label class="btn state-rejected">
                      Buyer Rejected
                      <i class="fa fa-frown-o"></i>
                    </label>
                  </div>
                  <div class="para">
                    That wasn't the image I wanted you to use! Please delete the post and do it correctly.
                  </div>
                </div>
                <div class="issue">
                  Issues?
                  If you that wasn't the image I wanted you to use, Please delete the post and do it correctly?
                </div>
              </div>
            </div>
          </div>
          <div class="message receive action">
            <div class="sender"></div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="link">
                    <img src={require("../res/img/link.png")}/>
                    Include link to post
                  </div>
                  <div class="action">
                    <label class="btn btn-launch">
                      Mark Ad as Relaunched
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
          </div>
          <div class="message send rating">
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                  10:16 April, 2019
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="para">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="para">
                    Seller 123 made a great post for me. They were helpful, quick, and smooth. Will be buying more ads in future from them.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="message receive rating">
            <div class="sender"></div>
            <div class="message-wrapper">
              <div class="message-content">
                <div class="date">
                  10:16 April, 2019
                </div>
                <div class="message-box">
                  <img class="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img class="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div class="para">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                  </div>
                  <div class="para">
                    Seller 123 made a great post for me. They were helpful, quick, and smooth. Will be buying more ads in future from them.
                  </div>
                </div>
              </div>
            </div>
            <div class="sender">
              <div class="wrapper">
                <img class="avatar" src={require("../res/img/user1.png")}/>
                <span class="username">user123</span>
              </div>
            </div>
          </div>

          <div class="result">
            <span class="price"> $50</span>
            has been added to your account
          </div>
          <div class="feedback">
            <div>
              Rate Buyer
            </div>
            <div>
              <i class="fa fa-star"></i>
              <i class="fa fa-star-o"></i>
              <i class="fa fa-star-o"></i>
              <i class="fa fa-star-o"></i>
              <i class="fa fa-star-o"></i>
            </div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button class="btn btn-submit"> Submit Feedback</button>
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
)(NewOrder);
