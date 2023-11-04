import React, { useState } from "react";

import "./App.css";

import { GrAdd } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";

const App = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const increment = () => {
    setError(false);
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 0) {
      setError(true);
      return count;
    }
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="counter-wrapper">
        <div className="counter">
          <BiMinus className="decrement-icon" onClick={decrement} />
          <h1 className="count">{count}</h1>
          <GrAdd className="increment-icon" onClick={increment} />
        </div>

        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
        {error && (
          <p
            style={{
              textAlign: "center",
              color: "red",
            }}
          >
            Counter cannot go below 0
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
