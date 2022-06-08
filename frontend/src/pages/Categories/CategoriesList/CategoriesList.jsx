import React from "react";
import "./CategoriesList.css";

const CategoriesList = ({ categoriesArray, handleSelect }) => {
  return (
    <div>
      <ul className="categories-list">
        {categoriesArray.map(({ id, categoryName }) => {
          return (
            <li
              className="categories-item"
              onClick={() => handleSelect(id)}
              key={id}
            >
              <a href="#">{categoryName} </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesList;
