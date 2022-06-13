import React, { createContext, useState, useEffect } from "react";
import { fetchUser } from "../../utils/userLocalStorage";

import axios from "axios";
import ProblemsAPI from "../../API/ProblemsAPI";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const state = {
    problemsAPI: ProblemsAPI(),
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
