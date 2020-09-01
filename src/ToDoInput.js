import React, { useState, useRef, useEffect } from 'react'
import T from 'prop-types'

export function ToDoInput({ onAdd, initialValue }) {
  const textInput = useRef()
  const [value, setInputValue] = useState(initialValue)
  const onChange = (e) => {
    setInputValue(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    if (value === '') return
    onAdd(value)
    setInputValue('')
  }
  useEffect(() => {
    textInput.current.focus()
  }, [])
  return (
    <form onSubmit={onSubmit}>
      <input {...{ value }} ref={textInput} onChange={onChange} />
    </form>
  )
}

ToDoInput.propTypes = {
  onAdd: T.func.isRequired,
  initialValue: T.string
}

ToDoInput.defaultProps = {
  initialValue: ''
}
