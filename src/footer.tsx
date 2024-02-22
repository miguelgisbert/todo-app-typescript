import Filters from './filters'

export const Foooter: React.FC <Props> = ({ todos, activeCount, onClearCompleted }) => {
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length}</strong> tareas pendientes
            </span>
            <Filters 
                filterSelected={ 'all'  }
                onFilterChange={ () => {} }
            />
        </footer>
    )
}