import React, { Component } from 'react'
import FormSignUp from './FormSignUp';
import RenderFields from './RenderFields';

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
  enter: 'false',
  description: '',
  submition: 'false',
}

export default class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = INITIAL_STATE;
    this.handlerChanger = this.handlerChanger.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handlerBlur = this.handlerBlur.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  updateState(name, value) {

    this.setState(() => ({
      [name]: value,
    }))
  }

  handlerChanger({ target }) {
    let { name, value } = target;

    if (name === 'name') {
      value = value.toUpperCase()
    }
    
    this.updateState(name, value);
  }

  handlerBlur({ target }) {
    let { name, value } = target;

    if (name === 'city' && value.match(/^\d/)) {
      value = '';
    }

    this.updateState(name, value);
  }

  handleMouseEnter({ target }) {
    let { name } = target;
    let enter = this.state.enter;

    if (name === 'job' && enter === 'false') {
      window.alert('Preencha com cuidado esta informação.');
    }

    this.updateState('enter', 'true')
  }

  handlerSubmit(event) {
    event.preventDefault();
    this.updateState('submit', 'true');
  }

  render() {
    console.log(this.state);
    return (
      <div>
      <FormSignUp 
        onchange={ this.handlerChanger } 
        values={ this.state }
        onblur={ this.handlerBlur }
        entermouse={ this.handleMouseEnter }
        onsubmit={ this.handlerSubmit }
      />
      {this.state.submit === 'true' ? <RenderFields values={ this.state } /> : ''}
      </div>
    )
  }
}
