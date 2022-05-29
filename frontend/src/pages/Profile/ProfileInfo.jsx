import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "./Profile.css";

const ProfileInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [barcode, setBarcode] = useState("");
  const [loading, setLoading] = useState(true);
  const [cookies, setCookies] = useCookies("");
  useEffect(() => {
    const randNum = Math.floor(Math.random() * 10) + 1;

    Promise.all([
      fetch("https://loremflickr.com/180/180/cat"),
      fetch(`https://jsonplaceholder.typicode.com/users/${randNum}`),
    ])
      .then((res) => {
        const imgUrl = res[0].url;
        const user = res[1].json();
        setImgUrl(imgUrl);
        return user;
      })
      .then(({ name, email }) => {
        setName(name);
        setEmail(email);
        setBarcode(cookies.barcode);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container">
      <div className="jumbotron">
        {loading ? (
          <h4 className="loading text-muted">Loading...</h4>
        ) : (
          <>
            <img src={imgUrl} className="profile-image" alt="" />
            <div>
              <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="term">Почта:</span>
                  <span>{email}</span>
                </li>
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
