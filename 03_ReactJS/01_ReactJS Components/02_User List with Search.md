## 📌 **React Mini Project – User List with Search**

### **Features**

* **Parent Component** API se user data fetch karega (`useEffect`)
* **Child Component** data display karega (`props` se data pass)
* **Search bar** se users filter honge (`state` se manage)

---

### **Code**

```jsx
// App.js
import React, { useState, useEffect } from "react";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);      // store all users
  const [searchTerm, setSearchTerm] = useState(""); // search input

  // Fetch users when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  // Filter users based on search term
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", marginBottom: "20px", width: "200px" }}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
```

```jsx
// UserList.js
import React from "react";

function UserList({ users }) {
  return (
    <ul>
      {users.length > 0 ? (
        users.map((user) => (
          <li key={user.id} style={{ margin: "10px 0" }}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))
      ) : (
        <p>No users found</p>
      )}
    </ul>
  );
}

export default UserList;
```

---

### **How to Run**

1. Create React app:

```bash
npx create-react-app react-components-demo
cd react-components-demo
```

2. Replace `src/App.js` and create `src/UserList.js` with above code
3. Run:

```bash
npm start
```

---

### **Interview Explanation**

> "Is project me maine ek **parent component (App)** banaya jo API se data fetch karta hai using `useEffect` aur apne state me store karta hai using `useState`.
> Search term bhi state me store hota hai aur filter logic use hota hai.
> Filtered data ko maine **props ke through child component (UserList)** me pass kiya,
> jo sirf display ka kaam karta hai.
> Is tarah maine state lifting, props, hooks aur component reusability show ki."

---

### **Why This Project Is Perfect for Interview**

✅ Covers **state management** (`useState`)
✅ Covers **lifecycle hook** (`useEffect`)
✅ Covers **props passing** (Parent → Child)
✅ Shows **real API integration**
✅ Simple but logical — easy to explain in 2–3 minutes

---

