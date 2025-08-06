## **📌 MongoDB Important Interview Topics**

---

### **1️⃣ Basics & Concepts**

* **What is MongoDB** → NoSQL database, JSON-like documents.
* **SQL vs NoSQL** → Table vs Collection, Row vs Document.
* **Collection** → Like a table.
* **Document** → Like a row (JSON object).
* **\_id Field** → Automatically generated ObjectId for uniqueness.

---

### **2️⃣ CRUD Operations**

* **Insert** → `insertOne()`, `insertMany()`.
* **Read** → `find()`, `findOne()`, with query filters.
* **Update** → `updateOne()`, `updateMany()` with `$set`, `$inc`, `$push`.
* **Delete** → `deleteOne()`, `deleteMany()`.

---

### **3️⃣ Query Operators**

* Comparison → `$eq`, `$ne`, `$gt`, `$lt`, `$gte`, `$lte`.
* Logical → `$and`, `$or`, `$not`.
* Element → `$exists`, `$type`.
* Array → `$in`, `$nin`, `$all`.

---

### **4️⃣ Indexing**

* **Index** → Improves query speed.
* **Types** → Single field, compound index, text index.
* Command → `db.collection.createIndex({ field: 1 })`.

---

### **5️⃣ Aggregation Framework**

* `$match` → Filter data.
* `$group` → Group by field.
* `$sort` → Sort results.
* `$limit` → Limit results.
* `$project` → Select specific fields.
* `$lookup` → Join-like operation.

---

### **6️⃣ Relationships**

* **Embedded documents** → Store related data inside a document.
* **References** → Store only `_id` and fetch via `populate()` in Mongoose.

---

### **7️⃣ Mongoose Basics**

* Schema & Model creation.
* CRUD with Mongoose.
* Validations → required, minlength, enum.
* Middleware → `pre` and `post` hooks.
* Virtual fields.

---

### **8️⃣ ObjectId & Timestamps**

* Structure → 12-byte unique identifier.
* `timestamps: true` in schema → Adds `createdAt` & `updatedAt`.

---

### **9️⃣ Transactions**

* **Session-based transactions** for multi-document updates.
* ACID properties in MongoDB.

---

### **🔟 Performance & Best Practices**

* Use indexes wisely.
* Avoid large documents (>16MB).
* Use projection to limit returned fields.
* Sharding for scaling.

---

