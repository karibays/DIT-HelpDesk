import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [barcode, setBarcode] = useState("");
  const [cookies, setCookie] = useCookies(["user"]);

  function handleCookie() {
    localStorage.setItem("barcode", barcode);
    // setCookie("barcode", barcode, {
    // path: "/",
    // });

    navigate("/");
  }

  useEffect(() => {
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

  //AXios
    let form_data = new FormData();
    form_data.append('barcode',4564);

  axios 
  .post(`http://10.1.11.249:8080/problem/get_user_id/`, form_data, {
    headers: {
      'content-type':'application/json'
    }
  })
  .then(res => {
      console.log(res);
  })
  .catch(error => {
        console.warn(error)
  });
  })
  

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
