import React from "react";
import "../App.css";

const ButtonList = ({ character, onclickFunction }) => {
  const renderButton = (character, index) => {
    return (
      <button type="button" key={index} onClick={onclickFunction(index)}>
        {character.name}
      </button>
    );
  };

  return <div>{character.map(renderButton)}</div>;
};

export default ButtonList;
