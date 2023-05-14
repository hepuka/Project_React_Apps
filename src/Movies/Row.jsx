import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Row.css";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const base_URL = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <>
      <div>
        <h2>{title}</h2>
        <div className="movies">
          {movies.map((item, index) => (
            <>
              <div key={index}>
                <img
                  className={`row__poster`}
                  key={item.id}
                  src={`${base_URL}${item.backdrop_path}`}
                  alt={item.name}
                />
                <p>{`Title: ${item.title || item.name}`}</p>
                <p>{`Release date: ${
                  item.release_date || item.first_air_date
                }`}</p>
                <p>{`Popularity: ${item.popularity}`}</p>
                <p>{`Rate: ${item.vote_average}`}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;
