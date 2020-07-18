import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Provider } from "react-redux";
import AppContainer from "./AppContainer";
import store from "./store";

Sentry.init({
  dsn:
    "https://9824c833315842f2a5f36628efb84075@o420201.ingest.sentry.io/5343531",
});

// import {Tracker} from "../../logger/"

// var mylogger = Tracker();
// mylogger.init();
//mylogger.init('my key goes here')
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root"),
);
