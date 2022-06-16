import React, { useState, useContext, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Badge from "../Profile/Badge";
import axios from "axios";
import { fetchUser } from "../../utils/userLocalStorage";
import { GlobalState } from "../../components/Context/GloblalState";
import { Link, useNavigate } from "react-router-dom";

const AdminHome = () => {
  const { problemsAPI, statusesAPI } = useContext(GlobalState);
  const adminState = true;
  const navigate = useNavigate();
  const [allProblems, setAllProblems] = problemsAPI.allProblems;
  const [status, setStatus] = problemsAPI.status;
  const [statuses, setStatuses] = statusesAPI.statuses;
  const [error, setError] = useState(false);
  const handleSearch = (str) => {
    if (str.length > 3)
      axios
        .get(`http://10.1.11.249:8080/problems?title=${str}`)
        .then(({ data: { content } }) => {
          console.log(content);
          setAllProblems(content);
        })
        .catch(() => setError(true));
    else
      axios
        .get("http://10.1.11.249:8080/problems")
        .then(({ data }) =>
          setAllProblems(
            data.content
              .sort((prob1, prob2) => prob1.id - prob2.id)
              .slice(0)
              .reverse()
          )
        )
        .catch(() => setError(true));
  };

  const handleStatus = (statusId) => {
    if (statusId == 0) {
      axios
        .get("http://10.1.11.249:8080/problems")
        .then(({ data }) =>
          setAllProblems(
            data.content
              .sort((prob1, prob2) => prob1.id - prob2.id)
              .slice(0)
              .reverse()
          )
        )
        .catch(() => setError(true));
    } else setStatus(statusId);
  };

  useEffect(() => {
    handleStatus(0);
  }, []);

  return (
    <>
      <NavBar admin={true} />
      <div className="container">
        <div className="form-group mt-4">
          <input
            className="categories-search form-control form-control-lg"
            type="text"
            placeholder="Поиск проблемы"
            id="inputLarge"
            onChange={(e) => handleSearch(e.target.value)}
          />

          <select
            name="status"
            onChange={(e) => handleStatus(e.target.value)}
            className="form-select mt-4 col-2"
            id="exampleSelect1"
          >
            <option value={0}>Не выбрано</option>
            {statuses.map((obj) => (
              <option value={obj.id} key={obj.id}>
                {obj.statusName}
              </option>
            ))}
          </select>

          <div className="mt-4">
            {allProblems.map(
              ({
                id,
                title,
                description,
                createdAt,
                category,
                status,
                user,
              }) => {
                return (
                  <a
                    className="problems-item list-group-item list-group-item-action mt-2"
                    key={id}
                  >
                    {/* <div className="problems-block">
                      <div className="problems-content">
                        <Badge status={status?.id} />
                        <h4>{title}</h4>
                        <h6 className="text-muted">#{id}</h6>
                        <h6 className="text-muted">{category?.categoryName}</h6>
                        <p>{description}</p>
                        <p className="text-muted">
                          Пользователь: #{user?.barcode}
                        </p>
                        <small className="text-muted">
                          Создано в {createdAt.slice(0, 10)}
                        </small>
                      </div>
                    </div> */}
                    <div className="problems-block">
                      <div
                        className="problems-content"
                        onClick={() => {
                          navigate("/details", { state: { id, adminState } });
                        }}
                      >
                        <Badge status={status?.id} />
                        <h4>{title}</h4>
                        <h6 className="text-muted">#{id}</h6>
                        <h6 className="text-muted">{category?.categoryName}</h6>
                        <p className="text-muted">
                          Пользователь: #{user?.barcode}
                        </p>
                        <p>{description}</p>
                        <small className="text-muted">
                          Создано в {createdAt.slice(0, 10)}{" "}
                          {createdAt.slice(11, 19)}
                        </small>
                      </div>
                    </div>
                  </a>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
