import React from "react";
import NavBar from "../../components/NavBar";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  function AdminPageFunc() {
    navigate("/AdminPage");
  }
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
        <form className="adminForm">
          <button type="submit" className="adminButton" onClick={AdminPageFunc}>Manage Admin privileges</button>
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
      <div>
        <div className="container">

          <h3 className="FindQType">Не нашли ответ на свой вопрос? </h3>
          <p className="FindPType">
            Задайте свой вопрос на нашем форуме и другие пользователи
            постораются вам помочь!
          </p>
          <h4 className="FindHSType">Последние заданные вопросы</h4>

          <div className="block">
            <h6 className="blockInfo">Как запустить BIOS на ПК от Lenovo?</h6>
            <small className="blockInfo2">Иван Иванович</small>
            <small className="blockInfo2">2 дня назад</small>
          </div>

          <div className="block">
            <h6 className="blockInfo">Как запустить BIOS на ПК от Lenovo?</h6>
            <small className="blockInfo2">Иван Иванович</small>
            <small className="blockInfo2">2 дня назад</small>
          </div>

          <div className="block">
            <h6 className="blockInfo">Как запустить BIOS на ПК от Lenovo?</h6>
            <small className="blockInfo2">Иван Иванович</small>
            <small className="blockInfo2">2 дня назад</small>
          </div>
          <div className="block">
            <h6 className="blockInfo">Как запустить BIOS на ПК от Lenovo?</h6>
            <small className="blockInfo2">Иван Иванович</small>
            <small className="blockInfo2">2 дня назад</small>
          </div>
        </div>

        <div className="FindQ">
          <button type="submit" className="catalogButton">
            Перейти на форум
          </button>
        </div>

      </div>
     <div className="Aheader">
      <div className="header">
        <div className="TOPheader">
        <h3 className="head" align="center">
          Не можете решить проблему?
        </h3>
        <p className="header2" align="center">
          Заполните анкету и с вами свяжутся наши агенты!{" "}
        </p>
        </div>
        <div className=" container">
          <div className="header4">
            <label htmlFor="exampleSelect1" className="form-label mt-4">Выберите категорию проблемы</label>
            <select className="form-select" id="exampleSelect1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label className="header4">Что вы хотели сделать?</label>
            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label className="header4">Что привело к проблеме?</label>
            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label className="header4">Что вы испробовали для решения проблемы?</label>
            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
          </div>
          <div className="form-group">
            <label className="header4">Прикрепите полезные снимки вашей пробелмы</label>
            <input className="form-control" type="file" id="formFile" />
          </div>

        </div>
        <button type="submit" className="catalogButton2">
          Отправить анкету
        </button>
      </div>

     </div>
    </div>
  );
};

export default MainPage;
