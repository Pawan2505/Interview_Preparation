## **🎯 Project: Contact Manager (CRUD)**

---

### **1️⃣ App.js**

```jsx
import React, { useState } from "react";

function App() {
  // State for contacts
  const [contacts, setContacts] = useState([]);
  // State for form fields
  const [form, setForm] = useState({ name: "", email: "" });
  // State for edit mode
  const [editIndex, setEditIndex] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add or update contact
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email) return alert("Please fill all fields");

    if (editIndex !== null) {
      // Update contact
      const updated = [...contacts];
      updated[editIndex] = form;
      setContacts(updated);
      setEditIndex(null);
    } else {
      // Add new contact
      setContacts([...contacts, form]);
    }

    // Reset form
    setForm({ name: "", email: "" });
  };

  // Edit contact
  const handleEdit = (index) => {
    setForm(contacts[index]);
    setEditIndex(index);
  };

  // Delete contact
  const handleDelete = (index) => {
    if (window.confirm("Are you sure?")) {
      setContacts(contacts.filter((_, i) => i !== index));
    }
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Contact Manager</h1>

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
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
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
            {/* List Rendering */}
            {contacts.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                  <button onClick={() => handleDelete(i)}>Delete</button>
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

## **📌 Features in This Mini‑Project**

* **Controlled Form** → Inputs bound to state via `value` & `onChange`.
* **List Rendering** → `.map()` used for table rows.
* **Conditional Rendering** → "No contacts found" if list is empty.
* **CRUD Operations**:

  * Create → Add contact
  * Read → View list
  * Update → Edit contact
  * Delete → Remove contact
* **Edit Mode** → Uses `editIndex` to know which contact to update.

---

## **🗣 Interview Explanation**

> "This project demonstrates controlled forms for input handling, list rendering for displaying contacts, and conditional rendering when no data is present.
> I implemented all four CRUD operations using React's state without any external library.
> This kind of structure can be extended for API calls in a MERN stack by replacing the local state operations with backend fetch calls."

---
