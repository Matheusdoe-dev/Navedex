import React from "react";
// components
import { BrowserRouter, Switch, Route } from "react-router-dom";
// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import AddNaver from "./pages/Add-naver";
import EditNaver from "./pages/Edit-naver";
// contexts
import { Authentication } from "./hooks/user-authentication";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Authentication>
          <Route path="/" exact component={Login} />
          <Route path="/navers/:naver_id" component={Home} />
          <Route path="/navers" exact component={Home} />
          <Route path="/add-naver" component={AddNaver} />
          <Route path="/edit-naver/:naver_id" component={EditNaver} />
        </Authentication>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
