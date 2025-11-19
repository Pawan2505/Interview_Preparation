import GrandChild from "./GrandChild";

export default function Child() {
  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px dashed gray" }}>
      <h3>Child Component</h3>
      <GrandChild />
    </div>
  );
}
