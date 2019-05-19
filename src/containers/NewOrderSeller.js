import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { sellerActions } from '../store/actions';

import "../res/css/NewOrderSeller.css"


class NewOrderSeller extends React.Component{

  state={'headerType': "static",
         'orderId': this.props.location.orderInfo ? this.props.location.orderInfo.OrderId : 1,
         'orderHistory':[],
         'ratingVal':1}
  resultEnd = false;
  gaveRate = 0;
  rateOrder = {};

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "NewOrder_Seller"
  }

  componentWillMount(){
    const { dispatch } = this.props;
    dispatch(sellerActions.getOrderHistory(this.state.orderId));
  }

  componentWillReceiveProps(props){
    if (props.orderHistory != undefined) {
      this.setState({orderHistory:props.orderHistory.Order_Histories});
    }
  }

  onOrderAccept(order){
    order.order_comment = this.refs.comment.value;
    order.order_status = 'accept';
    const { dispatch } = this.props;
    dispatch(sellerActions.updateOrderHistory(order));
    dispatch(sellerActions.addOrderHistory(this.state.orderId, 'adlaunch', 'pending'));
  }

  onAdLaunched(order){
    order.order_comment = this.refs.comment.value;
    order.order_status = 'accept';
    const { dispatch } = this.props;
    dispatch(sellerActions.updateOrderHistory(order));
    dispatch(sellerActions.addOrderHistory(this.state.orderId, 'buyerapprove', 'pending'));
  }

  onSubmitFeedback(){
    this.rateOrder.order_comment = this.refs.comment.value;
    this.rateOrder.order_attachment = {"rating":this.state.ratingVal};
    this.rateOrder.order_status = 'accept';
    const { dispatch } = this.props;
    dispatch(sellerActions.updateOrderHistory(this.rateOrder));
  }

  showOrder(order)
  {
    if(order.order_type == 'order') {
      return (
        <div className="message buyer">
          <div className="sender">
            <div className="wrapper">
              <img className="avatar" src={require("../res/img/user1.png")}/>
              <span className="username">user123</span>
            </div>
          </div>
          <div className="message-wrapper">
            <div className="message-content">
              <div className="date">
                {new Date(order.update_time).toLocaleString()}
              </div>
              <div className="message-box">
                <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                <div className="para">
                  Order Placed: {order.order_attachment.listingname}&nbsp;${order.order_attachment.price}
                </div>
                <div className="para">
                  Post Date: {new Date(order.update_time).toDateString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  showMediaUpload(order)
  {
    if(order.order_type == 'mediaupload'){
      return (
        <div className="message buyer">
          <div className="sender">
            <div className="wrapper">
              <img className="avatar" src={require("../res/img/user1.png")}/>
              <span className="username">user123</span>
            </div>
          </div>
          <div className="message-wrapper">
            <div className="message-content">
              <div className="date">
                {new Date(order.update_time).toLocaleString()}
              </div>
              <div className="message-box">
                <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                <div className="para">
                  {order.order_comment}
                </div>
                <div className="attachment">
                  <img src={require("../res/img/"+order.order_attachment.image+".png")}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  showOrderAccept(order)
  {
    if(order.order_type == 'orderaccept'){
      if(order.order_status == 'pending'){
        return (
          <div className="message seller action">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="para">
                    <input ref="comment" className="message-response" placeholder="Send your message with your response"/>
                  </div>
                  <div className="action">
                    <button className="btn btn-accept" onClick={this.onOrderAccept.bind(this,order)}>
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
        );
      }
      else if (order.order_status == 'accept') {
        return (
          <div className="message seller action">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  {new Date(order.update_time).toLocaleString()}
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="para">
                    {order.order_comment}
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
        );
      }
    }
  }

  showAdLaunch(order)
  {
    if(order.order_type == 'adlaunch') {
      if(order.order_status == 'pending'){
        return(
          <div className="message seller action">
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
                    <input ref="comment" className="message-response" placeholder="Include link to post"/>
                  </div>
                  <div className="action">
                    <button className="btn btn-launch" onClick={this.onAdLaunched.bind(this,order)}>
                      Mark Ad as Launched
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
        );
      }
      else if (order.order_status == 'accept') {
        return (
          <div className="message seller action">
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
                    <Link to={order.order_comment}>{order.order_comment}</Link>
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
        );
      }
      else if (order.order_status == 'relaunch_pending') {
        return (
          <div className="message seller action">
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
                    <input ref="comment" className="message-response" placeholder="Include link to post"/>
                  </div>
                  <div className="action">
                    <button className="btn btn-launch" onClick={this.onAdLaunched.bind(this,order)}>
                      Mark Ad as Relaunched
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
        );
      }
    }
  }

  showBuyerApprove(order)
  {
    if(order.order_type == 'buyerapprove') {
      if (order.order_status == 'pending') {
        return (
          <div className="message buyer action">
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
                    If the buyer doesn't approve or reject an ad post within 48 hours, the order will be automatically approved and funds will be added to your account.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      else if (order.order_status == 'accept') {
        this.resultEnd = true;
        return (
          <div className="message buyer action">
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  {new Date(order.update_time).toLocaleString()}
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
        );
      }
      else if (order.order_status == 'reject') {
        return (
          <div className="message buyer action issue">
            <div className="sender">
              <div className="wrapper">
                <img className="avatar" src={require("../res/img/user1.png")}/>
                <span className="username">user123</span>
              </div>
            </div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  {new Date(order.update_time).toLocaleString()}
                </div>
                <div className="issue">
                  Issues? If you can't work out problems with the buyer email us at support@dananza.com for help.
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
                    {order.order_comment}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }
  }

  showRatingSellerGiven(order)
  {
    if(order.order_type == 'ratingsellergiven' && order.order_status == 'accept') {
      const temp = [1,2,3,4,5];
      return (
        <div className="message buyer rating">
          <div className="sender">
            <div className="wrapper">
              <img className="avatar" src={require("../res/img/user1.png")}/>
              <span className="username">user123</span>
            </div>
          </div>
          <div className="message-wrapper">
            <div className="message-content">
              <div className="date">
                {new Date(order.update_time).toLocaleString()}
              </div>
              <div className="message-box">
                <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                <div className="para">
                  {
                    temp.map(
                      (item,index)=>(
                        <i className={"fa fa-star"+(index<parseInt(order.order_attachment.rating)?"":"-o")}></i>
                      )
                    )
                  }
                </div>
                <div className="para">
                  {order.order_comment}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  showRatingBuyerGiven(order)
  {
    if(order.order_type == 'ratingbuyergiven') {
      this.gaveRate = 1;
      this.rateOrder = order;
      if(order.order_status == "accept"){
        this.gaveRate = 2;
        const temp = [1,2,3,4,5];
        return (
          <div className="message seller rating">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  {new Date(order.update_time).toLocaleString()}
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="para">
                    {
                      temp.map(
                        (item,index)=>(
                          <i className={"fa fa-star"+(index<parseInt(order.order_attachment.rating)?"":"-o")}></i>
                        )
                      )
                    }
                  </div>
                  <div className="para">
                    {order.order_comment}
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
        );
      }
    }
  }

  showOrderResult()
  {
    if(this.resultEnd == true){
      return (
        <div className="result">
          <span className="price"> ${this.state.orderHistory[0].order_attachment.price}</span>
          has been added to your account
        </div>
      );
    }
  }

  showRateBuyer()
  {
    if(this.gaveRate == 1) {
      const temp = [1,2,3,4,5];
      return (
        <div className="feedback">
          <div>
            Rate Buyer
          </div>
          <div>
            {
              temp.map(
                (item,index)=>(
                  <a onClick={()=>{this.setState({ratingVal:item})}}>
                    <i className={"fa fa-star"+(index<parseInt(this.state.ratingVal)?"":"-o")}></i>
                  </a>
                )
              )
            }
          </div>
          <div>
            <textarea ref="comment"></textarea>
          </div>
          <div>
            <button className="btn btn-submit" onClick={this.onSubmitFeedback.bind(this)}> Submit Feedback</button>
          </div>
        </div>
      );
    }
  }

  render(){
    const self = this;
    return (
      <div className="order-dashboard">
        <div className="page-content order-seller">
          <div className="page-header">
            <label className="title">Ad Campaign 1</label>
            <div className="subtitle">Instagram Story from <Link to="seller_page">@seller123</Link></div>
          </div>
          {
            this.state.orderHistory.map(
              (order) => (
                <div>
                  {self.showOrder(order)}
                  {self.showMediaUpload(order)}
                  {self.showOrderAccept(order)}
                  {self.showAdLaunch(order)}
                  {self.showBuyerApprove(order)}
                  {self.showRatingSellerGiven(order)}
                  {self.showRatingBuyerGiven(order)}
                </div>
              )
            )
          }
          {self.showOrderResult()}
          {self.showRateBuyer()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {orderHistory} = state.seller;
  return {
    orderHistory
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewOrderSeller);
