
import { useState } from "react";
import Boton from "../Boton";
import "./Count.css";

export const Count = ({ btnText, onConfirm, }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const confirm = () => {
    if (count > 0) {
      onConfirm(count);
    }
  };

  return (
    <div className="count-container">
      <div className="count-controls">
        <button className="boton-contador" onClick={decrement} disabled={count === 0}>
          -
        </button>
        <span>{count}</span>
        <button className="boton-contador" onClick={increment}>
          +
        </button>
      </div>
      <Boton
        texto={btnText}
        onClick={confirm}
        disabled={count === 0}
      />
    </div>
  );
};
