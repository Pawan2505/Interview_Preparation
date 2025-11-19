import Child from "./Child";

export default function Parent() {
  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid gray" }}>
      <h2>Parent Component</h2>
      <Child />
    </div>
  );
}
