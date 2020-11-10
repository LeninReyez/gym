//Redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import combineReducers from "./reducers/combineReducers";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./container/App-ctr";
import * as serviceWorker from "./serviceWorker";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(combineReducers, composedEnhancer)}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
