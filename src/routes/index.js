import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import Home from "../pages/homepage";
import Favourite from "../pages/favorites";
import Contact from "../pages/contact";
export default function Index() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/fav" component={Favourite} />
        <Route exact path="/contact/:id" component={Contact} />
      </Switch>
    </Router>
  );
}
