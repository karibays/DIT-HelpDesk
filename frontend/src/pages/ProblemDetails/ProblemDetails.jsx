import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import Badge from "../Profile/Badge";
import "./ProblemDetails.css";

const ProblemDetails = () => {
  const location = useLocation();
  const [problem, setProblem] = useState({});
  const [comments, setComments] = useState([])
  const [message, setMessage] = useState()
  const { id, adminState } = location.state;

  const handleStatus = (statusId) => {
    let status = new FormData();
    let comment = new FormData();

    status = {
      statusId,
    };

    comment = {
      userId: id,
      message: message,
    };

    axios
      .put(`http://10.1.11.249:8080/problems/${id}/`, status, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    axios
      .post(`http://10.1.11.249:8080/comment/${id}/`, comment, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        alert("comment added");
      })
      .catch((error) => {
        console.warn(error);
        alert("ERROR!");
      });
  };

  const handleCancel = () => {};

  useEffect(() => {
    axios
      .get(`http://10.1.11.249:8080/problems/${id}`)
      .then(({ data }) => {
        console.log(data);
        setProblem(data);
      })
      .catch((err) => console.log(err));

      axios
      .get(`http://10.1.11.249:8080/comment/${id}`)
      .then(({ data }) => {
        console.log(data);
        setComments(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar lightMode={true} />
      <div className="problem-container">
        <div className="">
          <Link to="/profile" className="btn btn-outline-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left mb-1"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>{" "}
            Назад
          </Link>
          {/* <h2 className="mt-4">Детали анкеты</h2> */}
        </div>
        <h4 className="mt-4 fw-bold">
          {problem.title ? problem.title : "Без названия"}{" "}
        </h4>
        {adminState && (
          <div className="text-muted">
            <h6>Создано пользователем #{problem.user?.id}</h6>
            <h6>
              Баркод:
              {problem.user?.barcode}
            </h6>
          </div>
        )}

        <p className="text-muted fw-normal">
          ID#{problem.id ? problem.id : "unknown"}
        </p>
        <Badge status={problem.status?.id} />
        <small className="text-muted problem-createdAt">
          Создано в {problem?.createdAt}
        </small>
        <h5 className="mt-4 text-muted">Категория: </h5>
        <h5 className="fw-bold">
          {problem.category?.categoryName
            ? problem.category.categoryName
            : "Не заполнено"}
        </h5>
        <h5 className="mt-4 text-muted">Что хотели сделать?</h5>
        <p>{problem.question ? problem.question : "Не заполнено"}</p>
        <h5 className="mt-2 text-muted">Что привело к проблеме?</h5>
        <p>{problem.action ? problem.action : "Не заполнено"}</p>
        <h5 className="mt-2 text-muted">
          Что вы испробовали для решения проблемы?
        </h5>
        <p>{problem.consequences ? problem.consequences : "Не заполнено"}</p>

        <div className="mt-4 mb-4">
            {comments.map(
              ({
                id,
                message,
                createdDate
              }) => {
                return (
                  
                  <div className="card mt-3 p-2" key={id}>
                    <p>Ответ администрации</p>
                   <p className="">{message}</p>
                   <small className="text-muted">
                          Создано в {createdDate.slice(0, 10)}{" "}
                          {createdDate.slice(11, 19)}
                      </small>
                  </div>
                );
              }
            )}
          </div>
        {adminState && (
          <div className="admin-comment-input d-flex align-self-start">
            <div class="form-group w-100 mt-1">
              <textarea
                class="form-control"
                id="exampleTextarea"
                value={message}
                rows="1"
                placeholder="Оставьте комментарий..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div class="dropdown pl-1">
              <button
                class="btn btn-outline-info btn-lg dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Действие
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li>
                  <a class="dropdown-item" onClick={() => handleStatus(3)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-check-lg mb-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                    </svg>{" "}
                    Принять
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" onClick={() => handleStatus(2)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      fill="currentColor"
                      class="bi bi-x-lg mb-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>{" "}
                    Отклонить
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemDetails;
