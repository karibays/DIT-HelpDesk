import React from "react";
import "./Question.css";

const Questions = ({ problem: { title, description, category } }) => {
  return (
    <div className="question-block">
      <div className="question-content">
        <small className="text-muted">{category?.categoryName}</small>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Questions;
