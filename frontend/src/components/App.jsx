import "../css/App.css";
import Home from "../pages/home";
import Favourite from "../pages/favourites";
import Nav from "./navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />
    <main className="maincontent">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </main>
    </div>
  );
}

export default App;
