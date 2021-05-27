import React, { Component } from 'react';
import './App.css';
import Button1 from './Button1';
import Button2 from './Button2';

class App extends Component {
  constructor() {
    super()
    this.state = {
      clickNumber: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((stateBefore, _props) => ({
      clickNumber: stateBefore.clickNumber + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>{this.state.clickNumber}</button>
        <Button1 />
        <Button2 />
      </div>
    );
  }
}

export default App;
