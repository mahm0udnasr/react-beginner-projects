import { useState } from "react";
import "../styles/counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <div className="counter">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={increment}>+</button>
          <button onClick={reset}>0</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
