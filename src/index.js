import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppContainer from "./container/App-ctr";
import * as serviceWorker from "./serviceWorker";

//Redux
import { Provider } from "react-redux";
import { createStore } from "redux";
import countReducer from "./reducers/reducer";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(countReducer)}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
