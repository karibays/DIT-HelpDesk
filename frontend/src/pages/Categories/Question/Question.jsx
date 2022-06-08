import React from "react";
import "./Question.css";

const Questions = ({ problem: { title, description } }) => {
  return (
    <div className="question-block">
      <div className="question-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Questions;
