import React from "react";
import "./Profile.css";

const ProfileInfo = () => {
  return (
    <div className="container">
      <div className="jumbotron d-flex flex">
        <img
          src={
            "https://sun1.dataix-kz-akkol.userapi.com/s/v1/ig2/u7R7LCKVaPlAR9-V48QD30E6ndG6HvAIfZZH5sl-m9g39tGIfL9hx-WcuyEObZckwfX_x843nQTLG2vUKRpvkI5f.jpg?size=684x694&quality=96&type=album"
          }
          className="profile-image"
          alt=""
        />
        <div className="">
          <h4>Алибек Момбеков</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Почта:</span>
              <span>alibek.mombekov@mail.ru</span>
            </li>
            <li className="list-group-item">
              <span className="term">Barcode:</span>
              <span>203028</span>
            </li>
            <li className="list-group-item">
              <span className="term">Foo:</span>
              <span>True</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
