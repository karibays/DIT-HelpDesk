import { useEffect } from "react";
import "./App.css";
import {
  Categories,
  Forum,
  MainPage,
  NoPage,
  Ticket,
  Profile,
  AdminPage,
  Login,
} from "./pages";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { fetchUser } from "../src/utils/fetchUser";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = fetchUser();
    // if (!User) navigate("/login");
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="categories" element={<Categories />} />
        <Route path="forum" element={<NoPage />} />
        <Route path="ticket" element={<Ticket />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
        <Route path="adminPage" element={<AdminPage />} />
      </Routes>
    </div>
  );
};

export default App;
