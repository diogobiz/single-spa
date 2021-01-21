import React, { useState } from "react";

import { v4 as uuid } from "uuid";

import Parcel from "single-spa-react/parcel";

import { emitEvent } from "@diogobiz/utils";

const App = ({ name }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => setTask(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    emitEvent("@diogobiz/react-route/todo/add-task", {
      id: uuid(),
      describe: task,
    });
    setTask("");
  };

  return (
    <>
      <h1>{name}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={task} />
        <button>Add</button>
      </form>
      <Parcel config={() => System.import("@diogobiz/react-parcel")} />
    </>
  );
};

export default App;
