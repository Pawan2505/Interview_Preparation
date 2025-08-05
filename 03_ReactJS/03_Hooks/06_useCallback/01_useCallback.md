## 🧠 **`useCallback` – Caches Functions**

---

### **1️⃣ What is `useCallback`?**

* React ka **hook** jo **function ka reference cache (memoize)** karta hai.
* Taaki function har render me **dobara create na ho**.
* Specially useful jab function **child component me prop** ke form me pass hota hai.

📌 **Think of it as:**
*"Function ko memory me store karke rakho, jab tak dependencies same hain."*

---

### **2️⃣ Syntax**

```jsx
const memoizedFunction = useCallback(() => {
  // function code
}, [dependencies]);
```

* **dependencies** → Function tabhi dobara banega jab yeh change hoti hain.

---

### **3️⃣ When to Use**

* Function ko **memoized child component** me pass karna hai.
* Performance optimization with `React.memo`.
* Avoid unnecessary re-renders of child components.

---

### **4️⃣ Example for Interview**

#### **Child.js**

```jsx
import React from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child Button</button>;
}

export default React.memo(Child); // memoize child component
```

---

#### **App.js**

```jsx
import React, { useState, useCallback } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  // Memoized function
  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []); // no dependency → never re-created

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "10px",
    marginTop: "20px"
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>useCallback Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setDark(d => !d)}>Toggle Theme</button>
      <div style={themeStyles}>
        <Child onClick={increment} />
      </div>
    </div>
  );
}

export default App;
```

---

### **5️⃣ How to Explain in Interview**

> "In this example, `Child` is wrapped in `React.memo` so it only re-renders if its props change.
> If I didn’t use `useCallback`, the `increment` function would be recreated on every render, causing `Child` to re-render unnecessarily.
> With `useCallback`, the same function reference is reused until dependencies change, preventing extra renders and improving performance."

---

### **6️⃣ Common Interview Questions**

1. **Q:** Difference between `useMemo` and `useCallback`?
   **A:**

   * `useMemo` → memoizes **value** (returns value)
   * `useCallback` → memoizes **function** (returns function reference)

2. **Q:** Will `useCallback` always improve performance?
   **A:** No — only useful when passing functions to memoized children or when avoiding function recreation is important.

3. **Q:** What happens if dependencies change?
   **A:** A new function is created and cached again.

---

✅ **Quick Interview Answer:**

> "`useCallback` memoizes a function so it’s not recreated on every render.
> It’s mostly used with memoized child components to avoid unnecessary re-renders.
> `useCallback` returns a function, while `useMemo` returns a computed value."

---
