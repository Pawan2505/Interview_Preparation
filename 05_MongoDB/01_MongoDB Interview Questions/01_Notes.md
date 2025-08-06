## **📌 MongoDB Interview Questions & Answers**

---

### **1️⃣ Difference between SQL and NoSQL databases**

**Answer:**
"SQL databases table-based hote hain (rows & columns), fixed schema hota hai, jaise MySQL, PostgreSQL.
NoSQL databases document-based, flexible schema hote hain, jaise MongoDB.
MongoDB JSON-like documents me data store karta hai."

---

### **2️⃣ What is a Collection and a Document in MongoDB?**

**Answer:**
"Collection → SQL me table jaisa hota hai.
Document → SQL me row jaisa hota hai, JSON format me store hota hai."

Example:

```json
{
  "name": "Pawan",
  "role": "Developer"
}
```

---

### **3️⃣ How to insert data in MongoDB?**

**Answer:**

```js
db.users.insertOne({ name: "Pawan", age: 25 });
db.users.insertMany([{ name: "A" }, { name: "B" }]);
```

---

### **4️⃣ How to find data in MongoDB?**

**Answer:**

```js
db.users.find(); // sab documents
db.users.findOne({ name: "Pawan" });
```

---

### **5️⃣ Difference between `find()` and `findOne()`**

**Answer:**

* **find()** → Multiple matching documents return karta hai (cursor).
* **findOne()** → Sirf first matching document return karta hai.

---

### **6️⃣ How to update data in MongoDB?**

**Answer:**

```js
db.users.updateOne({ name: "Pawan" }, { $set: { age: 26 } });
db.users.updateMany({ role: "Dev" }, { $set: { active: true } });
```

---

### **7️⃣ How to delete data in MongoDB?**

**Answer:**

```js
db.users.deleteOne({ name: "Pawan" });
db.users.deleteMany({ active: false });
```

---

### **8️⃣ What is an Index in MongoDB?**

**Answer:**
"Index ek special data structure hai jo searching fast karta hai.
Example: Agar name par index lagao, to name-based search jaldi hoti hai."

Example:

```js
db.users.createIndex({ name: 1 });
```

---

### **9️⃣ What is Aggregation in MongoDB?**

**Answer:**
"Aggregation data ko transform ya summarize karne ke liye use hota hai.
Example: average, sum, group by."

Example:

```js
db.users.aggregate([
  { $group: { _id: "$role", total: { $sum: 1 } } }
]);
```

---

### **🔟 Difference between `populate` in Mongoose and joins in SQL**

**Answer:**
"SQL joins table join karke related data laata hai.
Mongoose me `populate()` related collection ka data fetch karne ke liye use hota hai."

Example:

```js
User.find().populate('posts');
```

---

### **1️⃣1️⃣ What is ObjectId in MongoDB?**

**Answer:**
"ObjectId ek unique identifier hota hai jo MongoDB har document ke liye generate karta hai.
Ye 12-byte ka value hota hai (timestamp + machine id + process id + counter)."

---

### **1️⃣2️⃣ Difference between `$set` and `$push`**

**Answer:**

* `$set` → Field ka value replace karta hai.
* `$push` → Array me new value add karta hai.

Example:

```js
db.users.updateOne({ name: "Pawan" }, { $push: { skills: "React" } });
```

---

