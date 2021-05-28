import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nameState: '',
      sexState: 'masculino',
      describeState: '',
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleTextArea = this.handleTextArea.bind(this);
  }

  handleNameChange(event) {
    this.setState(() => ({
      nameState: event.target.value,
    }));
  }

  handleSelect(event) {
    this.setState(() => ({
      sexState: event.target.value,
    }))
  }

  handleTextArea(event) {
    this.setState(() => ({
      describeState: event.target.value,
    }))
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Nome:
      <input type="text" name="name" onChange={ this.handleNameChange } value={ this.state.nameState }/>
          </label>
          <label>
            Sexo
        <select value={this.state.sexState} onChange={this.handleSelect}>
              <option selected value="masculino">M</option>
              <option value="feminino">F</option>
            </select>
          </label>
          <label>
            Conte um pouco sobre você:
      <textarea value={this.state.describeState} onChange={this.handleTextArea}> textarea </textarea>
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

