import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";

export default function GrandChild() {
  const message = useContext(MessageContext);

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px dotted gray" }}>
      <h4>GrandChild Component</h4>
      <p style={{ color: "blue" }}>{message}</p>
    </div>
  );
}
