import React, { Component } from 'react';
import Button from '../components/Button';
import List from '../components/List';
import TaskInput from '../components/TaskInput';

export default class Home extends Component {
  render() {
    return (
      <div>
        <TaskInput />
        <Button />
        <List />
      </div>
    )
  }
}
