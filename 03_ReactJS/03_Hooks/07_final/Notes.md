## 🎯 **Project: Task Manager with Theme Toggle & Stats**

**Features:**

1. **useState** → Local state for input fields.
2. **useEffect** → Persist tasks in `localStorage`.
3. **useContext** → Global theme toggle without prop drilling.
4. **useReducer** → Manage task list (add, remove, toggle complete).
5. **useMemo** → Calculate total/completed task stats efficiently.
6. **useCallback** → Avoid unnecessary child component re‑renders.

---

### **1️⃣ Create Context for Theme**

**ThemeContext.js**

```jsx
import { createContext } from "react";

export const ThemeContext = createContext();
```

---

### **2️⃣ App.js**

```jsx
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import TaskManager from "./TaskManager";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(t => (t === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{
        backgroundColor: theme === "light" ? "#f9f9f9" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px"
      }}>
        <h1>Task Manager</h1>
        <TaskManager />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```

---

### **3️⃣ TaskManager.js**

```jsx
import React, { useReducer, useState, useEffect, useMemo, useCallback, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import TaskList from "./TaskList";

// Reducer function for task operations
function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { text: action.payload, completed: false }];
    case "TOGGLE_TASK":
      return state.map((task, index) =>
        index === action.payload ? { ...task, completed: !task.completed } : task
      );
    case "REMOVE_TASK":
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
}

function TaskManager() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const localData = localStorage.getItem("tasks");
    return localData ? JSON.parse(localData) : [];
  });

  const [taskInput, setTaskInput] = useState("");

  // Persist tasks in localStorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Memoized statistics
  const stats = useMemo(() => {
    console.log("Calculating stats...");
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    return { total, completed };
  }, [tasks]);

  // Memoized function to add task
  const addTask = useCallback(() => {
    if (taskInput.trim() !== "") {
      dispatch({ type: "ADD_TASK", payload: taskInput });
      setTaskInput("");
    }
  }, [taskInput]);

  return (
    <div>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>

      <div style={{ margin: "20px 0" }}>
        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <p>Total Tasks: {stats.total} | Completed: {stats.completed}</p>

      <TaskList tasks={tasks} dispatch={dispatch} />
    </div>
  );
}

export default TaskManager;
```

---

### **4️⃣ TaskList.js**

```jsx
import React from "react";

function TaskList({ tasks, dispatch }) {
  console.log("TaskList rendered");
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index} style={{
          textDecoration: task.completed ? "line-through" : "none"
        }}>
          {task.text}
          <button onClick={() => dispatch({ type: "TOGGLE_TASK", payload: index })}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: index })}>
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(TaskList);
```

---

## **💡 How to Explain in Interview**

> "This app uses all 6 major React hooks:

* `useState` → Manages input field and theme toggle.
* `useEffect` → Saves tasks in localStorage on every change.
* `useContext` → Shares theme toggle function globally without prop drilling.
* `useReducer` → Handles complex task operations like add, toggle, delete.
* `useMemo` → Optimizes calculation of task statistics.
* `useCallback` → Prevents re-creation of `addTask` function to avoid unnecessary re-renders of `TaskList`."

---

