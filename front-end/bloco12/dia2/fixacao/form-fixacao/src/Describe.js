import React, { Component } from 'react'

export default class Describe extends Component {
  render() {
    const { value, onchange } = this.props;

    return (
      <div>
        <label>
          Conte um pouco sobre você:
      <textarea name="describe" value={value} onChange={onchange}> textarea </textarea>
        </label>
        <input type="submit" value="Enviar" />
      </div>
    )
  }
}
