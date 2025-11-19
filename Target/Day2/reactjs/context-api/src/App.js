import { useState } from "react";
import { MessageContext } from "./context/MessageContext";
import Parent from "./components/Parent";

export default function App() {
  const [message] = useState("Hello from Context!");

  return (
    <MessageContext.Provider value={message}>
      <h1>Context API — Avoid Prop Drilling</h1>
      <Parent />
    </MessageContext.Provider>
  );
}
