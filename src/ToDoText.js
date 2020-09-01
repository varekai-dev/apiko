import React, { useState } from 'react'
import Text from './Text'
import { ToDoInput } from './ToDoInput'

export const ToDoText = ({ additionalStyles, todo, onEdit }) => {
  const [isEditable, setIsEditable] = useState(false)

  const onClick = () => {
    return todo.completed ? null : setIsEditable(true)
  }
  const onSaveChanges = (text) => {
    setIsEditable(false)
    onEdit({ ...todo, text })
  }

  return isEditable ? (
    <ToDoInput onAdd={onSaveChanges} initialValue={todo.text} />
  ) : (
    <Text size={14} {...additionalStyles} onClick={onClick}>
      {todo.text}
    </Text>
  )
}
