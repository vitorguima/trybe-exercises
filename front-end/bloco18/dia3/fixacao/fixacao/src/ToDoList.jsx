import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  return (
    <div>
      <Link to="/">TIME COUNTER</Link>
      <label htmlFor="todo-input">
        Nova tarefa
        <input
          id="todo-input"
          type="text"
          name="todo"
          value={todo}
          onChange={({ target }) => setTodo(target.value)}
        />
      </label>
      <button
        type="button"
        onClick={() => setTodos([...todos, todo])}
      >
        Adicionar tarefa
      </button>
      <ul>
        {
          todos.map((todo, index) => <li key={ index }>{ todo }</li>)
        }
      </ul>
    </div>
  )
}
