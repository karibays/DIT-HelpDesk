import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [barcode, setBarcode] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [cookies, setCookies] = useCookies("");

  useEffect(() => {
    const randNum = Math.floor(Math.random() * 10) + 1;

    // Have a connection problem with Windows 10
    // Promise.all([
    //   fetch("https://loremflickr.com/180/180/cat"),
    //   fetch(`https://jsonplaceholder.typicode.com/users/${randNum}`),
    // ])
    //   .then((res) => {
    //     const imgUrl = res[0].url;
    //     const user = res[1].json();
    //     setImgUrl(imgUrl);
    //     return user;
    //   })
    //   .then(({ name, email }) => {
    //     setName(name);
    //     setEmail(email);
    //     setBarcode(cookies.barcode);
    //     setLoading(false);
    //     console.log(name, email);
    //   })
    //   .catch((err) => {
    //     setError(false);
    //     console.log(err);
    //   });

    //Here is another API for getting user info
    Promise.all([
      fetch("https://loremflickr.com/180/180/cat"),
      fetch("https://randomuser.me/api/?results=1"),
    ])
      .then((res) => {
        const imgUrl = res[0].url;
        const user = res[1].json();
        setImgUrl(imgUrl);
        return user;
      })
      .then((data) => {
        const {
          email,
          name: { first, last },
        } = data.results[0];

        setName(`${first} ${last}`);
        setEmail(email);
        setBarcode(cookies.barcode);
        setLoading(false);
      })
      .catch((err) => {
        setError(() => true);
        console.log(err);
      });
  }, [error]);

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
