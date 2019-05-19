import React from "react";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { buyerActions } from '../store/actions';
import { sellerActions } from '../store/actions';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from 'moment';

import SellerSidebar from "../components/Sidebar/SellerSidebar";
import { Link } from 'react-router-dom';

import "../res/css/Seller_Dashboard_Order.css"
import "../res/css/components/select.css"
class SellerOrders extends React.Component{

  state={'headerType': "seller",
      "orderby":"all",
      "orders":[],
      "orderhistories":[],
      "showResult":[],
      "flag": false}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Seller Orders"
  }

  componentWillMount(){
    this.props.dispatch(sellerActions.getSellerOrders());
  }

  componentWillReceiveProps(props){
    if (props.seller_orders != undefined && this.state.flag == false) {
      this.setState({flag:true});
      for(var item of props.seller_orders)
      {
        this.props.dispatch(sellerActions.getLatestOrderHistory(item.Order.id));
      }
      this.setState({ orders:props.seller_orders.slice(0) });
    }
    this.setState({ orderhistories: props.latest_history.slice(0) });

    if (props.seller_orders != undefined && props.latest_history != undefined && props.seller_orders.length == props.latest_history.length) {
      const {seller_orders,latest_history} = props;
      let showResult = [[],[],[],[],[],[]];
      for (var index = 0; index < seller_orders.length; ++index) {
        item = seller_orders[index];
        showResult[latest_history[index].length].push({item,orderhistories:latest_history[index]});
      }
      this.setState({showResult});
    }
  }

  onChangeSelect = event => {
    this.setState({'orderby': event.target.value });
  };

  drawOrder(limit,orders,orderhistories,status){
    return orders.length != orderhistories.length?"":
            orders.map(
              (item,index)=>{
                if(orderhistories[index][limit]==undefined && orderhistories[index][limit-1]!=undefined)
                {
                  return (
                    <div className={"order "+status}>
                      <img src={require("../res/img/order1.png")} />
                      <div className="order-content">
                        <div className="content-header">
                          <span className="header-left">
                            <img src={require("../res/img/"+item.Listing.media_type+"_sq.png")} />
                            <span>{item.Listing.title}</span>
                            <a>{item.Order.Buyer_Profile.User.f_name+' '+item.Order.Buyer_Profile.User.l_name}</a>
                          </span>
                          <span className="header-right">
                            <span className="price">${item.Listing.price}</span>
                            <Link to="/seller_messages"><img src={require("../res/img/message.png")} />Message</Link>
                          </span>
                        </div>
                        <div className="content-body">
                          <div className="order-timeline">
                            <div className={ (orderhistories[index][0].order_status === "accept" ? "active" : '') + " step first"}>
                              <div className="step-button">
                                <hr className="left" />
                                <hr className="right" />
                                <a className="circle">
                                  <img src={require('../res/img/check.png')} alt=""/>
                                </a>
                              </div>
                              <div className="step-label">Order Date</div>
                              <div className="step-label">{ orderhistories.length ? moment(orderhistories[index][0].update_time).format('DD/MM'):''}</div>
                            </div>
                            <div className={ (orderhistories[index][1].order_status === "accept" ? "active" : '') + " step"}>
                              <div className="step-button">
                                <a className="circle">
                                  <img src={require('../res/img/check.png')} alt=""/>
                                </a>
                                <hr className="left" />
                                <hr className="right" />
                              </div>
                              <div className="step-label">Media Uploaded</div>
                              <div className="step-label">{ orderhistories.length ? moment(orderhistories[index][1].update_time).format('DD/MM'):''}</div>
                            </div>
                            <div className={ (orderhistories[index][2] && orderhistories[index][2].order_status === "accept" ? "active" : '') + " step"}>
                              <div className="step-button">
                                <a className="circle">
                                  <img src={require('../res/img/check.png')} alt=""/>
                                </a>
                                <hr className="left" />
                                <hr className="right" />
                              </div>
                              <div className="step-label">Order Accepted</div>
                              <div className="step-label">{ orderhistories.length && orderhistories[index][2] ? moment(orderhistories[index][2].update_time).format('DD/MM'):''}</div>
                            </div>
                            <div className={ (orderhistories[index][3] && orderhistories[index][3].order_status === "accept" ? "active" : '') + " step"}>
                              <div className="step-button">
                                <a className="circle">
                                  <img src={require('../res/img/check.png')} alt=""/>
                                </a>
                                <hr className="left" />
                                <hr className="right" />
                              </div>
                              <div className="step-label">Ad Launched</div>
                              <div className="step-label">{ orderhistories.length && orderhistories[index][3] ? moment(orderhistories[index][3].update_time).format('DD/MM'):''}</div>
                            </div>
                            <div className={ (orderhistories[index][4] && orderhistories[index][4].order_status === "accept" ? "active" : '') + " step last"}>
                              <div className="step-button">
                                <a className="circle">
                                  <img src={require('../res/img/check.png')} alt=""/>
                                </a>
                                <hr className="left" />
                                <hr className="right" />
                              </div>
                              <div className="step-label">Buyer Approved</div>
                              <div className="step-label">{ orderhistories.length && orderhistories[index][4] ? moment(orderhistories[index][4].update_time).format('DD/MM'):''}</div>
                            </div>
                          </div>
                        </div>
                        <div className="content-footer">
                          <Link to={{"pathname" : "/neworder_seller", orderInfo: { OrderId: item.Order.id, SellerName: item.Listing.Channel.username, CampName: item.Campaign.campaign_name} }}
                              className={"btn btn-default btn-radius " + (limit==5?"btn-transparent":"btn-yellow")}>
                            {
                              function(){
                                switch (limit) {
                                  case 2:
                                    return (
                                      <span>
                                        <img src={require("../res/img/review.png")} />
                                        Review Media
                                      </span>
                                    );
                                  case 3:
                                    return (
                                      <span>
                                        <img src={require("../res/img/launch.png")} />
                                        Launch Ad
                                      </span>
                                    );
                                  case 4:
                                    return (
                                      <span>
                                        <img src={require("../res/img/clock.png")} />
                                        Check Status
                                      </span>
                                    );
                                  default:
                                    return (
                                      <span>
                                        <img src={require("../res/img/eye.png")} />
                                        View This Ad
                                      </span>
                                    );
                                }
                              }()
                            }
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                }
              }
            )
  }

  render(){
    return (
      <div className="dashboard_seller">
        <div className="page-content seller_order">
            <SellerSidebar navitem={"orders"}/>
            <div className="page-result-wrapper">
              <div className="page-result">
                <label className="title">Overview Analytics</label>
                <div className="order-by material-select">
                  <span className="grey">Order Status:</span>
                  <FormControl>
                    <Select value={this.state.orderby}
                        onChange={this.onChangeSelect}
                        inputProps={{
                          name: 'material',
                          id: 'material-simple',
                        }}>
                      <MenuItem value={'all'}>All Orders</MenuItem>
                      <MenuItem value={'order1'}>Order1</MenuItem>
                      <MenuItem value={'order2'}>Order2</MenuItem>
                      <MenuItem value={'order3'}>Order3</MenuItem>
                      <MenuItem value={'order4'}>Order4</MenuItem>
                    </Select>
                  </FormControl>
                  <Link to="/neworder_seller" className="add-channel">+ Add Order</Link>
                </div>
                <div className="page-result-content">
                  {
                    this.state.showResult.map(
                      (orders,index)=>(
                        <div>
                        {
                          orders.length==0?"":
                          index==2?<label className="subtitle">Needs Your Approval</label>:
                          index==3?<label className="subtitle">Ready for Launch</label>:
                          index==4?<label className="subtitle">Waiting for Buyer Approval</label>:
                          index==5?<label className="subtitle">Completed Orders</label>:""
                        }
                        {
                        orders.map((order,ordInd)=>(
                          <div className={"order "+(index<5?"active":"")}>
                            <img src={require("../res/img/order1.png")} />
                            <div className="order-content">
                              <div className="content-header">
                                <span className="header-left">
                                  <img src={require("../res/img/"+order.item.Listing.media_type+"_sq.png")} />
                                  <span>{order.item.Listing.title}</span>
                                  <a>{order.item.Order.Buyer_Profile.User.f_name+' '+order.item.Order.Buyer_Profile.User.l_name}</a>
                                </span>
                                <span className="header-right">
                                  <span className="price">${order.item.Listing.price}</span>
                                  <Link to="/seller_messages"><img src={require("../res/img/message.png")} />Message</Link>
                                </span>
                              </div>
                              <div className="content-body">
                                <div className="order-timeline">
                                  <div className={ (order.orderhistories[0].order_status === "accept" ? "active" : '') + " step first"}>
                                    <div className="step-button">
                                      <hr className="left" />
                                      <hr className="right" />
                                      <a className="circle">
                                        <img src={require('../res/img/check.png')} alt=""/>
                                      </a>
                                    </div>
                                    <div className="step-label">Order Date</div>
                                    <div className="step-label">{ order.orderhistories[0] ? moment(order.orderhistories[0].update_time).format('DD/MM'):''}</div>
                                  </div>
                                  <div className={ (order.orderhistories[1].order_status === "accept" ? "active" : '') + " step"}>
                                    <div className="step-button">
                                      <a className="circle">
                                        <img src={require('../res/img/check.png')} alt=""/>
                                      </a>
                                      <hr className="left" />
                                      <hr className="right" />
                                    </div>
                                    <div className="step-label">Media Uploaded</div>
                                    <div className="step-label">{ order.orderhistories[1] ? moment(order.orderhistories[1].update_time).format('DD/MM'):''}</div>
                                  </div>
                                  <div className={ (order.orderhistories[2] && order.orderhistories[2].order_status === "accept" ? "active" : '') + " step"}>
                                    <div className="step-button">
                                      <a className="circle">
                                        <img src={require('../res/img/check.png')} alt=""/>
                                      </a>
                                      <hr className="left" />
                                      <hr className="right" />
                                    </div>
                                    <div className="step-label">Order Accepted</div>
                                    <div className="step-label">{ order.orderhistories[2] ? moment(order.orderhistories[2].update_time).format('DD/MM'):''}</div>
                                  </div>
                                  <div className={ (order.orderhistories[3] && order.orderhistories[3].order_status === "accept" ? "active" : '') + " step"}>
                                    <div className="step-button">
                                      <a className="circle">
                                        <img src={require('../res/img/check.png')} alt=""/>
                                      </a>
                                      <hr className="left" />
                                      <hr className="right" />
                                    </div>
                                    <div className="step-label">Ad Launched</div>
                                    <div className="step-label">{ order.orderhistories[3] ? moment(order.orderhistories[3].update_time).format('DD/MM'):''}</div>
                                  </div>
                                  <div className={ (order.orderhistories[4] && order.orderhistories[4].order_status === "accept" ? "active" : '') + " step last"}>
                                    <div className="step-button">
                                      <a className="circle">
                                        <img src={require('../res/img/check.png')} alt=""/>
                                      </a>
                                      <hr className="left" />
                                      <hr className="right" />
                                    </div>
                                    <div className="step-label">Buyer Approved</div>
                                    <div className="step-label">{ order.orderhistories[4] ? moment(order.orderhistories[4].update_time).format('DD/MM'):''}</div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-footer">
                                <Link to={{"pathname" : "/neworder_seller", orderInfo: { OrderId: order.item.Order.id, SellerName: order.item.Listing.Channel.username, CampName: order.item.Campaign.campaign_name} }}
                                    className={"btn btn-default btn-radius " + (index==5?"btn-transparent":"btn-yellow")}>
                                  {
                                    function(){
                                      switch (index) {
                                        case 2:
                                          return (
                                            <span>
                                              <img src={require("../res/img/review.png")} />
                                              Review Media
                                            </span>
                                          );
                                        case 3:
                                          return (
                                            <span>
                                              <img src={require("../res/img/launch.png")} />
                                              Launch Ad
                                            </span>
                                          );
                                        case 4:
                                          return (
                                            <span>
                                              <img src={require("../res/img/clock.png")} />
                                              Check Status
                                            </span>
                                          );
                                        default:
                                          return (
                                            <span>
                                              <img src={require("../res/img/eye.png")} />
                                              View This Ad
                                            </span>
                                          );
                                      }
                                    }()
                                  }
                                </Link>
                              </div>
                            </div>
                          </div>
                        )
                        )
                        }
                        </div>
                      )
                    )
                  }

                </div>
                <div className="pagination">
                  <a className="btn btn-default hidden" id="prev" hidden> &lt; </a>
                  <div className="btn-group" data-toggle="buttons" id="pages">
                    <label className="btn btn-page active">
                        <input type="radio" className="toggle"/> 1 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 2 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 3 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 4 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 5 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 6 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 7 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 8 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 9 </label>
                    <label className="btn btn-page">
                        <input type="radio" className="toggle"/> 10 </label>
                </div>
                <a className="btn btn-default" id="next"> > </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {seller_orders} = state.seller;
  const { latest_history } = state.seller;
  return {
    seller_orders,
    latest_history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SellerOrders));

