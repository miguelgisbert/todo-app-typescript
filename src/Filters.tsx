import { TODO_FILTERS, FILTERS_BUTTONS } from './consts';

interface Props {
    filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
    onFilterChange: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <ul className="filters">
            <li>
                <a 
                    href="#/"
                    className={filterSelected === 'all' ? 'selected' : ''}
                    onClick={() => onFilterChange('all')}
                >
                    All
                </a>
            </li>
            <li>
                <a 
                    href="#/active"
                    className={filterSelected === 'active' ? 'selected' : ''}
                    onClick={() => onFilterChange('active')}
                >
                    Active
                </a>
            </li>
            <li>
                <a 
                    href="#/completed"
                    className={filterSelected === 'completed' ? 'selected' : ''}
                    onClick={() => onFilterChange('completed')}
                >
                    Completed
                </a>
            </li>
        </ul>
    )
}