import { useState, useEffect } from "react";
import axios from "axios";
import { fetchUser } from "../utils/fetchUser";

function ProblemsAPI() {
  const [problems, setProblems] = useState([]);
  const user = fetchUser();

  useEffect(() => {
    axios
      .get(`http://10.1.11.249:8080/problems/user/${user.id}`)
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
  }, []);

  return {
    problems: [problems, setProblems],
  };
}

export default ProblemsAPI;
