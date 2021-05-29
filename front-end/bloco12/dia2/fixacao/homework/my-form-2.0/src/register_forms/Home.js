import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    const { value, onchange } = this.props;

    return (
      <div className="select-home" onChange={onchange} value={value}>
        <label>Casa
        <input type="radio" name="home" value="house" />
        </label>
        <label>Apartamento
        <input type="radio" name="home" value="apartment" />
        </label>
      </div>
    )
  }
}
