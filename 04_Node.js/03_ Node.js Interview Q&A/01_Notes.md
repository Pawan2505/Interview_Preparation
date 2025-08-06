## **📌 Node.js Interview Q\&A**

---

### **1️⃣ What is Node.js?**

**Answer:**
"Node.js ek **JavaScript runtime environment** hai jo Chrome ke V8 engine par based hai.
Ye hume browser ke bahar JavaScript run karne ka option deta hai.
Mainly use hota hai **backend server-side development** ke liye."

---

### **2️⃣ Features of Node.js**

**Answer:**

* **Single-threaded & Event-driven** → Fast for concurrent requests.
* **Non-blocking I/O** → Async operations handle karta hai.
* **Cross-platform** → Windows, Linux, Mac me run hota hai.
* **Huge npm ecosystem** → Packages ka bada library.

---

### **3️⃣ Node.js vs Browser JavaScript**

**Answer:**

* Browser JS → HTML/CSS ke saath run hota hai, DOM access karta hai.
* Node.js → Server-side run hota hai, no DOM, but OS, File System access hota hai.

---

### **4️⃣ What is Event Loop in Node.js?**

**Answer:**
"Event loop ek mechanism hai jo Node.js ko non-blocking banata hai.
Ye continuously check karta hai pending tasks, callbacks, aur async events."

Example flow:

1. Call Stack → main code execute hota hai.
2. Callback Queue → async tasks ka result aata hai.
3. Event Loop → stack empty hone par callbacks run karta hai.

---

### **5️⃣ What are Modules in Node.js?**

**Answer:**
"Modules reusable pieces of code hote hain.
Node.js me teen type hote hain:

1. **Built-in** (fs, path, http)
2. **Custom** (apne banaye)
3. **Third-party** (npm packages)."

Example:

```js
const fs = require('fs'); // built-in
```

---

### **6️⃣ require vs import**

**Answer:**

* `require` → CommonJS syntax (default in Node.js).
* `import` → ES Modules syntax (modern JS).

---

### **7️⃣ npm vs npx**

**Answer:**

* npm → Package install & manage.
* npx → Package bina globally install kiye directly run karne ka tool.

---

### **8️⃣ File handling in Node.js**

**Answer:**
`fs` module se hum files read/write karte hain.
Example:

```js
const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello Node');
```

---

### **9️⃣ What is EventEmitter?**

**Answer:**
"Node.js me events handle karne ka system.
Hum `on` se event listen karte hain, `emit` se trigger karte hain."

Example:

```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('greet', () => console.log('Hello'));
emitter.emit('greet');
```

---

### **🔟 HTTP module**

**Answer:**
"Node.js ka built-in module jo HTTP server banata hai."

Example:

```js
const http = require('http');
http.createServer((req, res) => {
  res.end('Hello World');
}).listen(3000);
```

---

### **1️⃣1️⃣ What is Express.js?**

**Answer:**
"Express ek lightweight web framework hai jo Node.js me server banane aur routes handle karne ko easy banata hai."

---

### **1️⃣2️⃣ Middleware in Express**

**Answer:**
"Middleware ek function hai jo request aur response ke beech execute hota hai."
Example: Auth check, logging, parsing.

---

### **1️⃣3️⃣ app.use() vs app.get()**

**Answer:**

* `app.use()` → Middleware.
* `app.get()` → Specific GET route handler.

---

### **1️⃣4️⃣ req.params vs req.query vs req.body**

**Answer:**

* **params** → URL path ke variables.
* **query** → URL ke ?ke baad wale data.
* **body** → POST/PUT data.

---

### **1️⃣5️⃣ Error handling in Express**

**Answer:**
Custom error middleware:

```js
app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});
```

---

### **1️⃣6️⃣ process.env**

**Answer:**
"process.env environment variables store karta hai (like DB password, API keys)."

---

### **1️⃣7️⃣ REST API in Node.js**

**Answer:**
"API jo HTTP methods (GET, POST, PUT, DELETE) ka use karti hai."

---

### **1️⃣8️⃣ JWT Authentication**

**Answer:**
"JWT ek token-based authentication hai jo user login ke baad token deta hai, jo har request ke header me bheja jata hai."

---

### **1️⃣9️⃣ Async patterns**

**Answer:**

* Callbacks → old style.
* Promises → better handling.
* async/await → cleaner syntax.

---

### **2️⃣0️⃣ Deployment**

**Answer:**
"Node.js app ko Heroku, Render, AWS par deploy kar sakte hain."

---

