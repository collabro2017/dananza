import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import { logout } from "../store/reducers/authenticate";

const drawerWidth = 240;

const styles = theme => ({
  
});

class MainLayout extends Component {
  state = {
    open: false
  };

  handleToggleDrawer = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  };

  render() {
    const { classes, children } = this.props;
    return (
      <Fragment>
          <Header
            logout={this.props.logout}
            handleToggleDrawer={this.handleToggleDrawer}
          />
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: this.state.open
            })}
          >
            {children}
          </main>

          <Footer/>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      logout: () => logout()
    },
    dispatch
  );
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(MainLayout));
