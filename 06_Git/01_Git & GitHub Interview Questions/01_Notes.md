## **📌 Git & GitHub Interview Questions & Answers**

---

### **1️⃣ What is Git?**

**Answer:**
"Git ek **distributed version control system** hai jo code ka history track karta hai, changes manage karta hai, aur multiple developers ke saath collaborate karne deta hai."

---

### **2️⃣ What is GitHub?**

**Answer:**
"GitHub ek **cloud-based hosting service** hai jo Git repositories ko store aur manage karta hai.
Yaha se hum apna code remote team ke saath share kar sakte hain."

---

### **3️⃣ Difference between Git and GitHub**

**Answer:**

* **Git** → Version control tool (local).
* **GitHub** → Cloud platform for hosting Git repositories.

---

### **4️⃣ Common Git commands**

**Answer:**

```bash
git init          # New repo create
git clone <url>   # Remote repo copy
git add .         # Files stage karna
git commit -m ""  # Changes save karna
git push          # Local se remote bhejna
git pull          # Remote se latest lana
git status        # Current repo status check
```

---

### **5️⃣ What is `git clone` vs `git pull`?**

**Answer:**

* **clone** → Remote repo ka full copy banata hai local machine me (pehli baar).
* **pull** → Remote repo se latest changes laata hai (existing local repo me).

---

### **6️⃣ What is `git branch` and why use it?**

**Answer:**
"Branch ek parallel version hota hai code ka jo main branch ko affect kiye bina changes test karne deta hai.
Example: `feature-login`, `bugfix-UI`."

---

### **7️⃣ How to create and switch branches?**

**Answer:**

```bash
git branch feature-login    # New branch
git checkout feature-login  # Switch branch
# or in one step
git checkout -b feature-login
```

---

### **8️⃣ What is `git merge` vs `git rebase`?**

**Answer:**

* **merge** → Do branches ka history combine karta hai (extra merge commit create hota hai).
* **rebase** → Branch ka commit history rewrite karke clean banata hai.

---

### **9️⃣ What is `.gitignore`?**

**Answer:**
"`.gitignore` file me wo files/folders list hote hain jo Git track nahi karega.
Example: `node_modules/`, `.env`."

---

### **🔟 What is a Pull Request (PR)?**

**Answer:**
"Pull Request ek request hota hai apne branch ke changes ko main branch me merge karne ka, mostly GitHub/GitLab me hota hai."

---

### **1️⃣1️⃣ How to undo last commit?**

**Answer:**

```bash
git reset --soft HEAD~1  # Keep changes staged
git reset --hard HEAD~1  # Delete changes
```

---

### **1️⃣2️⃣ Difference between `git fetch` and `git pull`**

**Answer:**

* **fetch** → Sirf remote se latest changes download karta hai, merge nahi karta.
* **pull** → Fetch + Merge dono karta hai.

---

### **1️⃣3️⃣ What is the difference between `origin` and `upstream` in Git?**

**Answer:**

* **origin** → Tumhara own remote repo.
* **upstream** → Original repo jisse tumne fork kiya.

---

### **1️⃣4️⃣ Git Workflow (Basic)**

**Answer:**

1. **Clone** or **init** repo
2. Changes karo → `git add` karo
3. `git commit -m "message"`
4. `git push` remote par bhejo
5. Agar team ke saath kaam kar rahe ho to `git pull` latest lene ke liye.

---

