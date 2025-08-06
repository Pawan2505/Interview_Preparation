## 📌 **HTML Interview Rapid Fire Q\&A Sheet**

---

### **1️⃣ HTML vs HTML5**

**Q:** What’s the difference?
**A:**

* **HTML** → Older version, less support for modern media.
* **HTML5** → Supports audio, video, semantic tags (`<header>`, `<footer>`), offline storage (`localStorage`, `sessionStorage`), canvas for drawing, and better form controls.

---

### **2️⃣ Semantic HTML**

**Q:** What is it?
**A:** Tags with meaning — e.g., `<article>`, `<section>`, `<nav>`. Improves SEO and accessibility.

---

### **3️⃣ `id` vs `class`**

**Q:** Difference?
**A:**

* `id` → Unique, only one per page.
* `class` → Can be reused for multiple elements.

---

### **4️⃣ Block vs Inline Elements**

**Q:** Example?
**A:**

* **Block**: `<div>`, `<p>` → Full width, starts new line.
* **Inline**: `<span>`, `<a>` → Only as wide as content.

---

### **5️⃣ GET vs POST in Forms**

**Q:** Difference?
**A:**

* **GET** → Sends data in URL, less secure, limited size.
* **POST** → Sends data in request body, secure, large size allowed.

---

### **6️⃣ `alt` Attribute in Images**

**Q:** Why use it?
**A:** For accessibility (screen readers) and SEO. Also shown if image fails to load.

---

### **7️⃣ `data-*` Attribute**

**Q:** What is it?
**A:** Custom data attributes to store extra information in HTML tags.

Example:

```html
<button data-id="101">Click</button>
```

---

### **8️⃣ HTML Entities**

**Q:** Example?
**A:**

* `<` → `&lt;`
* `>` → `&gt;`
* `&` → `&amp;`

---

### **9️⃣ `<strong>` vs `<b>`**

**Q:** Difference?
**A:**

* `<strong>` → Important text (semantic).
* `<b>` → Bold text (visual only).

---

### **🔟 `<em>` vs `<i>`**

**Q:** Difference?
**A:**

* `<em>` → Emphasized text (semantic).
* `<i>` → Italic text (visual only).

---

### **1️⃣1️⃣ Meta Tags**

**Q:** Why use `viewport` meta tag?
**A:** Makes page mobile responsive:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

---

### **1️⃣2️⃣ HTML5 Storage**

**Q:** Difference between `localStorage` and `sessionStorage`?
**A:**

* `localStorage` → Permanent until manually cleared.
* `sessionStorage` → Only until browser/tab is closed.

---

### **1️⃣3️⃣ Canvas**

**Q:** Why use `<canvas>`?
**A:** For drawing shapes, animations, or graphics via JavaScript.

---

### **1️⃣4️⃣ Difference Between `<script>` in Head vs Body**

**Q:** Which is better?
**A:** At the **end of body** so HTML loads first and JavaScript runs later (better performance).

---

### **1️⃣5️⃣ HTML5 Input Types**

**Q:** Example?
**A:** `email`, `url`, `date`, `number`, `color`, `range` — better validation & user experience.

---

📌 **Tip for Interview:**
If they ask a question and you don’t know the exact answer,
start with **definition → small example → real-world use case**.
That’s exactly how senior developers answer.

---

