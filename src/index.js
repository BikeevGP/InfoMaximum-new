import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import UnAuthorizater from "./layouts/UnAuthorizated";
import Authorizated from "./layouts/Authorizated";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./store/reducers/index.reducers";
import addString from './store/actions/actions';

const MainApp = () => {
  return (
    <>
      <Route exact path="/" component={UnAuthorizater} />
      <Route exact path="/registration" component={UnAuthorizater} />
      <Route exact path="/profile" component={Authorizated} />
    </>
  );
};

let store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(addString("hello"));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
