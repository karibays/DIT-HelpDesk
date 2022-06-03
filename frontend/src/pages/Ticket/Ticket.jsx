import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import axios from "axios";
import "./Ticket.css";
import { fetchUser } from "../../utils/fetchUser";

const Ticket = () => {
  const { id } = fetchUser();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
      categoryId: 1,
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
      <div className="container">
        <form onSubmit={problemSubmit}>
          <h5>Тема</h5>
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
          />

          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Ticket;
