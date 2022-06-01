import React from "react";
import NavBar from "../../components/NavBar";
import "./MainPage.css";

const MainPage = () => {
  return (
    // <div>
    //   <NavBar />
    //   Hello World (WORK IN PROGRESS)
    // </div>
    <div>
      <div className="topDiv">
        <NavBar />
        <h1 className="mainHeader">Как мы можем вам помочь?</h1>
        <form className="searchQuestionForm" action="">
          <input
            type="text"
            className="searchQuestion"
            placeholder="Задайте вопрос"
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      <div className="FAQDiv">
        <div>
          <h1 className="FAQHeader">База Знаний</h1>
        </div>
        <div className="FAQTypes">
          <div className="FAQQuestionType">
            <p className="questionTypeHeader">Moodle</p>
            <ul className="questionsList">
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">Посмотреть все вопросы →</a>
              </li>
            </ul>
          </div>
          <div className="FAQQuestionType">
            <p className="questionTypeHeader">MS Teams</p>
            <ul className="questionsList">
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">Посмотреть все вопросы →</a>
              </li>
            </ul>
          </div>
          <div className="FAQQuestionType">
            <p className="questionTypeHeader">Platonus</p>
            <ul className="questionsList">
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">Посмотреть все вопросы →</a>
              </li>
            </ul>
          </div>
          <div className="FAQQuestionType">
            <p className="questionTypeHeader">Проблемы с ноутбуком</p>
            <ul className="questionsList">
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </a>
              </li>
              <li>
                <a href="">Посмотреть все вопросы →</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button type="submit" className="catalogButton">
            Перейти в каталог вопросов
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
