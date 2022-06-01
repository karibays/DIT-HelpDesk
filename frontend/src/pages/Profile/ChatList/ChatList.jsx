import React, { useState, useEffect } from "react";
import axios from 'axios';

const ChatList = () => {

  const [problems, setProblems] = useState([])

  useEffect(() => {
    //  const getProblems = async () => {
    //      const res = await axios.get(`http://10.1.11.249:8080/problem/get_all_problems/1`)


    //  }

    fetch("http://10.1.11.249:8080/problem/get_all_problems/1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProblems(data)
        console.log(problems)
      });



    // getProblems()

  }, [])
  return <div className="container">

{
      problems.map(problem => {
        return (
          <div key={problem.problemId}>
          <h2>{problem.title}</h2>
          <h2>{problem.problemId}</h2>
          <p>{problem.description}</p>
         </div>
        )
      })
    }
  </div>;
};

export default ChatList;
