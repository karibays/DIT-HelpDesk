import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchUser } from "../../../utils/fetchUser";

const ChatList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const user = fetchUser();
    // console.log(user);
    fetch(`http://10.1.11.249:8080/problems/user/${user.id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProblems(data);
      });

    // getProblems()
  }, []);
  return (
    <div className="container">
      {problems.map((problem) => {
        return (
          <div key={problem.problemId}>
            <h2>{problem.title}</h2>
            <h2>{problem.problemId}</h2>
            <p>{problem.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatList;
