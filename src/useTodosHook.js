import { useEffect, useReducer } from 'react'
import { todosReducer, initialState, TODOS_ACTIONS } from './todosReducer'

export const useTodosHook = () => {
  const [todos, dispatch] = useReducer(todosReducer, initialState())

  const onAdd = (text) =>
    dispatch({
      text,
      type: TODOS_ACTIONS.ADD
    })
  const onSwitch = (_id) =>
    dispatch({
      _id,
      type: TODOS_ACTIONS.COMPLETE
    })
  const onEdit = (newTodo) =>
    dispatch({
      newTodo,
      type: TODOS_ACTIONS.EDIT
    })
  const onRemove = (_id) =>
    dispatch({
      _id,
      type: TODOS_ACTIONS.REMOVE
    })
  useEffect(() => {
    const todosStringified = JSON.stringify(todos)
    localStorage.setItem('todos', todosStringified)
  }, [todos])
  return {
    todos,
    onAdd,
    onSwitch,
    onRemove,
    onEdit
  }
}
