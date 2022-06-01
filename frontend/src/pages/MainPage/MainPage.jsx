import React from "react";
import NavBar from "../../components/NavBar";
import "./MainPage.css";

const MainPage = () => {
  return (
    // <div>
    //   <NavBar />
    //   Hello World (WORK IN PROGRESS)
    // </div>

    <div className="mainDiv">
      <NavBar />
      <h1 className="mainHeader">Как мы можем вам помочь?</h1>
      <form className="searchQuestionForm" action="">
        <input
          type="text"
          className="searchQuestion"
          placeholder="Задайте вопрос"
        />
        <button type="submit" className="searchButton">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default MainPage;
