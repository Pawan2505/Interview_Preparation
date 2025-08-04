## 📌 **React Demo – API Users with Props + State + useEffect**

---

### **Features**

* **useEffect** → API se users fetch karega.
* **State** → Parent me data store hoga (`useState`).
* **Props** → Data child component ko pass hoga.
* **Conditional rendering** → Loading & error handling.

---

### **Code**

#### **App.js**

```jsx
import React, { useState, useEffect } from "react";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]); // State to store API data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  // Fetch API data on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>👥 User Directory</h2>

      {/* Conditional Rendering */}
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && <UserList users={users} />} {/* Props passing */}
    </div>
  );
}

export default App;
```

---

#### **UserList.js**

```jsx
import React from "react";

function UserList({ users }) {
  if (users.length === 0) {
    return <p>No users found.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {users.map((user) => (
        <li key={user.id} style={{
          border: "1px solid #ddd",
          margin: "8px 0",
          padding: "10px",
          borderRadius: "5px"
        }}>
          <strong>{user.name}</strong> <br />
          <small>{user.email}</small>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
```

---

### **How to Run**

```bash
npx create-react-app props-state-effect-demo
cd props-state-effect-demo
# Replace src/App.js and src/UserList.js with above code
npm start
```

---

### **Interview Explanation**

> "Is demo me maine `useEffect` hook ka use karke API se data fetch kiya aur `useState` me store kiya.
> Data fetching ke dauran loading message dikhaya (conditional rendering).
> Error handle kiya `try-catch` block se.
> Data ko parent component (`App`) se child component (`UserList`) me props ke through pass kiya.
> Child component sirf display ka kaam karta hai, data ka logic parent me hai.
> Ye separation clean architecture show karta hai."

---

### **Why This Is Impressive in Interview**

✅ Shows **state management**
✅ Shows **side effect handling with useEffect**
✅ Shows **props passing (parent → child)**
✅ Demonstrates **conditional rendering**
✅ Shows **API integration** (real-world scenario)

---

