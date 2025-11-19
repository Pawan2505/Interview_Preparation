import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>React Lifecycle Function Components</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Component" : "Show Component"}
      </button>

      {show && <UserCard />}
    </div>
  );
}

export default App;
