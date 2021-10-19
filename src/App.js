import './App.css';
import { useState } from "react"
import Counter from './components/Counter'
import CounterAction from './components/CounterAction'

function App() {
  let [number, setNumber] = useState(0) 

  const increase = () => {
      setNumber(++number);
  };
  const decrease = () => {
      setNumber(--number);
  };
  return (<div>
    <h1>A React Simple Counter App</h1>
    <Counter number={number}/>
    <CounterAction increase={increase} decrease={decrease}/>
  </div>
  );
}

export default App;