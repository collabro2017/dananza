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

class About extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    document.title = "About"
  }

  render(){
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }} >

        <div class="about full_container">
            <div class="heroblog-help">
                <div class="hero">
                    <div class="help text-center">
                        <h1 class="info_title color-white">About Dananza</h1>
                    </div>
                </div>
            </div>
            <div class="content container">
                <div class="content-body">
                    <div class="our_mission info_title text-center">Our Mission</div>
                    <p class="text-center italic">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
                    </p>
                    <div class="our_mission info_title text-center">About Dananza</div>
                    <p class="text-center">
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. </p>
                    <p class="text-center">
                        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae  
                    </p>    
                </div>
                <div class="find_out">
                    <div class="col-md-7 col-sm-7">
                        <div class="info_title color-white">Find the Best Space to Place Your Ad in Dananza</div>
                    </div>
                    <div class="col-md-5 col-sm-5 text-center">
                        <button class="btn bg-yellow btn-mid">Start Ad Campaign</button>
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
)(About);
