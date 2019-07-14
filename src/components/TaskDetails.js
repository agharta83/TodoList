import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TasksContext';
import { FaTrash } from 'react-icons/fa';

const TaskDetails = ({ task }) => {
    const { dispatch } = useContext(TaskContext);

    return (
        <li>
            <input type="checkbox" />
            <span className="task-label">{task.label}</span>
            <FaTrash className="task-trash" onClick={ () => dispatch({ type: 'REMOVE_TASK', id: task.id })} />
        </li>
    );
}

export default TaskDetails;