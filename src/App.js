import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Topbar from "./components/Topbar/Topbar";
import CategoryRoutes from "./components/CategoryRoutes/CategoryRoutes";
import Authentication from "./pages/Authentication/Authentication";
import UserBasket from "./pages/UserBasketPage/UserBasket";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends React.Component {
  state = {
    isSignedIn: null,
    email: null
  };

  render() {
    const { currentUser } = this.props.UserReducer;
    const { display } = this.props.FooterReducer;
    return (
      <div className="App">
        <Topbar />
        <Route exact path="/" component={Homepage} />
        <Route
          path="/auth"
          render={() =>
            currentUser ? <Redirect to="/" /> : <Authentication />
          }
        />
        <Route path="/category" component={CategoryRoutes} />
        <Route exact path="/userbasket" component={UserBasket} />
        {display ? <Footer /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  UserReducer: state.UserReducer,
  FooterReducer: state.FooterReducer
});

export default connect(
  mapStateToProps,
  null
)(App);
