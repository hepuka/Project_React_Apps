import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Counter from "./Counter/Counter";
import Calculator from "./Calculator/Calculator";
import StarWars from "./StarWars/StarWars";
import Movies from "./Movies/Movies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/calculator" element={<Calculator />}></Route>
          <Route path="/starwars" element={<StarWars />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
