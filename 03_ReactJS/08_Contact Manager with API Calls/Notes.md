
## **🎯 Example: Contact Manager with API Calls**

Assume we already have a **backend API** running at:

```
Base URL: http://localhost:5000/api/contacts
```

with:

* `GET /` → Get all contacts
* `POST /` → Add a new contact
* `PUT /:id` → Update a contact
* `DELETE /:id` → Delete a contact

---

### **1️⃣ App.js (Updated for API)**

```jsx
import React, { useState, useEffect } from "react";

function App() {
  const API_URL = "http://localhost:5000/api/contacts";

  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editId, setEditId] = useState(null);

  // 📌 Fetch contacts from API
  const fetchContacts = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // 📌 Handle form input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📌 Add or update contact
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        // Update
        await fetch(`${API_URL}/${editId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
      } else {
        // Add
        await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form)
        });
      }
      setForm({ name: "", email: "" });
      setEditId(null);
      fetchContacts();
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  // 📌 Edit contact
  const handleEdit = (contact) => {
    setForm({ name: contact.name, email: contact.email });
    setEditId(contact._id);
  };

  // 📌 Delete contact
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
        fetchContacts();
      } catch (error) {
        console.error("Error deleting contact:", error);
      }
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Contact Manager (API)</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>

      {/* Conditional Rendering */}
      {contacts.length === 0 ? (
        <p style={{ marginTop: "20px" }}>No contacts found.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ marginTop: "20px", width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>
                  <button onClick={() => handleEdit(c)}>Edit</button>
                  <button onClick={() => handleDelete(c._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
```

---

## **🗣 How to Explain in Interview**

> "This app uses React for UI and makes API calls to a Node.js backend.
> I used `fetch` for GET, POST, PUT, and DELETE requests.
> The data is stored in MongoDB through the backend.
> I separated state for form and contacts, handled controlled inputs, and updated the UI after each API call."

---

