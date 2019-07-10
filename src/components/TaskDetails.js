import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TasksContext';
import { FaTrash } from 'react-icons/fa';

const TaskDetails = ({ task }) => {
    const { removeTask } = useContext(TaskContext);

    return (
        <li>
            <input type="checkbox" />
            <span className="task-label">{task.label}</span>
            <FaTrash className="task-trash" onClick={ () => removeTask(task.id)} />
        </li>
    )
}

export default TaskDetails;