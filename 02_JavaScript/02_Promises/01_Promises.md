## 📝 **Promises – Interview Cheatsheet**

### **1. What is a Promise?**

Promise ek **JavaScript object** hai jo **future me ek value return karega** (success ya failure).
Ye mainly **asynchronous operations** ke liye use hota hai — jaise API calls, file read/write, DB query, etc.

---

### **2. Promise ke 3 States**

| State         | Meaning                                     |
| ------------- | ------------------------------------------- |
| **pending**   | Initial state (operation chal raha hai)     |
| **fulfilled** | Operation successful → `resolve()` call hua |
| **rejected**  | Operation failed → `reject()` call hua      |

---

### **3. Syntax**

```js
let promise = new Promise((resolve, reject) => {
  // async kaam
  let success = true;
  if(success){
    resolve("Data mil gaya");
  } else {
    reject("Error aaya");
  }
});
```

---

### **4. Consuming Promises**

* **then()** → Success ke liye
* **catch()** → Error ke liye
* **finally()** → Hamesha chalega (success/fail dono me)

```js
promise
  .then(result => console.log(result))     // Data mil gaya
  .catch(error => console.error(error))    // Error aaya
  .finally(() => console.log("Done"));     // Hamesha chalega
```

---

### **5. Promise Chaining**

* Ek ke baad ek async operations chalana

```js
fetch('/user')
  .then(res => res.json())
  .then(user => fetch(`/orders/${user.id}`))
  .then(res => res.json())
  .then(orders => console.log(orders))
  .catch(err => console.error(err));
```

---

### **6. Interview Traps (Common Mistakes)**

* `.then()` ke andar `return` bhool jana → chain break ho jata hai
* Callback aur Promise ko mix karna → code messy ho jata hai
* Promise banane ke baad use karna bhool jana

---

### **7. Promise Utility Methods**

| Method                            | Use                                                                |
| --------------------------------- | ------------------------------------------------------------------ |
| **Promise.all(\[p1, p2])**        | Sab promises complete hone ka wait karta hai, fail hone par reject |
| **Promise.race(\[p1, p2])**       | Pehle complete hone wale ka result deta hai                        |
| **Promise.allSettled(\[p1, p2])** | Sab ke result deta hai (success/fail dono)                         |
| **Promise.any(\[p1, p2])**        | Pehle successful hone wale ka result deta hai                      |

---

### **8. Diagram – Promise Flow**

```
Promise Created → Pending
       ↓
  resolve() → Fulfilled → then()
       ↓
  reject() → Rejected → catch()
       ↓
    finally() → Always runs
```

---

### **9. Interview Example**

**Q:** JavaScript me promise ka use kyon hota hai?
**A:** Promise async code ko handle karne ka ek clean tarika hai. Ye callback hell avoid karta hai aur async result ko handle karne ke liye `then()`, `catch()`, aur `finally()` methods deta hai.

---

**Q:** `Promise.all` aur `Promise.race` me kya difference hai?
**A:**

* `Promise.all` → Wait for all to finish, agar ek bhi fail hua to reject ho jayega.
* `Promise.race` → Jo pehle settle ho uska result return karega (success ya fail).

---

💡 **Tip for Interview:**

* Ek chhota real-life analogy bolo:
  "Promise ka matlab hai — jaise courier service ka tracking number. Abhi pending hai, ya to deliver hoga (fulfilled) ya lost ho jayega (rejected)."
  Ye interviewer ko instantly samajh aa jata hai aur lagta hai ki tumhe practical clarity hai.

---

