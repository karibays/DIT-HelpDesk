import React from "react";
import NavBar from "../../components/NavBar";
import { Link } from "react-router-dom";
import "./NoPage.css";

const NoPage = () => {
  return (
    <div>
      <NavBar />
      <div className="no-page-container container">
        <div className="no-page-content">
          <h1 className="text-muted">Упс! Видимо такой страницы нет!</h1>
          <h4 className="text-muted">
            Зато можно{" "}
            <Link to="/" className="no-page-link">
              вернутся на главную...
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
