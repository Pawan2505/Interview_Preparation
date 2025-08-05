## 🧠 **List Rendering in React**

---

### **1️⃣ What is List Rendering?**

* Jab aapke paas **array of data** hota hai aur aap usko JSX me display karte ho.
* Example: **Todo lists, user lists, product grids, messages**.
* React me hum normally **`.map()`** use karke render karte hain.

---

### **2️⃣ Basic Example**

```jsx
function App() {
  const fruits = ["Apple", "Banana", "Mango"];

  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

export default App;
```

📌 **Key points:**

* `.map()` returns **JSX elements**.
* **`key` prop** unique honi chahiye (better to use ID instead of index).

---

### **3️⃣ With Objects**

```jsx
function App() {
  const users = [
    { id: 1, name: "Pawan", age: 25 },
    { id: 2, name: "Fatima", age: 22 },
    { id: 3, name: "Rahul", age: 27 }
  ];

  return (
    <div>
      {users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Age: {user.age}</p>
        </div>
      ))}
    </div>
  );
}
```

📌 Using **`id` as key** is better than `index` to avoid unnecessary re-renders.

---

### **4️⃣ Conditional + List Rendering**

```jsx
function App() {
  const products = [];

  return (
    <div>
      {products.length > 0 ? (
        <ul>
          {products.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}
```

📌 Combine **conditional rendering** with list rendering for real projects.

---

### **5️⃣ Dynamic List with State**

```jsx
import React, { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

📌 Real‑world apps often use **state** to store dynamic lists.

---

### **6️⃣ Common Interview Pitfalls**

1. **Using index as key** — Can cause issues when list changes order or deletes items.
2. **Not returning JSX in `.map()`** — Remember `()` or `{}` with `return`.
3. **Mutating array directly** — Always create a **new array** with spread (`[...]`) or `.filter()`.

---

### **7️⃣ Quick Interview Answer**

> "List rendering in React means looping through an array and rendering JSX for each item, typically using `.map()`.
> We must give each item a unique `key` prop for efficient re-rendering.
> Using `id` is preferred over `index` to prevent rendering issues when the list changes."

---

