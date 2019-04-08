import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { connect } from "react-redux";

import MainLayout from "./layouts/MainLayout";
import EmptyLayout from "./layouts/EmptyLayout";

import Home from "./containers/Home";
import Setting from "./containers/Setting";
import Signin from "./containers/Signin";
import BuyerLanding from "./containers/BuyerLanding";
import Cart from "./containers/Cart";
import SearchResults from "./containers/SearchResults";
import SellerDashboard from "./containers/SellerDashboard";
import About from "./containers/About";
import Help from "./containers/Help";

const NotFound = () => {
  return <div>NotFound</div>;
};

const DashboardRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const EmptyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <EmptyLayout>
          <Component {...matchProps} />
        </EmptyLayout>
      )}
    />
  );
};

class App extends Component {
  state = {
    auth: false
  };

  render() {
    const { settings, auth } = this.props;

    return (
      <MuiThemeProvider theme={settings.theme}>
        <CssBaseline />
        <div>
          <Router>
              <Switch>
                <DashboardRoute path="/dashboard" component={Home} />
                <DashboardRoute path="/setting" component={Setting} />
                <DashboardRoute path="/about" component={About} />
                <DashboardRoute path="/help" component={Help} />
                <DashboardRoute path="/cart" component={Cart} />
                <Route path="/signin" render={() => <Redirect to="/" />} />
                <DashboardRoute exact path="/" component={Home} />
                <DashboardRoute path="/buyerlanding" component={BuyerLanding} />
                <DashboardRoute exact path="/results" component={SearchResults} />
                <DashboardRoute path="/seller_dashboard" component={SellerDashboard} />
                <EmptyRoute component={NotFound} />
              </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {};

const mapStateToProps = state => {
  return {
    settings: state.settings,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
