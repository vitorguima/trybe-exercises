import React, { Component } from 'react'

export default class Name extends Component {
  render() {
    const { onchange, name } = this.props;

    return (
      <div>
        <label>
          Nome:
      <input type="text" name="name" onChange={onchange} value={name} />
        </label>
        <label></label>
      </div>
    )
  }
}
