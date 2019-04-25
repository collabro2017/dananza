import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const drawerWidth = 240;

const styles = theme => ({
  
});

class MainLayout extends Component {
  state = {
    headerType: 'dfdfd'
  };

  handleHeader = (headerType) => {
    this.setState({headerType: headerType});
  };

  render() {
    const { classes, children } = this.props;
    const childrenWithProps = React.Children.map(this.props.children, child =>
      React.cloneElement(child, { changeHeaderType : this.handleHeader })
    );

    return (
      <Fragment>
          <Header
            type={this.state.headerType}
          />
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: this.state.open
            })}
          >
            {childrenWithProps}

          </main>
          <Footer/>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {

    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(MainLayout));
