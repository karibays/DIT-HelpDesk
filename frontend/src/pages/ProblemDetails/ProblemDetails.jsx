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

  const id = location.state;
  useEffect(() => {
    console.log(id);
    axios
      .get(`http://10.1.11.249:8080/problems/${id}`)
      .then(({ data }) => {
        console.log(data);
        setProblem(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <NavBar lightMode={true} />
      <div className="problem-container">
        <div className="d-flex justify-content-between align-items-start">
          <h2 className="">Детали анкеты</h2>
          <Link to="/profile" className="btn btn-outline-info">
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
        </div>
        <h4 className="mt-4 fw-bold">
          {problem.title ? problem.title : "Без названия"}{" "}
        </h4>
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
      </div>
    </div>
  );
};

export default ProblemDetails;
