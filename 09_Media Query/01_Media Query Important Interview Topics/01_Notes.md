## **Media Query Important Interview Topics**

---

### **1️⃣ What is a Media Query?**

* **Definition:**
  CSS ka feature jo different devices & screen sizes ke liye alag styles apply karne deta hai.
* Syntax:

```css
@media (condition) {
  /* CSS rules */
}
```

---

### **2️⃣ Common Use Cases**

* Responsive layouts (mobile, tablet, desktop).
* Hide/show elements based on screen size.
* Change font size, padding, margin for small screens.
* Switch from multi-column to single-column layout.

---

### **3️⃣ Media Query Syntax & Structure**

* **Basic example:**

```css
@media screen and (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

* **Parts:**

  * **Media type** → `all`, `screen`, `print`, `speech`.
  * **Media feature** → `max-width`, `min-width`, `orientation`.

---

### **4️⃣ min-width vs max-width**

* **min-width** → Styles apply **above** given width (mobile-first approach).
* **max-width** → Styles apply **below** given width (desktop-first approach).

Example:

```css
/* Mobile-first */
@media (min-width: 768px) { ... }

/* Desktop-first */
@media (max-width: 768px) { ... }
```

---

### **5️⃣ Common Breakpoints**

* Mobile: `max-width: 480px`
* Tablet: `max-width: 768px`
* Small laptop: `max-width: 1024px`
* Desktop: `min-width: 1200px`

---

### **6️⃣ Logical Operators in Media Queries**

* **and** → Combine conditions.

```css
@media screen and (min-width: 768px) and (max-width: 1024px) { ... }
```

* **, (comma)** → OR condition.

```css
@media (max-width: 600px), (orientation: landscape) { ... }
```

* **not** → Negate condition.

---

### **7️⃣ Orientation Queries**

* Portrait:

```css
@media (orientation: portrait) { ... }
```

* Landscape:

```css
@media (orientation: landscape) { ... }
```

---

### **8️⃣ Device Pixel Ratio (Retina Displays)**

* Target high-resolution displays:

```css
@media screen and (min-device-pixel-ratio: 2) {
  /* For Retina screens */
}
```

---

### **9️⃣ Print Media Queries**

* For printing:

```css
@media print {
  body { background: none; color: black; }
}
```

---

### **🔟 Best Practices**

✅ Use **mobile-first approach** with `min-width`.
✅ Test on real devices & Chrome DevTools.
✅ Use relative units (`em`, `%`) instead of fixed pixels for flexibility.
✅ Keep breakpoints consistent across project.

---

💡 **Interview Tip:**
Agar interviewer tumse pooche *"How will you make a website responsive?"*
Tum answer do:

> "I use a **mobile-first approach** with media queries, starting with small screens using `min-width`. I define breakpoints for mobile, tablet, and desktop, and adjust layouts, font sizes, and images accordingly. I also test using Chrome DevTools and responsive mode."

---

