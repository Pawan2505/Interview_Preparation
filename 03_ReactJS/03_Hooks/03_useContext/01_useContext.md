## 🧠 **`useContext` – Avoids Prop Drilling**

---

### **1️⃣ What is `useContext`?**

* React ka **hook** jo **Context API** ke sath use hota hai.
* **Prop drilling** ka problem solve karta hai.
* **Prop drilling** ka matlab: jab ek data ko parent se deeply nested child tak bhejna ho, aur beech ke har component ko **forcefully** woh prop pass karna padta hai — even agar unko use nahi karna ho.

---

### **2️⃣ Syntax**

```jsx
const value = useContext(MyContext);
```

---

### **3️⃣ How `useContext` Helps**

Without Context:

```plaintext
App -> Parent -> Child -> GrandChild
```

If **GrandChild** ko data chahiye, to App se Parent, phir Child, phir GrandChild tak **props pass** karne padte.

With Context:

```plaintext
App -> (Context Provider) -> GrandChild
```

Data direct **context se consume** hota hai — no middleman components.

---

### **4️⃣ Key Points for Interview**

1. Context is **global data storage** for the component tree.
2. `createContext()` → context banata hai.
3. `.Provider` → value supply karta hai.
4. `useContext()` → value consume karta hai.
5. Avoids prop drilling → reduces unnecessary prop passing.

---

### **5️⃣ Coding Example for Interview**

#### **ThemeContext.js**

```jsx
import { createContext } from "react";

export const ThemeContext = createContext();
```

---

#### **App.js**

```jsx
import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Toolbar from "./Toolbar";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ padding: "20px" }}>
        <h2>useContext Demo</h2>
        <Toolbar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
```

---

#### **Toolbar.js**

```jsx
import React from "react";
import ThemeButton from "./ThemeButton";

function Toolbar() {
  // No props passing required
  return <ThemeButton />;
}

export default Toolbar;
```

---

#### **ThemeButton.js**

```jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "10px",
        marginTop: "10px"
      }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      Current Theme: {theme} (Click to Toggle)
    </button>
  );
}

export default ThemeButton;
```

---

### **6️⃣ How to Explain in Interview**

> "In this example, the theme data is stored in a `ThemeContext`.
> I used the **Provider** at the top-level to pass down the `theme` value and `setTheme` function.
> Instead of passing props through `Toolbar` → `ThemeButton`, I used `useContext` directly in `ThemeButton`.
> This avoids **prop drilling** and keeps components clean.
> `useContext` is great for global data like theme, authentication, or language settings."

---

### **7️⃣ Common Interview Questions**

1. **Q:** Can `useContext` replace Redux?
   **A:** For small to medium apps — yes. For large-scale apps with complex state — Redux or Zustand is better.

2. **Q:** Is `useContext` reactive?
   **A:** Yes, when context value changes, all components consuming it re-render.

3. **Q:** What is the drawback of `useContext`?
   **A:** If many components consume the same context, changing it can cause many re-renders.

---

