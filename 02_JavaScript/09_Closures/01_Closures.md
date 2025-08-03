
## 📝 **Closures – Interview Cheatsheet**

---

### **1. What is a Closure?**

* Closure = **Function + Uska Lexical Scope ka Reference**
* Matlab ek inner function apne outer function ke variables ko **yaad rakhta hai**
  chahe outer function ka execution khatam ho gaya ho.

---

### **2. Simple Example**

```js
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer(); // outer() execute hua
counter(); // 1
counter(); // 2
counter(); // 3
```

💡 **Note:** Outer ka `count` variable **destroy nahi hota** kyunki `inner()` closure me uska reference store hai.

---

### **3. Diagram**

```
outer() Execution
   ↓
count = 0 (lexical scope)
   ↓
inner() returned (closure bana)
   ↓
counter() calls → access & update `count`
```

---

### **4. Real-Life Analogy**

Socho tumhare paas ek locker (outer function variable) hai.
Tum ek chhabi (inner function) rakhte ho jo us locker ko khol sakta hai.
Locker band hone ke baad bhi tumhare paas chhabi hai,
isliye tum usme rakhi cheezen access kar sakte ho.

---

### **5. Why Closures Are Useful**

* **Data privacy** → Variables ko directly access nahi kiya ja sakta
* **State maintain karna** → Jaise counter, cache
* **Factory functions** → Functions jo customised functions return karte hain

---

### **6. Interview Example – Data Privacy**

```js
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      console.log(`New balance: ₹${balance}`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`New balance: ₹${balance}`);
      } else {
        console.log("Insufficient funds");
      }
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500); // ₹1500
account.withdraw(2000); // Insufficient funds
```

💡 `balance` variable **private** hai — direct access possible nahi.

---

### **7. Common Interview Questions**

**Q:** Closure kaise banta hai?
**A:** Jab ek inner function apne outer function ke variables ko access karta hai
aur outer function ka execution complete hone ke baad bhi wo variables survive karte hain.

**Q:** Closures ka real-world use case?
**A:** Data privacy, stateful functions (counter), memoization, event handler me reference preserve karna.

---

### **8. Common Mistakes**

* Loop me `var` use karke closure me unexpected value aana
* Large data ko closure me rakhkar memory leak kar dena
* Closure ko samajhne me function return hone ke baad variables destroy ho gaye samajhna (nahi hote)

---

### **9. Advanced Example – Loop with var vs let**

```js
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 4, 4, 4 (var → single shared variable)

for (let i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output: 1, 2, 3 (let → block scope closure)
```

---

💡 **Tip for Interview:**
Ek short answer ready rakho:

> "Closure ek function ka apne surrounding scope ke variables ko remember karne ka ability hai,
> chahe outer function ka execution khatam ho chuka ho. Iska use data privacy aur state maintain karne ke liye hota hai."

---

