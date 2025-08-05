## 🧩 **`useState` – Detailed Interview Explanation**

---

### **1️⃣ What is `useState`?**

* React ka **built‑in hook** jo **functional components** me **state management** allow karta hai.
* State ka matlab: **Component ka apna data jo UI me use hota hai aur change ho sakta hai**.
* State change hone par **component re-render hota hai** (UI update hota hai).

---

### **2️⃣ Syntax**

```jsx
const [stateValue, setStateValue] = useState(initialValue);
```

* **`stateValue`** → Current value (read)
* **`setStateValue`** → Function to update the value
* **`initialValue`** → Default value when component mounts

---

### **3️⃣ Key Points for Interview**

1. **State update is asynchronous** –
   React state batching ke karan `setState` turant reflect nahi hota.

2. **Never mutate state directly** –
   ❌ `count++`
   ✅ `setCount(count + 1)`

3. **If next state depends on previous state, use functional update** –

   ```jsx
   setCount(prev => prev + 1);
   ```

4. **Multiple states possible** –
   You can use multiple `useState` calls for different values.

---

### **4️⃣ Coding Example for Interview**

Let’s make a **Counter with Step Size** example.
It shows:

* Multiple `useState`
* Functional state update
* UI re-render

---

#### **Counter.js**

```jsx
import React, { useState } from "react";

function Counter() {
  // State variables
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // Increment function
  const increment = () => {
    setCount(prev => prev + step); // Functional update
  };

  // Decrement function
  const decrement = () => {
    setCount(prev => prev - step);
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>Counter: {count}</h2>

      <div>
        <label>
          Step Size:{" "}
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>

      <br />
      <button onClick={increment}>+ Increase</button>
      <button onClick={decrement}>- Decrease</button>
    </div>
  );
}

export default Counter;
```

---

### **5️⃣ How to Explain in Interview**

> "In this example, I used two separate states:
> `count` for the counter value and `step` for the increment/decrement size.
> Both are managed by `useState`.
> Whenever the step value changes, the next increment uses the new step size.
> I used the functional update form `setCount(prev => prev + step)` because the new value depends on the previous state.
> Changing the state triggers a re-render, which updates the UI instantly."

---

### **6️⃣ Common Interview Questions on `useState`**

1. **Q:** Why use functional updates in `useState`?
   **A:** When the new state depends on the previous state, functional updates ensure correct results even in asynchronous rendering.

2. **Q:** Can we use `useState` inside loops or conditions?
   **A:** No, hooks must be called at the top level of the component.

3. **Q:** What happens if you directly mutate the state variable?
   **A:** UI will not update because React will not detect the change.

---

