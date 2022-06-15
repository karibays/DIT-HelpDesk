import React, { createContext, useState, useEffect } from "react";
import { fetchUser } from "../../utils/userLocalStorage";
import axios from "axios";
import ProblemsAPI from "../../API/ProblemsAPI";
import StatusesAPI from "../../API/StatusesAPI";




export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const state = {
    problemsAPI: ProblemsAPI(),
    statusesAPI: StatusesAPI()
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
