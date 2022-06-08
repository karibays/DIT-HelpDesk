import React from "react";
import Question from "../Question";
import "./QuestionsList.css";

const QuestionsList = ({ questionsArray, title }) => {
  return (
    <div className="col-md-9">
      <h1>{title}</h1>
      <div className="questions-list">
        {questionsArray.map((question) => {
          return <Question problem={question} key={question.id} />;
        })}
      </div>
    </div>
  );
};

export default QuestionsList;
