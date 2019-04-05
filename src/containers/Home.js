import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment, decrement } from "../store/reducers/stepCounter";

import "../res/css/homepage.css"

class Home extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "Homepage"
  }

  render(){
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
         <div class="homepage_section">
          <div class="full_container">
            <div class="row heroblog">
              <div class="col-md-6 col-sm-6 mk_adv_smp color-title">
                Making Advertising Simple
                <div class="finding_best_ad ">Find The Best Space To Place Your Ad</div>
                <div class="finding_ad_select">I want to advertise on
                  <select>
                    <option>Blogs</option>
                    <option>Sites</option>
                    <option>Advertisings</option>
                  </select>
                </div>
                <div class="finding_ad_input">
                  related to
                  <input type="text" name="" placeholder="Type any keyword (maximum of 5 keywords)"/>
                </div>
                <div>
                  <button class="btn bg-yellow color-dark btn-mid">Find Adzas</button>
                </div>
              </div>
              <div class="col-sm-6 col-md-6 pull-right">
                <img src={require("../res/img/heroimage.png")}/>

              </div>
            </div>
            <div class="row what_adza">
              <div class="col-md-6 col-sm-6">
                <img src={require("../res/img/dza.png")}/>
              </div>
              <div class="col-md-6 col-sm-6">
                <div class="info_title">What is an Adza?</div>
                <div class="info_content">An Adza is any entity that sells space for you to place your ad. These include owners of media such as podcasts, websites, social media, events, billboards and lots more. Seeing as the word “seller” didn’t sound right, we call these customer liaisons Adzas instead..</div>
              </div>
            </div>
            <div class="row tell_reach">
              <div class="col-md-7 col-sm-5">
                <div class="info_title">
                  <span class="you">You</span> Tell Us Wtho You Want to Reach <span class="we">We</span> Show You Where to Reach Them
                </div>
                <div class="info_content">Dananza is an open marketplace that provides businesses with a simple solution to finding the best ad spaces to reach potential customers. Using filters such as interests, location, gender, and age, users can quickly find Adzas most likely to get them in front of their target audience.</div>
              </div>
              <div class="col-md-5 col-sm-7 img">
                <img src={require("../res/img/adza_reach.png")}/>
              </div>
            </div>
            <div class="row build_ad bg-light">
              <div class="info_title">
                Build Ad Campaigns
              </div>
              <div class="step">
                <div class="col-sm-2">
                  <img src={require("../res/img/ad_find.png")}/>
                  <br/>
                  Find The Adzas You Need
                </div>
                <div class="col-sm-1 arrow">
                </div>
                <div class="col-sm-2">
                  <img src={require("../res/img/ad_cart.png")}/>
                  <br/>
                  Add Packages From Their Page
                </div>
                <div class="col-sm-1 arrow">
                </div>
                <div class="col-sm-2">
                  <img src={require("../res/img/ad_cloud.png")}/>
                  <br/>
                  Upload Media & Instructions
                </div>
                <div class="col-sm-1 arrow">
                </div>
                <div class="col-sm-2">
                  <img src={require("../res/img/ad_tablet.png")}/>
                  <br/>
                  Monitor Status of Order
                </div>
              </div>
              <div class="bg_img col-sm-12">
                <img src={require("../res/img/ad_camp.png")}/>
                <div>
                  <button class="btn btn-mid bg-yellow">Start Ad Campaign</button>
                </div>
              </div>
            </div>
            <div class="row rest">
              <div class="col-md-6">
                <div class="info_title">
                  Rest Assured Your Advertising Meets Your Needs  
                </div>
                <div class="info_content">
                  <div class="info_content_title">
                    <i class="fa fa-check-circle"></i>
                    Your Stamp of Approval
                  </div>
                  <div>Your Adza doesn’t get paid until you confirm you’re happy with how they got the word out about your business.</div>
                  <div class="info_content_title">
                    <i class="fa fa-check-circle"></i>
                    Diversify Your Strategy
                  </div>
                  <div>Add multiple packages from different Adzas to your campaign and easily manage media, timeline, and costs.</div>
                  <div class="info_content_title">
                    <i class="fa fa-check-circle"></i>
                    Dananza Has Your Back
                  </div>
                  <div>If anything goes wrong at any step in the process, we’re available 365 days a year to help make it right and ensure that advertising is simple.</div>
                </div>  
              </div>
              
              <div class="col-md-6 col-sm-6 img">
                <img src={require("../res/img/rest_bg.png")}/>
              </div>
            </div>
            <div class="row slider">
              <div id="slideshow">
                  <div id="slidesContainer">
                      <div class="slide">
                        <img src={require("../res/img/test_slider1.png")} class="slide_img"/>
                        <div class="img_content">
                          <div class="description">
                            “ At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolor es et quas molestias! “
                          </div>
                          <div class="auth">
                            John Doe, Founder
                          </div>
                          <div class="brand">
                            <img src={require("../res/img/mock_data.png")}/>
                          </div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
            </div>
            <div class="row customer">
              <div class="info_title">Your Customers are Waiting For You</div>
              <div class="customer_link">
                <a href="#" class="btn btn-large creat_act color-white bg-blue">Creat Account</a>
                <a href="#" class="btn btn-large become_adza color-dark bg-yellow">Become An Adza</a>
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
)(Home);
