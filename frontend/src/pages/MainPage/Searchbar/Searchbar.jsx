import React from "react";
import Question from "../Question/Question";
import Error from "../../../components/Error";
import Loader from "../../../components/Loader";
import "../Searchbar/SearchBarInfo.css";

const QuestionsList = ({ questionsArray, loading }) => {
  if (loading) return <Error message={"Загрузка..."} />;
  else
    return (
      <div>
        <div className="questions-list">
          {questionsArray.map((question, id) => {
            return <Question key={id} problem={question} />;
          })}
        </div>
      </div>
    );
};

export default QuestionsList;
