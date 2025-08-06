## **Bootstrap Interview Q\&A**

---

### **1️⃣ What is Bootstrap?**

**Answer:**
"Bootstrap ek **CSS framework** hai jo responsive, mobile-first websites banane ke liye pre-designed CSS, components aur JavaScript plugins provide karta hai. Ye development fast aur consistent banata hai."

---

### **2️⃣ What is the Bootstrap grid system?**

**Answer:**
"Bootstrap ka grid system **12-column layout** par based hota hai. Isse responsive layout banana easy hota hai.
Columns different screen sizes ke liye resize hote hain."

Example:

```html
<div class="row">
  <div class="col-md-6">Left</div>
  <div class="col-md-6">Right</div>
</div>
```

---

### **3️⃣ What are Bootstrap breakpoints?**

**Answer:**
"Breakpoints predefined screen widths hain jahan layout change hota hai."

| Breakpoint | Class prefix | Size    |
| ---------- | ------------ | ------- |
| xs         | `.col-`      | <576px  |
| sm         | `.col-sm-`   | ≥576px  |
| md         | `.col-md-`   | ≥768px  |
| lg         | `.col-lg-`   | ≥992px  |
| xl         | `.col-xl-`   | ≥1200px |
| xxl        | `.col-xxl-`  | ≥1400px |

---

### **4️⃣ What is the difference between `container` and `container-fluid`?**

**Answer:**

* `.container` → Fixed width, changes at breakpoints.
* `.container-fluid` → 100% width, full screen.

---

### **5️⃣ How to hide/show elements in Bootstrap?**

**Answer:**
"Responsive display utility classes use karke."

Example:

```html
<div class="d-none d-md-block">Visible on md and above</div>
<div class="d-lg-none">Hidden on large screens</div>
```

---

### **6️⃣ How to center content in Bootstrap?**

**Answer:**

* **Flex utilities**:

```html
<div class="d-flex justify-content-center align-items-center">
  Centered content
</div>
```

---

### **7️⃣ How to create a responsive navbar?**

**Answer:**
"Bootstrap ka `.navbar` component use hota hai with `.navbar-expand-*` classes."

Example:

```html
<nav class="navbar navbar-expand-md navbar-light bg-light">
  <a class="navbar-brand" href="#">Brand</a>
</nav>
```

---

### **8️⃣ How to add spacing in Bootstrap?**

**Answer:**
"Spacing utilities `m` (margin) & `p` (padding) ke saath use hote hain."

Example:

```html
<div class="mt-3 mb-4 p-2">Spacing example</div>
```

---

### **9️⃣ How to add custom colors?**

**Answer:**

* Predefined: `.bg-primary`, `.text-danger`
* Custom: CSS override with `.custom-class`.

---

### **🔟 What JavaScript plugins does Bootstrap provide?**

**Answer:**
"Bootstrap ke paas modal, tooltip, carousel, dropdown, collapse jaise JS plugins hote hain. Bootstrap 5 me ye vanilla JavaScript pe based hain, jQuery ki zarurat nahi hoti."

---

### **1️⃣1️⃣ Difference between Bootstrap 4 and Bootstrap 5**

* Bootstrap 5 → No jQuery dependency.
* New utilities & improved grid system.
* Added `.xxl` breakpoint.
* Improved form controls.

---

💡 **Interview Tip:**
Agar interviewer bole *"How will you make a website responsive quickly?"*, bolo:

> "Main Bootstrap ka grid system use karta hoon, breakpoints define karta hoon, aur predefined responsive utilities se layout adjust karta hoon. Navbar, buttons, forms jaise components ready-made hote hain, jisse development fast hota hai."

---

