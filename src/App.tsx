import React, { useState } from 'react'
import { Todos } from './Todos'
import { type Todo as TodoType } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'todo 1',
    completed: false,
  },
  {
    id: '2',
    title: 'todo 2',
    completed: false,
  },
  {
    id: '3',
    title: 'todo 3',
    completed: false,
  },
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  
  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    console.log('newTodos', newTodos)
    setTodos(newTodos)
  }

  const handleCompleted = ({id, completed}: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos 
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={handleCompleted}
        todos={todos} 
      />
    </div>
  )
}

export default App
