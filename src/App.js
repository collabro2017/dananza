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
import Cart from "./containers/Cart";
import Checkout from "./containers/Checkout";
import UploadFiles from "./containers/UploadFiles";
import PostCheckout from "./containers/PostCheckout";
import About from "./containers/About";
import Help from "./containers/Help";

import SearchResults from "./containers/SearchResults";
import SellerDashboard from "./containers/SellerDashboard";
import SellerOrders from "./containers/SellerOrders";
import SellerAnalytics from "./containers/SellerAnalytics";
import SellerCalendar from "./containers/SellerCalendar";
import SellerPage from "./containers/SellerPage";
import SellerMessages from "./containers/SellerMessages";

import BuyerLanding from "./containers/BuyerLanding";
import BuyerSaved from "./containers/BuyerSaved";
import BuyerProfile from "./containers/BuyerProfile";
import BuyerCampaigns from "./containers/BuyerCampaigns";
import BuyerMessages from "./containers/BuyerMessages";

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
                <Route path="/signin" render={() => <Redirect to="/" />} />
                <DashboardRoute path="/dashboard" component={Home} />
                <DashboardRoute path="/setting" component={Setting} />

                <DashboardRoute exact path="/about" component={About} />
                <DashboardRoute exact path="/help" component={Help} />
                <DashboardRoute exact path="/cart" component={Cart} />
                <DashboardRoute exact path="/checkout" component={Checkout} />
                <DashboardRoute exact path="/uploadfiles" component={UploadFiles} />
                <DashboardRoute exact path="/postcheckout" component={PostCheckout} />
                <DashboardRoute exact path="/" component={Home} />

                <DashboardRoute exact path="/results" component={SearchResults} />
                <DashboardRoute exact path="/seller_dashboard" component={SellerDashboard} />
                <DashboardRoute exact path="/seller_orders" component={SellerOrders} />
                <DashboardRoute exact path="/seller_analytics" component={SellerAnalytics} />
                <DashboardRoute exact path="/seller_calendar" component={SellerCalendar} />
                <DashboardRoute exact path="/seller_page" component={SellerPage} />
                <DashboardRoute exact path="/seller_messages" component={SellerMessages} />

                <DashboardRoute exact path="/buyer_landing" component={BuyerLanding} />
                <DashboardRoute exact path="/buyer_saved" component={BuyerSaved} />
                <DashboardRoute exact path="/buyer_profile" component={BuyerProfile} />
                <DashboardRoute exact path="/buyer_campaigns" component={BuyerCampaigns} />
                <DashboardRoute exact path="/buyer_messages" component={BuyerMessages} />

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
