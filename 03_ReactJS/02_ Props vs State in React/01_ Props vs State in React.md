## **Props vs State in React**

---

### **1. Props (Properties)**

📌 **Definition:**

* Parent se child component me **data pass** karne ka tarika.
* **Read‑only** hote hain (child change nahi kar sakta).
* Immutable (change nahi karte internally).
* Functional aur class dono me kaam karte hain.

💡 **Real life analogy:**
Jaise tumko tumhare friend se ek gift milta hai 🎁 —
tum us gift ko **use** kar sakte ho, par gift ke andar ka content change nahi karte.

**Example:**

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <Greeting name="Pawan" />; // props pass
}
```

---

### **2. State**

📌 **Definition:**

* Component ka **internal data storage**.
* Component ke andar hi create hota hai.
* Change hone par component re‑render hota hai.
* Functional components me **useState hook** ka use hota hai.

💡 **Real life analogy:**
Jaise tumhare mobile ka **current battery level** 🔋 —
tum ise change kar sakte ho (charging), aur display turant update hota hai.

**Example:**

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

---

### **3. Props vs State – Interview Table**

| Feature                | Props                         | State                       |
| ---------------------- | ----------------------------- | --------------------------- |
| **Who owns it?**       | Parent component              | Same component              |
| **Mutable?**           | ❌ No                          | ✅ Yes                       |
| **Read/Write**         | Read‑only                     | Read & Write                |
| **Where defined?**     | Outside component (passed in) | Inside component            |
| **Trigger re‑render?** | No                            | Yes                         |
| **Usage**              | Pass data from parent → child | Store and update local data |

---

### **4. Common Interview Traps**

❌ **"Props change hone se UI update hota hai?"** –
Yes, par **props parent me change hote hain** tab child ko naye props milte hain.
❌ **"State ko direct modify kar sakte hain?"** –
Nahi, `setState` (class) ya `setCount` (hook) se update karo.
❌ **"Props ko child me change karke use kar lein?"** –
Nahi, immutable hote hain.

---

### **5. Quick Interview Answer**

> "Props parent se child ko data pass karte hain aur read‑only hote hain.
> State component ka internal data hota hai jo change hone par re‑render trigger karta hai.
> Props data transfer ke liye hote hain, state data management ke liye."

---
