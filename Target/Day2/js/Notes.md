
---

# **Level 1 — Basics**

---

## **1. Is JavaScript single-threaded? Example?**

Haan JavaScript **single-threaded** hota hai — yani ek time pe sirf **ek hi call stack** run hota hai.

**Example:**

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

console.log("C");
```

**Output:**
A
C
B
(sirf ek thread, par async work Web APIs me hota hai)

---

## **2. JavaScript Engine ke main components + Example**

JS engine (like V8) ke parts:

* **Heap** – memory
* **Call Stack**
* **Parser**
* **Garbage Collector**
* **JIT Compiler**

**Example (Call Stack demo):**

```js
function a() {
  b();
}
function b() {
  console.log("Inside b");
}
a();
```

Call Stack: `a → b → console.log`

---

## **3. What is the Event Loop? Example**

Event loop **task queues** ko check karta hai aur call stack empty hone par async tasks execute karta hai.

**Example:**

```js
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");
```

**Output:**
1
4
3
2

(Promise → microtask, Timeout → macrotask)

---

## **4. JavaScript Data Types + Example**

### **Primitive:**

string, number, boolean, null, undefined, bigint, symbol

### **Non-Primitive:**

object

**Example:**

```js
let a = "hello";        // string
let b = 10;             // number
let c = { name: "A" };  // object
```

---

## **5. Callback function & Callback Hell + Example**

**Callback:** Function passed inside another function.

**Example:**

```js
function greet(name, callback) {
  callback(name);
}

greet("Pawan", (name) => console.log("Hello", name));
```

**Callback Hell Example:**

```js
doA(() => {
  doB(() => {
    doC(() => {
      console.log("Done");
    });
  });
});
```

---

## **6. What is a Promise? Promise chaining Example**

**Promise** async work handle karta hai without callback hell.

**Example:**

```js
function api() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data"), 1000);
  });
}

api()
  .then(res => res + " processed")
  .then(final => console.log(final));
```

---

## **7. Explain async/await + Example**

Async/await code ko readable banata hai.

**Example:**

```js
async function getData() {
  const res = await fetch("https://api.com");
  const data = await res.json();
  console.log(data);
}
```

---

## **8. Ways to create object + Example**

### **1. Object literal**

```js
const user = { name: "Pawan" };
```

### **2. Constructor**

```js
function User(name) {
  this.name = name;
}
```

### **3. Class**

```js
class User { 
  constructor(n) { this.name = n; }
}
```

### **4. Object.create()**

```js
const obj = Object.create({ a: 10 });
```

---

## **9. Rest vs Spread Example**

### **Rest**

```js
function sum(...nums) {
  console.log(nums);
}
sum(1,2,3);
```

### **Spread**

```js
const arr = [1,2,3];
const newArr = [...arr];
```

---

## **10. Higher-order function + Example**

Jo function return kare ya function as argument lega.

**Example:**

```js
function hof(callback) {
  callback();
}
```

Or

```js
const doubled = [1,2,3].map(x => x * 2);
```

---

# ⚙️ **Level 2 — Intermediate**

---

## **1. Prototype Chain + Object.create() Example**

**Prototype chain:** Object apne parent ke properties access kar sakta hai.

**Example:**

```js
const parent = { greet() { console.log("Hello"); } };

const child = Object.create(parent);

child.greet();  // parent method use hua
```

---

## **2. call(), apply(), bind() Example**

```js
function show(city) {
  console.log(this.name, city);
}

const user = { name: "Pawan" };

show.call(user, "Ahmedabad");      // arguments comma
show.apply(user, ["Ahmedabad"]);   // array
const fn = show.bind(user);
fn("Surat");                       // saved this
```

---

## **3. Arrow Functions Example**

Arrow functions ka apna `this` nahi hota.

```js
const obj = {
  name: "A",
  fun: () => console.log(this.name) // undefined
};
```

---

## **4. Currying Example**

```js
const add = a => b => c => a + b + c;

console.log(add(1)(2)(3));  // 6
```

---

## **5. ES6 Features Example**

* let/const
* spread/rest
* arrow functions
* classes
* promises
* template literals
* destructuring

**Example:**

```js
const [a,b] = [10,20];
const obj = { ...{name:"Pawan"} };
```

---

# **Level 3 — Expert**

---

## **1. Execution Context + Scope Chain + Call Stack Example**

```js
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    console.log(a, b);
  }
  inner();
}

outer();
```

* **Execution context** create hota hai
* **Scope chain** inner → outer → global
* **Call stack:** `outer → inner`

---

## **2. Execution order: callback vs promise vs timeout Example**

```js
console.log("A");

setTimeout(() => console.log("B"));
Promise.resolve().then(() => console.log("C"));

console.log("D");
```

**Output:** A, D, C, B

---

## **3. Factory vs Generator Function Example**

### **Factory**

```js
function createUser(name) {
  return { name };
}
```

### **Generator**

```js
function* gen() {
  yield 1;
  yield 2;
}
```

---

## **4. Shallow vs Deep Clone Example**

### **Shallow clone**

```js
const newObj = { ...oldObj };
```

### **Deep clone**

```js
const deep = JSON.parse(JSON.stringify(oldObj));
```

Or modern:

```js
const deep = structuredClone(obj);
```

---

## **5. Object.freeze vs Object.seal Example**

```js
const obj = { a:1, b:2 };
Object.freeze(obj);
obj.a = 100;   // change nahi hoga
```

```js
const obj2 = { a:1 };
Object.seal(obj2);
obj2.a = 10;   // allowed
delete obj2.a; // not allowed
```

---

## **6. Event Delegation Example**

```js
document.querySelector("#parent").addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    console.log("Button clicked");
  }
});
```

---

## **7. Server-Sent Events (SSE) Example**

```js
const evt = new EventSource("/stream");

evt.onmessage = (e) => {
  console.log(e.data);
};
```

---

## **8. Web Worker vs Service Worker Example**

### **Web Worker**

```js
const worker = new Worker("worker.js");
worker.postMessage("start");
```

### **Service Worker**

```js
navigator.serviceWorker.register('/sw.js');
```

---

## **9. Compare two JSON objects Example**

### Simple:

```js
JSON.stringify(obj1) === JSON.stringify(obj2);
```

### Deep compare:

```js
function deepEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a !== "object" || a == null) return a === b;

  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;

  for (let k of keys) {
    if (!deepEqual(a[k], b[k])) return false;
  }
  return true;
}
```

---
