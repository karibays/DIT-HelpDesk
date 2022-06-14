import { useContext, useEffect } from "react";
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
  AdminHome,
  ProblemDetails,
} from "./pages";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { fetchUser } from "./utils/userLocalStorage";
import { AuthContext } from "./components/Context/AuthContext";

const App = () => {
  const { users } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if (!users) navigate("/login");
  }, [users]);

  return (
    <div>
      <Routes>
        {users && users.role === "ADMIN" ? (
          <>
            <Route path="/*" element={<AdminHome />} />
            <Route path="adminPage" element={<AdminPage />} />
            <Route path="categories" element={<Categories admin={true} />} />
            <Route path="details" element={<ProblemDetails />} />
          </>
        ) : (
          <>
            <Route path="/*" element={<MainPage />} />
            <Route path="categories" element={<Categories />} />
            {/* <Route path="forum" element={<NoPage />} /> */}
            <Route path="ticket" element={<Ticket />} />
            <Route path="profile" element={<Profile />} />
            <Route path="details" element={<ProblemDetails />} />
          </>
        )}
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
