import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StickyNav from "./components/StickyNav";
import Splash from "./pages/Splash";
import Demo from "./pages/ImageUploadDemo";

class App extends Component {
  render() {
    return (
      <div >
        <Router >
          <>
            <StickyNav />
          </>

          <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/demo" component={Demo} />
          </Switch>
        </Router>
      </div>

    );
  }
}

export default App;
