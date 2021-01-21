import React, { useState, useEffect } from "react";

import { listenEvent, unlistenEvent } from "@diogobiz/utils";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => setTasks((prevTasks) => [...prevTasks, e.detail]);

  useEffect(() => {
    listenEvent("@diogobiz/react-route/todo/add-task", addTask);

    return () => unlistenEvent("@diogobiz/react-route/todo/add-task", addTask);
  }, []);

  return (
    <>
      <h1>@diogobiz/react-parcel</h1>
      <table>
        <thead>
          <th>Id</th>
          <th>Task</th>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.describe}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;
