## 🎯 **Contact Manager (Lifting State Up + API Calls)**

We’ll assume your backend API is running at:

```
Base URL: http://localhost:5000/api/contacts
```

With these endpoints:

* `GET /` → Get all contacts
* `POST /` → Add new contact
* `DELETE /:id` → Delete contact

---

## **1️⃣ App.js (Parent Component)**

```jsx
import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function App() {
  const API_URL = "http://localhost:5000/api/contacts";
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from API
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

  // Add contact via API
  const addContact = async (contact) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      if (res.ok) {
        fetchContacts();
      }
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  // Delete contact via API
  const deleteContact = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        fetchContacts();
      }
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Contact Manager (API + Lifting State)</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
```

---

## **2️⃣ ContactForm.js (Child Component)**

```jsx
import React, { useState } from "react";

function ContactForm({ addContact }) {
  const [form, setForm] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Please fill all fields");
    addContact(form); // Send data to parent
    setForm({ name: "", email: "" }); // Clear form
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
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
      <button type="submit">Add</button>
    </form>
  );
}

export default ContactForm;
```

---

## **3️⃣ ContactList.js (Child Component)**

```jsx
import React from "react";

function ContactList({ contacts, deleteContact }) {
  if (contacts.length === 0) {
    return <p>No contacts found.</p>;
  }

  return (
    <table border="1" cellPadding="8" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((c) => (
          <tr key={c._id}>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>
              <button onClick={() => deleteContact(c._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;
```

---

## **🔍 How This Demonstrates Interview Skills**

1. **Lifting State Up** → Contacts are stored in the **parent** and passed to children via props.
2. **Controlled Components** → Form inputs are bound to state.
3. **API Integration** → Uses **fetch** for GET, POST, DELETE requests.
4. **Reusable Components** → Form and List are **separate** and reusable.
5. **Real MERN Stack Workflow** → This can be connected to a **Node.js + Express + MongoDB** backend.

---

