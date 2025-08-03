## 📝 **`this` Keyword – Interview Cheatsheet**

### **1. What is `this`?**

* `this` ek **special keyword** hai jo **current execution context** ko refer karta hai.
* Ye kis object ko point karega **ye depend karta hai function call kaise hua**,
  **na ki function kahan likha gaya hai**.

---

### **2. `this` ka value kis par depend karta hai?**

| Situation                           | `this` kya hoga?                        |
| ----------------------------------- | --------------------------------------- |
| **Global Scope (Browser)**          | `window` object                         |
| **Global Scope (Node.js)**          | `{}` (empty object in module scope)     |
| **Inside a Method**                 | Us object jisme method call hua         |
| **Inside a Function (non-strict)**  | `window` (browser)                      |
| **Inside a Function (strict mode)** | `undefined`                             |
| **Inside Event Handler**            | Wo DOM element jisme event laga         |
| **Arrow Function**                  | Parent scope ka `this` (lexical `this`) |
| **Constructor Function / Class**    | New banaya hua object                   |

---

### **3. Examples**

#### **Global Scope (Browser)**

```js
console.log(this); // window
```

#### **Inside an Object Method**

```js
const obj = {
  name: 'Pawan',
  greet() {
    console.log(this.name);
  }
};
obj.greet(); // Pawan
```

#### **Normal Function**

```js
function showThis(){
  console.log(this);
}
showThis(); // window (non-strict), undefined (strict)
```

#### **Arrow Function**

```js
const obj = {
  name: 'Pawan',
  arrowGreet: () => {
    console.log(this.name);
  }
};
obj.arrowGreet(); // undefined (kyunki lexical `this` → global)
```

#### **Constructor Function**

```js
function Person(name){
  this.name = name;
}
const p1 = new Person('Pawan');
console.log(p1.name); // Pawan
```

---

### **4. Diagram – How `this` is Decided**

```
Function Call → Check call type:
  - Method of object? → That object
  - new keyword? → New object created
  - Arrow function? → Parent's this
  - Normal function? → global/undefined
```

---

### **5. Interview Traps**

* Arrow function ka `this` change nahi hota `.bind()` se
* `this` ka value run-time decide hota hai, not compile-time
* Event handlers me arrow function ka `this` DOM element nahi hota
* setTimeout ke andar `this` default global hota hai (browser me `window`)

---

### **6. Fixing `this` Issues**

* `.bind()` → permanently bind `this`

```js
const greet = obj.greet.bind(obj);
greet();
```

* `.call()` & `.apply()` → manually set `this` during function call

```js
greet.call(obj);
```

* Arrow functions for lexical `this` in callbacks

---

### **7. Interview Example**

**Q:** Arrow function ka `this` normal function se kaise alag hai?
**A:** Arrow function apne surrounding (lexical) scope ka `this` use karta hai,
jabki normal function ka `this` depend karta hai ki function kaise call hua.
Arrow function me `this` bind nahi hota.

---

💡 **Tip for Interview:**
Real-life analogy:
"`this` ek pointer ki tarah hai jo hamesha is baat pe depend karta hai ki tum kis tarah se call kar rahe ho,
na ki tumne kaha likha hai. Jaise tum mujhe call karo 'Pawan sir' ya 'Trainer sir',
naam wahi hai par tumhari calling style alag hai."

---

