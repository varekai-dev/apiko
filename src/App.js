import React from 'react'
import { useTodosHook } from './useTodosHook'
import Text from './Text'
import { ToDoInput } from './ToDoInput'
import ToDoItem from './ToDoItem'
import { TodosContext } from './TodosContext'

const App = () => {
  const { todos, onAdd, onSwitch, onRemove, onEdit } = useTodosHook()

  return (
    <div className="application">
      <Text size={18}>Todos </Text>
      <ToDoInput onAdd={onAdd} />
      <TodosContext.Provider value={todos}>
        <div className="toDoList">
          {todos.map((todo) => (
            <ToDoItem key={todo._id} {...{ todo }} onSwitch={onSwitch} onRemove={onRemove} onEdit={onEdit} />
          ))}
        </div>
      </TodosContext.Provider>
    </div>
  )
}

export default App
