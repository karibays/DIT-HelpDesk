import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { fetchUser } from "../utils/userLocalStorage";
import { AuthContext } from "../components/Context/AuthContext";

function ProblemsAPI() {
  const [problems, setProblems] = useState([]);
  const [allProblems, setAllProblems] = useState([]);
  const { users } = useContext(AuthContext);

  useEffect(() => {
    if (users.id) {
      console.log("Get Problems");
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

      if (users.role == "ADMIN") {
        console.log("Get all Problems");
        axios.get(`http://10.1.11.249:8080/problems/status/1`).then((res) => {
          setAllProblems(res.data);

          console.log(res.data);
        });
      }
    }
  }, [users]);

  return {
    problems: [problems, setProblems],
    allProblems,
  };
}

export default ProblemsAPI;
