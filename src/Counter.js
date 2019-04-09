import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.increment}>+</button>
        <span>{this.props.counter}</span>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ counter: state.counter });

export default connect(mapStateToProps)(Counter);
