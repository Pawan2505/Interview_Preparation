## 📝 **ReactJS Components – Interview Cheatsheet**

---

### **1. What is a Component?**

* **Definition:**
  React me component ek **reusable building block** hota hai jo UI ka ek part represent karta hai.
* **Types:**

  1. **Functional Component** → Simple JS function
  2. **Class Component** → ES6 class (old approach)

💡 Modern React me **functional components + hooks** prefer kiye jate hain.

---

### **2. Functional Component**

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

* Simple function hota hai
* Props ko parameter ke through receive karta hai
* Hooks ka use karke state aur lifecycle handle karte hain

---

### **3. Class Component**

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

* `React.Component` se extend hota hai
* Props ko `this.props` se access karte hain
* State maintain karne ke liye `this.state` use hota hai

---

### **4. Props (Properties)**

* **Read-only data** jo parent component se child component ko pass hota hai
* Child me modify **nahi** kar sakte

```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}
<Greeting name="Pawan" />
```

---

### **5. State**

* Component ka **internal data**
* Change hone par UI automatically re-render hota hai
* Functional components me **useState hook** use hota hai

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}
```

---

### **6. Lifecycle Methods (Class Components)**

| Phase      | Methods                                |
| ---------- | -------------------------------------- |
| Mounting   | `constructor()`, `componentDidMount()` |
| Updating   | `componentDidUpdate()`                 |
| Unmounting | `componentWillUnmount()`               |

💡 Functional components me **useEffect hook** se lifecycle handle hota hai.

---

### **7. useEffect Hook (Functional Lifecycle)**

```jsx
import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Component mounted");
    return () => console.log("Component unmounted");
  }, []);
}
```

* 1st parameter → function (effect)
* 2nd parameter → dependency array (`[]` for run-once)

---

### **8. Component Composition**

* Components ko ek dusre ke andar use karna

```jsx
function App() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
}
```

---

### **9. Interview Traps**

* Props ko mutate karne ki koshish → ❌
* State update async hota hai, turant change na ho sakta
* `useEffect` ka dependency array galat dena → infinite re-renders

---

### **10. Interview Example**

**Q:** Functional vs Class component difference?
**A:**

* Functional → Simple function, hooks use karke state & lifecycle handle karta hai
* Class → ES6 class, `this.state` aur lifecycle methods use karta hai
* Modern React me functional preferred hai kyunki lightweight aur easy hota hai

---

💡 **Tip:**
Interview me answer do:

> "React me component ek reusable UI block hai jo props se data receive karta hai aur apna internal state maintain kar sakta hai. Modern React me mostly functional components use hote hain with hooks like `useState`, `useEffect`."

---

