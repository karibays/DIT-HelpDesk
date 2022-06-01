import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../utils/fetchUser";
import axios from "axios";

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
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
          setUser({ id: data.id, barcode: barcode });
          navigate("/");
        } else {
          setloginInputClasses((prev) => (prev += " is-invalid"));
          setError(true);
          console.log("no user");
        }
      })
      .catch((error) => {
        console.warn(error);
        setError(true);
      });
  }

  // useEffect(() => {
  //   let form_data = new FormData();
  //   form_data.append('barcode',5412);
  //   const requestOptions = {
  //     method: "POST",
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //     body: form_data
  //   };
  //   fetch("http://10.1.11.249:8080/problem/get_user_id/", requestOptions)
  //     .then((response) => {
  //       console.log(JSON.parse(response));
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  // });

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
