import React from 'react'
import { TodoItem, TodoProps } from './TodoItem'
import { useTodosState } from '../Context/Todos.context'

interface Props {}

export const TodoList: React.FC<Props> = () => {
  const todos = useTodosState()
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} />
      ))}
    </ul>
  )
}
