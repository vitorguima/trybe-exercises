import React, { Component } from 'react'

export default class Submit extends Component {
  render() {
    const { state } = this.props;
    const arrayOfInputs = Object.values(state);
    return (
      <div>
        <input className="submit-button" type="submit" name="submit" onClick={ () => arrayOfInputs.map((input) => <div>{ input }</div>)} />
      </div>
    )
  }
}
