## 📝 **JavaScript Event Loop – Interview Cheatsheet**

### **1. What is the Event Loop?**

Event Loop ek **JavaScript ka mechanism** hai jo
**synchronous aur asynchronous code ko handle** karta hai.

JavaScript **single-threaded** hoti hai — ek time me ek hi kaam karti hai.
Lekin async kaam (jaise API calls, setTimeout) ko **non-blocking** banane ke liye
Event Loop ka use hota hai.

---

### **2. Kaise kaam karta hai**

JavaScript me do main concepts hote hain:

1. **Call Stack** → Jo code abhi execute ho raha hai
2. **Queues**:

   * **Microtask Queue** → Promises, MutationObserver
   * **Callback / Macrotask Queue** → setTimeout, setInterval, DOM events

Event Loop ka kaam hai:

1. Call Stack empty hai ya nahi check karna
2. Pehle **Microtask Queue** ke tasks run karna
3. Phir **Macrotask Queue** ke tasks run karna

---

### **3. Diagram**

```
      ┌─────────────────────────┐
      │      Call Stack          │
      └───────────▲─────────────┘
                  │
                  │
      ┌───────────┴─────────────┐
      │     Event Loop           │
      └───────────▲─────────────┘
                  │
       ┌──────────┴─────────┐
       │  Microtask Queue   │ (Promises first)
       │  Macrotask Queue   │ (Timers, Events)
       └────────────────────┘
```

---

### **4. Example**

```js
console.log('A');

setTimeout(() => console.log('B'), 0);

Promise.resolve().then(() => console.log('C'));

console.log('D');
```

**Step-by-step execution:**

1. `'A'` → direct call stack → output **A**
2. `setTimeout` → callback queue me (macrotask)
3. `Promise.resolve` → microtask queue me
4. `'D'` → call stack → output **D**
5. Call stack empty → **Microtask Queue run** → output **C**
6. Microtask khali → Macrotask run → output **B**

**Output:**

```
A
D
C
B
```

---

### **5. Key Points for Interview**

* Pehle **microtasks** run hote hain, phir **macrotasks**
* Promises ka callback **setTimeout** se pehle execute hota hai
* Event Loop **non-blocking async behaviour** ka core part hai
* JavaScript ka async magic isi par depend karta hai

---

### **6. Common Interview Traps**

* Sochna ki `setTimeout(fn, 0)` turant chalega — nahi, wo queue me jata hai
* Promise callbacks ko normal async task samajhna — wo **microtasks** hote hain
* Event Loop ka execution order confuse karna

---

### **7. Interview Question Example**

**Q:** Agar JS single-threaded hai to async kaam kaise hota hai?
**A:** JS ka main thread sirf ek kaam karta hai, lekin browser/Node.js ke background me APIs kaam karti hain.
Jab async kaam complete hota hai to Event Loop ke through callback/microtask queue me push hota hai.
Phir call stack empty hone par wo execute hota hai.

---

💡 **Tip for Interview:**
Real-life analogy:
"Event Loop ek waiter ki tarah hai — pehle kitchen (call stack) ka kaam khatam karta hai,
phir order list (microtask queue) me pehle waale orders serve karta hai,
uske baad normal orders (macrotask queue) serve karta hai."

---

