## **📌 Node.js + Express Interview Questions & Answers**

---

### **1️⃣ What is Node.js and how is it different from JavaScript in the browser?**

**Answer:**
"Node.js ek JavaScript runtime environment hai jo Chrome ke V8 engine par based hai, jo hume JavaScript ko browser ke bahar, server-side run karne deta hai.
Browser JS ka use mainly DOM manipulate karne me hota hai, jabki Node.js ka use backend development, file system access, API banane ke liye hota hai."

---

### **2️⃣ What is npm?**

**Answer:**
"npm ka matlab hai **Node Package Manager**. Ye ek tool hai jisme JavaScript ke libraries/modules store hote hain aur hume install, update, aur manage karne ka option deta hai.
Example:

````bash
npm install express
```"

---

### **3️⃣ Difference between `require` and `import`**
**Answer:**  
- **require** → CommonJS module system (Node.js default).  
```js
const express = require('express');
````

* **import** → ES Module syntax (modern JavaScript).

```js
import express from 'express';
```

---

### **4️⃣ What is middleware in Express?**

**Answer:**
"Middleware ek function hota hai jo request aur response ke beech me execute hota hai.
Iska use authentication, logging, data parsing, error handling me hota hai."

Example:

```js
app.use((req, res, next) => {
  console.log('Request received');
  next();
});
```

---

### **5️⃣ What is `next()` in middleware?**

**Answer:**
"`next()` ek function hai jo Express ko batata hai ki current middleware complete ho gaya, ab next middleware ko run karo."

---

### **6️⃣ How to handle routes in Express?**

**Answer:**
"Routes define karte hain ki kaunsa URL kaunsa code execute karega."

Example:

```js
app.get('/users', (req, res) => {
  res.send('User List');
});
```

---

### **7️⃣ How to send JSON response from Express?**

**Answer:**

```js
app.get('/api', (req, res) => {
  res.json({ message: 'Hello API' });
});
```

---

### **8️⃣ Difference between `app.use()` and `app.get()`**

**Answer:**

* **app.use()** → Middleware register karta hai (sabhi HTTP methods ke liye).
* **app.get()** → GET request handle karta hai.

---

### **9️⃣ How to serve static files in Express?**

**Answer:**
"Static files (images, CSS, JS) serve karne ke liye `express.static()` use hota hai."

Example:

```js
app.use(express.static('public'));
```

---

### **🔟 Difference between synchronous and asynchronous functions in Node.js**

**Answer:**

* **Synchronous** → Code line-by-line execute hota hai, blocking hota hai.
* **Asynchronous** → Code background me run hota hai, non-blocking hota hai (Promises, async/await).

---

### **1️⃣1️⃣ How to handle errors in Express?**

**Answer:**
"Error handling ke liye 4 parameters wale middleware ka use hota hai."

Example:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```

---

### **1️⃣2️⃣ What is `process.env` in Node.js?**

**Answer:**
"Environment variables ko access karne ke liye use hota hai — jaise API keys, database URLs."

Example:

```js
const PORT = process.env.PORT || 3000;
```

---

### **1️⃣3️⃣ What is the difference between `res.send()` and `res.json()`?**

**Answer:**

* `res.send()` → String, HTML ya JSON sab send kar sakta hai.
* `res.json()` → Specifically JSON data send karta hai.

---

### **1️⃣4️⃣ How to read data from request body in Express?**

**Answer:**
"Express me `express.json()` middleware ka use hota hai."

Example:

```js
app.use(express.json());
app.post('/user', (req, res) => {
  console.log(req.body);
});
```

---

