## 📝 **Array & Object Methods – Interview Cheatsheet**

---

## **1. Important Array Methods**

### **a) forEach()**

* Har element par ek function chalata hai
* Return **nahi** karta (sirf loop jaisa kaam karta hai)

```js
[1, 2, 3].forEach(num => console.log(num));
```

---

### **b) map()**

* Har element ko transform karke **naya array return** karta hai

```js
let doubled = [1, 2, 3].map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

---

### **c) filter()**

* Condition ke basis par **filtered array** return karta hai

```js
let even = [1, 2, 3, 4].filter(num => num % 2 === 0);
console.log(even); // [2, 4]
```

---

### **d) find()**

* Pehla matching element return karta hai

```js
let num = [10, 20, 30].find(n => n > 15);
console.log(num); // 20
```

---

### **e) findIndex()**

* Pehla matching element ka index return karta hai

```js
let idx = [10, 20, 30].findIndex(n => n > 15);
console.log(idx); // 1
```

---

### **f) some()**

* Agar **koi ek** element condition match kare → `true`

```js
[1, 2, 3].some(n => n > 2); // true
```

---

### **g) every()**

* Agar **sab** elements condition match kare → `true`

```js
[2, 4, 6].every(n => n % 2 === 0); // true
```

---

### **h) reduce()**

* Array ke elements ko **single value** me reduce karta hai (sum, product, etc.)

```js
let sum = [1, 2, 3].reduce((acc, val) => acc + val, 0);
console.log(sum); // 6
```

---

### **i) includes()**

* Element array me hai ya nahi check karta hai

```js
[1, 2, 3].includes(2); // true
```

---

### **j) splice()**

* Array me se elements remove/insert karta hai (mutates original array)

```js
let arr = [1, 2, 3, 4];
arr.splice(1, 2); // index 1 se 2 elements remove
console.log(arr); // [1, 4]
```

---

### **k) slice()**

* Naya array banata hai given range se (original safe)

```js
let arr = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2, 3]
```

---

## **2. Important Object Methods**

### **a) Object.keys(obj)**

* Object ke **keys ka array** return karta hai

```js
Object.keys({a: 1, b: 2}); // ["a", "b"]
```

---

### **b) Object.values(obj)**

* Object ke **values ka array** return karta hai

```js
Object.values({a: 1, b: 2}); // [1, 2]
```

---

### **c) Object.entries(obj)**

* Object ka array of `[key, value]` pairs

```js
Object.entries({a: 1, b: 2}); // [["a", 1], ["b", 2]]
```

---

### **d) Object.assign(target, source)**

* Do objects ko merge karta hai (shallow copy)

```js
Object.assign({x: 1}, {y: 2}); // {x: 1, y: 2}
```

---

### **e) hasOwnProperty(key)**

* Key object me hai ya nahi check karta hai

```js
({a: 1}).hasOwnProperty("a"); // true
```

---

### **f) Spread operator (`...`)**

* Object copy / merge

```js
let obj1 = {a: 1};
let obj2 = {...obj1, b: 2}; // {a: 1, b: 2}
```

---

## **3. Interview Traps**

* `.forEach()` kuch return nahi karta, isliye `.map()` ka use karo transformation ke liye
* `.splice()` array ko modify karta hai, `.slice()` nahi
* `.reduce()` ka initial value dena safe hota hai, warna error aa sakta hai empty array pe
* `Object.assign()` aur spread sirf **shallow copy** banate hain, deep nahi

---

## **4. Interview Example**

**Q:** `.map()` aur `.forEach()` me difference?
**A:**

* `.map()` → naya array return karta hai
* `.forEach()` → kuch return nahi karta, sirf har element par function chalata hai

---

💡 **Tip for Interview:**
Problem-solving round me maximum solutions `map()`, `filter()`, `reduce()`,
aur `Object.keys()` type methods ke combination se bante hain.
Isliye inke examples practice karo.

---
