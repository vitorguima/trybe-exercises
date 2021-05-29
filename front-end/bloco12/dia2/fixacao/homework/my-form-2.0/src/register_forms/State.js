import React, { Component } from 'react'

export default class State extends Component {
  render() {
    const { value, onchange } = this.props;
    const brazilianStates = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

    return (
      <div>
        <label>
          Estado:
          <select className="select-state" required value={value} onChange={onchange} name="state">
            {brazilianStates.map((state) => 
               <option key={ state } value={ state }>{ state }</option> 
            )}
          </select>
        </label>
      </div>
    )
  }
}
