import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    const { value, onchange } = this.props;
    return (
      <div>
         <label>
          Resumo do currículo
          <textarea name="resume" className="input" required maxLength="1000" value={value} onChange={onchange} />
        </label>
      </div>
    )
  }
}
