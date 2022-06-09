import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Badge from "../Badge";
import { GlobalState } from "../../../components/Context/GloblalState";
import "./Problems.css";

const ChatList = () => {
  const state = useContext(GlobalState);
  const [problems, setProblems] = state.problemsAPI.problems;

  function deleteProblem(id, title) {
    console.log(id);
    let confirmDelete = window.confirm(
      `Вы уверены, что хотите удалить запись '${title}?'`
    );
    console.log(confirmDelete);
    if (confirmDelete)
      axios
        .delete(`http://10.1.11.249:8080/problems/${id}`)
        .then((res) => {
          console.log(res.status);
          window.location.reload();
        })
        .catch((err) => console.warn(err));
  }

  return (
    <div className="container">
      <div className="problems-container">
        <h3>Ваши анкеты</h3>
        <div className="problems-items list-group">
          {problems
            .slice(0)
            .reverse()
            .map(({ id, title, description, createdAt, category, status }) => {
              return (
                <a
                  href="#"
                  className="problems-item list-group-item list-group-item-action"
                  key={id}
                >
                  <div className="problems-block">
                    <div className="problems-content">
                      <Badge status={status?.id} />
                      <h4>{title}</h4>
                      <h6 className="text-muted">{category?.categoryName}</h6>
                      <p>{description}</p>
                      <small className="text-muted">
                        Создано в {createdAt.slice(0, 10)}
                      </small>
                    </div>
                    <div className="problems-btns">
                      <button
                        type="button"
                        class="btn btn-outline-danger"
                        onClick={() => deleteProblem(id, title)}
                      >
                        Удалить
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
