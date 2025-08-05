## 🧠 **`useReducer` – Handles Complex State**

---

### **1️⃣ What is `useReducer`?**

* React ka **hook** jo **complex state logic** manage karne ke liye banaya gaya hai.
* Alternative to `useState` when:

  1. State has **multiple sub-values**
  2. State updates have **multiple actions**
  3. Updates depend on **previous state**

📌 Think of it as **Redux ka mini version** inside a component.

---

### **2️⃣ Syntax**

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

* **state** → Current state object/value
* **dispatch** → Function to send an action
* **reducer** → Function `(state, action) => newState`
* **initialState** → Default state

---

### **3️⃣ Reducer Function Structure**

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "ACTION_NAME":
      return { ...state, key: newValue };
    default:
      return state;
  }
}
```

---

### **4️⃣ Key Points for Interview**

1. **Best for related state variables** stored in an object.
2. Keeps update logic **centralized** inside `reducer()`.
3. Useful for **multi-action updates** (increment, decrement, reset).
4. Predictable state transitions.

---

### **5️⃣ Coding Example for Interview**

#### **Todo + Counter Example**

```jsx
import React, { useReducer, useState } from "react";

// Initial state
const initialState = {
  count: 0,
  todos: []
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };

    case "DECREMENT":
      return { ...state, count: state.count - 1 };

    case "RESET":
      return { ...state, count: 0 };

    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "REMOVE_TODO":
      return { ...state, todos: state.todos.filter((t, i) => i !== action.payload) };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoInput, setTodoInput] = useState("");

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+ Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>- Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>

      <hr />
      <h2>Todos</h2>
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "ADD_TODO", payload: todoInput });
          setTodoInput("");
        }}
      >
        Add Todo
      </button>

      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>
            {todo}{" "}
            <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: index })}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

---

### **6️⃣ How to Explain in Interview**

> "Here, I used `useReducer` because my state has two related parts: a `count` and a list of `todos`.
> Instead of having multiple `useState` calls, I put all update logic in one place — the reducer function.
> I used `dispatch` to send actions with a `type` and optional `payload`.
> This makes my code predictable, easy to debug, and scalable when the number of actions increases."

---

### **7️⃣ Common Interview Questions**

1. **Q:** Why use `useReducer` instead of `useState`?
   **A:** When you have multiple related state updates or complex logic, `useReducer` keeps things organized.

2. **Q:** Is `useReducer` synchronous or asynchronous?
   **A:** Like `useState`, updates are batched and applied during the next render.

3. **Q:** Can `useReducer` be combined with `useContext`?
   **A:** Yes — this is how you can create a **mini Redux-like global store** in React without external libraries.

---

