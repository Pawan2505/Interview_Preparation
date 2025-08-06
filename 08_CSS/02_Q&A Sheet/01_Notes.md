
## 📌 **CSS Interview Rapid Fire Q\&A Sheet**

---

### **1️⃣ CSS vs CSS3**

**Q:** Difference?
**A:**

* **CSS** → Old version, basic styling.
* **CSS3** → Modules, animations, transitions, flexbox, grid, media queries, custom properties.

---

### **2️⃣ Inline vs Internal vs External CSS**

**Q:** Which is better?
**A:**

* **Inline** → In `style` attribute, high specificity, not reusable.
* **Internal** → In `<style>` tag inside HTML.
* **External** → Separate `.css` file, reusable, best for performance.

---

### **3️⃣ Block vs Inline vs Inline‑Block**

**Q:** Difference?
**A:**

* **Block** → Full width, new line (`div`, `p`)
* **Inline** → Only content width, no new line (`span`, `a`)
* **Inline-block** → Behaves like inline but accepts block properties.

---

### **4️⃣ Positioning**

**Q:** Types?
**A:**

* `static` (default),
* `relative` (offset from original),
* `absolute` (relative to nearest positioned parent),
* `fixed` (relative to viewport),
* `sticky` (hybrid of relative & fixed).

---

### **5️⃣ Flexbox**

**Q:** Main properties?
**A:**

* **Container**: `display: flex`, `justify-content`, `align-items`, `flex-wrap`
* **Items**: `flex-grow`, `flex-shrink`, `flex-basis`
* Row vs column layout.

---

### **6️⃣ Grid**

**Q:** Why use?
**A:** 2D layout system.
Example:

```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 10px;
```

---

### **7️⃣ CSS Units**

**Q:** `em` vs `rem`?
**A:**

* `em` → Relative to parent font size.
* `rem` → Relative to root (`html`) font size.
  Use `rem` for consistency.

---

### **8️⃣ Specificity Order**

**Q:** Which is highest?
**A:**
Inline style > ID selector > Class/attribute/pseudo-class > Element selector.
`!important` overrides all.

---

### **9️⃣ Pseudo‑classes vs Pseudo‑elements**

**Q:** Difference?
**A:**

* **Pseudo-class** → State-based (`:hover`, `:focus`)
* **Pseudo-element** → Creates virtual element (`::before`, `::after`)

---

### **🔟 Transitions vs Animations**

**Q:** Difference?
**A:**

* **Transition** → Smooth change on an event (hover, click).
* **Animation** → Runs automatically using `@keyframes`.

---

### **1️⃣1️⃣ Transform**

**Q:** Example?
**A:**

```css
transform: translate(50px, 20px) rotate(45deg) scale(1.2);
```

---

### **1️⃣2️⃣ z-index**

**Q:** Why not working sometimes?
**A:** Works only if element has a position other than `static`.
Stacking context affected by `opacity`, `transform`.

---

### **1️⃣3️⃣ Media Queries**

**Q:** Example?
**A:**

```css
@media (max-width: 768px) {
  body { font-size: 14px; }
}
```

---

### **1️⃣4️⃣ Box-sizing**

**Q:** `content-box` vs `border-box`?
**A:**

* **content-box** → Width = only content.
* **border-box** → Width includes padding & border.

---

### **1️⃣5️⃣ Overflow**

**Q:** Values?
**A:** `visible`, `hidden`, `scroll`, `auto`.

---

### **1️⃣6️⃣ CSS Variables**

**Q:** Example?
**A:**

```css
:root { --main-color: blue; }
div { color: var(--main-color); }
```

---

### **1️⃣7️⃣ RGBA vs Opacity**

**Q:** Difference?
**A:**

* `rgba(0,0,0,0.5)` → Only background semi-transparent.
* `opacity: 0.5` → Makes entire element (including text) semi-transparent.

---

### **1️⃣8️⃣ Background Properties**

**Q:** Fixed background?
**A:**

```css
background-attachment: fixed;
```

---

### **1️⃣9️⃣ clip-path**

**Q:** Why use?
**A:** Create shapes without images:

```css
clip-path: circle(50% at center);
```

---

### **2️⃣0️⃣ CSS Performance**

**Q:** How to optimize?
**A:**

* Minify CSS
* Combine selectors
* Avoid deep nesting
* Use external stylesheets

---

