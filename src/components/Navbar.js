import React, { useContext } from 'react';
import { TaskContext } from '../contexts/TasksContext';

const Navbar = () => {
    const { tasks } = useContext(TaskContext);

    return (
        <div className="navbar">
            <h1>My simple To Do List</h1>
            <p>Currently you have {tasks.length} tasks to do...</p>
        </div>
    );
}

export default Navbar;