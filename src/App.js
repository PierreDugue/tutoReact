import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent';

class App extends Component {

  constructor() {
    super();
    this.state = {
      message: "Test message",
      value: 0
    }
  }

  updateMessage = () => {
    this.setState({
      message: "my friend (from changed state)!"
    });
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1
    })
  }

  decrement = () => {
    this.setState({
      value: this.state.value - 1
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. {this.state.message}
          {this.state.value}
          <button onClick={this.updateMessage}>Click me!</button>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </p>
        <FirstComponent></FirstComponent>
      </div>
    );
  }
}

export default App;
