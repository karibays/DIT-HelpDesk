import { useEffect, useState } from "react";
import axios from "axios";
import QuestionsList from "./QuestionsList";
import CategoriesList from "./CategoriesList";
import NavBar from "../../components/NavBar";
import Error from "../../components/Error";
import Loader from "../../components/Loader";
import "./Categories.css";

const Categories = () => {
  const categoriesArray = [
    {
      id: 1,
      categoryName: "Moodle",
    },
    {
      id: 2,
      categoryName: "MS Teams",
    },
    {
      id: 4,
      categoryName: "Компьютер",
    },
    {
      id: 5,
      categoryName: "Интернет",
    },
    {
      id: 6,
      categoryName: "Проектор",
    },
    {
      id: 7,
      categoryName: "Другое",
    },
  ];
  const [problems, setProblems] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleSearch = (e) => {
    if (e.target.value.length > 3) {
      setTitle(e.target.value);
      axios
        .get(`http://10.1.11.249:8080/problem?problem=${e.target.value}`)
        .then(({ data: { content } }) => setProblems(content))
        .catch(() => setError(true));
    } else handleSelect(1);
  };

  const handleSelect = (selectedCategory) => {
    setLoading(true);
    setTitle(
      categoriesArray.find((item) => item.id === selectedCategory).categoryName
    );
    axios
      .get(`http://10.1.11.249:8080/problem/faq/${selectedCategory}`)
      .then(({ data }) => {
        setProblems(data);
        setLoading(false);
      })
      .catch(() => setError(true));
  };

  useEffect(() => {
    setTitle("Moodle");
    handleSelect(1);
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
                  categoriesArray={categoriesArray}
                  handleSelect={handleSelect}
                />
              </div>
              <div className="col-md-9">
                <h1 className="category-title">{title}</h1>
                <QuestionsList questionsArray={problems} loading={loading} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
