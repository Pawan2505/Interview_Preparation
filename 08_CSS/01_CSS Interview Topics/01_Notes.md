## 📌 **CSS Interview Topics**

---

### **1️⃣ CSS Selectors**

* **Basic selectors** → `element`, `.class`, `#id`
* **Combinators** → `div p`, `div > p`, `div + p`, `div ~ p`
* **Attribute selectors** → `[type="text"]`, `[href^="https"]`
* **Pseudo-classes** → `:hover`, `:focus`, `:nth-child()`
* **Pseudo-elements** → `::before`, `::after`

---

### **2️⃣ Box Model**

* **Content → Padding → Border → Margin**
* `box-sizing: border-box` vs `content-box`
* Interview trap → Difference between `inline`, `block`, `inline-block`

---

### **3️⃣ Positioning**

* `static`, `relative`, `absolute`, `fixed`, `sticky`
* **Relative + Absolute combo** → Child absolute positioning inside parent

---

### **4️⃣ Flexbox**

* `display: flex`
* `justify-content`, `align-items`, `align-content`
* `flex-wrap`, `flex-grow`, `flex-shrink`, `flex-basis`
* Interview trap → Difference between `align-items` vs `align-content`

---

### **5️⃣ CSS Grid**

* `display: grid`
* `grid-template-columns`, `grid-template-rows`
* `gap`, `grid-column`, `grid-row`
* `fr` unit & `minmax()`

---

### **6️⃣ Responsive Design**

* **Media Queries** → `@media (max-width: 768px) { ... }`
* Relative units → `%`, `em`, `rem`, `vw`, `vh`
* Interview trap → Difference between `em` vs `rem`

---

### **7️⃣ CSS Units**

* **Absolute** → `px`, `cm`
* **Relative** → `%`, `em`, `rem`, `vw`, `vh`
* When to use `rem` for consistent scaling

---

### **8️⃣ Colors**

* Named colors, HEX, RGB, RGBA, HSL, HSLA
* Transparency with `rgba` & `opacity`

---

### **9️⃣ CSS Specificity & Inheritance**

* Specificity order → Inline > ID > Class > Element
* How `!important` overrides styles
* Interview trap → Why sometimes styles don’t apply?

---

### **🔟 Transitions & Animations**

* Transition → `transition: all 0.3s ease;`
* Animation → `@keyframes`, `animation-duration`, `animation-iteration-count`
* Interview trap → Difference between `transition` vs `animation`

---

### **1️⃣1️⃣ Transform**

* `transform: translate(), scale(), rotate(), skew()`
* Combining multiple transforms

---

### **1️⃣2️⃣ Pseudo-classes & Pseudo-elements**

* Pseudo-class → `:hover`, `:nth-child()`
* Pseudo-element → `::before`, `::after`
* Use case → Add icons, shapes, or decorations without extra HTML

---

### **1️⃣3️⃣ CSS Variables**

```css
:root {
  --main-color: blue;
}
div {
  color: var(--main-color);
}
```

* Interview trap → Difference between CSS variables & SASS variables

---

### **1️⃣4️⃣ Z-index & Stacking Context**

* Controls layering of elements
* `z-index` works only on positioned elements
* Stacking context changes with `position`, `opacity`, `transform`

---

### **1️⃣5️⃣ Overflow**

* `overflow: visible`, `hidden`, `scroll`, `auto`
* Interview trap → Difference between `overflow-x` and `overflow-y`

---

### **1️⃣6️⃣ Background Properties**

* `background-color`, `background-image`, `background-size`, `background-repeat`
* `background-attachment: fixed` for parallax effect

---

### **1️⃣7️⃣ CSS Functions**

* `calc()`, `var()`, `min()`, `max()`, `clamp()`
* Real example:

```css
font-size: clamp(1rem, 2vw, 2rem);
```

---

### **1️⃣8️⃣ Shadows & Effects**

* `box-shadow`, `text-shadow`
* `filter: blur()`, `filter: brightness()`

---

### **1️⃣9️⃣ Clip-path & Shape**

* Create non-rectangular shapes:

```css
clip-path: circle(50% at center);
```

---

### **2️⃣0️⃣ Modern CSS Features**

* `aspect-ratio`
* `backdrop-filter` for glassmorphism
* CSS nesting (in latest specs)

---

