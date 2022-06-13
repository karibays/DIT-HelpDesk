import React, { useState, useContext } from "react";
import NavBar from "../../components/NavBar";
import Badge from "../Profile/Badge";
import axios from "axios";
import { fetchUser } from "../../utils/userLocalStorage";
import { GlobalState } from "../../components/Context/GloblalState";
import { Link } from "react-router-dom";

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
          <div className="mt-4" >
          {allProblems.map(
            ({ id, title, description, createdAt, category, status, user }) => {
              return (
                <Link 
                  to='/categories'
                  className="problems-item list-group-item list-group-item-action mt-2"
                  key={id}
                >
                  <div className="problems-block">
                    <div className="problems-content">
                      <Badge status={status?.id} />
                      <h4>{title}</h4>
                      <h6 className="text-muted">{category?.categoryName}</h6>
                      <p>{description}</p>
                      <p>{user?.barcode}</p>
                      <small className="text-muted">
                        Создано в {createdAt.slice(0, 10)}
                      </small>
                    </div>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      </div>
      </div>
    </>
  );
};

export default AdminHome;
