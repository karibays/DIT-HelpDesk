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
  AdminHome
} from "./pages";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { fetchUser } from "../src/utils/fetchUser";
import { AuthContext } from "./components/Context/AuthContext";

const App = () => {
  const {users} = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if (!users) navigate("/login");
  
  }, [users]);

  return (
    <div>
      <Routes>

        {users.role == "ADMIN"
        ? (
          <>
          <Route path="/*" element={<AdminHome />} />
          <Route path="adminPage" element={<AdminPage />} />
          </>
        )

        :(
          <>
           <Route path="/*" element={<MainPage />} />
           
          </>

        )

        }

         <Route path="categories" element={<Categories />} />
          {/* <Route path="forum" element={<NoPage />} /> */}
          <Route path="ticket" element={<Ticket />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
         
       
      </Routes>
    </div>
  );
};

export default App;
