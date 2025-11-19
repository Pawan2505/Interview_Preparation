import React from "react";

function Child({ onClick }) {
  console.log("Child Rendered");

  return (
    <div style={{ marginTop: "20px" }}>
      <button onClick={onClick}>Click from Child</button>
    </div>
  );
}

export default React.memo(Child);
