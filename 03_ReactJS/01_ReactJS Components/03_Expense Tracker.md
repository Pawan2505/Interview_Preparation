## 📌 **Project: Expense Tracker (Mini Version)**

---

### **Features**

* Parent component **state manage karega**
* Child component se **new expense add hoga**
* Expense list **conditionally render** hoga
* **Reusable component** for each expense item

---

### **Code**

#### **App.js**

```jsx
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  // Child se data receive karke parent state update
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px", margin: "auto" }}>
      <h2>💰 Expense Tracker</h2>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
```

---

#### **ExpenseForm.js**

```jsx
import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    const expenseData = {
      id: Math.random().toString(),
      title,
      amount: +amount
    };

    onAddExpense(expenseData); // Parent ko data bhejna
    setTitle("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "8px 15px" }}>Add</button>
    </form>
  );
}

export default ExpenseForm;
```

---

#### **ExpenseList.js**

```jsx
import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses }) {
  if (expenses.length === 0) {
    return <p style={{ color: "gray" }}>No expenses found. Add some!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} />
      ))}
    </ul>
  );
}

export default ExpenseList;
```

---

#### **ExpenseItem.js**

```jsx
import React from "react";

function ExpenseItem({ title, amount }) {
  return (
    <li style={{
      background: "#f4f4f4",
      margin: "8px 0",
      padding: "10px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between"
    }}>
      <span>{title}</span>
      <strong>₹{amount}</strong>
    </li>
  );
}

export default ExpenseItem;
```

---

### **How to Run**

```bash
npx create-react-app expense-tracker-mini
cd expense-tracker-mini
# Replace src files with above code
npm start
```

---

### **Interview Explanation**

> "Is project me maine multiple components banaye:
> `App` → parent state manage karta hai
> `ExpenseForm` → user se data leta hai aur parent ko bhejta hai (state lifting)
> `ExpenseList` → list display karta hai aur agar koi data nahi hai to message show karta hai (conditional rendering)
> `ExpenseItem` → ek reusable component jo single expense display karta hai.
> Isme maine `useState` hook ka use kiya aur parent-child communication dikhaya."

---

### **Why This Impresses Interviewer**

✅ Shows **component reusability**
✅ Demonstrates **parent-child communication**
✅ Uses **state lifting**
✅ Has **conditional rendering**
✅ Clean separation of components

---

