import axios from "axios";
import React, { useState, useEffect } from "react";
import { fetchUser } from "../../../utils/fetchUser";
import "./Problems.css";

const ChatList = () => {
  const [problems, setProblems] = useState([]);

  function deleteProblem(id) {
    console.log(id);
    axios
      .delete(`http://10.1.11.249:8080/problems/${id}`)
      .then((res) => {
        console.log(res.status);
        window.location.reload();
      })
      .catch((err) => console.warn(err));
  }

  useEffect(() => {
    const user = fetchUser();

    axios
      .get(`http://10.1.11.249:8080/problems/user/${user.id}`)
      .then((res) => {
        setProblems(res.data);
      })
      .catch(function (error) {
        console.log("Error while fetching problems: " + error.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="problems-container">
        <h3>Ваши анкеты</h3>
        <div className="problems-items list-group">
          {problems.map(({ id, title, description, createdAt, category }) => {
            return (
              <a
                href="#"
                className="problems-item list-group-item list-group-item-action"
                key={id}
              >
                <div className="problems-block">
                  <div className="problems-content">
                    <small className="text-muted">#{id}</small>
                    <h4>{title}</h4>
                    <h6>{category?.categoryName}</h6>
                    <p>{description}</p>
                    <small className="text-muted">
                      Создано в {createdAt.slice(0, 10)}
                    </small>
                  </div>
                  <div className="problems-btns">
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      onClick={() => deleteProblem(id)}
                    >
                      Удалить
                    </button>
                    <button type="button" class="btn btn-outline-warning">
                      Изменить
                    </button>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
