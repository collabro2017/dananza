import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment, decrement } from "../store/reducers/stepCounter";

import "../res/css/help.css"

class Help extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "Help & Support"
  }

  render(){
    return (
      <div className="help_container">
        <div class="static_container full_container">
            <div class="heroblog-help">
                <div class="hero">
                    <div class="help text-center">
                        <h1 class="info_title color-white">Help & Support</h1>
                    </div>
                    <div class="search-help text-center">
                        <i class="fa fa-search input"></i>
                        <input type="text" placeholder="Search Help Topics"></input>
                    </div>
                </div>
            </div>
            <div class="content full_container">
                <div class="tab-bar text-center">
                    <a class="f-color">I'm a Customer</a>
                    <a class="f-color">I'm an Adza</a>
                </div>
                <div class="content-body">
                    <div class="article container">
                        <div class="info_title">Recommended Articles</div>
                        <div class="col-md-4 article-section">
                            <ul>
                                <li class="f-color">Dananza Payment Protection</li>
                                <li class="f-color">Edit Billing Method</li>
                                <li class="f-color">Request a Refund</li>
                                <li class="f-color">Forgot Password or Security Questi...</li>
                            </ul>
                        </div>
                        <div class="col-md-4 article-section">
                            <ul>
                                <li class="f-color">Ad Rejection</li>
                                <li class="f-color">Deactivate Your Account</li>
                                <li class="f-color">Ads Measurement of Success</li>
                                <li class="f-color">Disable Messages</li>
                            </ul>
                        </div>
                        <div class="col-md-4 article-section">
                            <ul>
                                <li class="f-color">Billing</li>
                                <li class="f-color">Manage Your Campaign</li>
                                <li class="f-color">Troubleshoot Messages</li>
                            </ul>
                        </div>
                    </div>
                    <div class="article  bg-light">
                        <div class="container">
                            <div class="info_title">Popular Topics</div>
                            <div class="col-md-4 article-section">
                                <div class="sub-title">Getting Started</div>
                                <div class="article-section">
                                    <ul>
                                        <li><i class="fa fa-angle-right"></i>How Dananza Works</li>
                                        <li><i class="fa fa-angle-right"></i>Invite a Friend(Earn $100)</li>
                                        <li><i class="fa fa-angle-right"></i>Creating an Account</li>
                                    </ul>
                                </div>
                                <div class="article-foot">
                                    <a class="f-color">Show All</a>
                                </div>
                            </div>
                            <div class="col-md-4 article-section">
                                <div class="sub-title">Communications</div>
                                <div class="article-section">
                                    <ul>
                                        <li><i class="fa fa-angle-right"></i>Managing Your Campaigns</li>
                                        <li><i class="fa fa-angle-right"></i>Using Notifications</li>
                                        <li><i class="fa fa-angle-right"></i>Using Your Inbox</li>
                                    </ul>
                                </div>
                                <div class="article-foot">
                                    <a class="f-color">Show All</a>
                                </div>
                            </div>
                            <div class="col-md-4 article-section">
                                <div class="sub-title">Placing Orders</div>
                                <div class="article-section">
                                    <ul>
                                        <li><i class="fa fa-angle-right"></i>Finding Medium</li>
                                        <li><i class="fa fa-angle-right"></i>Contacting Adzas</li>
                                        <li><i class="fa fa-angle-right"></i>Requesting Specific Services</li>
                                    </ul>
                                </div>
                                <div class="article-foot">
                                    <a class="f-color">Show All</a>
                                </div>
                            </div>
                            <div class="col-md-4 article-section">
                                <div class="sub-title">Trust & Safety</div>
                                <div class="article-section">
                                    <ul>
                                        <li><i class="fa fa-angle-right"></i>Securing Your Account</li>
                                        <li><i class="fa fa-angle-right"></i>Verifying Your Phone</li>
                                        <li><i class="fa fa-angle-right"></i>Resetting Your Password</li>
                                    </ul>
                                </div>
                                <div class="article-foot">
                                    <a class="f-color">Show All</a>
                                </div>
                            </div>
                            <div class="col-md-4 article-section">
                                <div class="sub-title">Policies</div>
                                <div class="article-section">
                                    <ul>
                                        <li><i class="fa fa-angle-right"></i>Data and Privacy on Dananza</li>
                                        <li><i class="fa fa-angle-right"></i>Order Cancellation</li>
                                        <li><i class="fa fa-angle-right"></i>"For Commercial Use" License...</li>
                                    </ul>
                                </div>
                                <div class="article-foot">
                                    <a class="f-color">Show All</a>
                                </div>
                            </div>
                            <div class="col-md-4 article-section">
                                <div class="sub-title">FAQs</div>
                                <div class="article-section">
                                    <ul>
                                        <li><i class="fa fa-angle-right"></i>Buyer FAQs</li>
                                    </ul>
                                </div>
                                <div class="article-foot">
                                    <a class="f-color">Show All</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center title">Didn't Find What You Were Looking For?</div>
                    <div class="text-center contact-us">
                        <button class="btn btn-mid bg-yellow color-dark">Contact Us</button>
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
)(Help);
