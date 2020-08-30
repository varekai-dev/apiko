import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Text from './Text'
import ToDoInput from './ToDoInput'
import ToDoItem from './ToDoItem'

ReactDOM.render(
  <div className="application">
    <Text size={18}>Todos </Text>
    <ToDoInput onAdd={(todo) => console.log(todo)} />
    <ToDoItem
      onSwitch={(todo) => console.log(todo)}
      todo={{
        _id: 'test',
        text: 'React',
        completed: false
      }}
    />
  </div>,
  document.getElementById('root')
)
