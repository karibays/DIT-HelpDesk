import { Outlet, Link, useNavigate } from "react-router-dom";
import { clearStorage } from "../../utils/userLocalStorage";

import "./NavBar.css";

const NavBar = ({ lightMode, admin }) => {
  const navigate = useNavigate();
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

  const exitBtnClasses = lightMode
    ? "btn btn-outline-danger"
    : "btn btn-outline-light";

  const handleExit = () => {
    navigate("/login");
    clearStorage();
  };

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
              {admin && (
                <>
                  <li className="nav-item mr-3">
                    <Link to="/adminPage" className={textColorClasses}>
                      Главная
                    </Link>
                  </li>
                  <li className="nav-item mr-3">
                    <Link to="/adminHome" className={textColorClasses}>
                      Страница анкет
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item mr-3">
                <Link to="/categories" className={textColorClasses}>
                  База Знаний
                </Link>
              </li>
              {/* <li className="nav-item mr-3">
                <Link to="/forum" className={textColorClasses}>
                  Форум
                </Link>
              </li> */}
              {!admin && (
                <>
                  <li className="nav-item mr-3">
                    <Link to="/ticket" className={ticketBtnClasses}>
                      Заполнить анкету
                    </Link>
                  </li>
                  <li className="nav-item mr-3">
                    <Link to="/profile" className={textColorClasses}>
                      Личный кабинет
                    </Link>
                  </li>
                </>
              )}

              <li className="nav-item mr-3">
                <button
                  type="button"
                  className={exitBtnClasses}
                  onClick={handleExit}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-box-arrow-in-right mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
                    />
                    <path
                      fillRule="evenodd"
                      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>{" "}
                  Выход
                </button>
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
