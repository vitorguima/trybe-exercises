import React, { Component } from 'react';

class Button2 extends Component {
  constructor() {
    super()
    this.state = {
      clickNumber: 0,
      className: 'greenButton',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState((beforeState, _props) => ({
      clickNumber: beforeState.clickNumber + 1
    }))
    
    if ((this.state.clickNumber + 1) % 2 === 0) {
      this.setState(() => ({
        className: 'greenButton'
      }))} else {
        this.setState(() => ({
          className: ''
        }))
      }
  }


  render() {
    return (
      <button className={this.state.className} onClick={ this.handleClick }>{ this.state.clickNumber }</button>
    );
  }
}

export default Button2;
