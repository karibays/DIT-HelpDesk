import React, { createContext, useState, useEffect } from "react";
import { fetchUser } from "../../utils/userLocalStorage";

import axios from "axios";
import ProblemsAPI from "../../API/ProblemsAPI";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState("");

  const fetchUser = () => {
    if (localStorage.getItem("user") !== "undefined") {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      setUsers(userInfo);
    } else {
      localStorage.clear();
    }
  };

  const setUser = (data) => {
    const userInfo = localStorage.setItem("user", JSON.stringify(data));
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
