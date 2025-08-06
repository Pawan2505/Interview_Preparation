## **📌 jQuery Important Interview Topics**

---

### **1️⃣ Basics of jQuery**

* What is jQuery?
  → A lightweight JavaScript library for DOM manipulation, event handling, animations, and AJAX.
* Why use jQuery?
  → Less code, cross-browser compatibility, built-in utilities.

---

### **2️⃣ jQuery Selectors**

* Basic: `$("p")`, `$("#id")`, \$(".class")
* Attribute: `$("[href]")`, `$("[type='text']")`
* Hierarchy:

  * Descendant: `$("div p")`
  * Child: `$("div > p")`
  * Sibling: `$("h1 + p")`
* Pseudo selectors: `:first`, `:last`, `:eq()`, `:even`, `:odd`, `:contains()`

---

### **3️⃣ DOM Manipulation**

* `.html()`, `.text()`, `.val()`
* `.attr()`, `.removeAttr()`
* `.addClass()`, `.removeClass()`, `.toggleClass()`
* `.css()` → Get/Set CSS properties
* `.append()`, `.prepend()`, `.before()`, `.after()`

---

### **4️⃣ Events in jQuery**

* `.click()`, `.dblclick()`, `.hover()`, `.mouseenter()`, `.mouseleave()`
* Keyboard: `.keydown()`, `.keyup()`
* Form: `.submit()`, `.change()`, `.focus()`, `.blur()`
* Event Binding: `.on()` vs `.bind()`
* Event Delegation: `$(parent).on("click", "child", function(){ ... })`

---

### **5️⃣ Effects & Animations**

* `.show()`, `.hide()`, `.toggle()`
* `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`
* `.slideDown()`, `.slideUp()`, `.slideToggle()`
* `.animate()` → Custom animations

---

### **6️⃣ Traversing**

* `.parent()`, `.parents()`, `.children()`
* `.siblings()`, `.next()`, `.prev()`
* `.find()`, `.closest()`
* `.each()` → Loop through elements

---

### **7️⃣ AJAX with jQuery**

* `.load()` → Load data into element
* `.get()`, `.post()` → Simple requests
* `$.ajax()` → Advanced AJAX requests
  Example:

```js
$.ajax({
  url: "/data",
  method: "GET",
  success: function(res){ console.log(res); }
});
```

---

### **8️⃣ jQuery Utility Methods**

* `$.each()` → Iterate arrays/objects
* `$.trim()` → Remove whitespace
* `$.isArray()` → Check array
* `$.extend()` → Merge objects

---

### **9️⃣ Chaining**

* Perform multiple actions on same element:

```js
$("#box").css("color", "red").slideUp(2000).slideDown(2000);
```

---

### **🔟 No Conflict Mode**

* Use if `$` conflicts with another library:

```js
var jq = $.noConflict();
jq("#id").text("Hello");
```

---

### **1️⃣1️⃣ Difference Between `$(document).ready()` and `window.onload`**

* `$(document).ready()` → Runs when DOM is ready (faster).
* `window.onload` → Runs when all resources (images, CSS, scripts) are loaded.

---

💡 **Interview Tip:**
Agar interviewer bole *"Why use jQuery when we have JavaScript?"*, tum bolo:

> "Earlier jQuery made DOM manipulation, AJAX, and cross-browser compatibility much easier than plain JavaScript. Even though modern JS and frameworks like React reduce the need for jQuery, it’s still used in legacy projects and quick prototyping."

---
