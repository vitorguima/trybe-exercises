import React, { Component } from 'react'

export default class Address extends Component {
  render() {
    const { value, onchange } = this.props;
    const changedValue = value.replace(/[^\w\s]/gi, '');
    let error = undefined;

    if (value.length > 200) {error='limite máximo de caracteres: 200'};

    return (
      <React.Fragment>
        <label>
          Endereço:
          <input className="input" required maxLength="200" type="text" name="address" value={changedValue} onChange={onchange} />
        </label>
        <span>{error ? error : ''}</span>
      </React.Fragment>
    )
  }
}
