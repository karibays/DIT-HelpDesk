import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../components/Context/AuthContext";

function ProblemsAPI() {
  const [problems, setProblems] = useState([]);
  const [allProblems, setAllProblems] = useState([]);
  const { users, loggedIn } = useContext(AuthContext);
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (!loggedIn) {
      setAllProblems([]);
      setProblems([]);
      return;
    }
    if (users) {
      if (users.role == "ADMIN")
        axios
          .get(`http://10.1.11.249:8080/problems/status/${status}`)
          .then((res) => setAllProblems(res.data));

      if (users.role == "USER") {
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
      }
    }
  }, [users, loggedIn, status]);

  return {
    problems: [problems, setProblems],
    allProblems: [allProblems, setAllProblems],
    status: [status, setStatus],
  };
}

export default ProblemsAPI;
