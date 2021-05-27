import React, { Component } from 'react';

function handleClick() {
  console.log('Clicou no botão 3!')
}

class Button2 extends Component {
  render() {
    return (
        <button onClick={handleClick}>Botão 2</button>
    );
  }
}

export default Button2;
