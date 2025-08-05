## 🧠 **`useMemo` – Caches Expensive Values**

---

### **1️⃣ What is `useMemo`?**

* React ka **hook** jo **expensive calculation ka result cache (memoize)** karta hai.
* Taaki unnecessary recalculation na ho jab dependencies change na ho.
* Returns **memoized value**, not a function (that’s `useCallback`).

📌 **Think of it as:**
*"Aisa value jo baar‑baar calculate karna costly hai, uska result memory me store kar lo until required."*

---

### **2️⃣ Syntax**

```jsx
const memoizedValue = useMemo(() => {
  // expensive calculation
  return result;
}, [dependencies]);
```

* **dependencies** → Jab yeh change hoti hain tabhi calculation dobara hota hai.

---

### **3️⃣ When to Use**

* Heavy loops (e.g., filtering a large dataset)
* Complex calculations
* Expensive formatting
* Derived data from state/props

---

### **4️⃣ Example for Interview**

#### **App.js**

```jsx
import React, { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(5);
  const [theme, setTheme] = useState("light");

  // Expensive calculation
  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      // simulate heavy work
      for (let j = 0; j < 100000000; j++) {}
      result *= i;
    }
    return result;
  }, [number]); // re-calc only when 'number' changes

  const themeStyles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
    marginTop: "20px"
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>Factorial Calculator (with useMemo)</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Factorial: {factorial}</p>

      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>

      <div style={themeStyles}>
        Current Theme: {theme}
      </div>
    </div>
  );
}

export default App;
```

---

### **5️⃣ How to Explain in Interview**

> "In this example, calculating factorial is intentionally slow to simulate heavy computation.
> I wrapped it inside `useMemo` so that the factorial is only recalculated when `number` changes.
> Changing the theme does **not** re-run the expensive calculation.
> This improves performance by preventing unnecessary work."

---

### **6️⃣ Common Interview Questions**

1. **Q:** Difference between `useMemo` and `useCallback`?
   **A:** `useMemo` memoizes **values**, `useCallback` memoizes **functions**.

2. **Q:** Will `useMemo` always improve performance?
   **A:** No — only when computation is expensive. Otherwise, extra memory usage may even hurt performance.

3. **Q:** Does `useMemo` cache forever?
   **A:** No — it recomputes when dependencies change.

---
