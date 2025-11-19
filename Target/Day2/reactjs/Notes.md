
---

# **1️⃣ What makes React stand out as a framework, and what core problem does it solve?**

**English + Hindi:**
React ko standout banata hai **Virtual DOM, Component-Based Architecture, One-way Data Flow, and High Performance UI Rendering**.
React ka main problem solve karna ye hai ki **UI ko efficiently update kaise kare without reloading or repainting the entire view**.

React UI ko small components me break karta hai, aur jab state change hoti hai to sirf wahi part re-render hota hai — pura DOM nahi.
Isse **performance, maintainability aur scalability** improve hoti hai.

---

# **2️⃣ How do we prevent unnecessary re-renders of child components? What strategies does React provide?**

Unnecessary re-render rokne ke liye React me kuch important strategies:

### ✔ **1. React.memo()**

Pure components ki tarah kaam karta hai. Props same ho → component re-render nahi hoga.

### ✔ **2. useCallback()**

Functions ko memoize karta hai, taki child ko har render par new function reference na mile.

### ✔ **3. useMemo()**

Heavy calculations ko memoize karta hai, jab tak dependencies change na ho.

### ✔ **4. Splitting state wisely**

State ko parent me unnecessarily mat rakho, jaha needed ho wahi store karo.

### ✔ **5. Avoid anonymous functions & inline objects**

Kyuki ye har render me new reference create karte hain → re-renders badhte hain.

---

# **3️⃣ New HTML tags or recent additions in HTML?**

**Latest HTML additions (Interview me kaam aayega):**

* `<dialog>` – Modals / popups ke liye
* `<template>` – Reusable HTML blocks
* `<slot>` – Web components ke liye
* `<picture>` – Responsive images ke liye
* `<details>` and `<summary>` – Collapsible content
* New attributes:

  * `loading="lazy"` for images
  * `fetchpriority`
  * `inert` attribute

---

# **4️⃣ Explain React lifecycle & how lifecycle helps efficient rendering.**

**English + Hindi:**
Functional components lifecycle = **Mount → Update → Unmount**

React lifecycle teen phase me kaam karta hai:

### **1. Mounting**

* Component UI me aata hai
* Hook: `useEffect(() => {...}, [])`

### **2. Updating** (state/props change)

* React diffing algorithm se Virtual DOM compare karta hai
* Only changed nodes render

### **3. Unmounting**

* Cleanup for timers, listeners
* Hook:

```js
useEffect(() => {
  return () => { cleanup… }
}, [])
```

**Lifecycle ka major role** — *efficient rendering*, minimal DOM operations, proper cleanup, and predictable UI behavior.

---

# **5️⃣ What is the significance of the key prop in React?**

**English + Hindi:**
`key` React ko batata hai:
**“Ye list item unique hai.”**

Key se React:

* Efficient diffing karta hai
* Re-ordering detect karta hai
* Unnecessary re-renders avoid hoti hain
* Data ke sath UI sync me rehta hai

**Rule:**
`index` ko key mat use karo agar list reorder / delete hoti hai.

---

# **6️⃣ If you want to share state across components, how do you approach it? Challenges?**

**Approaches:**

### ✔ **1. Lift State Up**

Parent me state, children me props.

### ✔ **2. Context API**

Lightweight global state.

### ✔ **3. State Management Libraries**

* Redux
* Zustand
* Jotai
* Recoil

**Challenges:**

* Prop drilling
* Re-renders across many components
* Debugging complex shared flows
* State synchronization issues

---

# **7️⃣ Set up a basic Context store + consume it**

### **Context Store**

```js
import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState("Pawan");
  
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
```

### **Consume Context**

```js
import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  return <h1>Welcome, {user}</h1>;
}
```

---

# **8️⃣ If you have 10 API calls and want results even if some fail, how would you handle it?**

Use **Promise.allSettled()**

```js
const results = await Promise.allSettled(apiCalls);

results.forEach(res => {
  if (res.status === "fulfilled") console.log(res.value);
  else console.log("Failed:", res.reason);
});
```

✔ All results milenge
✔ Fail wale bhi independent

---

# **9️⃣ If you want all 10 API calls to fail if even one fails?**

Use **Promise.all()**

```js
try {
  const data = await Promise.all(apiCalls);
  console.log("All success:", data);
} catch (error) {
  console.log("Operation failed:", error);
}
```

✔ Ek fail → saare cancel
✔ Common interview question

---

