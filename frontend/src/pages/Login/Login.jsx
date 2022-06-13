import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import { AuthContext } from "../../components/Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);
  const [barcode, setBarcode] = useState("");
  const [error, setError] = useState(false);
  const [loginInputClasses, setloginInputClasses] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function clearCookies() {
    localStorage.clear();
  }

  function navigateByRole(role) {
    role === "ADMIN" ? navigate("/adminPage") : navigate("/");
  }

  function handleCookie() {
    const form_data = new FormData();
    setloginInputClasses("form-control form-control-lg");
    setIsLoading(true);
    form_data.append("barcode", barcode);
    axios
      .post(`http://10.1.11.249:8080/problem/get_user_id/`, form_data, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then(({ data }) => {
        console.log(data);
        if (data) {
          setUser(data);
          navigateByRole(data.role);
        } else {
          setloginInputClasses((prev) => (prev += " is-invalid"));
          setError(true);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error);
        setloginInputClasses((prev) => (prev += " is-invalid"));
        setError(true);
      });
  }

  return (
    <div>
      <div className="login-container">
        <h3 className="login-header">AITU Help Desk</h3>
        <div className="form-group login">
          <label
            className="col-form-label col-form-label-lg mt-4"
            htmlFor="loginInput"
          >
            Enter Barcode
          </label>
          <input
            className={loginInputClasses}
            type="text"
            placeholder="Barcode"
            id="loginInput"
            onChange={(e) => setBarcode(e.target.value)}
          />

          {error && (
            <div className="invalid-feedback">Incorrect barcode entered</div>
          )}

          <button
            onClick={handleCookie}
            className={
              isLoading
                ? "btn btn-primary login-btn disabled"
                : "btn btn-primary login-btn"
            }
          >
            Login
          </button>
          <button
            onClick={clearCookies}
            className={
              isLoading
                ? "btn btn-primary login-btn disabled"
                : "btn btn-primary login-btn"
            }
          >
            Clear Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
