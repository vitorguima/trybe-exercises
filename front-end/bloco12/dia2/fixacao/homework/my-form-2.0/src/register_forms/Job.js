import React, { Component } from 'react'

export default class Job extends Component {
  render() {
    const { value, onchange } = this.props;

    return (
      <div>
        <label >
          Cargo atual
          <textarea name="job" required maxLength="500" value={value} onChange={onchange} />
        </label>
      </div>
    )
  }
}
