import { useEffect, useState } from "react";

function UserCard() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);

  // Runs only once → ComponentDidMount
  useEffect(() => {
    console.log("   Component Mounted");
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => setUser(data));

    //Cleanup → ComponentWillUnmount
    return () => {
      console.log("Component Unmounted (Cleaned)");
    };
  }, []);

  // Runs whenever count changes → ComponentDidUpdate
  useEffect(() => {
    if (count > 0) {
      console.log(`Component Updated → Count: ${count}`);
    }
  }, [count]);

  return (
    <div
      style={{
        width: "300px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px"
      }}
    >
      <h2>User Info</h2>

      {user ? (
        <>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}

      <hr />
      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default UserCard;
