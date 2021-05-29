import React, { Component } from 'react'

export default class Name extends Component {
  render() {
    const { value, onchange } = this.props;
    const valueUpperCase = value.toUpperCase();
    let error = undefined

    if (value.length > 40) {error='limite máximo de caracteres: 40'};

    return (
      <div>
        <label>
          Nome:
          <input className="input" required maxLength="41" type="text" name="name" value={ valueUpperCase } onChange={ onchange }/>
        </label>
        <span>{ error ? error : '' }</span>
        </div>
    )
    
  }
}
