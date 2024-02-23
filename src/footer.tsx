import { Filters } from './Filters'
import { type ListOfTodos, type FilterValue } from './types'

interface Props {
    todos: ListOfTodos
    activeCount: number
    completedCount: number
    filterSelected: FilterValue
    onClearCompleted: () => void
    handleFilterChange: (filter: FilterValue) => void
}

export const Footer: React.FC <Props> = ({ 
    activeCount = 0, 
    completedCount = 0, 
    filterSelected,
    onClearCompleted,
    handleFilterChange
}) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeCount}</strong> tareas pendientes
            </span>
            <Filters 
                filterSelected={ filterSelected  }
                onFilterChange={ () => {} }
            />
        </footer>
    )
}