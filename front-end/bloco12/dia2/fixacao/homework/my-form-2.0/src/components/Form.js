import React, { Component } from 'react'
import FormSignUp from './FormSignUp';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: '',
  home: '',
  resume: '',
  job: '',
  description: '',
}

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = INITIAL_STATE;
    this.handlerChanger = this.handlerChanger.bind(this);
  }

  handlerChanger({ target }) {
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }))
  }

  render() {
    console.log(this.state);
    return (
      <FormSignUp 
        onchange={ this.handlerChanger } 
        states={ this.state }
      />
    )
  }
}
