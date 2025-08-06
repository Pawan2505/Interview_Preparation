## **📌 CSS Interview Questions & Answers**

---

### **1️⃣ Difference between relative, absolute, fixed, and sticky positioning**

**Answer:**
"Positioning elements ka layout control karne ke liye hota hai:

* **Relative** → Element apni original position se shift hota hai (space maintain karta hai).
* **Absolute** → Element nearest positioned ancestor ke relative place hota hai (space maintain nahi karta).
* **Fixed** → Element viewport ke relative fixed hota hai, scroll karne par bhi wahi rehta hai.
* **Sticky** → Element relative jaise behave karta hai but scroll hone par fixed ban jata hai jab threshold cross ho jaye."

---

### **2️⃣ Flexbox vs CSS Grid – when to use each**

**Answer:**
"Flexbox 1D layout system hai (row ya column), jabki Grid 2D layout system hai (row + column dono).
Flexbox items ko dynamically space distribute karne ke liye best hai, Grid complex layouts ke liye."

---

### **3️⃣ Difference between `em` and `rem`**

**Answer:**
"`em` → Parent element ke font size ke relative hota hai.
`rem` → Root (`html`) font size ke relative hota hai.
`rem` ka use consistent sizing ke liye zyada hota hai."

---

### **4️⃣ Specificity order in CSS**

**Answer:**
"Specificity order:

1. Inline styles → Highest priority
2. ID selectors
3. Class, attribute, pseudo-class selectors
4. Element selectors
   Aur `!important` sabko override karta hai."

---

### **5️⃣ Difference between transitions and animations**

**Answer:**
"**Transition** ek property change ko smooth banata hai on event (hover, click).
**Animation** automatically run hota hai `@keyframes` ke saath, event ka wait nahi karta."

---

### **6️⃣ Pseudo-classes vs Pseudo-elements**

**Answer:**
"**Pseudo-class** element ke state ko target karta hai, jaise `:hover`, `:focus`, `:nth-child()`.
**Pseudo-element** virtual element banata hai, jaise `::before`, `::after` for adding content or decoration."

---

### **7️⃣ Why `z-index` sometimes doesn’t work**

**Answer:**
"`z-index` sirf positioned elements (relative, absolute, fixed, sticky) par kaam karta hai.
Stacking context opacity, transform, ya parent positioning se change ho sakta hai."

---

### **8️⃣ Box model and `box-sizing`**

**Answer:**
"Box model: Content → Padding → Border → Margin.
`content-box` default hota hai, jisme width sirf content ka hota hai.
`border-box` me width me padding aur border include hote hain, responsive design me easy hota hai."

---

### **9️⃣ Media queries – making responsive design**

**Answer:**
"Media queries allow karte hain ki CSS device ke screen size ke according change ho.
Example:

```css
@media (max-width: 768px) {
  body { font-size: 14px; }
}
```

Ye mobile/tablet layout banane me help karta hai."

---

### **🔟 Difference between `inline`, `block`, and `inline-block`**

**Answer:**

* **Inline** → Content jitni width, block properties nahi le sakta.
* **Block** → Full width le leta hai, new line me start hota hai.
* **Inline-block** → Inline behave karta hai but block properties accept karta hai.

---

### **1️⃣1️⃣ RGBA vs Opacity**

**Answer:**
"`rgba()` sirf background ka transparency control karta hai, content unaffected rehta hai.
`opacity` pura element (text + background) transparent bana deta hai."

---

### **1️⃣2️⃣ CSS Variables**

**Answer:**
"CSS variables global styling ke liye hota hai.
Example:

```css
:root { --main-color: blue; }
h1 { color: var(--main-color); }
```

Ye maintain karna easy banata hai."

---

### **1️⃣3️⃣ `clip-path`**

**Answer:**
"`clip-path` se non-rectangular shapes ban sakte hain without images.
Example:

````css
clip-path: circle(50% at center);
```"  

---

### **1️⃣4️⃣ Background properties**
**Answer:**  
"Background properties me `background-color`, `background-image`, `background-size`, `background-repeat`, `background-attachment` (fixed for parallax) ka use hota hai."  

---

### **1️⃣5️⃣ CSS performance tips**
**Answer:**  
"CSS ko minify kare, unnecessary selectors avoid kare, reusable classes use kare, aur external stylesheets ka use kare for better performance."  

---

