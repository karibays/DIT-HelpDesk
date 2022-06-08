import React from "react";
import ReactDOM from "react-dom/client";
import {DataProvider} from './components/Context/GloblalState'
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DataProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </DataProvider>
);
