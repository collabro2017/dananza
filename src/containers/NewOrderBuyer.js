import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { sellerActions } from '../store/actions';

import "../res/css/NewOrderBuyer.css"


class NewOrderBuyer extends React.Component{

  state={'headerType': "static",
         'orderId': this.props.location.orderInfo ? this.props.location.orderInfo.OrderId : 1,
         'orderHistory':[],
         'ratingVal':1}
  resultEnd = false;
  lasttime = new Date();

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "NewOrder_Buyer"
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

  onBuyerApprove(order){
    order.order_status = 'accept';
    const { dispatch } = this.props;
    dispatch(sellerActions.updateOrderHistory(order));
    dispatch(sellerActions.addOrderHistory(this.state.orderId, 'ratingsellergiven', 'pending'));
    dispatch(sellerActions.addOrderHistory(this.state.orderId, 'ratingbuyergiven', 'pending'));
  }

  onBuyerDisapprove(order){
    order.order_comment = this.refs.comment.value;
    order.order_status = 'reject';
    const { dispatch } = this.props;
    dispatch(sellerActions.updateOrderHistory(order));
    dispatch(sellerActions.addOrderHistory(this.state.orderId, 'adlaunch', 'relaunch_pending'));
  }

  onSubmitFeedback(order){
    order.order_comment = this.refs.comment.value;
    order.order_attachment = {"rating":this.state.ratingVal};
    order.order_status = 'accept';
    const { dispatch } = this.props;
    dispatch(sellerActions.updateOrderHistory(order));
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
          <div className="message seller action pending">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="para">
                    If the seller doesn't approve or reject your ad within 5 days, the order will be automatically rejected.
                  </div>
                  <div className="action">
                     <label class="btn state-awaiting">Awaiting Seller Approval</label>
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
          <div className="message seller action pending">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="action">
                    <label className="btn state-launching">
                      Launch Scheduled for April 14, 2019
                      <i className="fa fa-calendar"></i>
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
          <div className="message seller action pending">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="action">
                    <label className="btn state-launching">
                      Awaiting Ad Relaunch
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
                    <button className="btn btn-accept" onClick={this.onBuyerApprove.bind(this,order)}>
                      Yes<i className="fa fa-smile-o"></i>
                    </button>
                    <button className="btn btn-reject" onClick={this.onBuyerDisapprove.bind(this,order)}>
                      No<i className="fa fa-frown-o"></i>
                    </button>
                  </div>
                  <div className="para">
                    Did the Adza's post meet your expectation?
                    <input className="message-response" ref="comment" placeholder="Type the reason, when you disapprove."/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      else if (order.order_status == 'accept') {
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
                      Yes
                      <i className="fa fa-smile-o"></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      else if (order.order_status == 'reject') {
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
                    <label className="btn state-rejected">
                      No
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
    if(order.order_type == 'ratingsellergiven') {
      const temp = [1,2,3,4,5];
      if(order.order_status == 'pending'){
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
                          <a onClick={()=>{this.setState({ratingVal:item})}}>
                            <i className={"fa fa-star"+(index<parseInt(this.state.ratingVal)?"":"-o")}></i>
                          </a>
                        )
                      )
                    }
                  </div>
                  <div className="para">
                    Leave feedback on your order (optional)
                    <textarea className="message-response" ref="comment"/>
                  </div>
                  <div className="action">
                    <button className="btn btn-submit" onClick={this.onSubmitFeedback.bind(this,order)}> Submit </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      else if(order.order_status == 'accept'){
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
                          <i className={"fa fa-star"+(index<parseInt(this.state.ratingVal)?"":"-o")}></i>
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
  }

  showRatingBuyerGiven(order)
  {
    if(order.order_type == 'ratingbuyergiven') {
      if(order.order_status == "accept"){
        const temp = [1,2,3,4,5];
        this.lasttime = new Date(order.update_time);
        this.resultEnd = true;
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
      else if(order.order_status == "pending"){
        const temp = [1,2,3,4,5];
        this.lasttime = new Date(order.update_time);
        return (
          <div className="message seller rating">
            <div className="sender"></div>
            <div className="message-wrapper">
              <div className="message-content">
                <div className="date">
                  Pending
                </div>
                <div className="message-box">
                  <img className="arrow_send" src={require("../res/img/arrow_send.png")}/>
                  <img className="arrow_receive" src={require("../res/img/arrow_receive.png")}/>
                  <div className="para">
                    Seller has not left feedback yet.
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
          This order was completed on {this.lasttime.toLocaleDateString()}
        </div>
      );
    }
  }


  render(){
    const self = this;
    var camp = this.props.location.orderInfo;
    return (
      <div className="order-dashboard">
        <div className="page-content order-buyer">
          <div className="page-header">
            <label className="title">{ camp.CampName ? camp.CampName : "Ad Campaign1" }</label>
            <div className="subtitle">Instagram Story from <Link to="seller_page">{ camp.SellerName }</Link></div>
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
)(NewOrderBuyer);
