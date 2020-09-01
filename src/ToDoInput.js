import React, { useState } from 'react'
import T from 'prop-types'

function ToDoInput({ onAdd }) {
  const [value, setInputValue] = useState('')
  const onChange = (e) => {
    setInputValue(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (value === '') return
    onAdd(value)
    setInputValue('')
  }
  return (
    <form onSubmit={onSubmit}>
      <input {...{ value }} onChange={onChange} />
    </form>
  )
}

ToDoInput.propTyoes = {
  onAdd: T.func.isRequired
}
export default ToDoInput
