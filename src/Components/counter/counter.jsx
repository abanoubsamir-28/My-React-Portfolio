import { useState } from "react";
import CounterAction from "./counteractions";
export default function CounterComponent() {
  const [counter, setCounter] = useState(0);
  const increase = () => {
    setCounter(counter + 1);
  };
  const decreace = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="vh-100 d-flex  align-items-center mx-auto">
      <div className="container d-flex justify-content-center">
        <CounterAction action={increase} operator="+" />
        <h1>{counter}</h1>
        <CounterAction action={decreace} operator="-" />
        <CounterAction action={reset} operator="X" />
        
      </div>
      
    </div>
  );
}
