import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { fetchUser } from "../utils/fetchUser";
import { AuthContext } from "../components/Context/AuthContext";

function ProblemsAPI() {
  const [problems, setProblems] = useState([]);
  const {users} = useContext(AuthContext);

  useEffect(() => {
    console.log("GetProblems")
    axios
      .get(`http://10.1.11.249:8080/problems/user/${users.id}`)
      .then((res) => {
        setProblems(
          res.data
            .sort((prob1, prob2) => prob1.id - prob2.id)
            .slice(0)
            .reverse()
        );
      })
      .catch((err) => {
        console.log("Error while fetching problems: " + err.message);
      });
  }, [users]);

  return {
    problems: [problems, setProblems],
  };
}

export default ProblemsAPI;
