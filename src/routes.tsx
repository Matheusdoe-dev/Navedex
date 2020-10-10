import React from "react";
// components
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddNaver from "./pages/Add-naver";
import EditNaver from "./pages/Edit-naver";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/index" component={Home} />
        <Route path="/add-naver" component={AddNaver} />
        <Route path="/edit-naver/:id" component={EditNaver} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
