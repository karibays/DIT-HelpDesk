import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import "./Ticket.css";
import { fetchUser } from "../../utils/fetchUser";

const Ticket = () => {
  const { id } = fetchUser();
  const [selectedCategory, setSelectedCategory] = useState(1);
  const [tried, setTry] = useState("");
  const [brought, setBrought] = useState("");
  const [solve, setSolve] = useState("");

  const problemSubmit = async (e) => {
    let form_data = new FormData();
    const description = `
    ${tried} <br>
    ${brought} <br>
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
        console.log(res);
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
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
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
