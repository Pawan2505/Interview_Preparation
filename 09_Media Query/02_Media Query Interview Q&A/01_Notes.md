## **Media Query Interview Q\&A**

---

### **1️⃣ What is a media query in CSS?**

**Answer:**
"Media query ek CSS feature hai jo mujhe different devices ke liye alag‑alag styles apply karne ka option deta hai.
Example: mobile, tablet, desktop me layout adjust karne ke liye."

Example:

```css
@media (max-width: 768px) {
  body { background: lightblue; }
}
```

---

### **2️⃣ Why do we use media queries?**

**Answer:**
"Media queries ka use responsive design banane ke liye hota hai, taaki website har device pe acchi lage — chhoti screen me compact layout, badi screen me full layout."

---

### **3️⃣ min-width vs max-width**

**Answer:**

* **min-width** → Styles apply hote hain jab screen width **given value se zyada ho** (mobile-first).
* **max-width** → Styles apply hote hain jab screen width **given value se kam ho** (desktop-first).

Example:

```css
@media (min-width: 768px) { /* tablet and bigger */ }
@media (max-width: 768px) { /* mobile */ }
```

---

### **4️⃣ What are common breakpoints in responsive design?**

**Answer:**

* Mobile → `max-width: 480px`
* Tablet → `max-width: 768px`
* Small laptop → `max-width: 1024px`
* Desktop → `min-width: 1200px`

---

### **5️⃣ How to target only tablets with a media query?**

**Answer:**

```css
@media (min-width: 481px) and (max-width: 768px) {
  /* Tablet specific styles */
}
```

---

### **6️⃣ What are logical operators in media queries?**

**Answer:**

* **and** → Combine conditions.
* **, (comma)** → OR condition.
* **not** → Negate condition.

Example:

```css
@media screen and (min-width: 600px) and (max-width: 900px) { ... }
```

---

### **7️⃣ How to apply styles for portrait and landscape orientations?**

**Answer:**
Portrait:

```css
@media (orientation: portrait) { ... }
```

Landscape:

```css
@media (orientation: landscape) { ... }
```

---

### **8️⃣ How to handle Retina or high‑resolution displays?**

**Answer:**

```css
@media screen and (min-device-pixel-ratio: 2) {
  /* Retina-specific styles */
}
```

---

### **9️⃣ How to style a webpage for printing?**

**Answer:**

```css
@media print {
  body { background: none; color: black; }
}
```

---

### **🔟 Best practice for using media queries**

**Answer:**
"I follow a **mobile‑first approach**.
Pehle chhoti screen ke liye default styles likhta hoon, phir `min-width` media queries se bada device support karta hoon.
Main breakpoints consistent rakhta hoon, relative units (`em`, `%`) use karta hoon aur Chrome DevTools me test karta hoon."

---

💡 **Pro Interview Tip:**
Agar tumse poocha jaye *"How do you make a website responsive without frameworks like Bootstrap?"*, tum confidently bolo:

> "Main mobile-first approach me media queries ka use karta hoon. Main har device ke liye specific breakpoints define karta hoon, font size aur layout adjust karta hoon, aur real devices & browser tools se test karta hoon."

---
