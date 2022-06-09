import React from "react";
import "./Badge.css";

const Badge = ({ status }) => {
  switch (status) {
    case 1:
      return (
        <span className="badge bg-warning problems-badge">В рассмотре</span>
      );
    case 2:
      return <span className="badge bg-danger problems-badge">Отклонено</span>;
    case 3:
      return <span className="badge bg-success problems-badge">Принято</span>;
    default:
      return <span className="badge bg-secondary problems-badge">Ошибка</span>;
  }
};

export default Badge;
