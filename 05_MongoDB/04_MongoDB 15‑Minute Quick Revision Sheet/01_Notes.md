## **📄 MongoDB 15‑Minute Quick Revision Sheet**

---

### **1️⃣ Basics**

* **MongoDB** → NoSQL, JSON‑like document database.
* **Collection** → Table equivalent.
* **Document** → Row equivalent (BSON format).
* **\_id** → Unique identifier (ObjectId).
* **SQL vs NoSQL** → Fixed schema vs flexible schema.

---

### **2️⃣ CRUD Commands**

```js
// Insert
db.users.insertOne({ name: "Pawan", age: 25 });
db.users.insertMany([{ name: "A" }, { name: "B" }]);

// Read
db.users.find(); // all
db.users.findOne({ name: "Pawan" });

// Update
db.users.updateOne({ name: "Pawan" }, { $set: { age: 26 } });
db.users.updateMany({ age: { $lt: 18 } }, { $set: { minor: true } });

// Delete
db.users.deleteOne({ name: "Pawan" });
db.users.deleteMany({ inactive: true });
```

---

### **3️⃣ Query Operators**

* **Comparison** → `$eq`, `$ne`, `$gt`, `$lt`, `$gte`, `$lte`
* **Logical** → `$and`, `$or`, `$not`
* **Array** → `$in`, `$nin`, `$all`
  Example:

```js
db.users.find({ age: { $gt: 20, $lt: 30 } });
```

---

### **4️⃣ Indexes**

* Improve query performance.

```js
db.users.createIndex({ name: 1 }); // ascending
db.users.createIndex({ age: -1 }); // descending
```

---

### **5️⃣ Aggregation Pipeline**

* `$match` → filter
* `$group` → group by
* `$sort` → sort
* `$limit` → limit records
* `$project` → select specific fields
* `$lookup` → join-like

Example:

```js
db.orders.aggregate([
  { $match: { status: "delivered" } },
  { $group: { _id: "$customerId", total: { $sum: "$amount" } } }
]);
```

---

### **6️⃣ Relationships**

* **Embedded** → Store related data inside doc.
* **Referenced** → Store ObjectId & fetch later.
* **Mongoose populate()** → Auto fetch referenced docs.

---

### **7️⃣ Mongoose Basics**

```js
const schema = new mongoose.Schema({
  name: String,
  age: Number
}, { timestamps: true });

const User = mongoose.model('User', schema);
```

* **timestamps: true** → Adds `createdAt`, `updatedAt`.

---

### **8️⃣ ObjectId**

* 12-byte → timestamp + machine ID + process ID + counter.
* Unique for every document.

---

### **9️⃣ Transactions**

* Multi-document ACID transactions possible with sessions.
  Example:

```js
const session = await mongoose.startSession();
session.startTransaction();
try {
  await User.updateOne(..., { session });
  await Order.updateOne(..., { session });
  await session.commitTransaction();
} catch {
  await session.abortTransaction();
}
session.endSession();
```

---

### **🔟 Best Practices**

✅ Index fields used in queries often.
✅ Use projection `{ field: 1 }` to limit fields.
✅ Avoid huge docs (>16MB).
✅ Use sharding for big data scaling.

---

💡 **Tip:**
Interview me agar tum se MongoDB ka question aaye to example ke saath batao — interviewer ko lagega tumne real project me use kiya hai.

---
