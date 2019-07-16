import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TasksContext';
import { FaTrash, FaStar } from 'react-icons/fa';
import classNames from 'classnames';

const TaskDetails = ({ task }) => {
    const { dispatch } = useContext(TaskContext);

    const currentClassNames = classNames('task', {
        'task-done': task.done,
        'task-fav': task.fav,
    });

    return (
        <li className={currentClassNames}>
            <input type="checkbox" checked={task.done} onChange={ () => dispatch({ type: 'CHECK_TASK', id: task.id })} />
            <span className="task-label">{task.label}</span>
            <FaTrash className="task-trash" onClick={ () => dispatch({ type: 'REMOVE_TASK', id: task.id })} />
            <FaStar className="task-star" />
        </li>
    );
}

export default TaskDetails;