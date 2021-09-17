import React from "react";

import CardsPage from "./pages/CardsPage";
import HelloWorld from "./pages/HelloWorld";
import ReactStart from "./pages/ReactStart";

import { Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ReactStart} />
      <Route exact path="/cards-page" component={CardsPage} />
      <Route exact path="/hello-world" component={HelloWorld} />
    </Switch>
  );
};

export default Routes;
