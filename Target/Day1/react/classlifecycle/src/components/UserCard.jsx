import React, { Component } from "react";

class UserCard extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      user: null
    };

    console.log("Constructor Called (Initialization)");
  }

  // Runs once after component appears → componentDidMount
  componentDidMount() {
    console.log("componentDidMount → Component Mounted");

    // Fake API call
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(data => this.setState({ user: data }));

    // example interval
    this.timer = setInterval(() => {
      console.log("Interval Running...");
    }, 2000);
  }

  // Runs every time state or props updated → componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`componentDidUpdate → Count changed to: ${this.state.count}`);
    }
  }

  // Runs before component removed → componentWillUnmount
  componentWillUnmount() {
    console.log("componentWillUnmount → Component Removed");

    // stop interval
    clearInterval(this.timer);
  }

  render() {
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
        <h2>User Info (Class Component)</h2>

        {this.state.user ? (
          <>
            <p><b>Name:</b> {this.state.user.name}</p>
            <p><b>Email:</b> {this.state.user.email}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}

        <hr />

        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increase
        </button>
      </div>
    );
  }
}

export default UserCard;
