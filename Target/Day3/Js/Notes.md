
---

# 🌟 **JavaScript Interview — Core Concepts**

---

# **1. Difference between var, let, and const**

### 👉 Answer:

* **var** → function-scoped, redeclare ho sakta hai, hoisting ke sath value = undefined.
* **let** → block-scoped, redeclare nahi ho sakta.
* **const** → block-scoped + value change nahi kar sakte (but object ke andar ke values change ho sakte).

### Example:

```js
var a = 10;
let b = 20;
const c = 30;
```

---

# **2. What is hoisting & how it works?**

### 👉 Answer:

Hoisting matlab JavaScript code ko run karne se pehle
**variables aur functions ko upar le aata hai** memory me.

* **var** → hoist hota hai with value = undefined
* **let/const** → hoist hote hain but **temporal dead zone** me rehte hain
* **function declarations** → fully hoist ho jate hain

### Example:

```js
console.log(a); // undefined
var a = 10;
```

---

# **3. What is scope & how closure works?**

### 👉 Answer:

* **Scope** matlab variable kaha se access ho sakta hai.
* **Closure** matlab ek inner function apne outer function ke variables ko yaad rakhta hai
  even after outer function return ho jaye.

### Example:

```js
function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}
const fn = outer();
fn(); // prints 10
```

---

# **4. Difference between == and ===**

### 👉 Answer:

* **==** → only value compare, type convert karta hai
* **===** → value + type dono compare, no conversion

### Example:

```js
0 == "0"   // true
0 === "0"  // false
```

---

# **5. How does this behave in different contexts?**

### 👉 Answer:

* **Global** → window object
* **Object method** → jis object me method call hua
* **Event listener** → jis element par event laga hai
* **Arrow function** → apna this nahi hota, parent se leta hai
* **Class** → instance ko point karta hai

---

# 🌟 **Async & Event Loop**

---

# **6. How does the event loop work?**

### 👉 Answer:

JavaScript single-threaded hai.
Event loop ka kaam hota hai:

1. Call stack empty hone ka wait karna
2. Fir **microtasks** run karna
3. Fir **macrotasks** run karna

This helps async code run smoothly.

---

# **7. Difference between microtasks & macrotasks**

### 👉 Answer:

| Microtasks               | Macrotasks              |
| ------------------------ | ----------------------- |
| High priority            | Lower priority          |
| Promises, queueMicrotask | setTimeout, setInterval |
| Pehle run hote hain      | Baad me                 |

---

# **8. Difference between async/await & Promises**

### 👉 Answer:

* **Promises** → then/catch syntax
* **async/await** → cleaner, readable, looks like normal code
* async/await internally promise hi use karta hai

### Example:

```js
const data = await fetchData();
```

---

# **9. fetch() vs XMLHttpRequest()**

### 👉 Answer:

* **fetch()** modern, promise-based, cleaner
* **XHR** old style, callback-based, complicated
* fetch by default **doesn't reject** on HTTP errors (only network errors)

---

# **10. Callbacks & what Promises solved**

### 👉 Answer:

* **Callback**: function passed inside another function
* Problem → **callback hell**, nested code, hard to read
* **Promises** → chainable, cleaner, error handling better

---

# 🌟 **Objects, Functions & Structures**

---

# **11. What is destructuring & why useful?**

### 👉 Answer:

Object ya array se values ko easily extract karna.

### Example:

```js
const { name, age } = user;
```

Useful kyunki code clean ho jata hai.

---

# **12. Higher-order functions?**

### 👉 Answer:

Wo functions jo:

* Dusra function **accept** karte hain
* Ya **return** karte hain

Example: `map`, `filter`, `reduce`.

---

# **13. Prototypal inheritance**

### 👉 Answer:

JavaScript me objects dusre objects se properties inherit karte hain using **prototype chain**.

### Example:

```js
child.__proto__ = parent;
```

---

# **14. What is event delegation? Why useful?**

### 👉 Answer:

Instead of adding event to every child,
hum event **parent pe** lagate hain and event bubbling se child pe detect kar lete hain.

Useful because:

* Performance better
* Dynamic elements pe event automatically kaam karega

### Example:

```js
document.body.addEventListener("click", (e) => {
  if (e.target.matches(".btn")) console.log("Button clicked");
});
```

---

# **15. Shallow copy vs Deep copy**

### 👉 Answer:

* **Shallow copy** → sirf upper-level copy hoti hai
* **Deep copy** → poora object nested values ke sath duplicate hota hai

### Example:

```js
let obj2 = {...obj1};   // shallow
let deep = JSON.parse(JSON.stringify(obj1)); // deep
```

---

