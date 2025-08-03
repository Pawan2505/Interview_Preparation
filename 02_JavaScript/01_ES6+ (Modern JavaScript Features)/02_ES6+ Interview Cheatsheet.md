
## 📝 **ES6+ Interview Cheatsheet**

### **1. let / const / var**

| Feature       | var                     | let                      | const                                   |
| ------------- | ----------------------- | ------------------------ | --------------------------------------- |
| **Scope**     | Function scoped         | Block scoped             | Block scoped                            |
| **Hoisting**  | Yes (value = undefined) | Yes (Temporal Dead Zone) | Yes (Temporal Dead Zone)                |
| **Redeclare** | ✅ Yes                   | ❌ No                     | ❌ No                                    |
| **Reassign**  | ✅ Yes                   | ✅ Yes                    | ❌ No (but object properties can change) |

**Example:**

```js
if(true){
  var x = 10; // function scope
  let y = 20; // block scope
  const z = 30; // block scope
}
console.log(x); // 10
// console.log(y); // Error
```

---

### **2. Template Literals**

* Use backticks ( \`\` ) instead of quotes
* `${}` for variables or expressions

**Example:**

```js
let name = "Pawan";
console.log(`Hello ${name}, welcome to MERN interview prep!`);
```

---

### **3. Arrow Functions**

* Short syntax:

```js
const add = (a, b) => a + b;
```

* `this` is **lexical** (parent ka `this` use karega)
* Cannot be used as constructor

---

### **4. Default Parameters**

* Function arguments ke default value set karne ke liye

```js
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}
greet(); // Hello Guest
```

---

### **5. Destructuring**

* Extract values from objects or arrays easily

```js
const person = {name: "Pawan", age: 25};
const {name, age} = person;
console.log(name, age); // Pawan 25
```

---

### **6. Spread & Rest (`...`)**

* **Spread** → Copy/Merge

```js
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
```

* **Rest** → Multiple args ko ek array me lena

```js
function sum(...nums){
  return nums.reduce((a,b) => a+b);
}
console.log(sum(1,2,3)); // 6
```

---

### **7. Modules**

* **Export**

```js
export const PI = 3.14;
```

* **Import**

```js
import { PI } from './math.js';
```

---

### **8. Classes**

* Clean syntax for OOP in JS

```js
class Person {
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log(`Hi, I am ${this.name}`);
  }
}
const p = new Person("Pawan");
p.greet();
```

---

### 📌 **Interview Traps**

* `var` hoisting vs `let/const` Temporal Dead Zone ka difference na batana
* Arrow function ko normal function ka pura replacement samajhna
* `const` ko immutable samajh lena (object properties change ho sakti hain)

---

### 🎯 **Quick Revision Mind Map**

```
ES6+ 
 ├── let / const / var
 ├── Template Literals
 ├── Arrow Functions
 ├── Default Parameters
 ├── Destructuring
 ├── Spread / Rest
 ├── Modules
 └── Classes
```

---

📚 **Tip for Interview:**

* Har feature ke liye ek chhota code example ya real-life analogy tayyar rakho.
* Theoretical + practical dono bol paoge to interviewer ko lagega ki tumhari grip strong hai.

---

