import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn:
    "https://9824c833315842f2a5f36628efb84075@o420201.ingest.sentry.io/5343531",
});

// import {Tracker} from "../../logger/"

// var mylogger = Tracker();
// mylogger.init();
//mylogger.init('my key goes here')
ReactDOM.render(<App />, document.getElementById("root"));
