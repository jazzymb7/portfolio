import "./App.css";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import NavBar from "./NavBar/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/blog" Component={Blog} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </div>
  );
}

export default App;
