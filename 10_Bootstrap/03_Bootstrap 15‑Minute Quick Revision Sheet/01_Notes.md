## **📄 Bootstrap 15‑Minute Quick Revision Sheet**

---

### **1️⃣ Basics**

* **Bootstrap** → Responsive, mobile-first CSS framework.
* **Features** → Grid system, prebuilt components, utility classes, JS plugins.
* **Latest Version** → Bootstrap 5 (No jQuery dependency).

---

### **2️⃣ Grid System (12 Columns)**

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Left</div>
    <div class="col-md-6">Right</div>
  </div>
</div>
```

* **Class prefixes**: `.col-` (xs), `.col-sm-`, `.col-md-`, `.col-lg-`, `.col-xl-`, `.col-xxl-`
* **Nesting allowed**.

---

### **3️⃣ Breakpoints**

| Name        | Class Prefix | Size    |
| ----------- | ------------ | ------- |
| Extra small | `.col-`      | <576px  |
| Small       | `.col-sm-`   | ≥576px  |
| Medium      | `.col-md-`   | ≥768px  |
| Large       | `.col-lg-`   | ≥992px  |
| Extra large | `.col-xl-`   | ≥1200px |
| XXL         | `.col-xxl-`  | ≥1400px |

---

### **4️⃣ Containers**

* `.container` → Fixed width, changes at breakpoints.
* `.container-fluid` → Full width 100%.

---

### **5️⃣ Display Utilities**

```html
<div class="d-none">Hidden</div>
<div class="d-md-block">Show on md & up</div>
<div class="d-lg-none">Hide on lg</div>
```

---

### **6️⃣ Flexbox Utilities**

```html
<div class="d-flex justify-content-center align-items-center">
  Centered Content
</div>
```

* `justify-content-*` → horizontal align
* `align-items-*` → vertical align

---

### **7️⃣ Spacing Utilities**

* Margin: `.m-0` to `.m-5` (`mt-`, `mb-`, `ms-`, `me-`)
* Padding: `.p-0` to `.p-5` (`pt-`, `pb-`, `ps-`, `pe-`)

Example:

```html
<div class="mt-3 mb-4 p-2">Spacing Example</div>
```

---

### **8️⃣ Colors**

* Text: `.text-primary`, `.text-success`, `.text-danger`
* Background: `.bg-primary`, `.bg-light`, `.bg-dark`

---

### **9️⃣ Common Components**

* **Navbar** → `.navbar`, `.navbar-expand-*`
* **Buttons** → `.btn`, `.btn-primary`
* **Cards** → `.card`
* **Alerts** → `.alert`, `.alert-success`
* **Modal** → `.modal`
* **Carousel** → `.carousel`

---

### **🔟 Forms**

* Input: `.form-control`
* Checkbox/Radio: `.form-check`
* Validation: `.is-valid`, `.is-invalid`

---

### **1️⃣1️⃣ JavaScript Plugins**

* Modal, Collapse, Dropdown, Carousel, Tooltip.
* Bootstrap 5 → Vanilla JS, no jQuery required.

---

### **1️⃣2️⃣ Best Practices**

✅ Use grid system for layout.
✅ Start mobile‑first, then use breakpoints.
✅ Keep spacing consistent.
✅ Customize via Sass if needed.

---

💡 **Tip:** Interview me agar poochhe *"Bootstrap ka use karke responsive website kaise banayoge?"* to bolo:

> "Main mobile-first approach use karke Bootstrap ka grid system lagata hoon, responsive utility classes aur breakpoints define karta hoon, aur predefined components ka use karke jaldi layout create karta hoon."

---
