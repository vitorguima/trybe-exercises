import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputTask } from '../actions/index';

class TaskInput extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      taskInput: '',
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target }) {
    const { inputTask } = this.props;
    const { name, value } = target;

    this.setState(() => ({
      [name]: value,
    }), () => inputTask(value))
  }

  render() {
    const { taskInput } = this.state;
    return (
      <label htmlFor="taskInput">
        <input
          name="taskInput"
          placeholder="Digite o nome da tarefa..."
          onChange={ this.handleInput }
          value={ taskInput }
        />
      </label>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  inputTask: (input) => dispatch(inputTask(input)),
});

export default connect(null, mapDispatchToProps)(TaskInput);
