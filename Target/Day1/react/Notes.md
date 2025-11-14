
---

# **React Interview Notes**

---

# **1. What are Components? Functional vs Class**

React me **component** ek chhota reusable UI part hota hai.
Jaise website ko chhote-chhote boxes me tod diya jaye.

### **Functional Component (Modern & Simple)**

* JavaScript function hota hai
* Hooks use kar sakte hai
* Code clean & easy

### **Class Component (Old way)**

* `class` ke through banta hai
* Lifecycle methods hote hain
* Ab kam use hote hain

### **Example (Interview Friendly):**

```jsx
// Functional Component
function UserCard(props) {
  return <h2>User Name: {props.name}</h2>;
}
```

**Explain in interview:**
“Sir, ye component reuse ho sakta hai. Agar 10 users hain, main same component 10 times use kar sakta hoon.”

---

# **2. What are Hooks? Explain useState and useEffect.**

React hooks functional components ko powerful banate hain.

### 🟦 **useState** – store and update values.

### 🟩 **useEffect** – side effects: API calls, timers, page load logic.

### **Example: Counter + Page Load Message**

```jsx
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component first time loaded");
  }, []);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count = {count}
    </button>
  );
}
```

**Interview line:**
“useEffect render hone ke baad chalti hai, jaise componentDidMount.”

---

# **3. What is Virtual DOM and how does it work?**

Real DOM slow hota hai.
React ek **Virtual DOM** (memory me fast copy) banata hai.

Working:

1. UI change hota hai
2. Virtual DOM update hota hai
3. Old vs new Virtual DOM compare hota hai
4. Real DOM me sirf changed part update hota hai

### **Example:**

“Sir, agar page me 100 elements hain aur sirf 1 button change hota hai, React sirf button update karega… pura page nahi.”

---

# **4. What is Prop Drilling? How to avoid it?**

Jab ek data ko parent → child → grandchild → great-grandchild tak pass karna padta hai, usse **prop drilling** bolte hain.

### **Example:**

* App → A → B → C
  Only **C** needs the value, but A and B ko bhi pass karna padta hai.

### **Avoid using:**

✔ Context API
✔ Redux
✔ useContext

---

# **5. Controlled vs Uncontrolled Components**

Forms me do tarike:

### 🟦 **Controlled Component**

React controls the input value.

```jsx
const [name, setName] = useState("");
<input value={name} onChange={(e)=>setName(e.target.value)} />
```

**Interview line:**
“In controlled components, UI = State.”

### 🟩 **Uncontrolled Component**

Browser controls the input, React `ref` se value leta hai.

```jsx
const inputRef = useRef();
<input ref={inputRef} />
```

---

# **6. What is Context API?**

Prop drilling ko avoid karne ke liye built-in global state system.

### **Example:**

```jsx
const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value="Pawan">
      <Profile />
    </UserContext.Provider>
  );
}
```

**Interview line:**
“Context use karke koi bhi child direct data le sakta hai, bina props pass kiye.”

---

# **7. What is useMemo and useCallback?**

Performance improve karne ke hooks.

### 🟦 **useMemo**

Heavy calculation ko cache karta hai.
Returns a **value**.

### 🟩 **useCallback**

Function ko cache karta hai.
Returns a **function**.

### **Example:**

```jsx
const expensive = useMemo(() => number * 1000, [number]);

const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);
```

**Interview line:**
“useMemo value store karta hai, useCallback function store karta hai.”

---

# **8. What is Reconciliation in React?**

React ka process jisme wo compare karta hai:

**Old Virtual DOM vs New Virtual DOM**

Aur sirf changed parts ko update karta hai.

**Interview line:**
“This process uses the Diffing Algorithm, which makes React fast.”

---

# **9. Difference between State and Props**

| State                              | Props              |
| ---------------------------------- | ------------------ |
| Component ke andar change hota hai | Parent se aata hai |
| Mutable                            | Read-only          |
| useState se update hotta hai       | Parent controls    |

### **Example:**

```jsx
function Welcome(props) {
  return <h2>Hello {props.name}</h2>;
}
```

---

# **10. Why keys are used inside lists?**

React ko identify karna hota hai:

* Kaunsa item add hua
* Kaunsa delete hua
* Kaunsa update hua

Key se React efficiently update karta hai.

### **Example:**

```jsx
{users.map(user => (
  <li key={user.id}>{user.name}</li>
))}
```

**Interview line:**
“Key unique honi chahiye, warna React identify nahi kar paayega.”

---

