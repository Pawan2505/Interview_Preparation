
## 🎯 **Project: Contact Manager with Lifting State Up**

---

### **1️⃣ App.js (Parent Component)**

```jsx
import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  // Add new contact
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  // Delete contact
  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h1>Contact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
```

---

### **2️⃣ ContactForm.js (Child Component for Adding Contact)**

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

### **3️⃣ ContactList.js (Child Component for Displaying Contacts)**

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
        {contacts.map((c, i) => (
          <tr key={i}>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>
              <button onClick={() => deleteContact(i)}>Delete</button>
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

## 🔍 **How Lifting State Works Here**

1. **State is in App.js** (`contacts`).
2. **ContactForm** calls `addContact()` → sends data **up** to parent.
3. Parent updates `contacts` → re‑renders `ContactList`.
4. **ContactList** calls `deleteContact()` → also updates parent state.
5. Both children stay in sync because **state is managed centrally** in parent.

---

## 🗣 **Interview Answer**

> "In this CRUD example, both the form and the list need access to the same contact data.
> If we kept separate states in both, they could become inconsistent.
> So, I lifted the state up into the parent component, passed `addContact` and `deleteContact` functions to the children via props, and this kept the data consistent."

---

