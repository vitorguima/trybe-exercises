import React, { Component } from 'react'

export default class Email extends Component {
  render() {
    const { value, onchange } = this.props;
    let error = undefined;

    if (value.length > 50) {error='limite máximo de caracteres: 50'};

    return (
      <React.Fragment>
        <label>
          Email:
          <input className="input" required maxLength="51" type="text" name="email" value={value} onChange={onchange} />
        </label>
        <span>{error ? error : ''}</span>
      </React.Fragment>
    )
  }
}
