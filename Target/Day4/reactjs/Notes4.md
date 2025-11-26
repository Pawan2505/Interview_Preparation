
---

# **31. What is code splitting in a React application?**

Code splitting ka matlab hai app ko **small bundles** me todna, taaki heavy code ek baar me load na ho.

### Benefit:

* Faster load time
* Better performance

### Example (dynamic import):

```jsx
const About = React.lazy(() => import("./About"));
```

---

# **32. How to optimize React context to reduce re-renders?**

### Techniques:

1. **Split context** into small contexts
2. Wrap value in **useMemo**
3. Use **selectors** (like `use-context-selector`)
4. Move heavy state to reducers

### Example:

```jsx
const value = useMemo(() => ({ user }), [user]);
```

---

# **33. What are higher-order components (HOC) in React?**

HOC ek function hota hai jo component ko input lekar **new enhanced component** return karta hai.

### Example:

```jsx
function withLogger(Component) {
  return function(props) {
    console.log("Rendered");
    return <Component {...props} />;
  };
}
```

---

# **34. What is the Flux pattern and what are its benefits?**

Flux = **unidirectional data flow architecture** created by Facebook.

### Core parts:

* Action
* Dispatcher
* Store
* View (React)

### Benefits:

* Predictable state
* Easier debugging
* Centralized updates

---

# **35. Explain one-way data flow of React and its benefits**

React me data **parent → child** direction me flow karta hai (one-way).

### Benefits:

* Predictable UI
* Easy debugging
* No unexpected changes
* Component isolation

Example:

```jsx
<Child name="Pawan" />
```

---

# **36. How do you handle asynchronous data loading in React applications?**

### Methods:

* `useEffect + fetch`
* `async/await`
* Error handling
* Loading state
* React Query (best solution)

### Example:

```jsx
useEffect(() => {
  async function load() {
    const res = await fetch("/api");
    setData(await res.json());
  }
  load();
}, []);
```

---

# **37. Explain server-side rendering (SSR) and its benefits?**

SSR me HTML server par generate hota hai, client ko **ready HTML** milta hai.

Used in: **Next.js**

### Benefits:

* Faster first load
* SEO friendly
* Good for static content

---

# **38. Explain static generation and its benefits**

Static generation me pages **build time** par generate hote hain (Next.js SSG).

### Benefits:

* Super fast (CDN)
* No server load
* Best for blogs, docs, landing pages

---

# **39. Presentational vs Container components**

### ✔ Presentational Components:

* UI banate hain
* No logic
* Props accept karte

### ✔ Container Components:

* Logic handle karte
* Data fetch & state manage
* Presentational components ko data pass karte

### Example:

```jsx
function UserListUI({ users }) {
  return <ul>{users.map(u => <li>{u}</li>)}</ul>;
}
```

---

# **40. Common pitfalls when doing data fetching in React**

* useEffect me **missing dependencies**
* Infinite loops
* Cleanup na karna
* Race conditions
* Loading & error state handle na karna
* Direct fetch inside render
* stale data issues

### Example (infinite loop):

```jsx
useEffect(() => {
  fetchData();
}, [data]); // ❌ dependency wrong
```

---


