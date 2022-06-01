import React from "react";
import NavBar from "../../components/NavBar";
import ProfileInfo from "./ProfileInfo";
import ChatList from "./ChatList";

const Profile = () => {
  return (
    <div>
      <NavBar lightMode={true} />
      <ProfileInfo />
      <ChatList />
    </div>
  );
};

export default Profile;
