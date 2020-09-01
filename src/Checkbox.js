import React, { useState, useEffect } from 'react'
import { toDoListPropTypes } from './propTypes'

function Checkbox({ todo, onSwitch }) {
  const [checked, setChecked] = useState(false)
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
