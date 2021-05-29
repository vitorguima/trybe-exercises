import React, { Component } from 'react'

export default class JobDescription extends Component {
  render() {
    const { value, onchange } = this.props;
    return (
      <div>
        <label>
          Cidade:
          <input className="input" required maxLength="500" type="text" name="jobDescription" value={value} onChange={onchange} />
        </label>
      </div>
    )
  }
}
