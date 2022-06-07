import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import "./Ticket.css";
import { fetchUser } from "../../utils/fetchUser";

const Ticket = () => {
  const { id } = fetchUser();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(1);
  const problemSubmit = async (e) => {
    let form_data = new FormData();
    // form_data.append("title", title);
    // form_data.append("description", description);
    // form_data.append("userId", id);
    // form_data.append("categoryId", 1);

    form_data = {
      title,
      description,
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

  const handleSelect = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
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
          {/* <h5>Тема</h5>
          <input
            className="form"
            type="text"
            name="title"
            required
            placeholder="Тема проблемы"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <h5>Опишите проблему</h5>
          <textarea
            className="form"
            required
            placeholder="Описание проблемы"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          /> */}

          <div class="form-group">
            <label for="exampleSelect1" class="form-label mt-4">
              Выберите категорию
            </label>
            <select
              class="form-select"
              id="exampleSelect1"
              onChange={handleSelect}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleTextarea" className="form-label">
              Что вы хотели сделать?
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label for="exampleTextarea" className="form-label">
              Что привело к проблеме?
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label for="exampleTextarea" className="form-label">
              Что вы испробовали для решения проблемы?
            </label>
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label for="exampleTextarea" className="form-label">
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
