## **📌 jQuery Interview Q\&A**

---

### **1️⃣ What is jQuery and why is it used?**

**Answer:**
"jQuery ek lightweight JavaScript library hai jo DOM manipulation, events, animation aur AJAX ko easy banata hai.
Pehle ye cross-browser issues solve karne me bahut helpful tha, isliye widely used hota tha."

---

### **2️⃣ How to include jQuery in a project?**

**Answer:**

* **CDN method:**

```html
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
```

* **Local method:** jQuery file download karke `<script src="jquery.min.js"></script>`.

---

### **3️⃣ What is the difference between `$(document).ready()` and `window.onload`?**

**Answer:**

* `$(document).ready()` → DOM ready hote hi run hota hai (faster).
* `window.onload` → Tab run hota hai jab saare resources (images, CSS) load ho jayein.

Example:

```js
$(document).ready(function(){
  console.log("DOM Ready!");
});
```

---

### **4️⃣ How to select elements in jQuery?**

**Answer:**

* By ID → `$("#id")`
* By Class → `$(".class")`
* By Tag → `$("p")`
* By Attribute → `$("[type='text']")`

---

### **5️⃣ How to change CSS using jQuery?**

**Answer:**

```js
$("#box").css("color", "red");
```

---

### **6️⃣ How to add/remove/toggle a class in jQuery?**

**Answer:**

```js
$("#box").addClass("highlight");
$("#box").removeClass("highlight");
$("#box").toggleClass("highlight");
```

---

### **7️⃣ How to handle click event in jQuery?**

**Answer:**

```js
$("#btn").click(function(){
  alert("Button clicked!");
});
```

---

### **8️⃣ Difference between `.on()` and `.bind()`?**

**Answer:**

* `.bind()` → Old method (less flexible).
* `.on()` → Recommended, supports event delegation.
  Example:

```js
$(document).on("click", ".btn", function(){
  alert("Dynamic button clicked!");
});
```

---

### **9️⃣ How to do animation in jQuery?**

**Answer:**

```js
$("#box").slideUp(1000).slideDown(1000);
$("#box").fadeOut(500).fadeIn(500);
```

---

### **🔟 How to make an AJAX request in jQuery?**

**Answer:**

```js
$.ajax({
  url: "/data",
  method: "GET",
  success: function(res){
    console.log(res);
  }
});
```

---

### **1️⃣1️⃣ What is chaining in jQuery?**

**Answer:**
"Ek hi element par multiple actions ek saath likhna."
Example:

```js
$("#box").css("color", "red").slideUp(2000).slideDown(2000);
```

---

### **1️⃣2️⃣ What is `.noConflict()` in jQuery?**

**Answer:**
"Jab `$` kisi aur library (like Prototype.js) se conflict kare to use solve karne ke liye."

```js
var jq = $.noConflict();
jq("#box").text("Hello");
```

---

💡 **Pro Interview Tip:**
Agar tumse poocha jaye *"Why jQuery when we have plain JavaScript?"*, bolo:

> "Earlier JavaScript me DOM manipulation aur AJAX ka code lamba aur inconsistent hota tha across browsers. jQuery ne ise short aur compatible banaya. Ab modern JavaScript me kaafi improvement hui hai, lekin legacy projects me jQuery abhi bhi kaam me aata hai."

---
