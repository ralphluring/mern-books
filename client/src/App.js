import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./components/pages/Search";
import Saved from "./components/pages/Saved";
import Home from "./components/pages/Home";
import Nav from "./components/Nav";


class App extends Component {
  render() {
    return (
       <Router>
        <div className="container">
         <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
          
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
