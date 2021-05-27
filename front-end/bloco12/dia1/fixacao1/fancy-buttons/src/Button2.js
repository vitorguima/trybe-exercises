import React, { Component } from 'react';

class Button2 extends Component {
  constructor() {
    super()
    this.state = {
      clickNumber: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((beforeState, _props) => ({
      clickNumber: beforeState.clickNumber + 1
    }))
  }

  render() {
    return (
      <button onClick={ this.handleClick }>{ this.state.clickNumber }</button>
    );
  }
}

export default Button2;
