import React from "react";

const ButtonList = ({ onclickFunction, datas }) => {
  const renderButton = (datas, index) => {
    return (
      <button type="button" key={index} onClick={onclickFunction(index)}>
        {datas.name}
      </button>
    );
  };

  return <div>{datas.map(renderButton)}</div>;
};

export default ButtonList;
