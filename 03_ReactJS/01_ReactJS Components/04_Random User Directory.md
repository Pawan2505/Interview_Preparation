## 📌 **Project: Random User Directory**

---

### **Features**

* API se random users fetch karega (`https://randomuser.me/api/?results=10`)
* Parent component API call karega (`useEffect` + `async/await`)
* Child component list display karega (`props`)
* Search bar se filter hoga (`state`)
* Loading & error handling (`conditional rendering`)

---

### **Code**

#### **App.js**

```jsx
import React, { useState, useEffect } from "react";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // API fetch on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=10");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setUsers(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Filtered users based on search
  const filteredUsers = users.filter((user) =>
    `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>📖 Random User Directory</h2>
      <input
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          width: "250px",
          display: "block"
        }}
      />

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!loading && !error && <UserList users={filteredUsers} />}
    </div>
  );
}

export default App;
```

---

#### **UserList.js**

```jsx
import React from "react";
import UserCard from "./UserCard";

function UserList({ users }) {
  if (users.length === 0) {
    return <p style={{ color: "gray" }}>No users found</p>;
  }

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "15px"
    }}>
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}

export default UserList;
```

---

#### **UserCard.js**

```jsx
import React from "react";

function UserCard({ user }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      textAlign: "center",
      background: "#fafafa"
    }}>
      <img
        src={user.picture.medium}
        alt={user.name.first}
        style={{ borderRadius: "50%", marginBottom: "10px" }}
      />
      <h4>{user.name.first} {user.name.last}</h4>
      <p>{user.email}</p>
      <p style={{ fontSize: "14px", color: "gray" }}>{user.location.country}</p>
    </div>
  );
}

export default UserCard;
```

---

### **How to Run**

```bash
npx create-react-app random-user-directory
cd random-user-directory
# Replace src/App.js, src/UserList.js, src/UserCard.js with above code
npm start
```

---

### **Interview Explanation**

> "Is project me maine **React functional components** ka use kiya.
> `App` component parent hai jo API call karta hai `useEffect` hook ke through.
> Data `useState` me store hota hai aur search term ke basis pe filter hota hai.
> Filtered data ko maine `UserList` component ko props ke through pass kiya.
> `UserList` me map karke har user ke liye `UserCard` render hota hai jo ek reusable UI block hai.
> Isme maine **conditional rendering** use ki hai loading aur error states ke liye."

---

### **Why This Will Impress Interviewer**

✅ Covers **React fundamentals** (state, props, components)
✅ Demonstrates **API integration**
✅ Has **search filter logic**
✅ Uses **conditional rendering**
✅ Shows **component reusability**

---

