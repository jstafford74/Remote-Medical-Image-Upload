import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Helmet from 'react-helmet';
import StickyNav from "./components/StickyNav";
import Splash from "./pages/Splash";
import Demo from "./pages/ImageUploadDemo";

class App extends Component {
  render() {
    return (
      <div >
        <Helmet title="Remote Medical Image Uplaoder" />
        <Router >
          <>
            <StickyNav />
          </>

          <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/demo" component={Demo} />
          </Switch>
        </Router>
      </div >

    );
  }
}

export default App;
