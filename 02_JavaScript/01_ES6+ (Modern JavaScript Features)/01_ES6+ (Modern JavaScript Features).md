## **1. ES6+ (Modern JavaScript Features)**

### **What it is**

2015 me JavaScript ka ek **bada update** aaya tha — ES6 (ECMAScript 2015) bolte hain.
Is update me JS ko **cleaner, faster aur powerful** banane ke liye bahut saare naye features aaye.
Aage ke versions (ES7, ES8…) me bhi naye features add hue, isliye hum ise **ES6+** bolte hain.

---

### **Key Features to Know (Jo interview me puchte hi puchte hain)**

1. **`let` / `const`**

   * `let` aur `const` **block scope** hote hain (matlab `{}` ke andar limited).
   * `var` **function scope** hota hai aur hoisted hota hai.
   * **const** ka matlab immutable nahi hota — object ke andar ka data change ho sakta hai.

2. **Template Literals**

   * Backtick (\`\`) ka use hota hai.
   * `${}` ke andar variables ya expressions directly likh sakte ho.

   ```js
   let name = "Pawan";
   console.log(`Hello ${name}, kaise ho?`);
   ```

3. **Arrow Functions**

   * Short syntax for functions.
   * **this** lexical hota hai — matlab arrow function apne parent ka `this` use karta hai.
   * Constructor ke liye arrow function kaam nahi karega.

4. **Default Parameters**

   * Function arguments ke default value define kar sakte ho.

   ```js
   function add(a = 0, b = 0) {
     return a + b;
   }
   ```

5. **Destructuring**

   * Object ya array ke andar se values easily nikalna.

   ```js
   const {name, age} = {name: "Pawan", age: 25};
   ```

6. **Spread / Rest Operators (`...`)**

   * **Spread** → Copy ya merge karne ke liye.
   * **Rest** → Multiple values ko array me lene ke liye.

7. **Modules**

   * Code ko alag-alag files me tod ke manage karna.

   ```js
   // export
   export const x = 10;
   // import
   import {x} from './file.js';
   ```

8. **Classes**

   * Object-oriented code likhne ka clean syntax.
   * Backend ya frontend dono me kaam aata hai.

---

### **Interview Trap (Galti jo log karte hain)**

* `var` ka hoisting aur `let/const` ka difference clear na hona.
* Arrow function ko normal function ka pura replacement samajhna — galat, kyunki arrow function constructor nahi ban sakta.

---

### **Example Q/A (Interview Style)**

**Q:** Difference between `var`, `let`, and `const`?
**A:**

* `var` → Function scoped, hoisted, redeclare ho sakta hai.
* `let` → Block scoped, hoisting alag hoti hai (temporal dead zone), reassign ho sakta hai but redeclare nahi hota.
* `const` → Block scoped, ek baar value assign hoti hai, reference change nahi hota but object/array ke andar ka data change ho sakta hai.

---
