import React from "react";
import "../App.css";
import "../Movies/ButtonList.css";

const ButtonList = ({ character, onclickFunction }) => {
  const renderButton = (character, index) => {
    return (
      <div className="btns">
        {" "}
        <button type="button" key={index} onClick={onclickFunction(index)}>
          {character.name}
        </button>
      </div>
    );
  };

  return <div>{character.map(renderButton)}</div>;
};

export default ButtonList;
