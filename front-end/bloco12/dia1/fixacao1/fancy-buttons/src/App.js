import React, { Component } from 'react';
import './App.css';
import Button1 from './Button1';
import Button2 from './Button2';

function handleClick() {
  console.log('Clicou no botão 1!')
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={handleClick}>Botão 1</button>
        <Button1 />
        <Button2 />
      </div>
    );
  }
}

export default App;
