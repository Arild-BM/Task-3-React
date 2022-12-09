import './App.css';
import React from "react"


export default function App() {
  const [counter, setCounter] = React.useState(0)

  function decrement(number) {
    return setCounter(prevValue => prevValue - number)
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={() => decrement(1)} className="decbutton">Decrement by 1</button>
      <button onClick={() => setCounter((prevValue) => prevValue + 1)} className="incbutton">Increment by 1</button>
      <br />
      <button onClick={() => decrement(10)} className="decbutton">Decrement by 10</button>
      <button onClick={() => setCounter((prevValue) => prevValue + 10)} className="incbutton">Increment by 10</button>
      <br />
      <button onClick={() => setCounter((prevValue) => prevValue * prevValue)} className="square">Square</button>
      <button onClick={() => setCounter((prevValue) => Math.round(Math.sqrt(prevValue)) ? Math.round(Math.sqrt(prevValue)) : 0)} className="root">Root</button>
      <br />
      <button onClick={() => setCounter(0)} className="reset">Reset</button>
    </div>
  );
}