import React, { useState } from "react";
import ButtonList from "./ButtonList";
import Character from "./Character";
import { datas } from "./datas.js";

const StarWars = () => {
  const [characters, setCharacters] = useState(datas);

  const onClickHandler = (index) => (_) => {
    setCharacters(
      characters.map((char, charIndex) =>
        charIndex === index
          ? { ...char, selected: true }
          : { ...char, selected: false }
      )
    );
  };

  console.log(characters);
  const databack = characters.find((item) => item.selected);

  console.log(databack);

  return (
    <div className="box">
      <ButtonList onclickFunction={onClickHandler} character={characters} />
      <Character selectedChar={databack} />
    </div>
  );
};

export default StarWars;
