import React from "react";
import NavBar from "../../components/NavBar";
import ProfileInfo from "./ProfileInfo";
import Problems from "./Problems";

const Profile = () => {
  return (
    <div>
      <NavBar lightMode={true} />
      <ProfileInfo />
      <Problems />
    </div>
  );
};

export default Profile;
