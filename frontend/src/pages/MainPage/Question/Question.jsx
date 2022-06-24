import React from "react";
import "../Question/Question.css";

const Questions = ({ problem: { problem, answer } }) => {
  return (
    <div className="container">
    <div className="question-block">
      <div className="question-content">
        <p>{problem}  -  {answer}</p>
      </div>
    </div>
    </div>
  );
};

export default Questions;
