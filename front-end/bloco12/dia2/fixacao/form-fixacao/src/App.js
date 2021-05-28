import React, { Component } from 'react'
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
          <label>
            Nome:
      <input type="text" name="name" onChange={ this.handleChanges} value={ this.state.name }/>
          </label>
          <label>
            Sexo
        <select name="sex" value={this.state.sex} onChange={this.handleChanges}>
              <option selected value="masculino">M</option>
              <option value="feminino">F</option>
            </select>
          </label>
          <label>
            Conte um pouco sobre você:
      <textarea name="describe" value={this.state.describe} onChange={ this.handleChanges }> textarea </textarea>
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}

