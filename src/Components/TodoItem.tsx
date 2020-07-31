import React from 'react'
import './TodoItem.css'
import { Todo, useTodosDispatch } from '../Context/Todos.context'

export type TodoProps = Todo

export const TodoItem: React.FC<TodoProps> = ({ id, text, done }) => {
  const dispatch = useTodosDispatch()
  const onToggle = () => {
    dispatch({
      type: 'TOGGLE',
      id: id,
    })
  }

  const onRemove = () => {
    dispatch({
      type: 'REMOVE',
      id: id,
    })
  }

  return (
    <li className={`TodoItem ${done ? 'done' : ''}`}>
      <span className="text" onClick={onToggle}>
        {text}
      </span>
      <span className="remove" onClick={onRemove}>
        (X)
      </span>
    </li>
  )
}
