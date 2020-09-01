import React from 'react'
import { toDoListPropTypes } from './propTypes'
import Checkbox from './Checkbox'
import Icon from './Icon'
import Text from './Text'
import T from 'prop-types'
import './index.css'
import withCheckedStyles from './withCheckedStyles'

const ToDoItem = withCheckedStyles(({ todo, onSwitch, onRemove, additionalStyles }) => {
  return (
    !!todo && (
      <div className="toDoItem">
        <Checkbox {...{ todo, onSwitch }} />

        <Text size={14} {...additionalStyles}>
          {todo.text}
        </Text>
        <Icon name="remove" onClick={() => onRemove(todo._id)} />
      </div>
    )
  )
})

ToDoItem.propTypes = { ...toDoListPropTypes, onRemove: T.func.isRequired, additionalStyles: T.shape({ color: T.string, textDecoration: T.string }) }

export default ToDoItem
