import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../../components/NavBar";
import { fetchUser } from "../../utils/fetchUser";
import "./Ticket.css";

const Ticket = () => {
  const navigate = useNavigate();
  const { id } = fetchUser();
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [tried, setTry] = useState("");
  const [brought, setBrought] = useState("");
  const [solve, setSolve] = useState("");

  const problemSubmit = async (e) => {
    e.preventDefault();
    let form_data = new FormData();
    const description = `
    Что хотели сделать:\n
    ${tried}\n
    Что привело к проблеме:\n
    ${brought}\n
    Что вы испробовали для решения проблемы:\n
    ${solve}
    `;
    console.log(description);

    form_data = {
      title: tried,
      description: description,
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
        if (res.status === 201) navigate("/profile");
      })
      .catch((error) => {
        console.warn(error);
      });
  };

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
              <option value="1">Moodle</option>
              <option value="2">MS Teams</option>
              <option value="4">Компьютер</option>
              <option value="5">Интернет</option>
              <option value="6">Проектор</option>
              <option value="7">Другое</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleTextarea" className="form-label">
              Что вы хотели сделать?
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
              onChange={(e) => setTry(e.target.value)}
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
              onChange={(e) => setBrought(e.target.value)}
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
              onChange={(e) => setSolve(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleTextarea" className="form-label">
              Прикрепите полезные снимки вашей пробелмы
            </label>
            <input className="form-control" type="file" id="formFile" />
          </div>

          <button type="submit" className="btn btn-primary btn-lg">
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
};

export default Ticket;
