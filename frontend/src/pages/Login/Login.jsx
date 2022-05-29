import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [barcode, setBarcode] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);

  function handleCookie() {
    setCookie("barcode", barcode, {
      path: "/",
    });
    navigate("/");
  }

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ barcode: "5412" }),
    };
    fetch("http://10.1.11.249:8080/problem/get_user_id", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <div className="login-container">
        <h3 className="login-header">AITU Help Desk</h3>
        <div className="form-group login">
          <label
            className="col-form-label col-form-label-lg mt-4"
            htmlFor="inputLarge"
          >
            Enter Barcode
          </label>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Barcode"
            id="inputLarge"
            onChange={(e) => setBarcode(e.target.value)}
          />
          <button onClick={handleCookie} className="btn btn-primary login-btn">
            Set Cookie
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
