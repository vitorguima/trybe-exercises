import React, { Component } from 'react';

class Button2 extends Component {
  constructor() {
    super()
    console.log(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log(this);
    console.log('Clicou no botão 3!')
  }


  render() {
    return (
      <button onClick={ this.handleClick }>Botão 2</button>
    );
  }
}

export default Button2;
