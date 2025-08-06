
## **📌 Node.js Important Interview Topics**

---

### **1️⃣ Basics of Node.js**

* **What is Node.js** → JavaScript runtime built on Chrome V8 engine.
* **Features** → Event-driven, non-blocking I/O, single-threaded.
* **Use Cases** → API development, real-time apps, microservices.
* **Difference between Node.js & Browser JavaScript**.

---

### **2️⃣ Node.js Architecture**

* **Single-threaded Event Loop** → How async works.
* **Call Stack, Callback Queue, Event Loop** → Execution flow.
* **libuv** → For handling async I/O.

---

### **3️⃣ Modules in Node.js**

* **Built-in Modules** → fs, path, http, os, events.
* **Custom Modules** → Creating & exporting functions.
* **require vs import** → CommonJS vs ES Modules.
* **module.exports** & `export default`.

---

### **4️⃣ npm & Package Management**

* **npm** → Install, update, uninstall packages.
* **npx** → Run packages without installing globally.
* **package.json** → Scripts, dependencies.
* **Semantic Versioning** (`^`, `~`).

---

### **5️⃣ File System in Node.js**

* **fs module** → readFile, writeFile, appendFile, unlink.
* **Sync vs Async methods**.

---

### **6️⃣ EventEmitter**

* **events module** → on(), emit(), removeListener().
* Real-time event handling.

---

### **7️⃣ HTTP Module**

* Creating HTTP server without Express.
* Handling request & response manually.

---

### **8️⃣ Express.js Basics**

* **What is Express** → Lightweight web framework.
* **Routing** → GET, POST, PUT, DELETE.
* **app.use() vs app.get()**.
* **Serving Static Files** → express.static().
* **Middleware** → Custom & third-party.
* **next()** function.

---

### **9️⃣ Request Handling**

* **req.params, req.query, req.body**.
* Parsing JSON & form data.
* express.json(), express.urlencoded().

---

### **🔟 Error Handling**

* try/catch in async code.
* Express error-handling middleware `(err, req, res, next)`.

---

### **1️⃣1️⃣ Environment Variables**

* **process.env** → Storing sensitive info.
* dotenv package usage.

---

### **1️⃣2️⃣ API Development**

* **REST API basics** → Endpoints, methods, status codes.
* CRUD operations in Express.
* API versioning.

---

### **1️⃣3️⃣ Middleware in Depth**

* Built-in middleware (express.json()).
* Third-party middleware (morgan, cors).
* Custom middleware.

---

### **1️⃣4️⃣ Authentication & Security**

* JWT (JSON Web Token) authentication.
* bcrypt for password hashing.
* CORS handling.
* Helmet for security headers.

---

### **1️⃣5️⃣ Database Integration**

* MongoDB connection using mongoose.
* CRUD with MongoDB & Express.

---

### **1️⃣6️⃣ Async Patterns in Node.js**

* Callbacks, Promises, async/await.
* Error handling in async code.

---

### **1️⃣7️⃣ Streams in Node.js**

* Readable & writable streams.
* Pipe method.

---

### **1️⃣8️⃣ Clustering & Scaling**

* cluster module.
* PM2 process manager.

---

### **1️⃣9️⃣ Testing in Node.js**

* Unit testing with Jest, Mocha, Chai.
* Supertest for API testing.

---

### **2️⃣0️⃣ Deployment**

* Deploy Node.js app on Heroku, Render, Railway, or AWS.
* Environment configuration for production.

---

