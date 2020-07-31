import React, { useState } from 'react'
import { useTodosDispatch } from '../Context/Todos.context'

interface Props {}

export const TodoForm: React.FC<Props> = () => {
  const [value, setValue] = useState('')
  const dispatch = useTodosDispatch()

  const onSubmit = ($evt: React.FormEvent) => {
    $evt.preventDefault()
    dispatch({
      type: "CREATE",
      text: value
    })
    setValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        placeholder="무엇을 하실 건가요?"
        onChange={($evt: React.ChangeEvent<HTMLInputElement>) =>
          setValue($evt.target.value)
        }
      />
      <button>등록</button>
    </form>
  )
}
