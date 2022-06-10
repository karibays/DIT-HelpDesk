import React, { useState, useEffect, useContext } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Login.css";
import { AuthContext } from "../../components/Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const {setUser} = useContext(AuthContext)
  const [barcode, setBarcode] = useState("");
  const [error, setError] = useState(false);
  const [loginInputClasses, setloginInputClasses] = useState(
    "form-control form-control-lg"
  );

  function clearCookies() {
    localStorage.clear();
  }

  function handleCookie() {
    const form_data = new FormData();
    setloginInputClasses("form-control form-control-lg");
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
          navigate("/");
        } else {
          setloginInputClasses((prev) => (prev += " is-invalid"));
          setError(true);
          console.log("no user");
        }
      })
      .catch((error) => {
        console.warn(error);
        setloginInputClasses((prev) => (prev += " is-invalid"));
        setError(true);
      });
  }

  useEffect(() => {
    // if (fetchUser() !== null || fetchUser() !== undefined) navigate("/");
  }, []);

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

          <button onClick={handleCookie} className="btn btn-primary login-btn">
            Login
          </button>
          <button onClick={clearCookies} className="btn btn-primary login-btn">
            Clear Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
