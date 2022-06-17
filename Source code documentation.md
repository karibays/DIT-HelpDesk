# Source code documentation




# Frontend
## Авторизация

Включение в проект Axios для взаимодействия с REST API
```
import axios from "axios";
```

Обьявление новых переменных состояния.
```javascript
const Login = () => {  
 const navigate = useNavigate();  
 const { setUser } = useContext(AuthContext);  
 const [barcode, setBarcode] = useState("");  
 const [error, setError] = useState(false);  
 const [loginInputClasses, setloginInputClasses] = useState(  
    "form-control form-control-lg"  
  );  
 const [isLoading, setIsLoading] = useState(false);
 ```
 
Функция навигации по роли(Студент или сотрудник).
```javascript
function navigateByRole(role) {  
  role === "ADMIN" ? navigate("/adminPage") : navigate("/");  
}
```


fsdf
```javascript
function handleLogIn() {
  const form_data = new FormData();
  setIsLoading(true);
  form_data.append("barcode", barcode);
  axios
  .post(`http://10.1.11.249:8080/problem/get_user_id/`, form_data, {
    headers: {
    "content-type": "application/json",
    },
  })
  .then(({ data }) => {
    if (data) {
      setUser(data);
      navigateByRole(data.role);
    } else {
      setloginInputClasses((prev) => (prev += " is-invalid"));
      setError(true);
    }
    setIsLoading(false);
  })
  .catch((error) => {
    console.warn(error);
    setloginInputClasses((prev) => (prev += " is-invalid"));
    setError(true);
    setIsLoading(false);
  });
}
```

## Главная страница

Обьявление новых переменных состояния "MainPage"
```javascript
const MainPage = () => {
const { users } = useContext(AuthContext);
const navigate = useNavigate();
const id = users.id
const [selectedCategory, setSelectedCategory] = useState(1);
const [selectOptions, setSelectOptions] = useState([]);
const [title, setTitle] = useState("");
const [action, setAction] = useState("");
const [consequences, setConsequences] = useState("");
const [solution, setSolution] = useState("");
```

2
```javascript
const problemSubmit = async (e) => {
  e.preventDefault();
  let form_data = new FormData();
  form_data = {
    title: title,
    question: action,
    consequences: consequences,
    action: solution,
    userId: id,
    categoryId: selectedCategory,
};
```

3
```javascript
axios
.post(`http://10.1.11.249:8080/problems`, form_data, {
  headers: {
  "content-type": "application/json",
  },
})
.then((res) => {
  navigate("/profile");
})
.catch((error) => {
  console.warn(error);
});
};

function AdminPageFunc() {
  navigate("/AdminPage");
}
```
4
```javascript
useEffect(() => {
  axios
  .get("http://10.1.11.249:8080/problems/categories")
  .then(({ data }) => {
    setSelectOptions(data);
  })
  .catch((err) => console.log(err));
}, []);
```
## Главная страница (вид администратора)

 
 Admin func
 ```javascript
 const readAdminFunc = async (e) => {  
  e.preventDefault();  
 try {  
    axios  
  .get(`http://10.1.11.249:8080/user/roleAdmin`, {})  
      .then((res) => {  
        setUsers(res.data);  
  console.log(res.data);  
  })  
      .catch((error) => {  
        console.warn(error);  
  alert("ERROR");  
  });  
  } catch (e) {}  
};
```

Create Admin func
```javascript
const createAdminFunc = async (e) => {  
  e.preventDefault();  
 let form_data = new FormData();  
  
  form_data = {  
    barcode: barcode,  
  firstname: firstName,  
  lastname: lastName,  
  role: role,  
  password: password1,  
  username: username,  
  };
  ```

Axios
```javascript
 axios  
  .post(`http://10.1.11.249:8080/user/createAdmin`, form_data, {  
      headers: {  
        "content-type": "application/json",  
  },  
  })  
    .then((res) => {  
      console.log(res);  
  alert("Account created successfully!");  
  })  
    .catch((error) => {  
      console.warn(error);  
  alert("ERROR! Please change barcode or check other parameters");  
  });  
};
```

Update role
```javascript
const updateRoleFunc = async (e) => {  
  let form_data = new FormData();  
  e.preventDefault();  
  
  form_data = {  
    role: role,  
  };
  ```

axios
```javascript
axios  
  .put(`http://10.1.11.249:8080/user/` + anotherId + ``, form_data, {  
      headers: {  
        "content-type": "application/json",  
  },  
  })  
    .then((res) => {  
      console.log(res);  
  alert("Role updated successfully!");  
  })  
    .catch((error) => {  
      console.warn(error);  
  alert("Could not update user role.");  
  });  
};
```
Delete func
```javascript
const deleteFunc = (e) => {  
  e.preventDefault();  
  
  axios  
  .delete(`http://10.1.11.249:8080/user/` + anotherId + ``, {})  
    .then((res) => {  
      console.log(res);  
  alert("Account deleted successfully!");  
  })  
    .catch((error) => {  
      console.warn(error);  
  alert("Could not delete an account");  
  });  
};
```

## База знаний


Страница состоит из 3 модулей:
`CategoriesList`
`Question`
`QuestionList`
`Categories`

1) test test 
```javascript
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
 <a href="#">{categoryName}</a>  
 </li>  );  
  })}  
      </ul>  
 </div>  );  
};
```
2)32213
```javascript
const Questions = ({ problem: { problem, answer } }) => {  
  return (  
    <div className="question-block">  
 <div className="question-content">  
 <h2>{problem}</h2>  
 <p>{answer}</p>  
 </div> </div>  );  
};
```
3) 123123
```javascript
const QuestionsList = ({ questionsArray, loading }) => {  
  if (loading) return <Error message={"Загрузка..."} />;  
 else if (questionsArray.length <= 0)  
    return <Error message={"Найдено 0 результатов"} />;  
 else return (  
      <div>  
 <h4 className="text-muted fw-normal">  
  Найдено {questionsArray.length} вопросов  
        </h4>  
 <div className="questions-list">  
  {questionsArray.map((question, id) => {  
            return <Question key={id} problem={question} />;  
  })}  
        </div>  
 </div>  );  
};
```
4) Categories
```javascript
const Categories = ({ admin }) => {  
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
  ```
  UseState case
  ```javascript
  const [problems, setProblems] = useState([]);  
const [title, setTitle] = useState("");  
const [loading, setLoading] = useState(false);  
const [error, setError] = useState(false);  
const [selectedCategory, setSelectedCategory] = useState(1);
```
Handle search
```javascript
const handleSearch = (e) => {  
  if (e.target.value.length > 3) {  
    setTitle(e.target.value);  
  axios  
  .get(`http://10.1.11.249:8080/problem?problem=${e.target.value}`)  
      .then(({ data: { content } }) => setProblems(content))  
      .catch(() => setError(true));  
  } else handleSelect(1);  
};
```
HandleSelect
```javascript
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
```
AddQuestion
```javascript
const addQuestion = () => {  
  console.log("add");  
};
```
useEffect
```javascript
useEffect(() => {  
  setTitle("Moodle");  
  handleSelect(1);  
}, []);
```
## Личный кабинет

Страница состоит из 4 модулей:
`Badge`
`Problems`
`ProfileInfo`
`Profile`

1) Badge status
```javascript
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
```
2) ChatList
```javascript
const ChatList = () => {

const { problemsAPI, statusesAPI } = useContext(GlobalState);

const [problems, setProblems] = problemsAPI.problems;

const [selectedStatus, setSelectedStatus] = problemsAPI.status;

const [statuses, setStatuses] = statusesAPI.statuses;

const navigate = useNavigate();
 ```
 Delete problem function
 ```javascript
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
```

Handle Status
```javascript
const handleStatus = (e) => {

setSelectedStatus(e);

};
```
3) Profile info
```javascript
const ProfileInfo = () => {

const [name, setName] = useState("");

const [imgUrl, setImgUrl] = useState("");

const [barcode, setBarcode] = useState("");

const [loading, setLoading] = useState(true);

const [error, setError] = useState(false);

const { users, loggedIn } = useContext(AuthContext)
 ```
 useEffect
 ```javascript
useEffect(() => {

setName(users.id);

setBarcode(users.barcode);

setLoading(false);

}, [users, error]);
```

## Страница заполнения анкеты

```javascript
const Ticket = () => {

const navigate = useNavigate();

const { users} = useContext(AuthContext)

const [selectedCategory, setSelectedCategory] = useState(1);

const [selectOptions, setSelectOptions] = useState([]);

const [title, setTitle] = useState("");

const [action, setAction] = useState("");

const [consequences, setConsequences] = useState("");

const [solution, setSolution] = useState("");
```

2
```javascript
const problemSubmit = async (e) => {

e.preventDefault();

let form_data = new FormData();

form_data = {

title: title,

question: action,

consequences: consequences,

action: solution,

userId: users.id,

categoryId: selectedCategory,

};
```
3
```javascript
axios

.post(`http://10.1.11.249:8080/problems`, form_data, {

headers: {

"content-type": "application/json",

},

})

.then((res) => {

navigate("/profile");

})

.catch((error) => {

console.warn(error);

});

};
```
4
```javascript
useEffect(() => {

axios

.get("http://10.1.11.249:8080/problems/categories")

.then(({ data }) => {

setSelectOptions(data);

})

.catch((err) => console.log(err));

}, []);
```
# Компоненты
## Context
### Auth Context:
```javascript
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

const [users, setUsers] = useState("");

const [loggedIn, setLoggedIn] = useState(false);

const fetchUser = () => {

console.log(localStorage.getItem("user"));

setLoggedIn(true);

if (localStorage.getItem("user") === null) {

setUsers("");

return;

}

setUsers(JSON.parse(localStorage.getItem("user")));

};

const setUser = (data) => {

localStorage.setItem("user", JSON.stringify(data));

fetchUser();

};

useEffect(() => {

fetchUser();

}, [loggedIn]);

const clearStorage = () => {

localStorage.clear();

};

return (

<AuthContext.Provider

value={{

users,

setUser,

loggedIn,

setLoggedIn,

clearStorage,

}}

>

{children}

</AuthContext.Provider>

);

};
```

GlobalState:
```javascript
export const GlobalState = createContext();

export const DataProvider = ({ children }) => {

const state = {

problemsAPI: ProblemsAPI(),

statusesAPI: StatusesAPI(),

};

return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;

};
```
## Fader
```javascript
const Fader = ({ text }) => {

const [fadeProp, setFadeProp] = useState({

fade: 'fade-in',

});

useEffect(() => {

const timeout = setInterval(() => {

if (fadeProp.fade === 'fade-in') {

setFadeProp({

fade: 'fade-out'

})

} else {

setFadeProp({

fade: 'fade-in'

})

}

}, 4000);

return () => clearInterval(timeout)

}, [fadeProp])

return (

<>

<h1 data-testid="fader" className={fadeProp.fade}>{text}</h1>

</>

)

}

Fader.defaultProps = {

text: 'Hello World!'

}

Fader.propTypes = {

text: PropTypes.string,

}
```
## Navigation Bar

```javascript
const NavBar = ({ lightMode, admin }) => {

const {setLoggedIn} = useContext(AuthContext)

const navigate = useNavigate();

const backgroundColor = lightMode

? { backgroundColor: "white" }

: { backgroundColor: "#2c8dff" };
```
2
```javascript
const logoColor = lightMode ? "logo-blue" : "logo-light";

const textColorClasses = lightMode

? "nav-link nav-link-blue align-middle"

: "nav-link nav-link-white align-middle";

const ticketBtnClasses = lightMode

? "btn btn-outline-info align-middle"

: "btn btn-outline-light align-middle";

const navbarTogglerClasses = lightMode

? "navbar-toggler navbar-toggler-black"

: "navbar-toggler navbar-toggler-light";

const navbarTogglerIconClasses = lightMode

? "navbar-toggler-icon navbar-toggler-icon-black"

: "navbar-toggler-icon navbar-toggler-icon-light";

const exitBtnClasses = lightMode

? "btn btn-outline-danger"

: "btn btn-outline-light";

const handleExit = () => {

navigate("/login");

clearStorage();

setLoggedIn(false)

};
```
## Notifications

```javascript
const Notifications = (props) => {

const [isTokenFound, setTokenFound] = useState(false);

console.log("Token found", isTokenFound);

// To load once

useEffect(() => {

let data;

async function tokenFunc() {

data = await getToken(setTokenFound);

if (data) {

console.log("Token is", data);

}

return data;

}

tokenFunc();

}, [setTokenFound]);

return <></>;

};

Notifications.propTypes = {};
```
### React notifications
1
```javascript
const ReactNotificationComponent = ({ title, body }) => {

let hideNotif = title === "";

if (!hideNotif) {

toast.info(<Display />);

}

function Display() {

return (

<div>

<h4>{title}</h4>

<p>{body}</p>

</div>

);

}

return (

<ToastContainer

autoClose={3000}

hideProgressBar

newestOnTop={false}

closeOnClick

rtl={false}

pauseOnFocusLoss={false}

draggable

pauseOnHover={false}

/>

);

};
```
2
```javascript
ReactNotificationComponent.defaultProps = {

title: "This is title",

body: "Some body",

};

ReactNotificationComponent.propTypes = {

title: PropTypes.string,

body: PropTypes.string,

};
```
## User local storage
```javascript
export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  return userInfo;
};

export const setUser = (data) => {
  const userInfo = localStorage.setItem("user", JSON.stringify(data));
  return userInfo;
};

export const clearStorage = () => {
  localStorage.clear();
};
```

## API
### Status API:
```javascript
function StatusesAPI() {

const[statuses, setStatuses] = useState([])

useEffect(() => {

axios.get("http://10.1.11.249:8080/problems/statuses")

.then((res) => {

setStatuses(res.data)

})

.catch((err) =>{

console.log("Erorr while gettig statuses " + err)

})

}, []);

return {
statuses: [statuses, setStatuses],
};
}
```

### Problem API:

```javascript
const [problems, setProblems] = useState([]);

const [allProblems, setAllProblems] = useState([]);

const { users, loggedIn } = useContext(AuthContext);

const [selectedStatus, setSelectedStatus] = useState(0);
```


1
```javascript
useEffect(() => {

if (!loggedIn) {

setAllProblems([]);

setProblems([]);

return;

}

if (users) {

if (users.role == "ADMIN")

axios

.get(`http://10.1.11.249:8080/problems/status/${selectedStatus}`)

.then((res) => setAllProblems(res.data));

if (users.role == "USER") {

axios

.get(`http://10.1.11.249:8080/problems/user/${users.id}`)

.then((res) => {

setProblems(

res.data

.sort((prob1, prob2) => prob1.id - prob2.id)

.slice(0)

.reverse()

);

})

.catch((err) => {

console.log("Error while fetching problems: " + err.message);

});

}

}

}, [users, loggedIn, selectedStatus]);
```
