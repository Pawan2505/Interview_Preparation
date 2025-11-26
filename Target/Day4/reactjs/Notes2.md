
---

# **11. Difference between useEffect and useLayoutEffect**

### ✔ useEffect

* Runs **after** DOM paint
* Non-blocking
* Used for: API calls, subscriptions, timers

### ✔ useLayoutEffect

* Runs **before** DOM paint
* Blocking (layout thrashing risk)
* Used for: measuring DOM size, scroll position

### ⭐ Example:

```jsx
useEffect(() => console.log("UE after paint"));

useLayoutEffect(() => console.log("ULE before paint"));
```

---

# **12. Purpose of callback form of setState()**

Jab next state **previous state** par depend kare, tab callback use hota hai.

### Example:

```jsx
setCount(prev => prev + 1);
```

### ✔ Why?

React state updates **batch** karta hai — isliye direct value unreliable ho sakti hai.

---

# **13. What does the dependency array of useEffect affect?**

* Dependency array batata hai **kab effect run hoga**.

### Options:

* `[]` → sirf once
* `[count]` → jab count change ho
* No array → har render me run

### Example:

```jsx
useEffect(() => {
  console.log("Runs when name changes");
}, [name]);
```

---

# **14. What is useRef and when to use it?**

`useRef` ek mutable box jaisa hota hai jo re-render nahi karta.

### Use Cases:

* Access DOM element
* Store previous values
* Store intervals or timers

### Example:

```jsx
const inputRef = useRef();
<input ref={inputRef} />
```

---

# **15. What is useCallback and when to use it?**

Function ko memoize karta hai taaki har render me **new function** na bane.

### Use Cases:

* Child component memoization
* Prevent unnecessary re-renders

### Example:

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

---

# **16. What is useMemo and when to use it?**

Expensive calculations ko memoize karta hai.

### Use Cases:

* Heavy loops
* Expensive calculations
* Avoid re-calculation on every render

### Example:

```jsx
const total = useMemo(() => sum(bigList), [bigList]);
```

---

# **17. What is useReducer and when to use it?**

Complex state logic ko manage karne ke liye use hota hai.

### Best for:

* Multiple related state updates
* State transitions (like Redux)

### Example:

```jsx
function reducer(state, action) {
  switch(action.type){
    case "INC": return state + 1;
  }
}

const [count, dispatch] = useReducer(reducer, 0);
```

---

# **18. What is useId and when to use it?**

Unique IDs generate karta hai, server-side rendering friendly.

### Example:

```jsx
const id = useId();
<label htmlFor={id}>Name</label>
<input id={id} />
```

---

# **19. What is re-rendering in React?**

Component ka **function dobara execute hona** = re-render.

### Re-render kab hota hai?

* State change
* Props change
* Context change
* Parent re-render

---

# **20. What are React Fragments used for?**

Fragments multiple elements ko **wrapper div ke bina** return karne ke liye use hote.

### Example:

```jsx
<>
  <h1>Title</h1>
  <p>Text</p>
</>
```

---

