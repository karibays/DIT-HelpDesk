import React from "react";
import ReactDOM from "react-dom/client";
import { DataProvider } from './components/Context/GloblalState'
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./components/Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <DataProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DataProvider>
  </AuthProvider>
);
