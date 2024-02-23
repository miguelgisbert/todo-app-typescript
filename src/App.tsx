import React, { useState } from 'react'
import { Todos } from './Todos'
import { type Todo as TodoType, type FilterValue } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './Footer'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)
  
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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE)  return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className="todoapp">
      <Todos 
        onRemoveTodo={handleRemove}
        onToggleCompleteTodo={handleCompleted}
        todos={todos} 
      />
      <Footer 
        activeCount={activeCount}
        filterSelected={filterSelected}
        onClearCompleted={() => {}}
        completedCount={completedCount}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
