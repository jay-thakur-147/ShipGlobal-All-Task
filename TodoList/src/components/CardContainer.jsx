import { useState } from 'react';
import './CardContainer.css';

const TodoInside = () => {
    const [columns, setColumns] = useState({
        backlog: ['task 1', 'task 2', 'task 3'],
        todo: ['task 4', 'task 5', 'task 6'],
        ongoing: ['task 7', 'task 8'],
        done: ['task 9', 'task 10']
    });

    const moveTask = (task, from, to) => {
        setColumns((prevColumns) => {
            const fromTasks = prevColumns[from].filter((t) => t !== task);
            const toTasks = [...prevColumns[to], task];
            return {
                ...prevColumns,
                [from]: fromTasks,
                [to]: toTasks,
            };
        });
    };

    const renderColumn = (columnName, tasks) => (
        <div className="column">
            <h3 className='headings'>{columnName}</h3>
            {tasks.map((task) => (
                <div key={task} className="task-card">
                    {task}
                    <div className="buttons">
                        {columnName !== 'backlog' && (
                            <button className='click prev-click' onClick={() => moveTask(task, columnName, previousColumn(columnName))}>&larr;</button>
                        )}
                        {columnName !== 'done' && (
                            <button className='click next-click' onClick={() => moveTask(task, columnName, nextColumn(columnName))}>&rarr;</button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );

    const previousColumn = (columnName) => {
        const columnOrder = ['backlog', 'todo', 'ongoing', 'done'];
        const currentIndex = columnOrder.indexOf(columnName);
        return columnOrder[currentIndex - 1];
    };

    const nextColumn = (columnName) => {
        const columnOrder = ['backlog', 'todo', 'ongoing', 'done'];
        const currentIndex = columnOrder.indexOf(columnName);
        return columnOrder[currentIndex + 1];
    };

    return (
        <div className="todo-list">
            {Object.entries(columns).map(([columnName, tasks]) => renderColumn(columnName, tasks))}
        </div>
    );
};

export default TodoInside;