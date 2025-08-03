## 📝 **JavaScript Error Handling – Interview Cheatsheet**

---

### **1. Why Error Handling?**

* Error handling ka matlab hai **apne program ko crash hone se bachana**
* Jab error aaye, usse gracefully handle karke user ko proper message dena
* Especially **API calls, file handling, form validation** me bahut important

---

### **2. try...catch**

* Error-prone code ko **try block** me likho
* Agar error aata hai to wo **catch block** me chala jata hai

```js
try {
  let data = JSON.parse('{"name": "Pawan"}');
  console.log(data.name);
} catch (error) {
  console.error("Error parsing JSON:", error.message);
}
```

---

### **3. finally**

* **finally** block hamesha chalega (error aaye ya na aaye)
* Mostly cleanup ya closing resources ke liye use hota hai

```js
try {
  console.log("Process started");
} catch (err) {
  console.log("Error:", err);
} finally {
  console.log("Process ended");
}
```

---

### **4. throw**

* Apne khud ke custom errors create karne ke liye

```js
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be 18+");
  }
  return "Allowed";
}

try {
  console.log(checkAge(16));
} catch (err) {
  console.error(err.message); // Age must be 18+
}
```

---

### **5. Types of Errors in JS**

| Error Type         | Meaning                      |
| ------------------ | ---------------------------- |
| **SyntaxError**    | Code syntax galat hai        |
| **ReferenceError** | Undefined variable use kiya  |
| **TypeError**      | Wrong data type operation    |
| **RangeError**     | Value out of allowed range   |
| **EvalError**      | `eval()` usage related error |
| **URIError**       | URI handling related error   |

---

### **6. Async Error Handling**

* Promises ke saath `.catch()` use karo
* async/await ke saath `try/catch` use karo

```js
async function fetchData() {
  try {
    let res = await fetch('https://api.example.com/data');
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("API error:", err.message);
  }
}
fetchData();
```

---

### **7. Custom Error Class**

```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

try {
  throw new ValidationError("Invalid username");
} catch (err) {
  console.error(err.name, ":", err.message);
}
```

---

### **8. Diagram – Error Handling Flow**

```
try {
   run risky code
} catch (error) {
   handle the error
} finally {
   always run cleanup
}
```

---

### **9. Interview Traps**

* Sochna ki `try/catch` sirf synchronous code handle karega (true — async ke liye alag tarika chahiye)
* Error object ka `.message` aur `.stack` use na karna
* Production me `console.log` karke error ignore kar dena instead of proper handling

---

### **10. Interview Example**

**Q:** JavaScript me async errors kaise handle karte ho?
**A:**

* Agar promises use kar rahe ho → `.catch()`
* Agar async/await use kar rahe ho → `try/catch`
* Ye ensure karta hai ki error aane par program crash na ho aur user ko proper response mile

---

💡 **Tip for Interview:**
Ek real-life analogy:
"Error handling ek safety net ki tarah hai — jaise circus me trapeze artist ke neeche net hota hai,
agar wo gir jaye to hurt na ho. Program me error aaye to try/catch usse safely handle kar leta hai."

---

