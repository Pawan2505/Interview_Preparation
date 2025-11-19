import { useMemo, useState } from "react";

export default function ExpensiveCalculation() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState(false);

  // Expensive function (takes heavy time)
  const slowDouble = (num) => {
    console.log("Running slow calculation...");
    for (let i = 0; i < 500000000; i++) {} // heavy loop
    return num * 2;
  };

  // useMemo: memoize slow result
  const doubleNumber = useMemo(() => {
    return slowDouble(number);
  }, [number]);

  return (
    <div
      style={{
        padding: "20px",
        background: theme ? "#222" : "#fafafa",
        color: theme ? "white" : "black",
      }}
    >
      <h2>useMemo Example</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <p>Result (Double): {doubleNumber}</p>

      <button onClick={() => setTheme(!theme)}>
        Change Theme
      </button>
    </div>
  );
}
