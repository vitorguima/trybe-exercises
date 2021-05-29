import React, { Component } from 'react'

export default class Cpf extends Component {
  render() {
    const { value, onchange } = this.props;
    let error = undefined;

    if (value.length > 11) {error='limite máximo de caracteres: 11'};

    return (
      <div>
        <label>
          Cpf:
          <input className="input" required maxLength="11" type="text" name="cpf" value={value} onChange={onchange} />
        </label>
        <span>{error ? error : ''}</span>
      </div>
    )
  }
}
