## 🧠 **Lifting State Up in React**

---

### **1️⃣ What is Lifting State Up?**

* Jab **do ya zyada components** ko **same data share** karna ho, toh unka state **common parent** component me rakha jata hai.
* Is process ko hi **Lifting State Up** kehte hain.
* Then parent se state **props ke through** child components me bheja jata hai.

📌 Think of it like:

> "Instead of each child keeping its own copy of data, we keep **one copy in the parent** and share it."

---

### **2️⃣ Why We Need It**

* Avoid **duplicate state** in different components
* Keep **data consistent** across multiple components
* Make **parent control** over child component behavior

---

### **3️⃣ Simple Example**

#### **Parent.js**

```jsx
import React, { useState } from "react";
import ChildInput from "./ChildInput";
import ChildDisplay from "./ChildDisplay";

function Parent() {
  const [text, setText] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Lifting State Up Example</h1>
      <ChildInput text={text} setText={setText} />
      <ChildDisplay text={text} />
    </div>
  );
}

export default Parent;
```

---

#### **ChildInput.js**

```jsx
function ChildInput({ text, setText }) {
  return (
    <input
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type something..."
    />
  );
}

export default ChildInput;
```

---

#### **ChildDisplay.js**

```jsx
function ChildDisplay({ text }) {
  return <p>You typed: {text}</p>;
}

export default ChildDisplay;
```

---

### **4️⃣ How It Works**

1. **State is in Parent** → `Parent` holds `text`.
2. **ChildInput** → Receives `text` & `setText` via props.
3. **ChildDisplay** → Receives `text` via props.
4. Any change in input updates **parent state**, which **re-renders** both children.

---

### **5️⃣ Real Life Use‑Case**

* A **form** and a **live preview** component
* A **filter input** and a **list component** that needs filtered data
* Sibling components sharing **the same selected item**

---

### **6️⃣ Quick Interview Answer**

> "Lifting state up means moving state to the closest common parent of components that share that data.
> This ensures both children see the same updated data and avoids duplicate or inconsistent state."

---
