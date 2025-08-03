## 📝 **Prototype – Interview Cheatsheet**

### **1. What is a Prototype?**

* JavaScript me har object ke paas ek **internal link** hota hai jo kisi **dusre object** ko point karta hai.
* Isko **prototype** bolte hain.
* Ye **inheritance** ka base hai JS me.

---

### **2. Prototype Chain**

* Agar tum kisi object me property/method search karte ho aur wo wahan nahi milta,
  JS uske prototype me search karta hai.
* Agar wahan bhi nahi mila to uske prototype ka prototype me search karta hai…
  Ye process **prototype chain** kehlata hai.

---

### **3. Important Terms**

| Term                | Meaning                                                      |
| ------------------- | ------------------------------------------------------------ |
| **`__proto__`**     | Object ka reference uske prototype ko                        |
| **`prototype`**     | Function ka property jo naya object banate waqt use hota hai |
| **Prototype Chain** | Series of links jo inheritance provide karti hai             |

---

### **4. Example – Prototype in Action**

```js
const arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype); // true
console.log(Array.prototype.__proto__ === Object.prototype); // true
```

Diagram:

```
arr → Array.prototype → Object.prototype → null
```

---

### **5. Creating Custom Prototype Methods**

```js
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}`);
};

const p1 = new Person("Pawan");
p1.sayHello(); // Hello, my name is Pawan
```

💡 `sayHello` har instance ke liye memory me alag copy nahi banata — sab ek hi method share karte hain prototype se.

---

### **6. Prototype Inheritance Example**

```js
const animal = {
  eats: true
};

const dog = {
  barks: true
};

dog.__proto__ = animal;

console.log(dog.eats); // true (inherited)
console.log(dog.barks); // true
```

---

### **7. Diagram – Prototype Chain**

```
dog → { barks: true } 
       __proto__ → { eats: true }
                     __proto__ → Object.prototype
                                      __proto__ → null
```

---

### **8. Interview Traps**

* `prototype` vs `__proto__` confuse karna:

  * `prototype` → Functions ka property (constructor banate time use hota hai)
  * `__proto__` → Objects ka link to its prototype
* Sochna ki prototype sirf classes ke saath hota hai — har object ka hota hai
* Primitive types ka bhi prototype hota hai (kyunki wo wrapper objects ke through kaam karte hain)

---

### **9. Interview Example**

**Q:** Prototype chain kaise kaam karti hai?
**A:** Jab aap kisi object ka property access karte ho,
JS pehle us object me search karta hai. Agar nahi milta to wo uske prototype me dekhta hai.
Ye process tab tak chalta hai jab tak prototype `null` na ho jaye.
Is chain ko **prototype chain** bolte hain.

---

💡 **Tip for Interview:**
Real-life analogy:
"Prototype ek family tree ki tarah hai — agar tumhare paas koi cheez nahi hai,
tum apne parents se poochoge, unke paas nahi to grandparents se,
aur ye process tab tak chalega jab tak kisi ke paas wo cheez na mil jaye."

---
