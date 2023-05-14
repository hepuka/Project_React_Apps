import React, { useState } from "react";
import "../App.css";

const Calculator = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [operator, setOperator] = useState();
  const [result, setResult] = useState();

  const Counts = () => {
    switch (operator) {
      case "+":
        setResult(number1 + number2);
        break;
      case "-":
        setResult(number1 - number2);
        break;
      case "*":
        setResult(number1 * number2);
        break;
      case "/":
        setResult(number1 / number2);
        break;
    }

    setNumber1(0);
    setNumber2(0);
    setOperator();
  };

  return (
    <div>
      <>
        <h1>Calculator</h1>
        <div id="form">
          <input
            value={number1}
            onChange={(e) => setNumber1(Number(e.target.value))}
            placeholder="1.number"
            type="number"
            id=""
          />
          <select
            value={operator}
            onChange={(e) => setOperator(e.target.value)}
          >
            <option defaultChecked>Choose one</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input
            value={number2}
            onChange={(e) => setNumber2(Number(e.target.value))}
            placeholder="2.number"
            type="number"
          />
          <button onClick={Counts}>Count</button>
          <input value={result} readOnly placeholder="Result" />
        </div>
      </>
    </div>
  );
};

export default Calculator;
