## 📌 **HTML Interview Topics & Key Points**

---

### **1️⃣ Basic HTML Structure**

* **Definition:** HyperText Markup Language → Web ka skeleton.
* **Basic layout:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

* Interview Tip → Kabhi kabhi poochte hain:
  **"Why do we write `<!DOCTYPE html>`?"**
  Answer → Browser ko batata hai ki ye HTML5 document hai.

---

### **2️⃣ Semantic HTML**

* Tags with meaning — e.g., `<header>`, `<main>`, `<footer>`, `<article>`, `<nav>`.
* SEO & accessibility improve hota hai.
* Example:

```html
<header>
  <h1>Blog Title</h1>
</header>
<main>
  <article>
    <h2>Post Title</h2>
    <p>Post content...</p>
  </article>
</main>
<footer>
  <p>© 2025 My Blog</p>
</footer>
```

* Interview Trap → Don’t use `<div>` everywhere, use semantic tags where possible.

---

### **3️⃣ Block vs Inline Elements**

| Block Elements          | Inline Elements          |
| ----------------------- | ------------------------ |
| Take full width         | Take only required width |
| Start from new line     | Continue in same line    |
| Example: `<div>`, `<p>` | Example: `<span>`, `<a>` |

---

### **4️⃣ Forms & Input Types**

* Controlled via `<form>` tag.
* Common inputs: `text`, `email`, `password`, `checkbox`, `radio`, `file`, `date`, `number`.
* Example:

```html
<form>
  <input type="text" placeholder="Name" required>
  <input type="email" placeholder="Email" required>
  <button type="submit">Submit</button>
</form>
```

* Interview Tip → Difference between `GET` and `POST` in form submission.

---

### **5️⃣ HTML Attributes**

* **Global attributes:** `id`, `class`, `title`, `style`, `data-*`.
* **Boolean attributes:** `disabled`, `checked`, `readonly`.
* Example:

```html
<input type="checkbox" checked>
```

---

### **6️⃣ Media in HTML**

* Images:

```html
<img src="image.jpg" alt="Description" width="300">
```

* Audio:

```html
<audio controls>
  <source src="song.mp3" type="audio/mpeg">
</audio>
```

* Video:

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
</video>
```

---

### **7️⃣ Hyperlinks**

```html
<a href="https://example.com" target="_blank">Visit Site</a>
```

* `target="_blank"` → Opens in new tab.

---

### **8️⃣ Tables**

```html
<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Pawan</td>
    <td>25</td>
  </tr>
</table>
```

* Interview Tip → Difference between `<th>`, `<td>` and `<caption>`.

---

### **9️⃣ Lists**

* Ordered:

```html
<ol>
  <li>HTML</li>
  <li>CSS</li>
</ol>
```

* Unordered:

````html
<ul>
  <li>HTML</li>
  <li>CSS</li>
</ul>
``>
- Description:
```html
<dl>
  <dt>HTML</dt>
  <dd>Markup Language</dd>
</dl>
````

---

### **🔟 Meta Tags**

* SEO & responsiveness:

```html
<meta charset="UTF-8">
<meta name="description" content="Web Development">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

* `viewport` → Mobile responsive ke liye important.

---

## 🎯 **Common HTML Interview Questions**

1. Difference between HTML & HTML5
2. What is Semantic HTML & why use it?
3. Difference between `id` and `class`
4. Block vs Inline elements
5. Difference between `GET` and `POST` in forms
6. What is `data-*` attribute?
7. Why use `alt` attribute in images?
8. What are HTML entities? (Example: `&lt;` for `<`)
9. Difference between `<strong>` and `<b>`
10. What is the difference between `<em>` and `<i>`?

---
