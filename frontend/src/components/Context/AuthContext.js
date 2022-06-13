import React, { createContext, useState, useEffect } from "react";
import { fetchUser } from "../../utils/userLocalStorage";

import axios from "axios";
import ProblemsAPI from "../../API/ProblemsAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchUser = () => {
    if (localStorage.getItem("user") === "undefined") {
      setUsers("");
      return;
    }
    setUsers(JSON.parse(localStorage.getItem("user")));
    setLoggedIn(true);
  };

  const setUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    fetchUser();
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        users,
        setUser,
        loggedState: [loggedIn, setLoggedIn],
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
