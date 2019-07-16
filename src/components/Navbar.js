import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TasksContext';

const Navbar = () => {
    const { tasks } = useContext(TaskContext);

    let count = tasks.filter(task => !task.done).length;

    let message = '';

    switch (count) {
        case 0:
            message = 'No tasks to do. Hello free time !';
            break;
        case 1:
            message = 'A task in progress';
            break;
        default:
            message = `Currently you have ${count} tasks to do ...`;
    }

    return (
        <div className="navbar">
            <h1>My simple To Do List</h1>
            <p>{message}</p>
        </div>
    );
}

export default Navbar;