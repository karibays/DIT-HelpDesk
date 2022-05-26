import "./App.css";
import { Categories, Forum, MainPage, NoPage, Ticket } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="categories" element={<Categories />} />
          <Route path="forum" element={<Forum />} />
          <Route path="ticket" element={<Ticket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
