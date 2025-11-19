import { useState, useCallback } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState(false);

  // Without useCallback → new function on every render
  // Causes child to re-render unnecessary
  // ✔ With useCallback → memoized function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div
      style={{
        background: theme ? "#333" : "#eee",
        color: theme ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>

      <button onClick={increment}>Increase Count</button>

      <button onClick={() => setTheme(!theme)}>
        Toggle Theme
      </button>

      <Child onClick={increment} />
    </div>
  );
}
