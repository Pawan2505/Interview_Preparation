
---

# 🌟 React Fundamentals

---

# **1️⃣ Concurrent Rendering ka Purpose (React 18)**

### 👉Answer:

Concurrent rendering ka main purpose UI ko **smooth** rakhna hai.
Agar app me heavy work chal raha ho, to bhi user ko **lag, freeze ya slow typing** nahi feel hoti.

React important (urgent) work ko pehle karta hai — jaise typing —
Aur heavy (non-urgent) kaam baad me handle karta hai.

### 👉 Simple Example:

```jsx
import { useTransition } from "react";

const [isPending, startTransition] = useTransition();

startTransition(() => {
  // heavy kaam
  console.log("Loading big list...");
});
```

Typing smooth rahegi, heavy work background me ho jayega.

---

# **2️⃣ useReducer vs useState — Kab kya use karein?**

### 👉 Ruler:

* **useState** = simple state ho, direct changes ho.
* **useReducer** = state thodi complex ho, multiple actions ho.

### 👉 useState Example (Simple):

```jsx
const [count, setCount] = useState(0);
```

Bas ek value update karni ho → useState is perfect.

### 👉 useReducer Example (Complex):

```jsx
function reducer(state, action) {
  if (action.type === "increment") return { count: state.count + 1 };
  if (action.type === "reset") return { count: 0 };
}

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

Yaha logic clear, structured aur predictable ban jata hai.

---

# **3️⃣ Non-memoized Functions as Props — Kya problem hoti hai?**

### 👉Answer:

Agar aap function ko bina useCallback ke child ko bhejoge,
to parent re-render hote hi **har baar new function banega**,
aur child **unnecessary baar-baar re-render** ho jayega.

Isse performance slow ho sakti hai.

### 👉 Example (Problem):

```jsx
function Parent() {
  const show = () => console.log("Hello"); // new function every render
  return <Child onClick={show} />;
}
```

Child har baar re-render hoga.

### 👉 Fixed Example:

```jsx
const show = useCallback(() => console.log("Hello"), []);
```

Ab child unnecessary re-render nahi karega.

---

# **4️⃣ React Batching Updates — Simple Explanation**

### 👉Answer:

React 18 me agar aap ek time me multiple state updates karte ho,
to React un sab ko **ek hi render me combine** (batch) kar deta hai.

Isse performance better ho jati hai.

### 👉 Example:

```jsx
setCount(count + 1);
setValue("hello");
```

React dono updates ko combine karke ek hi render karega.

### 👉 Async Example (React 18):

```jsx
setTimeout(() => {
  setA(a + 1);
  setB(b + 1);
}, 1000);
```

Pehle (React 17) me 2 render hote the,
React 18 me **ab bhi 1 render hoga** — batching async me bhi ho rahi hai.

---

# ⭐ Short Summary (Interview)

* **Concurrent rendering:** UI ko lag-free banane ke liye React important kaam ko priority deta hai.
* **useReducer:** Jab state complex ho ya multiple actions ho.
* **Non-memoized functions:** Har render par new function banta hai → child unnecessary re-render hota hai.
* **Batching:** Multiple state updates ko React ek hi render me merge karta hai (React 18 → async me bhi).

---

