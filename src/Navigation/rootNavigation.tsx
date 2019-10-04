import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
const RootNavigation: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
};

export default RootNavigation;
