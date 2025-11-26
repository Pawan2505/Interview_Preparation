
---

# **21. What is forwardRef() in React used for?**

`forwardRef` parent component ko allow karta hai ki wo **ref ko child ke DOM element ko pass kare**.

### Example:

```jsx
const Input = React.forwardRef((props, ref) => {
  return <input ref={ref} />;
});

const inputRef = useRef();
<Input ref={inputRef} />;
```

### ✔ Use Case:

* Focus set karna
* Child DOM ko parent se access karna

---

# **22. How do you reset a component’s state in React?**

### 3 easy ways:

1. **Set the initial state again**

```jsx
setCount(0);
```

2. **Give key to component (remount technique)**

```jsx
<Component key={resetKey} />
```

3. **useReducer (reset action)**

```jsx
dispatch({ type: "RESET" });
```

---

# **23. Why does React recommend against mutating state?**

Because mutation se:

* Re-render trigger nahi hota
* Bugs aur inconsistent UI
* State shared reference ho sakti

### Example (Wrong):

```jsx
state.items.push(1);
```

### Correct:

```jsx
setItems(prev => [...prev, 1]);
```

---

# **24. What are error boundaries in React for?**

Error boundaries **UI crash hone se bachate** hain.

### ✔ They catch:

* Runtime errors in child components
* Render, lifecycle, constructor errors

### Example:

```jsx
class ErrorBoundary extends React.Component {
  componentDidCatch(e) { }
  render() { return this.props.children; }
}
```

---

# **25. How do you test React applications?**

Common tools:

* **Jest** → unit tests
* **React Testing Library** → component behavior test
* **Cypress** → end-to-end testing

### Example (RTL):

```jsx
render(<Button />);
expect(screen.getByText("Click")).toBeInTheDocument();
```

---

# **26. Explain what React hydration is**

Hydration = server-rendered HTML ko React **interactive** banana.

Used in:

* Next.js
* SSR apps

### Example:

Server HTML -> client React attach karta → events work start.

---

# **27. What are React Portals used for?**

UI ko **component tree ke bahar** render karne ke liye.

### Example:

```jsx
ReactDOM.createPortal(
  <Modal />,
  document.getElementById("modal-root")
);
```

Used for:

* Modals
* Popups
* Tooltips

---

# **28. How do you debug React applications?**

* **React DevTools**
* Console logs
* Component profiling
* Breakpoints in Chrome DevTools
* Error boundaries for catching errors

---

# **29. What is React Strict Mode and its benefits?**

Development-only tool that highlights issues
like:

* Unsafe lifecycle methods
* Unexpected side effects
* Duplicate renders
* Deprecated APIs

### Example:

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

---

# **30. How do you localize React applications?**

Through internationalization (i18n) libraries:

Tools:

* **react-intl**
* **i18next**
* **FormatJS**

### Example:

```jsx
<i18n>Welcome</i18n>
```

---

