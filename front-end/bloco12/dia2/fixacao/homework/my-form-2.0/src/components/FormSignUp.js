import React, { Component } from 'react'

export class FormSignUp extends Component {
  
  render() {
    const { onchange, values, namechange } = this.props;

    const brazilianState = ["AC", "AL", "AM", "AP", "BA", "CE", 
    "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", 
    "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]

    return (
      <div className="signup-container">
      <form className="signup-form">
      <fieldset className="fieldset-inputs">
      <h3>Personal Data</h3>
      <p>Fill the fields below with your personal information</p>
      <div className="form-input">
      <label htmlFor="name">
        Nome
      </label>
      <input 
        className="personal-input"
        name="name"
        type="text"
        maxLength="40"
        value={values.name}
        onChange={namechange}
        required>
      </input>
      </div>
      <div className="form-input">
      <label htmlFor="email">
        Email
      </label>
      <input 
        className="personal-input"
        name="email"
        type="email"
        maxLength="50"
        value={values.email}
        onChange={onchange}
        required>
      </input>
      </div>
      <div className="form-input">
      <label htmlFor="email">
        Cpf
      </label>
      <input 
        className="personal-input"
        name="cpf"
        type="text"
        maxLength="11"
        value={values.cpf}
        onChange={onchange}
        required>
      </input>
      </div>
      <div className="form-input">
      <label htmlFor="address">
        Endereço
      </label>
      <input 
        className="personal-input"
        name="address"
        type="text"
        maxLength="200"
        value={values.address}
        onChange={onchange}
        required>
      </input>
      </div>
      <div className="form-input">
      <label htmlFor="city">
        Cidade
      </label>
      <input 
        className="personal-input"
        name="city"
        type="text"
        maxLength="200"
        value={values.city}
        onChange={onchange}
        required>
      </input>
      </div>
      <div className="form-input">
      <label htmlFor="city">
        Estado
      </label>
      <select
        className="personal-input"
        name="state"
        value={values.city}
        onChange={onchange}
        required>
          {brazilianState.map((state) => 
          <option key={state} value={ state }>{ state }</option>)}
      </select>
      </div>
      <div className="form-input">
      <label htmlFor="home">
        Tipo de residência
      </label>
        <div 
        className="home-type"
        onChange={onchange}
        value={values.home}> 
          <input 
            type="radio" 
            value="house"
            name="home" 
          /> Casa
          <input 
            type="radio" 
            value="apartment" 
            name="home" 
          /> Apartamento
        </div>
      </div>
      </fieldset>
      <fieldset className="fieldset-inputs">
       <h3>Professional Data</h3>
       <p>Fill the fields below with your previous professional information</p>
       <div className="form-input">
       <label htmlFor="resume">
         Resumo do currículo
       </label>
       <textarea
         className="personal-input"
         name="resume"
         maxLength="1000"
         onChange={onchange}
         value={values.resume}
         required
       />
       </div>
       <div className="form-input">
       <label htmlFor="job">
         Nome do cargo
       </label>
       <textarea
         className="personal-input"
         name="job"
         maxLength="40"
         onChange={onchange}
         value={values.job}
         required
       />
       </div>
       <div className="form-input">
       <label htmlFor="email">
         Descrição do cargo
       </label>
       <input 
         className="personal-input"
         name="description"
         type="text"
         maxLength="500"
         onChange={onchange}
         value={values.description}
         required
       />
       </div>
      </fieldset>
      </form>
      </div>
    )
  }
}

export default FormSignUp
