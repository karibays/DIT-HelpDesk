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
      <div>
        <div>
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

      <div className="header">
        <h3 className="head" align="center">
          Не можете решить проблему?
        </h3>
        <p className="header2" align="center">
          Заполните анкету и с вами свяжутся наши агенты!{" "}
        </p>
        <p className="header3">Выберите категорию проблемы</p>
        <select
          name="user_profile_color_2"
          className="UserChoice"
          required="required"
        >
          <option value="">Выберите из списка</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
        <p className="header4">Что вы хотели сделать?</p>
        <textarea className="form-control" placeholder="Введите текст...">
          {" "}
        </textarea>
        <p className="header4">Что привело к проблеме?</p>
        <textarea className="form-control" placeholder="Введите текст...">
          {" "}
        </textarea>
        <p className="header4">Что вы испробовали для решения проблемы?</p>
        <textarea className="form-control" placeholder="Введите текст...">
          {" "}
        </textarea>
        <p className="header4">Прикрепите полезные снимки вашей проблемы</p>
        <div className="form-group">
          <input className="form-control" type="file" id="formFile"></input>
        </div>
        <button type="submit" className="catalogButton2">
          Отправить анкету
        </button>
      </div>
    </div>
  );
};

export default MainPage;
