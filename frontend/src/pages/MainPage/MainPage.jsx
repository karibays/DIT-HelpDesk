import React, { useState, useContext, useEffect } from "react";
import NavBar from "../../components/NavBar";
import "./MainPage.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../components/Context/AuthContext";
import QuestionsList from "../MainPage/Searchbar/Searchbar"

const MainPage = () => {
  const { users } = useContext(AuthContext);
  const navigate = useNavigate();
  const id = users.id
  const [problems, setProblems] = useState([]);
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectOptions, setSelectOptions] = useState([]);
  const [title, setTitle] = useState("");
  const [action, setAction] = useState("");
  const [consequences, setConsequences] = useState("");
  const [solution, setSolution] = useState("");
  
  const handleSearch = (e) => {
    if (e.target.value.length > 3) {
      setTitle(e.target.value);
      axios
        .get(`http://10.1.11.249:8080/problem?problem=${e.target.value}`)
        .then(({ data: { content } }) => setProblems(content))
        .catch(() => setError(true));
    } ;
  };
  const problemSubmit = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data = {
      title: title,
      question: action,
      consequences: consequences,
      action: solution,
      userId: id,
      categoryId: selectedCategory,
    };

    axios
      .post(`http://10.1.11.249:8080/problems`, form_data, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        navigate("/profile");
      })
      .catch((error) => {
        console.warn(error);
      });
  };
  function AdminPageFunc() {
    navigate("/AdminPage");
  }

  useEffect(() => {
    axios
      .get("http://10.1.11.249:8080/problems/categories")
      .then(({ data }) => {
        setSelectOptions(data);
      })
      .catch((err) => console.log(err));
  }, []);
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
            onChange={handleSearch}
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search" />
          </button>
        </form>
        {/* <form className="adminForm">
          <button type="submit" className="adminButton" onClick={AdminPageFunc}>Manage Admin privileges</button>
        </form>*/}
      </div>
<div className="FAQDiv">
        <div>
          <h1 className="FAQHeader">База Знаний</h1>
        </div>
        
        <div className="FAQTypes">
          <div className="FAQQuestionType">
          <div className="card">
            <p className="questionTypeHeader">Moodle</p>
            <p><Link to="/categories"><button  className="cardbutton" type="submit"  >Посмотреть все вопросы</button></Link></p>
            </div>
          </div>
          <div className="FAQQuestionType">
          <div className="card">
            <p className="questionTypeHeader">MS Teams</p>
            <p><Link to="/categories"><button  className="cardbutton" type="submit"  >Посмотреть все вопросы</button> </Link></p>
            </div>
          </div>
          <div className="FAQQuestionType">
          <div className="card">
            <p className="questionTypeHeader">Platonus</p>
            <p><Link to="/categories"><button  className="cardbutton" type="submit"  >Посмотреть все вопросы</button></Link></p>
            </div>
          </div>
          <div className="FAQQuestionType">
          <div className="card">
            <p className="questionTypeHeader" >Internet</p>
            <p><Link to="/categories"><button  className="cardbutton" type="submit"  >Посмотреть все вопросы</button></Link></p>
            </div>
          </div>
        </div>
        <div>
        <Link to="/categories">
        <button type="submit" className="catalogButton">
            Перейти в каталог вопросов
          </button></Link>
         
        </div>
      </div> 
   {/* <div className="FAQDiv">
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

      </div>*/}
      <div className="Aheader">
        <div className="header">
          <div className="TOPheader">
            <h3 className="head" align="center">
              Не можете решить проблему?
            </h3>

          </div>
          <div className="ticket-container container">
            <h2 className="text-white">Заполнить анкету</h2>
            <h5 className="text-white">
              Не забудьте заполните поля более подробней, чтобы упростить работу
              нашим специалистам!
            </h5>
            <form onSubmit={problemSubmit}>
              <div className="form-group">
                <label htmlFor="exampleSelect1" className="form-label mt-4 text-white">
                  Выберите категорию
                </label>
                <select
                  className="form-select"
                  id="exampleSelect1"
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {selectOptions.map(({ id, categoryName }) => (
                    <option key={id} value={id}>
                      {categoryName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="form-label text-white">
                  Придумайте заголовок для вашей проблемы
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label text-white">
                  Что вы хотели сделать?
                </label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="3"
                  onChange={(e) => setAction(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label text-white">
                  Что привело к проблеме?
                </label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="3"
                  onChange={(e) => setConsequences(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label text-white">
                  Что вы испробовали для решения проблемы?
                </label>
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  rows="3"
                  onChange={(e) => setSolution(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="exampleTextarea" className="form-label text-white">
                  Прикрепите полезные снимки вашей пробелмы
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>

              <button type="submit" className="catalogButton2">
                Отправить анкету
              </button>



            </form>
          </div>
        </div>



      </div>
    </div>
  );
};

export default MainPage;
