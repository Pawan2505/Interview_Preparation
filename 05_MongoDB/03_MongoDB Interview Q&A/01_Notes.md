## **📌 MongoDB Interview Q\&A**

---

### **1️⃣ What is MongoDB?**

**Answer:**
"MongoDB ek **NoSQL database** hai jo JSON‑like documents me data store karta hai.
Ye schema‑less hota hai, flexible hota hai, aur high‑performance applications ke liye suitable hai."

---

### **2️⃣ SQL vs NoSQL (MongoDB)**

**Answer:**

* SQL → Table-based, fixed schema, relational.
* NoSQL (MongoDB) → Collection & Document based, flexible schema, non-relational.

Example:
**SQL Table:**

| id | name | age |
| -- | ---- | --- |
| 1  | Ram  | 25  |

**MongoDB Document:**

```json
{ "_id": 1, "name": "Ram", "age": 25 }
```

---

### **3️⃣ What is a Collection and Document?**

**Answer:**

* Collection → Table ka equivalent.
* Document → Row ka equivalent (JSON object).

---

### **4️⃣ What is `_id` in MongoDB?**

**Answer:**
"\_id ek unique identifier hota hai har document ke liye, jo by default ObjectId type hota hai."

---

### **5️⃣ CRUD Operations in MongoDB**

**Answer:**

* Insert → `insertOne()`, `insertMany()`
* Read → `find()`, `findOne()`
* Update → `updateOne()`, `updateMany()` with `$set`
* Delete → `deleteOne()`, `deleteMany()`

Example:

```js
db.users.insertOne({ name: "Pawan", age: 25 });
db.users.find({ age: { $gt: 20 } });
db.users.updateOne({ name: "Pawan" }, { $set: { age: 26 } });
db.users.deleteOne({ name: "Pawan" });
```

---

### **6️⃣ Query Operators**

**Answer:**

* Comparison → `$eq`, `$ne`, `$gt`, `$lt`, `$gte`, `$lte`
* Logical → `$and`, `$or`
* Array → `$in`, `$nin`, `$all`

Example:

```js
db.users.find({ age: { $gt: 18, $lt: 30 } });
```

---

### **7️⃣ Indexes in MongoDB**

**Answer:**
"Indexes query ko fast banate hain kyunki wo specific field ka sorted structure bana dete hain."
Command:

```js
db.users.createIndex({ name: 1 });
```

---

### **8️⃣ Aggregation Framework**

**Answer:**
"Aggregation large data ko transform & summarize karne ke liye use hota hai."
Example:

```js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } }
]);
```

---

### **9️⃣ Relationships in MongoDB**

**Answer:**

* Embedded → Related data same document me store.
* Referenced → Related data dusre document me store with `_id`.

---

### **🔟 Mongoose Basics**

**Answer:**
"Mongoose ek ODM (Object Data Modeling) library hai jo MongoDB ke saath schema-based approach deta hai."

Example:

```js
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});
```

---

### **1️⃣1️⃣ What is populate() in Mongoose?**

**Answer:**
"populate() referenced documents ko fetch karta hai, SQL join ki tarah."

---

### **1️⃣2️⃣ ObjectId in MongoDB**

**Answer:**
"ObjectId ek 12-byte unique value hota hai jo timestamp + machine ID + process ID + counter se banta hai."

---

### **1️⃣3️⃣ Transactions**

**Answer:**
"MongoDB me multi-document ACID transactions possible hain session ke through."

---

### **1️⃣4️⃣ Best Practices**

**Answer:**

* Fields par indexes lagao jo frequently search hote hain.
* Large documents avoid karo (>16MB).
* Projection use karo to limit fields.
* Scaling ke liye sharding use karo.

---

