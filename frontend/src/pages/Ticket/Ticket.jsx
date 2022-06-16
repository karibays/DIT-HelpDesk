import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/NavBar";
import "./Ticket.css";
import { useContext } from "react";
import { AuthContext } from "../../components/Context/AuthContext";

const Ticket = () => {
  const navigate = useNavigate();
  const { users} = useContext(AuthContext)
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [selectOptions, setSelectOptions] = useState([]);
  const [title, setTitle] = useState("");
  const [action, setAction] = useState("");
  const [consequences, setConsequences] = useState("");
  const [solution, setSolution] = useState("");

  const problemSubmit = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data = {
      title: title,
      question: action,
      consequences: consequences,
      action: solution,
      userId: users.id,
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

  useEffect(() => {
    axios
      .get("http://10.1.11.249:8080/problems/categories")
      .then(({ data }) => {
        setSelectOptions(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar lightMode={true} />
      <div className="ticket-container container">
        <h2>Заполнить анкету</h2>
        <h5 className="text-muted">
          Не забудьте заполните поля более подробней, чтобы упростить работу
          нашим специалистам!
        </h5>
        <form onSubmit={problemSubmit}>
          <div className="form-group">
            <label htmlFor="exampleSelect1" className="form-label mt-4">
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
            <label htmlFor="exampleInputEmail1" className="form-label">
              Придумайте заголовой для вашей проблемы
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
            <label htmlFor="exampleTextarea" className="form-label">
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
            <label htmlFor="exampleTextarea" className="form-label">
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
            <label htmlFor="exampleTextarea" className="form-label">
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
            <label htmlFor="exampleTextarea" className="form-label">
              Прикрепите полезные снимки вашей пробелмы
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>

          <button type="submit" className="btn btn-primary btn-lg mb-4">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ticket;
