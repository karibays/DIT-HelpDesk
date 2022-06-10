import React from "react";
import Question from "../Question";
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";
import "./QuestionsList.css";

const QuestionsList = ({ questionsArray, loading }) => {
  if (loading) return <Error message={"Загрузка..."} />;
  else if (questionsArray.length <= 0)
    return <Error message={"Найдено 0 результатов"} />;
  else
    return (
      <div>
        <h4 className="text-muted fw-normal">
          Найдено {questionsArray.length} вопросов
        </h4>
        <div className="questions-list">
          {questionsArray.map((question, id) => {
            return <Question key={id} problem={question} />;
          })}
        </div>
      </div>
    );
};

export default QuestionsList;
