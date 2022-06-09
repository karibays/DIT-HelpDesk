import { useEffect, useState } from "react";
import axios from "axios";
import QuestionsList from "./QuestionsList";
import CategoriesList from "./CategoriesList";
import NavBar from "../../components/NavBar";
import Error from "../../components/Error";
import "./Categories.css";

const Categories = () => {
  const [problems, setProblems] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [title, setTitle] = useState("");

  const handleSearch = (e) => {
    if (e.target.value.length > 3) {
      setTitle(e.target.value);
      axios
        .get(`http://10.1.11.249:8080/problems?title=${e.target.value}`)
        .then(({ data: { content } }) => {
          setProblems(content);
        })
        .catch((err) => console.log(err));
    } else handleSelect(1);
  };

  const handleSelect = (selectedCategory) => {
    axios
      .get(`http://10.1.11.249:8080/problem/faq/${selectedCategory}`)
      .then(({ data }) => {
        setProblems(data);
      })
      .catch((err) => console.warn(err));

    axios
      .get("http://10.1.11.249:8080/problems/categories")
      .then(({ data }) => {
        setTitle(
          data.find((item) => item.id === selectedCategory).categoryName
        );
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    handleSelect(1);
    axios
      .get("http://10.1.11.249:8080/problems/categories")
      .then(({ data }) => setCategoriesList(data))
      .catch((err) => console.warn(err));
  }, []);

  return (
    <div>
      <NavBar lightMode={true} />
      <div className="container">
        <div className="categories-block">
          <div className="form-group">
            <input
              className="categories-search form-control form-control-lg"
              type="text"
              placeholder="Поиск проблемы"
              id="inputLarge"
              onChange={handleSearch}
            />
          </div>
          <div className="categories-content">
            <div className="row">
              <div className="categories-navbar col-md-3">
                <h2>База Знаний</h2>
                <CategoriesList
                  categoriesArray={categoriesList}
                  handleSelect={handleSelect}
                />
              </div>
              <div className="col-md-9">
                <h1 className="category-title">{title}</h1>
                <QuestionsList questionsArray={problems} categoryName={title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
