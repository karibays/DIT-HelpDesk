import React, { createContext, useState, useEffect } from "react";
import { fetchUser } from "../../utils/userLocalStorage";

import axios from "axios";
import ProblemsAPI from "../../API/ProblemsAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchUser = () => {
    console.log(localStorage.getItem("user"));
    setLoggedIn(true);
    if (localStorage.getItem("user") === null) {
      setUsers("");
      return;
    }
    setUsers(JSON.parse(localStorage.getItem("user")));
   
  };

  const setUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    fetchUser();
  };

  useEffect(() => {
    fetchUser();
  }, [loggedIn]);

  const clearStorage = () => {
      localStorage.clear();
    };

  return (
    <AuthContext.Provider
      value={{
        users,
        setUser,
        loggedIn,
        setLoggedIn,
        clearStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
