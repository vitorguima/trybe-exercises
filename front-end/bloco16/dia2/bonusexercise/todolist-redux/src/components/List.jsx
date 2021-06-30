import React, { Component } from 'react'
import { connect } from 'react-redux'

class List extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <div>
        <ul>Lista de tarefas</ul>
        {tasks.map((task, index) => <li key={index}>{ task }</li>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.listAddReducer.tasks,
});

export default connect(mapStateToProps, null)(List);