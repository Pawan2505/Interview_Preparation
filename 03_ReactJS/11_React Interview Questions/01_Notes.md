## **📌 React Interview Questions & Answers**

---

### **1️⃣ Difference between Functional and Class Components**

**Answer:**
"Functional components ek simple JS function hote hain jo props accept karke JSX return karte hain.
Class components me lifecycle methods aur `this` hota hai, lekin ab Hooks ke baad functional components hi preferred hote hain."

Example:

```jsx
function Hello() {
  return <h1>Hello World</h1>;
}
```

---

### **2️⃣ What are Props and State in React?**

**Answer:**

* **Props** → Parent se child me data pass karne ke liye use hota hai, read-only hote hain.
* **State** → Component ke andar ka data jo change ho sakta hai, component ke re-render hone ka reason banta hai.

---

### **3️⃣ Controlled vs Uncontrolled Components**

**Answer:**

* **Controlled** → Form elements ka value React state se control hota hai.
* **Uncontrolled** → Form elements ka value DOM ke control me hota hai (`ref` use karke access karte hain).

---

### **4️⃣ What is Prop Drilling? How to avoid it?**

**Answer:**
"Prop drilling tab hota hai jab data multiple nested components ke through pass hota hai unnecessarily.
Avoid karne ke liye `useContext` hook use karte hain."

---

### **5️⃣ What are React Hooks?**

**Answer:**
"Hooks aise functions hain jo functional components me state aur lifecycle features laate hain.
Example: `useState`, `useEffect`, `useContext`, `useReducer`, `useMemo`, `useCallback`."

---

### **6️⃣ Explain `useState` and `useEffect` with examples**

**Answer:**

* **useState** → Local state manage karta hai.

```jsx
const [count, setCount] = useState(0);
```

* **useEffect** → Side effects handle karta hai (API calls, timers, subscriptions).

```jsx
useEffect(() => {
  console.log("Mounted");
}, []);
```

---

### **7️⃣ What is `useContext`?**

**Answer:**
"Global data share karne ke liye use hota hai without prop drilling.
Example: Theme, user data."

---

### **8️⃣ What is `useReducer` and when to use it?**

**Answer:**
"Complex state logic ya multiple related states manage karne ke liye use hota hai.
Redux ka lightweight alternative hai."

---

### **9️⃣ What is `useMemo` vs `useCallback`?**

**Answer:**

* **useMemo** → Expensive value cache karta hai.
* **useCallback** → Function ko cache karta hai taaki unnecessary re-creation na ho.

---

### **🔟 Conditional Rendering in React**

**Answer:**
"Condition ke basis par different UI show karna.
Example:

````jsx
{isLoggedIn ? <Dashboard /> : <Login />}
```"

---

### **1️⃣1️⃣ List Rendering in React**
**Answer:**  
"Array ke data ko map karke elements banana.  
Example:  
```jsx
users.map(user => <li key={user.id}>{user.name}</li>)
```"

---

### **1️⃣2️⃣ Making API Calls in React**
**Answer:**  
"API calls mostly `useEffect` me ki jati hain using `fetch` ya `axios`."  

Example:  
```jsx
useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(data => setData(data));
}, []);
````

---

### **1️⃣3️⃣ What is Lifting State Up?**

**Answer:**
"Jab do ya zyada child components ko same state chahiye, to us state ko parent me le aate hain taaki sab use kar sakein."

---

### **1️⃣4️⃣ What is the `key` prop in list rendering?**

**Answer:**
"Unique identifier hota hai jo React ko batata hai kaunsa element change hua.
Index ko avoid karke unique IDs ka use karna best hai."

---

### **1️⃣5️⃣ React Lifecycle Methods (Class Components)**

**Answer:**

* Mounting → `componentDidMount`
* Updating → `componentDidUpdate`
* Unmounting → `componentWillUnmount`

---

