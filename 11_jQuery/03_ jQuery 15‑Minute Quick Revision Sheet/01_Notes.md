## **jQuery 15‑Minute Quick Revision Sheet**

---

### **1️⃣ Basics**

* **jQuery** → Lightweight JavaScript library.
* **Purpose** → Easy DOM manipulation, events, animations, AJAX.
* **Include**:

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

* **Syntax**:

```js
$(selector).action();
```

---

### **2️⃣ Selectors**

* **Basic**:
  `$("#id")`, `$(".class")`, `$("p")`
* **Attribute**:
  `$("[href]")`, `$("[type='text']")`
* **Hierarchy**:
  Descendant → `$("div p")`
  Child → `$("div > p")`
  Sibling → `$("h1 + p")`
* **Pseudo**:
  `:first`, `:last`, `:eq(2)`, `:even`, `:odd`, `:contains('text')`

---

### **3️⃣ DOM Manipulation**

* **Content**: `.html()`, `.text()`, `.val()`
* **Attributes**: `.attr()`, `.removeAttr()`
* **Classes**: `.addClass()`, `.removeClass()`, `.toggleClass()`
* **CSS**: `.css("color", "red")`
* **Insert**: `.append()`, `.prepend()`, `.before()`, `.after()`
* **Remove**: `.remove()`, `.empty()`

---

### **4️⃣ Events**

* **Mouse**: `.click()`, `.dblclick()`, `.hover()`, `.mouseenter()`, `.mouseleave()`
* **Keyboard**: `.keydown()`, `.keyup()`
* **Form**: `.submit()`, `.change()`, `.focus()`, `.blur()`
* **Bind / Delegation**:
  `.on("click", selector, function(){ ... })`

---

### **5️⃣ Effects & Animations**

* Show/Hide: `.show()`, `.hide()`, `.toggle()`
* Fade: `.fadeIn()`, `.fadeOut()`, `.fadeToggle()`
* Slide: `.slideUp()`, `.slideDown()`, `.slideToggle()`
* Custom animation:

```js
$("#box").animate({left: '250px'}, 1000);
```

---

### **6️⃣ Traversing**

* **Parent/Child**: `.parent()`, `.parents()`, `.children()`
* **Siblings**: `.siblings()`, `.next()`, `.prev()`
* **Finding**: `.find()`, `.closest()`
* **Looping**: `.each(function(index, element){ ... })`

---

### **7️⃣ AJAX**

* **Simple**: `.load("file.html")`
* **GET**:

```js
$.get("/data", function(res){ console.log(res); });
```

* **POST**:

```js
$.post("/submit", {name:"Pawan"}, function(res){ ... });
```

* **Advanced**:

```js
$.ajax({
  url: "/data",
  method: "GET",
  success: function(res){ console.log(res); }
});
```

---

### **8️⃣ Utility Functions**

* `$.each()` → Loop arrays/objects
* `$.trim()` → Remove whitespace
* `$.isArray()` → Check array
* `$.extend()` → Merge objects

---

### **9️⃣ Chaining**

* Multiple actions on same element:

```js
$("#box").css("color", "red").slideUp(2000).slideDown(2000);
```

---

### **🔟 No Conflict Mode**

* Use if `$` conflicts:

```js
var jq = $.noConflict();
jq("#id").text("Hello");
```

---

### **1️⃣1️⃣ Ready vs Load**

* `$(document).ready()` → Runs when DOM is ready.
* `window.onload` → Runs when full page (images, CSS) loaded.

---

💡 **Interview Pro Tip:**
Agar tumse pooche *"Why use jQuery today?"*, bolo:

> "Legacy projects, quick prototyping, and cross-browser support ke liye abhi bhi useful hai. Modern JS strong ho gaya hai, lekin jQuery abhi bhi production me milta hai."

---

