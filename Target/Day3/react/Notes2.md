
---

# 🔹 **Performance Optimization**

---

## **1️⃣ Improving UX when an API takes ~10 seconds + heavy UI rendering**

### 👉 Explanation:

Agar API 10 sec leti hai + UI heavy hai, to hum **user ko waiting feel nahi hone dete**.
Iske liye hum:

* **Skeleton loader / shimmer** dikhate hai
* **useTransition / Suspense** se heavy UI ko background me load karte hai
* **Chunking** → UI ko small pieces me render karte hai
* **AbortController** → user ne page change kiya to unnecessary API cancel

### 👉 Example (Skeleton + useTransition):

```jsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  // Heavy UI render
  setData(bigList);
});
```

👉 **Result:** UI responsive rahega, user ko loading smooth dikhegi.

---

## **2️⃣ Handling 10,000+ records efficiently (when lazy loading still lags)**

### 👉 Simple Explanation:

10k+ records me problem re-render ki hoti hai, list ki nahi.
Solution:

* **Windowing** / **Virtualization** → React-window / React-virtualized
* **Memo + useCallback** → child unnecessary re-render avoid
* **Flat list structure**
* **Web workers** for background processing

### 👉 Simple Example (Virtualized List):

```jsx
import { FixedSizeList } from "react-window";

<FixedSizeList
  height={400}
  width={300}
  itemSize={35}
  itemCount={10000}
>
  {({ index, style }) => <div style={style}>Row {index}</div>}
</FixedSizeList>
```

👉 Ye sirf wo items render karta hai jo screen pe visible ho.

---

## **3️⃣ Reducing component render cost + improving perceived performance**

### 👉 Explanation:

Component heavy lag raha ho?
To hum:

* **React.memo** (stop useless re-renders)
* **useMemo** (heavy calculations cache)
* **Code splitting** → big component ko parts me todna
* **Pre-fetching** → data pehle hi load karna
* **Suspense boundary** → loading ko locality me rakhna

### 👉 Example (useMemo):

```jsx
const expensiveValue = useMemo(() => {
  return slowCalcuation(num);
}, [num]);
```

👉 Heavy calculation har render me repeat nahi hoga.

---

# 🔹 Debugging & Behaviour — Simple & Practical Answers

---

## **4️⃣ Debugging a useEffect where an API call fires multiple times**

### 👉 Explanation:

useEffect API bar-bar fire hoti hai usually in cases:

* Missing dependency array → `useEffect(() => {...})`
* Incorrect dependencies → values change hoti rehti hai
* Strict Mode (dev only) → runs effect twice
* Passing new objects in deps → {} , [] , functions → always new
* Parent re-render → props change → effect re-run

### 👉 Fix: Add correct dependencies + memoization.

### 👉 Example (Problem):

```jsx
useEffect(() => {
  fetchData();   // runs again and again
});
```

### 👉 Fix:

```jsx
useEffect(() => {
  fetchData();
}, []); // run only once
```

---

## **5️⃣ Identifying dependency changes causing unnecessary re-renders**

### 👉 Explanation:

Unnecessary re-render tab hota hai jab dependency “har render me new ban jati ho”.

Common culprits:

* Functions created inside component
* Objects / arrays created inline
* Props not memoized
* Parent re-render ho raha ho

### 👉 How to debug:

* Add logs to see what changes every render
* Wrap child in **React.memo** and see which prop is changing
* useCallback/useMemo to stabilize references

### 👉 Example:

```jsx
const handleClick = () => {      // new function every render
  console.log("Clicked");
};
```

### Fix:

```jsx
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
```

---

# ⭐ **Summary**

### ✔ 10-sec API

Skeleton + useTransition + chunking → smooth UX.

### ✔ 10,000+ Records

Virtualization + memoization + web workers.

### ✔ Reduce Render Cost

React.memo, useMemo, useCallback, code-splitting.

### ✔ useEffect runs multiple times

Wrong deps, missing deps, Strict Mode, new objects/functions.

### ✔ Identify dependency changes

Check function/object recreation, parent re-renders, memo used or not.

---

