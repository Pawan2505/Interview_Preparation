## **📌 Bootstrap Important Interview Topics**

---

### **1️⃣ What is Bootstrap?**

* Definition: Responsive, mobile-first CSS framework.
* Features: Prebuilt CSS styles, grid system, components, and JS plugins.
* Versions: Bootstrap 3, 4, 5 (interview me mostly Bootstrap 5 pucha jata hai).

---

### **2️⃣ Bootstrap Grid System**

* **12-column layout** → Responsive layout banane ka base.
* Classes:

  * `.col-` (Extra small)
  * `.col-sm-` (≥576px)
  * `.col-md-` (≥768px)
  * `.col-lg-` (≥992px)
  * `.col-xl-` (≥1200px)
* Nesting grids.

Example:

```html
<div class="row">
  <div class="col-md-6">Left</div>
  <div class="col-md-6">Right</div>
</div>
```

---

### **3️⃣ Responsive Utilities**

* `.d-none` → Hide
* `.d-sm-block` → Show only on small and above
* `.d-lg-none` → Hide on large screens

---

### **4️⃣ Bootstrap Breakpoints**

* `Extra small (xs)` → `<576px`
* `Small (sm)` → `≥576px`
* `Medium (md)` → `≥768px`
* `Large (lg)` → `≥992px`
* `Extra large (xl)` → `≥1200px`
* `XXL` → `≥1400px` (Bootstrap 5)

---

### **5️⃣ Common Components**

* Navbar (`.navbar`)
* Buttons (`.btn`, `.btn-primary`)
* Cards (`.card`)
* Alerts (`.alert`)
* Modals (`.modal`)
* Carousel (`.carousel`)

---

### **6️⃣ Forms in Bootstrap**

* `.form-control`, `.form-check`
* Form validation classes (`.is-valid`, `.is-invalid`)
* Input groups (`.input-group`)

---

### **7️⃣ Flexbox Utilities**

* `.d-flex`, `.justify-content-center`, `.align-items-center`
* Responsive flex (`.flex-sm-row`, `.flex-column`)

---

### **8️⃣ Spacing Utilities**

* Margin: `.m-0` to `.m-5` (and `.mt-`, `.mb-`, `.ms-`, `.me-`)
* Padding: `.p-0` to `.p-5` (and `.pt-`, `.pb-`, `.ps-`, `.pe-`)
* Responsive spacing: `.m-md-3`

---

### **9️⃣ Colors & Background**

* Text colors: `.text-primary`, `.text-danger`
* Background colors: `.bg-primary`, `.bg-light`

---

### **🔟 JavaScript Plugins**

* Collapse, Modal, Tooltip, Carousel, Dropdown.
* Bootstrap 5 uses **vanilla JS** (No jQuery required).

---

### **1️⃣1️⃣ Bootstrap Icons**

* `.bi` classes for vector icons.

---

### **1️⃣2️⃣ Bootstrap vs Tailwind**

* Bootstrap → Component-based, predefined styles.
* Tailwind → Utility-first, custom design flexibility.

---

💡 **Interview Tip:**
Agar pooche *"How to make a responsive website quickly?"*, bolo:

> "Bootstrap ka grid system aur responsive classes use karke main quickly responsive layout bana sakta hoon. Main predefined components jaise Navbar, Cards, Forms use karta hoon aur unhe customize kar ke fast development karta hoon."

---

