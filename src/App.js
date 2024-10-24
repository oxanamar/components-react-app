import "./App.css";
import Content from "./component/Content";
import Header from "./component/Header";
import LoginPage from "./component/LoginPage";
import CardList from "./component/CardList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Missing from "./component/Missing";
import News from "./component/News";
import NewsPage from "./component/NewsPage";

function App() {
  const news = [
    { id: 1, text: "News1" },
    { id: 2, text: "News2" },
    { id: 3, text: "News3" },
  ];

  return (
    <Router>
      <div className="App">
        <Header className="header" title="My List" />
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/shop" element={<CardList />} />
          <Route path="/news" element={<News news={news} />} />
          <Route path="/news/:id" element={<NewsPage news={news} />} />
          <Route path="/*" element={<Missing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
