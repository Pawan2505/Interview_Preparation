## 🧠 **Conditional Rendering in React**

---

### **1️⃣ What is Conditional Rendering?**

* React ka way of saying: **"Show this UI only if some condition is true"**.
* Just like **if/else** in JavaScript, but inside JSX.
* Useful for:

  * Showing **loading** state before data arrives
  * Displaying **different components** for logged‑in/logged‑out users
  * Handling **empty list** messages
  * Error messages

---

### **2️⃣ Common Techniques**

#### **a) `if / else` statement**

```jsx
function App() {
  const isLoggedIn = true;

  if (isLoggedIn) {
    return <h2>Welcome back, user!</h2>;
  } else {
    return <h2>Please log in</h2>;
  }
}
```

📌 Used when you want **completely different JSX**.

---

#### **b) Ternary Operator `? :`**

```jsx
function App() {
  const isLoggedIn = false;

  return (
    <div>
      {isLoggedIn ? <h2>Dashboard</h2> : <h2>Login Page</h2>}
    </div>
  );
}
```

📌 Short and clean for small differences.

---

#### **c) Logical AND `&&`**

```jsx
function App() {
  const showMessage = true;

  return (
    <div>
      {showMessage && <p>Hello, this is a conditional message!</p>}
    </div>
  );
}
```

📌 If `showMessage` is true, message shows; otherwise nothing.

---

#### **d) Switch‑case rendering**

```jsx
function App() {
  const role = "admin";

  switch (role) {
    case "admin":
      return <h2>Welcome, Admin!</h2>;
    case "user":
      return <h2>Welcome, User!</h2>;
    default:
      return <h2>Guest Access</h2>;
  }
}
```

📌 Best when **many cases**.

---

### **3️⃣ Real‑Life Example – Loading & Error States**

```jsx
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch data");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return <h2>User: {data.name}</h2>;
}

export default App;
```

---

### **4️⃣ Interview Quick Answer**

> "Conditional rendering in React means rendering UI elements based on a condition.
> We can do it using `if/else`, ternary `? :`, logical AND `&&`, or switch statements.
> It’s commonly used for authentication checks, showing loaders, or displaying error messages."

---

