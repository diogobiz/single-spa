import React, { useState } from "react";

const App = ({ name }) => {
  const [counter, setCounter] = useState(0);

  const handleChange = (type) => setCounter((prevValue) => prevValue + type);

  return (
    <>
      <h1>{name}</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => handleChange(-1)}>Decrement</button>
      <button onClick={() => handleChange(1)}>Increment</button>
    </>
  );
};

export default App;
