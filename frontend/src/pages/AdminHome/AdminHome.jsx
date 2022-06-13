import React, { useState, useContext } from "react";
import NavBar from "../../components/NavBar";

import axios from "axios";
import { fetchUser } from "../../utils/userLocalStorage";
import { GlobalState } from "../../components/Context/GloblalState";

const AdminHome = () => {
  const state = useContext(GlobalState);

  const allProblems = state.problemsAPI.allProblems;

  return (
    <>
      <NavBar admin={true} />
      <div className="container">
        <div className="form-group">
          <input
            className="categories-search form-control form-control-lg mt-4"
            type="text"
            placeholder="Поиск проблемы"
            id="inputLarge"
            // onChange={handleSearch}
          />

          {allProblems.map((problem) => {
            return (
              <a key={problem.id}>
                <div className="card mt-3 p-2">
                  <h4 className="ml-2">{problem.title}</h4>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AdminHome;
