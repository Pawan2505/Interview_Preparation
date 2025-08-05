## 🧠 **Controlled Components**

---

### **📌 Definition**

* **React state** is the **single source of truth** for the form field value.
* The input value is **controlled** by React through the `value` prop and `onChange` handler.
* React knows the value at all times.

---

### **Example: Controlled Input**

```jsx
import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}                // Bound to React state
        onChange={(e) => setName(e.target.value)} // Updates state
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ControlledForm;
```

✅ **Pros:**

* Easy to validate in real time
* React always knows current value
* Predictable behavior

❌ **Cons:**

* More code
* Slightly more re‑renders for very large forms

---

## 🧠 **Uncontrolled Components**

---

### **📌 Definition**

* The DOM manages the value internally.
* We **do not** bind `value` to React state.
* We use **`ref`** to read the value when needed.

---

### **Example: Uncontrolled Input**

```jsx
import React, { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello, ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} /> {/* No value prop */}
      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
```

✅ **Pros:**

* Less code for quick inputs
* Good for one‑time value reads (like search box, file upload)

❌ **Cons:**

* Harder to validate live
* React doesn’t know the value until you read it

---

## 📊 **Controlled vs Uncontrolled Table**

| Feature            | Controlled                | Uncontrolled         |
| ------------------ | ------------------------- | -------------------- |
| Value Stored In    | React state               | DOM element          |
| `value` Prop       | Yes                       | No                   |
| `onChange` Handler | Required                  | Optional             |
| Access Value       | Directly from state       | From `ref`           |
| Validation         | Easy (live validation)    | Harder               |
| Use Case           | Dynamic forms, validation | Simple, quick inputs |

---

## 🗣 **Quick Interview Answer**

> "Controlled components have their value fully managed by React state, making validation and updates predictable.
> Uncontrolled components let the DOM manage the value, and we access it via refs when needed.
> Controlled forms are preferred for most apps, but uncontrolled are useful for quick, simple, or non‑critical inputs."

---

