import React, { useState } from "react";

const Character = ({ selectedChar }) => {
  return (
    <div>
      <div>
        <h2>{selectedChar.name}</h2>
        <img src={selectedChar.image} width={400} height={400} alt="char" />
      </div>
    </div>
  );
};

export default Character;
