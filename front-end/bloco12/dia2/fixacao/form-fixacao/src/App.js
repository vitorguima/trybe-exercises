import React, { Component } from 'react';
import Name from './Name.js';
import Sex from './Sex.js';
import Describe from './Describe.js';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      sex: 'masculino',
      describe: '',
    }

    this.handleChanges = this.handleChanges.bind(this);
  }

  handleChanges({ target }) {
    const { value, name } = target;

    this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    return (
      <div>
        <form>
          <Name value={ this.state.name } onchange={ this.handleChanges }/>
          <Sex value={this.state.sex} onchange={this.handleChanges}/>
          <Describe value={this.state.describe} onchange={this.handleChanges}/>
        </form>
      </div>
    );
  }
}

