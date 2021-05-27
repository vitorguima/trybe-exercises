import React, { Component } from 'react';

class Button1 extends Component {
  constructor() {
    super()
    this.state = {
      clickNumber: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((stateBefore, props) => ({
      clickNumber: stateBefore.clickNumber + 1
    }))
  }

  render() {
    return (
      <button onClick={ this.handleClick }>{this.state.clickNumber}</button>
    );
  }
}

export default Button1;
