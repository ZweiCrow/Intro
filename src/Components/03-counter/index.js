import React, {useState} from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [id, setId] = useState(0)

  const play = () => {
    clearInterval(id)
    const idInterval = setInterval(()=> setCounter(counter => counter+1), 1000)
    setId(idInterval)
  }

  const stop = () => {
    clearInterval(id)
  }


  return (
    <>
    <h1>Counter</h1>
      counter : {counter} <br />
      <button onClick={play}>Play</button>
      <button onClick={stop}>Stop</button>
      <button onClick={()=>setCounter(0)}>Reset</button>
    </>
  );
};

export default Counter;