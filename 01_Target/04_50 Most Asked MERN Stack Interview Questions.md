## **📌 50 Most Asked MERN Stack Interview Questions (Hindi + English)**

---

### **🟢 JavaScript (10 Questions)**

1️⃣ **Difference between `var`, `let`, `const`?**
**Ans:**
`var` → function-scoped, hoisted, redeclare possible.
`let` → block-scoped, no redeclare, can reassign.
`const` → block-scoped, no redeclare/reassign (object properties change ho sakte hain).

2️⃣ **What is hoisting?**
**Ans:** Variable & function declarations memory me upar move ho jate hain before execution.

3️⃣ **What is a closure?**
**Ans:** Function jo apne outer scope ke variables ko yaad rakhta hai, even after outer function executes.

4️⃣ **Difference between `==` and `===`?**
**Ans:** `==` loose comparison with type conversion, `===` strict comparison without type conversion.

5️⃣ **What is the event loop?**
**Ans:** Mechanism jo call stack, callback queue aur async tasks ko manage karta hai in JS.

6️⃣ **Difference between synchronous & asynchronous JS?**
**Ans:** Sync → sequential execution; Async → background execution (non-blocking).

7️⃣ **Promise vs Callback?**
**Ans:** Promise → cleaner async handling (`.then`, `.catch`), Callback → nested functions (callback hell risk).

8️⃣ **What is async/await?**
**Ans:** Promise-based syntax jo async code ko sync-style readable banata hai.

9️⃣ **What is `this` in JS?**
**Ans:** Current execution context ka reference (depends on how function is called).

🔟 **Array methods used in real life?**
**Ans:** `map`, `filter`, `reduce`, `find`, `forEach`, `some`, `every`.

---

### **🔵 React (12 Questions)**

1️⃣ **What are props & state?**
**Ans:** Props → parent se child data, read-only; State → local data, changeable.

2️⃣ **Functional vs Class components?**
**Ans:** Functional → simple, hooks support; Class → lifecycle methods, `this` usage.

3️⃣ **Controlled vs uncontrolled components?**
**Ans:** Controlled → value via state; Uncontrolled → value via DOM refs.

4️⃣ **What is prop drilling & how to avoid?**
**Ans:** Passing props deeply unnecessarily → useContext, Redux.

5️⃣ **What are hooks?**
**Ans:** Special functions to use state & lifecycle in functional components.

6️⃣ **Explain `useState` & `useEffect`.**
**Ans:** `useState` → local state; `useEffect` → side effects (API calls, subscriptions).

7️⃣ **useContext use case?**
**Ans:** Avoid prop drilling (theme, user info).

8️⃣ **useReducer use case?**
**Ans:** Manage complex/multiple related states.

9️⃣ **useMemo vs useCallback?**
**Ans:** useMemo → cache value; useCallback → cache function.

🔟 **Conditional rendering example?**

```jsx
isLoggedIn ? <Dashboard /> : <Login />
```

1️⃣1️⃣ **List rendering example?**

```jsx
items.map(i => <li key={i.id}>{i.name}</li>)
```

1️⃣2️⃣ **API call in React?**
**Ans:** useEffect + fetch/axios.

---

### **🟣 Node.js & Express (10 Questions)**

1️⃣ **What is Node.js?**
**Ans:** JavaScript runtime outside browser (V8 engine).

2️⃣ **npm vs npx?**
**Ans:** npm → install/manage packages; npx → execute package directly.

3️⃣ **require vs import?**
**Ans:** require → CommonJS, import → ES Modules.

4️⃣ **What is middleware?**
**Ans:** Function between request & response (auth, logging, parsing).

5️⃣ **app.use() vs app.get()?**
**Ans:** use → middleware; get → GET route handler.

6️⃣ **Static files serve kaise karte?**

```js
app.use(express.static('public'));
```

7️⃣ **next() in middleware?**
**Ans:** Move to next middleware/handler.

8️⃣ **Error handling in Express?**
**Ans:** 4-parameter middleware `(err, req, res, next)`.

9️⃣ **How to read request body?**
**Ans:** `app.use(express.json())`.

🔟 **process.env ka use?**
**Ans:** Environment variables store/access.

---

### **🟢 MongoDB (10 Questions)**

1️⃣ **SQL vs NoSQL?**
**Ans:** SQL → table-based, fixed schema; NoSQL → JSON docs, flexible schema.

2️⃣ **Collection vs Document?**
**Ans:** Collection = table, Document = row in JSON.

3️⃣ **Insert commands?**
`insertOne()`, `insertMany()`.

4️⃣ **Find commands?**
`find()`, `findOne()`.

5️⃣ **Update commands?**
`updateOne()`, `updateMany()`.

6️⃣ **Delete commands?**
`deleteOne()`, `deleteMany()`.

7️⃣ **What is Index?**
**Ans:** Improves search speed.

8️⃣ **What is Aggregation?**
**Ans:** Transform & summarize data.

9️⃣ **populate() in Mongoose?**
**Ans:** Fetch related docs (like SQL join).

🔟 **ObjectId kya hota?**
**Ans:** Unique 12-byte document ID.

---

### **🟡 Git & GitHub (5 Questions)**

1️⃣ **Git vs GitHub?**
**Ans:** Git → version control tool; GitHub → hosting platform.

2️⃣ **git clone vs git pull?**
**Ans:** clone → download repo; pull → update local with remote.

3️⃣ **Branch create & switch?**

```bash
git checkout -b branchname
```

4️⃣ **Merge vs Rebase?**
**Ans:** Merge → combine with extra commit; Rebase → rewrite history.

5️⃣ **.gitignore ka use?**
**Ans:** Ignore files from tracking.

---

### **🔴 HR Round (3 Questions)**

1️⃣ **Tell me about yourself.**
"Hi, I’m Pawan Maurya, a full-stack MERN developer & trainer at Red & White Education Pvt. Ltd. I have experience building scalable web applications and mentoring students. Now I’m looking for a role where I can contribute my coding expertise while continuing to grow professionally."

2️⃣ **Why do you want to switch?**
"I’ve enjoyed teaching and mentoring, but now I want to apply my technical skills directly in a product-based or service-based environment to work on real-world scalable projects."

3️⃣ **Why should we hire you?**
"My strong MERN stack expertise, problem-solving skills, and ability to work in teams make me a strong fit. I’ve trained and guided multiple developers, which means I can quickly adapt and contribute to your team."

---
