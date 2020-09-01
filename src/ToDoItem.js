import React from 'react'
import { toDoListPropTypes } from './propTypes'
import Checkbox from './Checkbox'
import Icon from './Icon'
import T from 'prop-types'
import './index.css'
import { ToDoText } from './ToDoText'
import withCheckedStyles from './withCheckedStyles'

const ToDoItem = withCheckedStyles(({ todo, onSwitch, onRemove, additionalStyles, onEdit }) => {
  return (
    !!todo && (
      <div className="toDoItem">
        <Checkbox {...{ todo, onSwitch }} />
        <ToDoText {...{ todo, additionalStyles, onEdit }} />
        <Icon name="remove" onClick={() => onRemove(todo._id)} />
      </div>
    )
  )
})

ToDoItem.propTypes = { ...toDoListPropTypes, onRemove: T.func.isRequired, additionalStyles: T.shape({ color: T.string, textDecoration: T.string }) }

export default ToDoItem
