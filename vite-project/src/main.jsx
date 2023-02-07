import React from "react";
import Favicon from "react-favicon";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Favicon url="../assets/img/logo.png" />
      <App />
    </Provider>
  </BrowserRouter>
);
