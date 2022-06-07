import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = ({ lightMode }) => {
  const backgroundColor = lightMode
    ? { backgroundColor: "white" }
    : { backgroundColor: "#2c8dff" };

  const logoColor = lightMode ? "logo-blue" : "logo-light";

  const textColorClasses = lightMode
    ? "nav-link nav-link-blue align-middle"
    : "nav-link nav-link-white align-middle";

  const ticketBtnClasses = lightMode
    ? "btn btn-outline-info align-middle"
    : "btn btn-outline-light align-middle";

  const navbarTogglerClasses = lightMode
    ? "navbar-toggler navbar-toggler-black"
    : "navbar-toggler navbar-toggler-light";

  const navbarTogglerIconClasses = lightMode
    ? "navbar-toggler-icon navbar-toggler-icon-black"
    : "navbar-toggler-icon navbar-toggler-icon-light";

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={backgroundColor}>
        <div className="container-fluid">
          <Link to="/" className={logoColor}>
            <h3>AITU Help Desk</h3>
          </Link>
          <button
            className={navbarTogglerClasses}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={navbarTogglerIconClasses}></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-3">
                <Link to="/categories" className={textColorClasses}>
                  База Знаний
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link to="/forum" className={textColorClasses}>
                  Форум
                </Link>
              </li>
              <li className="nav-item mr-3">
                <Link to="/ticket" className={ticketBtnClasses}>
                  Заполнить анкету
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className={textColorClasses}>
                  Личный кабинет
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavBar;
