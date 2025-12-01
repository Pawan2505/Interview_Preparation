import React, { useEffect, useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  // Fetch Task

  const getTasks = async () => {
    const res = await fetch("http://localhost:8000/getTasks");
    const data = await res.json();

   setTasks(data);
  };

  // Add task
  const addTask = async () => {
    await fetch("http://localhost:8000/addTask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });

    setTitle("");
    await getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div style={{width:"400px", margin:"50px auto"}}>
      <h2>Task Manager</h2>

      <input
        type="text"
        placeholder="Enter Task"
        value={title}
        onChange={handleChange}
      />

      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
