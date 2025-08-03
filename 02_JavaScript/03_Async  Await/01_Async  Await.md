## 📝 **Async / Await – Interview Cheatsheet**

### **1. What is async/await?**

* **async/await** JavaScript me **Promises ka modern syntax** hai.
* Ye async code ko **synchronous style** me likhne deta hai, taaki code clean aur readable ho.
* **async function** hamesha ek Promise return karta hai.

---

### **2. Syntax**

```js
async function getData() {
  let data = await fetchData();
  console.log(data);
}
```

* **async** → Function ko async banata hai (Promise return karega).
* **await** → Promise ka result ka wait karta hai (function execution pause hota hai jab tak result na mil jaye).

---

### **3. Example**

**Without async/await (Promise chaining):**

```js
fetch('/user')
  .then(res => res.json())
  .then(user => console.log(user))
  .catch(err => console.error(err));
```

**With async/await (Cleaner):**

```js
async function getUser() {
  try {
    const res = await fetch('/user');
    const user = await res.json();
    console.log(user);
  } catch (err) {
    console.error(err);
  }
}
getUser();
```

---

### **4. Key Points**

* `await` **sirf async function ke andar** use hota hai.
* Execution `await` line par rukta hai jab tak Promise resolve/reject na ho.
* Error handling ke liye `try/catch` ka use hota hai.

---

### **5. Error Handling**

```js
async function fetchData() {
  try {
    let res = await fetch('/data');
    let data = await res.json();
    return data;
  } catch (err) {
    console.error("Error:", err);
  }
}
```

---

### **6. Parallel Execution**

Default me `await` serial execution karta hai.
Agar multiple async tasks parallel chalane ho → `Promise.all()` use karo.

```js
async function getAll() {
  let [user, posts] = await Promise.all([
    fetch('/user').then(r => r.json()),
    fetch('/posts').then(r => r.json())
  ]);
  console.log(user, posts);
}
```

---

### **7. Interview Traps**

* `await` ko loop ke andar galat use karna (serial ho jayega, slow).
* `await` ko async function ke bahar use karna → error aayega.
* Error handling skip karna (reject hone par crash ho sakta hai).

---

### **8. Diagram – Async/Await Flow**

```
Async Function Start
     ↓
Encounter await → pause execution
     ↓
Promise resolved → resume execution
     ↓
Continue till end → return Promise
```

---

### **9. Interview Example**

**Q:** `async/await` ka fayda promises ke upar kya hai?
**A:** async/await code ko clean aur readable banata hai. Promise chaining me `.then()` ka nesting hota hai,
par async/await me hum synchronous style me likh sakte hain jo maintain karna easy hai.

---

💡 **Tip for Interview:**
Ek real-life analogy use karo:
"Jaise aap chai banate ho — pani garam hone ka wait (await) karte ho,
pani garam hone ke baad hi chai patta dalte ho. Agar garam hone ka wait na karein to chai banegi hi nahi."

---
