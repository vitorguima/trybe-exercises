import React, { Component } from 'react'

export default class Sex extends Component {
  render() {
    const { onchange, value } = this.props;

    return (
      <div>
        <label>
          Sexo
        <select name="sex" value={value} onChange={onchange}>
            <option selected value="masculino">M</option>
            <option value="feminino">F</option>
          </select>
        </label>
      </div>
    )
  }
}
