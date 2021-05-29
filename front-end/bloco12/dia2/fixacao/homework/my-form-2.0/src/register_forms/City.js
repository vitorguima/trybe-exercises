import React, { Component } from 'react'

export default class City extends Component {
  render() {
    const { value, onchange, onblur } = this.props;
    let error = undefined;

    if (value.length > 28) {error='limite máximo de caracteres: 28'};

    return (
      <React.Fragment>
        <label>
          Cidade:
          <input className="input" required maxLength="29" type="text" name="city" value={value} onChange={onchange} onBlur={onblur}/>
        </label>
        <span>{error ? error : ''}</span>
      </React.Fragment>
    )
  }
}
