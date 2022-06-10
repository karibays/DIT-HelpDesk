import React from "react";
import "./Question.css";

const Questions = ({ problem: { problem, answer } }) => {
  return (
    <div className="question-block">
      <div className="question-content">
        <h2>{problem}</h2>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Questions;
