import React, { useState } from "react";
import requests, { datas } from "./request.js";
import Row from "./Row.jsx";
import ButtonList from "./ButtonList";

const Movies = () => {
  const [movies, setMovies] = useState(datas);

  const onClickHandler = (index) => (_) => {
    setMovies(
      movies.map((char, charIndex) =>
        charIndex === index
          ? { ...char, selected: true }
          : { ...char, selected: false }
      )
    );
  };
  return (
    <div>
      <ButtonList onclickFunction={onClickHandler} datas={datas} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Movies;
