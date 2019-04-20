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
        <div className="page-content order-seller">
          <div className="page-header">
            <label className="title">Ad Campaign 1</label>
            <div className="subtitle">Instagram Story from <Link to="seller_page">@seller123</Link></div>
          </div>
          <div className="message send">
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  10:16 April, 2019
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="para">
                    Order Placed: Instagram Story $50
                  </div>
                  <div className="para">
                    Post Date: April 14, 2019
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="message send">
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  10:16 April, 2019
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="para">
                    Please use the following caption on the post: "Memorial Day Sale! 25% off the whole store at www.shop.com when using referral code MEM25". Use the image attached below please.
                  </div>
                  <div className="attachment">
                    <img src={require("../res/img/item2.png")}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="message receive action">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="para">
                    Send your message with your response
                  </div>
                  <div className="action">
                    <button className="btn btn-accept">
                      Accept
                    </button>
                    <button className="btn btn-reject">
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
          </div>
          <div className="message receive action">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  10:16 April, 2019
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="para">
                    Everything looks great! I will post as soon as I get the item.
                  </div>
                  <div className="action">
                    <label className="btn state-accepted">
                      Accepted
                      <i className="fa fa-thumbs-up"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
          </div>
          <div className="message receive action">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="link">
                    <img src={require("../res/img/link.png")}/>
                    Include link to post
                  </div>
                  <div className="action">
                    <label className="btn btn-launch">
                      Mark Ad as Launched
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
          </div>
          <div className="message receive action">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="link">
                    <img src={require("../res/img/link.png")}/>
                    <a>Instagram.com/post_id31030101</a>
                  </div>
                  <div className="action">
                    <label className="btn state-launched">
                      Ad Launched
                      <i className="fa fa-rocket"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
          </div>
          <div className="message send action">
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  Pending
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="action">
                    <label className="btn state-awaiting">
                      Awaiting Buyer Approval
                    </label>
                  </div>
                  <div className="para">
                    Please use the following caption on the post: "Memorial Day Sale! 25% off the whole store.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="message send action">
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  7:05 April 14, 2019
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="action">
                    <label className="btn state-approved">
                      Buyer Approved
                      <i className="fa fa-smile-o"></i>
                    </label>
                  </div>
                  <div className="para">
                    Buyer's feedback will be visible after you leave feedback
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="message send action issue">
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  7:05 April 14, 2019
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="action">
                    <label className="btn state-rejected">
                      Buyer Rejected
                      <i className="fa fa-frown-o"></i>
                    </label>
                  </div>
                  <div className="para">
                    That wasn't the image I wanted you to use! Please delete the post and do it correctly.
                  </div>
                </div>
                <div className="issue">
                  Issues?
                  If you that wasn't the image I wanted you to use, Please delete the post and do it correctly?
                </div>
              </div>
            </div>
          </div>
          <div className="message receive action">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="link">
                    <img src={require("../res/img/link.png")}/>
                    Include link to post
                  </div>
                  <div className="action">
                    <label className="btn btn-launch">
                      Mark Ad as Relaunched
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
          </div>
          <div className="message send rating">
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  10:16 April, 2019
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="para">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="para">
                    Seller 123 made a great post for me. They were helpful, quick, and smooth. Will be buying more ads in future from them.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="message receive rating">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  10:16 April, 2019
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="para">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="para">
                    Seller 123 made a great post for me. They were helpful, quick, and smooth. Will be buying more ads in future from them.
                  </div>
                </div>
              </div>
            </div>
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
          </div>

          <div className="result">
            <span className="price"> $50</span>
            has been added to your account
          </div>
          <div className="feedback">
            <div>
              Rate Buyer
            </div>
            <div>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button className="btn btn-submit"> Submit Feedback</button>
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
