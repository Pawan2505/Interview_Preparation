import React, { Component } from "react";
import UserCard from "./components/UserCard";

class App extends Component {
  state = {
    show: true
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h1>React Class Component LifeCycle</h1>

        <button onClick={() => this.setState({ show: !this.state.show })}>
          {this.state.show ? "Hide Component" : "Show Component"}
        </button>

        {this.state.show && <UserCard />}
      </div>
    );
  }
}

export default App;
