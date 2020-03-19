import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import UnAuthorizater from "./layouts/UnAuthorizated";
import Authorizated from "./layouts/Authorizated";

const MainApp = () => {
  return (
    <>
      <Route exact path="/" component={UnAuthorizater} />
      <Route exact path="/registration" component={UnAuthorizater} />
      <Route exact path="/profile" component={Authorizated} />
    </>
  );
};
ReactDOM.render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>,
  document.getElementById("root")
);
