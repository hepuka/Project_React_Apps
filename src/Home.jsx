import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <nav>
        <ol>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/starwars">Star Wars</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ol>
      </nav>
      <div></div>
    </>
  );
};

export default Home;
