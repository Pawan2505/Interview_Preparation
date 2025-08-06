## **📌 JavaScript Interview Questions & Answers**

---

### **1️⃣ Difference between `var`, `let`, and `const`**

**Answer:**
"`var` → Function-scoped hota hai, hoisted hota hai, redeclare + reassign dono ho sakta hai.
`let` → Block-scoped hota hai, hoisting hoti hai but temporal dead zone me hota hai, redeclare nahi but reassign ho sakta hai.
`const` → Block-scoped hota hai, redeclare + reassign dono nahi ho sakta (object properties change ho sakti hai)."

Example:

```js
var a = 10;
let b = 20;
const c = 30;
```

---

### **2️⃣ What is hoisting in JavaScript?**

**Answer:**
"Hoisting ka matlab hai ki JS code run hone se pehle variable aur function declarations memory me upar le jaye jate hain.
`var` variables ka default value `undefined` hota hai execution ke start me, jabki `let` aur `const` temporal dead zone me hote hain until assigned."

Example:

```js
console.log(x); // undefined
var x = 5;
```

---

### **3️⃣ Explain closures with an example**

**Answer:**
"Closure ek function ke andar dusre function ka access hota hai outer scope ke variables ka, even after outer function execute ho chuka ho.
Ye data privacy ke liye kaam aata hai."

Example:

```js
function counter() {
  let count = 0;
  return function() {
    count++;
    return count;
  }
}
const inc = counter();
console.log(inc()); // 1
console.log(inc()); // 2
```

---

### **4️⃣ Difference between `==` and `===`**

**Answer:**
"`==` loose comparison karta hai (type conversion ke saath).
`===` strict comparison karta hai (type + value dono match hone chahiye)."

Example:

```js
'5' == 5   // true
'5' === 5  // false
```

---

### **5️⃣ Event loop and call stack**

**Answer:**
"JavaScript single-threaded hai, lekin asynchronous code ko handle karne ke liye event loop use karta hai.
Call stack me synchronous code run hota hai, async code web APIs me chala jata hai, fir callback queue se event loop ke through wapas call stack me aata hai."

Example:

```js
console.log('Start');
setTimeout(() => console.log('Async'), 0);
console.log('End');
// Output: Start → End → Async
```

---

### **6️⃣ Difference between synchronous and asynchronous code**

**Answer:**
"Synchronous → Code line-by-line execute hota hai, agla step tabhi chalega jab pehla complete hoga.
Asynchronous → Code background me run hota hai, aur baad me callback ya promise se result deta hai."

---

### **7️⃣ Difference between promises and callbacks**

**Answer:**
"Callback ek function hota hai jo dusre function me parameter ke roop me pass hota hai async result handle karne ke liye.
Promises ek object hai jo async operation ka future result represent karta hai, aur readable hota hai (`.then`, `.catch`)."

---

### **8️⃣ Explain `async/await`**

**Answer:**
"`async/await` promise-based syntax hai jo async code ko synchronous jaisa readable banata hai.
`await` sirf async functions ke andar use hota hai."

Example:

```js
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  console.log(data);
}
getData();
```

---

### **9️⃣ What is `this` in JavaScript?**

**Answer:**
"`this` ka value depend karta hai function kaise call kiya gaya hai:

* Normal function me → global object (`window` in browser)
* Object method me → us object
* Arrow function me → lexical scope ka `this` inherit hota hai"

---

### **🔟 Array methods (`map`, `filter`, `reduce`, `forEach`)**

**Answer:**

* **map** → New array banata hai transformed values ke saath
* **filter** → New array banata hai filtered values ke saath
* **reduce** → Single value return karta hai (sum, avg)
* **forEach** → Each element par function run karta hai, kuch return nahi karta

Example:

```js
[1, 2, 3].map(x => x * 2)       // [2, 4, 6]
[1, 2, 3].filter(x => x > 1)    // [2, 3]
[1, 2, 3].reduce((a, b) => a+b) // 6
```

---

### **1️⃣1️⃣ Object methods**

**Answer:**

* `Object.keys(obj)` → Keys ka array
* `Object.values(obj)` → Values ka array
* `Object.entries(obj)` → \[key, value] pairs ka array

---

### **1️⃣2️⃣ Error handling in JavaScript**

**Answer:**
"Error handling ke liye `try...catch` use hota hai, aur custom errors throw karne ke liye `throw` keyword."

Example:

```js
try {
  throw new Error('Something went wrong');
} catch (err) {
  console.log(err.message);
}
```

---
