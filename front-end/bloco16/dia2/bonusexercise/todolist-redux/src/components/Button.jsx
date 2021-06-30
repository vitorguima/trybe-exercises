import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newTask } from '../actions/index';


class Button extends Component {
  render() {
    const { task, addTask } = this.props;
    return (
      <button
        onClick={() => addTask(task) }
      >
        Adicionar
      </button>
    )
  }
}

const mapStateToProps = (state) => ({
  task: state.inputTaskReducer.inputTask,
});

const mapDispatchToProps = (dispatch) => ({
  addTask: (state) => dispatch(newTask(state)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Button);
