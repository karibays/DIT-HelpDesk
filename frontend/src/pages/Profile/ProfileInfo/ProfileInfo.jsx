import axios from "axios";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useCookies } from "react-cookie";
import { AuthContext } from "../../../components/Context/AuthContext";
import { fetchUser } from "../../../utils/userLocalStorage";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [barcode, setBarcode] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { users, loggedIn } = useContext(AuthContext)

  useEffect(() => {
    setName(users.id);
    setBarcode(users.barcode);
    setLoading(false);
  }, [users, error]);

  return error ? (
    <div className="container">
      <div className="jumbotron">
        <h4 className="loading text-muted">Ошибка подключения</h4>
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="jumbotron">
        {loading ? (
          <h4 className="loading text-muted">Загрузка...</h4>
        ) : (
          <>
            <img
              src={"https://loremflickr.com/180/180/cat"}
              className="profile-image"
              alt=""
            />
            <div>
              <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                {/* <li className="list-group-item">
                  <span className="term">Почта:</span>
                  <span>{email}</span>
                </li> */}
                <li className="list-group-item">
                  <span className="term">Barcode:</span>
                  <span>{barcode}</span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
