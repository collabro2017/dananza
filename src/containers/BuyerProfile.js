import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { increment, decrement } from "../store/reducers/stepCounter";
import BuyerSidebar from "../components/Sidebar/BuyerSidebar";

// import "../res/css/Dananza_Search.css"
import "../res/css/BuyerProfile.css"

class BuyerProfile extends React.Component{

  state={'headerType': "buyer"}

  constructor(props) {
    super(props);
    props.changeHeaderType( this.state.headerType )
  }

  componentDidMount(){
    document.title = "Buyer Profile"
  }

  render(){
    return (
      <div className="buyer_landing buyer_profile">
        <div className="page-container">
           <div className="page-content">
              <BuyerSidebar />
              <div className="page-main">
                <div className="page-main-header">
                  <span className="headline-first">
                    Edit Your Profile Page
                  </span>
                  <span className="headline-second pull-right">
                    View Profile Page <i className="fa fa-long-arrow-right"></i>
                  </span>
                </div>
                <hr className="divider-line" />
                <div className="page-main-content pd-bottom row">
                <form role="form" className="form-horizontal">
                  <div className="form-body">
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel"> Profile photo</label>
                      <div className="col-md-10 controlcontent">
                        <img src={require("../res/img/userinfo_img.png")} />
                        <div className="right-control col-md-8">
                          <a className="btn dark btn-outline btn-radius">
                            <i className="fa fa-file-image-o"></i>
                            <b>Choose Photo</b>
                          </a>
                          <div>This photo is your identity in Dananza.</div>
                        </div>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        Describe<br/>
                        Yourself/Your<br/>
                        Company in a few<br/>
                        words
                      </label>
                      <div className="col-md-10 controlcontent">
                        <textarea className="form-control btn-radius" placeholder="Hi there!" rows="5" style={{'height':'120px'}}></textarea>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        What do you do?
                      </label>
                      <div className="col-md-10 controlcontent">
                        <div className="mt-radio-list">
                          <label className="mt-radio mt-radio-outline">
                            <input type="radio" name="optionsRadios" id="optionsRadios22" value="option1" checked=""/> Business Owner
                            <span></span>
                          </label>
                          <label className="mt-radio mt-radio-outline">
                            <input type="radio" name="optionsRadios" id="optionsRadios23" value="option2" checked=""/> Freelancer
                            <span></span>
                          </label>
                          <label className="mt-radio mt-radio-outline">
                            <input type="radio" name="optionsRadios" id="optionsRadios23" value="option2" checked=""/> Employee
                            <span></span>
                          </label>
                          <label className="mt-radio mt-radio-outline">
                            <input type="radio" name="optionsRadios" id="optionsRadios23" value="option2" checked=""/> Agency
                            <span></span>
                          </label>
                          <p>Which industry does the workplace/business belong to?</p>
                        </div>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        
                      </label>
                      <div className="col-md-10 controlcontent">
                        <input type="text" className="form-control btn-radius" placeholder="ex: Ad Agency"/>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        Location
                      </label>
                      <div className="col-md-10 controlcontent">
                        <div className="input-icon">
                          <img src={require("../res/img/minami.png")} className="placeholder-img"/>
                          <input type="text" className="form-control btn-radius" placeholder="ex: Ad Agency"/>
                        </div>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        Linked Accounts
                      </label>
                      <div className="col-md-10 controlcontent">
                        <div className="input-icon">
                          <img src={require("../res/img/play.png")} className="placeholder-img"/>
                          <input type="text" className="form-control btn-radius" placeholder="Choose Media Type"/>
                        </div>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        
                      </label>
                      <div className="col-md-10 controlcontent">
                        <div className="input-icon">
                          <img src={require("../res/img/username.png")} className="placeholder-img"/>
                          <input type="text" className="form-control btn-radius" placeholder="Username"/>
                        </div>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        
                      </label>
                      <div className="col-md-10 controlcontent">
                        <div className="input-icon">
                          <img src={require("../res/img/link.png")} className="placeholder-img"/>
                          <input type="text" className="form-control btn-radius" placeholder="Linked Account"/>
                        </div>
                      </div>
                    </div>
                    <div className="formcontrol row">
                      <label className="col-md-2 controllabel">
                        Websites
                      </label>
                      <div className="col-md-10 controlcontent">
                        <div className="input-icon">
                          <img src={require("../res/img/link.png")} className="placeholder-img"/>
                          <input type="text" className="form-control btn-radius" placeholder="https://itsmichaelaseyra.com"/>
                        </div>
                      </div>
                    </div>
                    </div>
                  </form>
                  <p><a className="add-website">+ Add Another Website</a></p>
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
)(BuyerProfile);
