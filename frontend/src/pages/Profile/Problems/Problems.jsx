import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import Badge from "../Badge";
import Error from "../../../components/Error";
import { GlobalState } from "../../../components/Context/GloblalState";
import "./Problems.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

const ChatList = () => {
  const { problemsAPI, statusesAPI } = useContext(GlobalState);
  const [problems, setProblems] = problemsAPI.problems;
  const [status, setStatus] = problemsAPI.status;
  const [statuses, setStatuses] = statusesAPI.statuses;
  const navigate = useNavigate();

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

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="container">
      <div className="problems-container">
        <h3>Ваши анкеты</h3>
        <h4 className="text-muted fw-normal">
          Найдено {problems.length} анкет
        </h4>

        <select
          name="status"
          onChange={(e) => handleStatus(e.target.value)}
          class="form-select mt-4 col-2"
          id="exampleSelect1"
        >
          <option value={0}>Не выбрано</option>
          {statuses.map((obj) => (
            <option value={obj.id} key={obj.id}>
              {obj.statusName}
            </option>
          ))}
        </select>

        <div className="problems-items list-group mt-3">
          {problems.map(
            ({ id, title, description, createdAt, category, status }) => {
              return (
                <div className="problems-item mb-3" key={id}>
                  <div className="problems-block">
                    <div
                      className="problems-content"
                      onClick={() => {
                        navigate("/details", { state: { id } });
                      }}
                    >
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
                        className="btn btn-outline-danger"
                        onClick={() => deleteProblem(id, title)}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          )}
          {problems.length <= 0 && (
            <>
              <Error message="Вы не заполняли анкеты!" />
              <Link
                to="/ticket"
                className="btn btn-primary"
                style={{ width: "200px", margin: "0 auto" }}
              >
                Заполнить анкету
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
