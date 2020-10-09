import React from "react";
// components
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddNaver from "./pages/Add-naver";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/index" component={Home} />
        <Route path="/add-naver" component={AddNaver} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
