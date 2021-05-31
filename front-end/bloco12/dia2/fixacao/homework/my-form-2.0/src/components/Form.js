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
    this.handlerName = this.handlerName.bind(this);
  }

  handlerChanger(name, value) {

    this.setState(() => ({
      [name]: value,
    }))
  }

  handlerName({ target }) {
    const { name, value } = target;

    if (name === 'name') {
      value = value.toUpperCase()
    }

    this.handlerChanger(name, value);
  }

  render() {
    console.log(this.state);
    return (
      <FormSignUp 
        onchange={ this.handlerChanger } 
        values={ this.state }
      />
    )
  }
}
