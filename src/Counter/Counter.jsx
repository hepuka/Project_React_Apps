import React from "react";
import { useState } from "react";
import "../App.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount(count + 1);
  };
  const decr = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <p>{count}</p>
        <div>
          <button onClick={incr}>Increment</button>
          <button onClick={decr}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default Counter;
