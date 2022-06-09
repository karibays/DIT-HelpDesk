import React from "react";
import Question from "../Question";
import "./QuestionsList.css";

const QuestionsList = ({ questionsArray }) => {
  return (
    <div>
      <h4 className="text-muted fw-normal">
        Найдено {questionsArray.length} вопросов
      </h4>
      <div className="questions-list">
        {questionsArray.map((question) => {
          return <Question problem={question} />;
        })}
      </div>
    </div>
  );
};

export default QuestionsList;
