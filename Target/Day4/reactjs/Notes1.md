
---

# **React Interview Questions (1–10)**

**Acting as 5+ years experience React Developer**

---

# **1. What is React? Describe the benefits of React.**

### ✔ Answer:

React ek **JavaScript library** hai jo UI banane ke liye use hoti hai. Ye **component-based**, fast aur reusable UI banane me help karti hai.

### ⭐ Benefits:

* **Fast UI updates** (Virtual DOM)
* **Reusable components**
* **One-way data flow = predictable behavior**
* **Large community + ecosystem**
* **Easy to build SPA (Single Page Apps)**

### ✔ Example:

```jsx
function Button() {
  return <button>Click</button>;
}
```

---

# **2. Difference between React Node, Element, and Component**

### ✔ React Node

Anything React can render → numbers, strings, elements, arrays.

### ✔ React Element

Plain object describing UI → `React.createElement()` ka result.

### ✔ React Component

Function ya class jo JSX return karta hai.

### ⭐ Example:

```jsx
const el = <h1>Hello</h1>;      // element
function App() { return el; }   // component returning element
```

---

# **3. What is JSX and how does it work?**

JSX = JavaScript + HTML-like syntax.
Browser directly JSX nahi samajhta → Babel isko JavaScript me convert karta hai.

### Example:

```jsx
const element = <h1>Hello</h1>;
```

Convert to:

```js
React.createElement("h1", null, "Hello");
```

---

# **4. Difference between state and props**

### ✔ Props

* Read-only data
* Parent → Child
* Component ko configure karte

### ✔ State

* Internal data
* Component itself change kare
* Re-render trigger karta

### Example:

```jsx
function Welcome({ name }) {   // props
  const [count, setCount] = useState(0); // state
}
```

---

# **5. Purpose of key prop in React**

Key React ko help karta hai **list items ko uniquely identify** karne me, taaki diffing fast ho.

### Example:

```jsx
list.map(item => <li key={item.id}>{item.name}</li>);
```

---

# **6. Consequence of using array index as key**

* Wrong re-ordering
* UI glitches
* Wrong element reuse
* Slow performance

Index key sirf static lists me theek hai.

---

# **7. Controlled vs Uncontrolled Components**

### ✔ Controlled

State React control karta.

```jsx
<input value={text} onChange={e => setText(e.target.value)} />
```

### ✔ Uncontrolled

DOM apna state khud handle karta.

```jsx
<input ref={inputRef} />
```

---

# **8. Pitfalls of using context**

* Har context change → **all children re-render**
* Overuse se performance issues
* Hard to debug deeply nested contexts

---

# **9. Benefits of using Hooks**

* Class ki zarurat nahi
* Reusable logic
* Clean, small components
* Better state management
* Easy lifecycle handling

---

# **10. Rules of React Hooks**

* Hooks only **top-level** me call karo
* Hooks **loops, conditions** ke andar nahi
* Hooks only **React components** ya custom hooks me call karo

Example:

```jsx
function App() {
  const [count, setCount] = useState(0); // ✔ top-level
}
```

---


