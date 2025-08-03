## 🧠 **JavaScript ES6+ Interview Quick Revision**

---

### **1. Variable Declarations**

| Keyword   | Scope    | Redeclare? | Reassign?                       | Hoisting                 |
| --------- | -------- | ---------- | ------------------------------- | ------------------------ |
| **var**   | Function | ✅          | ✅                               | Yes (undefined)          |
| **let**   | Block    | ❌          | ✅                               | TDZ (Temporal Dead Zone) |
| **const** | Block    | ❌          | ❌ (value change for primitives) | TDZ                      |

💡 **Tip:** `const` means reference can’t change, object properties still mutable.

---

### **2. Template Literals**

```js
let name = "Pawan";
console.log(`Hello ${name}!`);
```

✅ Multiline strings
✅ String interpolation

---

### **3. Arrow Functions**

```js
const sum = (a, b) => a + b;
```

* Lexical `this` → doesn’t rebind
* ❌ Can’t use as constructor
* ❌ No `arguments` object

---

### **4. Default Parameters**

```js
function greet(name = "Guest") {
  console.log(`Hi ${name}`);
}
```

---

### **5. Destructuring**

```js
const {name, age} = {name: "Pawan", age: 25};
const [a, b] = [1, 2];
```

✅ Works with arrays, objects, nested structures

---

### **6. Spread / Rest Operator**

```js
// Spread
let arr2 = [...[1, 2], 3]; // [1, 2, 3]
// Rest
function sum(...nums) { return nums.reduce((a, b) => a + b); }
```

---

### **7. Modules**

```js
// export
export const a = 10;
// import
import {a} from './file.js';
```

✅ Named export
✅ Default export

---

### **8. Classes**

```js
class Person {
  constructor(name) { this.name = name; }
  greet() { console.log(`Hi ${this.name}`); }
}
```

✅ Syntactic sugar over prototypes
✅ Supports inheritance via `extends`

---

### **9. Promises**

```js
fetch(url)
  .then(res => res.json())
  .catch(err => console.error(err))
  .finally(() => console.log("Done"));
```

✅ States: pending → fulfilled/rejected
✅ `Promise.all`, `Promise.race`, `Promise.any`, `Promise.allSettled`

---

### **10. Async / Await**

```js
async function getData() {
  try {
    let res = await fetch(url);
    return await res.json();
  } catch(e) { console.error(e); }
}
```

✅ Syntactic sugar for promises
✅ Use `try/catch` for errors

---

### **11. Event Loop**

Execution order:

1. Call Stack executes sync code
2. Microtask Queue (Promises)
3. Macrotask Queue (setTimeout, events)

```js
console.log('A');
setTimeout(() => console.log('B'));
Promise.resolve().then(() => console.log('C'));
console.log('D');
// Output: A D C B
```

---

### **12. `this` Keyword**

| Context               | Value of `this` |
| --------------------- | --------------- |
| Global (browser)      | window          |
| Method call           | That object     |
| Function (non-strict) | window          |
| Function (strict)     | undefined       |
| Arrow function        | Lexical `this`  |
| Constructor           | New object      |

---

### **13. Prototype**

* Every object has `__proto__`
* Functions have `prototype` property
* Prototype chain → object → parent → `Object.prototype` → null

---

### **14. Array Methods**

* **map** → transform array → returns new array
* **filter** → condition → returns filtered array
* **reduce** → accumulate values
* **find/findIndex** → first match / index
* **some/every** → boolean check
* **includes** → contains check
* **splice/slice** → remove/clone

---

### **15. Object Methods**

* `Object.keys/values/entries`
* `Object.assign` / spread `{...obj}`
* `hasOwnProperty`

---

### **16. Error Handling**

```js
try {
  throw new Error("Oops");
} catch (err) {
  console.error(err.message);
} finally {
  console.log("Always runs");
}
```

✅ Custom error classes possible
✅ Async error → `.catch()` or `try/catch` with await

---

### **17. Closures**

```js
function outer() {
  let count = 0;
  return function() { count++; return count; }
}
const counter = outer();
counter(); // 1
counter(); // 2
```

✅ Function + remembered scope
✅ Data privacy & state management

---

### **18. Bonus ES6+ Features**

* Optional chaining `obj?.prop`
* Nullish coalescing `x ?? y`
* Logical assignment `a ||= b`
* Dynamic import `import()`
* BigInt for large integers

---

📌 **Quick Interview Tip:**

* Practice **explaining with examples**, not just definitions
* Use **short real-life analogies** (courier for Promise, locker for Closure, family tree for Prototype)
* Interview me jab answer do to **flow maintain karo → definition → example → use case → trap**

---

