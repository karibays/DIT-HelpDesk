import React, { useState } from "react";
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
