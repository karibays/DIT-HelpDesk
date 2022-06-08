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
  const [problemsFound, setProblemsFound] = useState(true);

  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  const handleSelect = (selectedCategory) => {
    axios
      .get(`http://10.1.11.249:8080/problems/category/${selectedCategory}`)
      .then(({ data }) => {
        if (data.length) {
          setProblems(data);
          setTitle(data[0].category.categoryName);
          setProblemsFound(true);
        } else {
          setProblems([]);
          setTitle("");
          setProblemsFound(false);
        }
      })
      .catch((err) => console.warn(err));
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
              {problemsFound ? (
                <QuestionsList questionsArray={problems} title={title} />
              ) : (
                <div className="col-md-9">
                  <Error
                    message="К сожалению, для данной категории не были подобраны часто задаваемые вопросы..."
                    subMessage="Ближайшее время они будут добавлены!"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
