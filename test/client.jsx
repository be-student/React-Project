import React from "react";
import ReactDOM from "react-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import ResponseCheck from "./src/App.js";
import { createStore } from "redux";
import rootReducer from "./src/container";
import { Provider } from "react-redux";
const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <ResponseCheck />
  </Provider>,
  document.querySelector("#root")
);
