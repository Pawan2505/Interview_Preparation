Perfect Pawan! 🚀
## 📌 **React Demo – Props + State Together**

---

### **Features**

* **Props** → Label text parent se child me pass hoga.
* **State** → Count value child component me handle hogi.
* Button click se count update hoga (state change → re-render).

---

### **Code**

#### **App.js**

```jsx
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Props + State Demo</h2>

      {/* Props: label text */}
      <Counter label="Likes" />
      <Counter label="Dislikes" />
    </div>
  );
}

export default App;
```

---

#### **Counter.js**

```jsx
import React, { useState } from "react";

function Counter({ label }) {
  // State for count
  const [count, setCount] = useState(0);

  return (
    <div style={{
      background: "#f4f4f4",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "300px"
    }}>
      <span>{label}: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
```

---

### **How to Run**

```bash
npx create-react-app props-state-demo
cd props-state-demo
# Replace src/App.js and src/Counter.js with above code
npm start
```

---

### **Interview Explanation**

> "Is demo me maine `App` component se `label` ko **props** ke through `Counter` component me pass kiya.
> Counter component apni internal **state** (`count`) manage karta hai using `useState`.
> Button click hone par state change hoti hai aur UI automatically re‑render hota hai.
> Props read‑only hote hain, par state component ke andar change hoti hai."

---

### **Why This Works Well in Interview**

✅ Simple & quick to explain
✅ Shows **props for parent → child data flow**
✅ Shows **state for internal data handling**
✅ Demonstrates **re-render on state change**
✅ Easily extendable (multiple counters with different labels)

---

