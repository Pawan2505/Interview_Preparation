
---

# **1. Difference between var, let, and const**

### **Simple Answer:**

* **var** – function scoped, can be redeclared, hoisted.
* **let** – block scoped, cannot be redeclared, hoisted (but in TDZ).
* **const** – block scoped, value cannot be changed (for primitive).

### **Example:**

```js
var a = 10;
let b = 20;
const c = 30;

b = 25;   // allowed
// c = 40; // not allowed
```

---

# **2. What is Hoisting and how does it work?**

### **Simple Answer:**

Hoisting means JavaScript moves **variable and function declarations** to the top of their scope **before execution**.

### **Example:**

```js
console.log(a); // undefined
var a = 10;
```

Because `var a` is hoisted, but value is not.

---

# **3. Explain Event Loop & Call Stack**

### **Simple Answer:**

* **Call Stack**: JS runs one function at a time (single-threaded).
* **Event Loop**: It sends asynchronous tasks (like setTimeout) to queue and executes them when stack is free.

### **Example:**

```js
console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");
```

Output: A → C → B
(B waits in queue)

---

# **4. What are Promises and async/await?**

### **Simple Answer:**

* **Promise** handles asynchronous operations.
* **async/await** provides a cleaner way to write promise code.

### **Example:**

```js
let p = new Promise(resolve => resolve("Done"));

async function demo() {
  let result = await p;
  console.log(result); // Done
}
demo();
```

---

# **5. What is Closure?**

### **Simple Answer:**

Closure means **a function remembers variables from its outer function** even after the outer function ends.

### **Example (Real Life – counter):**

```js
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  }
}

let c = counter();
c(); // 1
c(); // 2
```

---

# **6. Difference between == vs ===**

### **Simple Answer:**

* **==** compares values only (does type conversion).
* **===** compares value + type (strict).

### **Example:**

```js
"5" == 5  // true
"5" === 5 // false
```

---

# **7. Explain Higher Order Functions**

A function that **takes another function as argument** or **returns a function**.

### **Example:**

```js
function greet(name) {
  return "Hello " + name;
}

function callFunction(fn) {
  console.log(fn("Pawan"));
}

callFunction(greet);
```

---

# **8. Difference between map, filter, reduce**

| Method     | Purpose                                    |
| ---------- | ------------------------------------------ |
| **map**    | returns new array with transformed values  |
| **filter** | returns new array with only matched values |
| **reduce** | reduces array to single value              |

### **Example:**

```js
let arr = [1,2,3,4];

arr.map(x => x * 2);      // [2,4,6,8]
arr.filter(x => x > 2);   // [3,4]
arr.reduce((a,b)=>a+b);   // 10
```

---

# **9. What are Arrow Functions?**

### **Simple Answer:**

Shorter syntax for functions, **do not have their own this**, cannot use as constructor.

### **Example:**

```js
const add = (a,b) => a + b;
console.log(add(3,4));
```

---

# **10. What is Prototype & Inheritance?**

### **Simple Answer:**

Every JavaScript object has a hidden property `__proto__` that points to another object → prototype.
This is used for inheritance.

### **Example:**

```js
let obj = { a: 10 };
let child = Object.create(obj);

console.log(child.a); // 10 (inherited)
```

---

# **11. What is Debouncing & Throttling?**

### **Simple Answer:**

* **Debouncing**: Runs function **after user stops typing/clicking** for some time.
* **Throttling**: Runs function **once in a fixed time**.

### **Example (Debounce):**

```js
let timeout;
function search() {
  clearTimeout(timeout);
  timeout = setTimeout(() => console.log("Searching..."), 300);
}
```

---

# **12. How does JavaScript handle Memory Management?**

### **Simple Answer:**

JS uses **Garbage Collection** → it automatically removes variables that are no longer reachable.

### **Example:**

```js
let obj = {name: "Pawan"};
obj = null; // memory is free
```

---

# **13. What are Pure Functions?**

### **Simple Answer:**

A function that:

* gives same output for same input
* does not modify outside data

### **Example:**

```js
function add(a,b){
  return a + b;
}
```

---

# **14. Explain Event Bubbling & Capturing**

### **Simple Answer:**

* **Bubbling**: event goes from **child → parent**
* **Capturing**: event goes from **parent → child** (useCapture = true)

### **Example:**

```js
div.addEventListener("click", () => console.log("Parent"));
btn.addEventListener("click", () => console.log("Child"));
```

If you click button → Child → Parent (bubbling)

---

# **15. Difference between synchronous & asynchronous code**

### **Simple Answer:**

* **Synchronous**: One task at a time, next waits.
* **Asynchronous**: Tasks don’t block; run in background.

### **Example:**

```js
console.log("A");
setTimeout(()=>console.log("B"),1000);
console.log("C");
```

Output: A → C → B

---


