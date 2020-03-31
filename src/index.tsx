import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import UnAuthorizater from "./layouts/UnAuthorized/UnAuthorizated";
import Authorizated from "./layouts/Authorized/Authorizated";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./store/reducers/index.reducers";
import addString from "./store/actions/Actions";
import {ApolloProvider} from "@apollo/react-hooks";
import {client} from "./quieres/ApolloClient";

const MainApp = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <Route exact path="/"  >
          {localStorage.getItem('token') ? <Redirect to="/profile"/> : <UnAuthorizater/>}
        </Route>
        <Route exact path="/registration">
        {localStorage.getItem('token') ? <Redirect to="/profile"/> : <UnAuthorizater/>}
        </Route>
        <Route exact path="/profile">
        {localStorage.getItem('token') ? <Authorizated/> : <Redirect to="/"/> }
        </Route>
        <Route exact path="/process">
        {localStorage.getItem('token') ? <Authorizated/> : <Redirect to="/"/> }
        </Route>
      </ApolloProvider>
    </>
  );
};

let store = createStore(
  Reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
store.dispatch(addString("hello"));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
