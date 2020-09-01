import React, { useState, useEffect, useContext } from 'react'
import { toDoListPropTypes } from './propTypes'
import { TodosContext } from './TodosContext'

function Checkbox({ todo, onSwitch }) {
  const [checked, setChecked] = useState(false)
  const theme = useContext(TodosContext)
  console.log(theme)
  const onChange = (e) => {
    onSwitch(e.target.value)
    setChecked(!checked)
  }
  useEffect(() => {
    setChecked(todo.completed)
  }, [todo.completed])

  return <input type="checkbox" value={todo._id} onChange={onChange} {...{ checked }} />
}

Checkbox.propTypes = toDoListPropTypes

export default Checkbox
