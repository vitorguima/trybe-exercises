import React, { Component } from 'react';
import Name from './register_forms/Name';
import Email from './register_forms/Email';
import Cpf from './register_forms/Cpf';
import Address from './register_forms/Address';
import City from './register_forms/City';
import State from './register_forms/State';
import House from './register_forms/Home';
import Resume from './register_forms/Resume';
import Job from './register_forms/Job';
import JobDescription from './register_forms/JobDescription';
import Submit from './register_forms/Submit';
import './App.css';

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
  jobDescription: '',
  submit: '',
}

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = INITIAL_STATE;

    this.handlerChanges = this.handlerChanges.bind(this);
    this.handlerBlur = this.handlerBlur.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerChanges({ target }) {
    const { value, name } = target;

    this.setState(() => ({
      [name]: value,
    }));
  }

  handlerBlur({ target }) {
    const { value, name } = target;

    if (value.match(/^\d/) && name === 'city') {
      this.setState(() => ({
        [name]: '',
      }))
    }
  }

  handlerSubmit(event) {
    event.preventDefault();
    this.setState(() => INITIAL_STATE);
  }

  render() {
    const handlerChanges = this.handlerChanges;

    return (
      <div className="forms-container">
        <form className="register-form">
          <fieldset>
            <Name value={this.state.name} onchange={handlerChanges} />
            <Email value={this.state.email} onchange={handlerChanges} />
            <Cpf value={this.state.cpf} onchange={handlerChanges} />
            <Address value={this.state.address} onchange={handlerChanges} />
            <City value={this.state.city} onchange={handlerChanges} onblur={this.handlerBlur} />
            <State value={this.state.state} onchange={handlerChanges} />
            <House value={this.state.home} onchange={handlerChanges} />
          </fieldset>
          <fieldset>
            <Resume value={this.state.resume} onchange={handlerChanges} />
            <Job value={this.state.job} onchange={handlerChanges} />
            <JobDescription value={this.state.jobDescription} onchange={handlerChanges} />
          </fieldset>
          <Submit state={this.state} onclick={ this.handlerSubmit }/>
        </form>
      </div>
    );
  }
}

