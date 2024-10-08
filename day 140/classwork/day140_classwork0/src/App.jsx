import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>Current Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increase Count</button>
      </div>
    );
  }
}

export default Counter;
