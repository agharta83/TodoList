import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TasksContext';
import TaskDetails from './TaskDetails';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="task-list">
            <ul>
                {tasks.map(task => {
                    return ( <TaskDetails task={task} key={task.id} /> );
                })}
            </ul>
        </div>
    );
}

export default TaskList;
