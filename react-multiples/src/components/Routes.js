import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const Routes = () => (
  <BrowserRouter basename="react-multiples">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
