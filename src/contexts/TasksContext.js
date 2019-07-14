import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { id: 5, label: 'farine' },
        { id: 12, label: 'lait' },
        { id: 4, label: 'sucre' },
    ]);

    const addTask = (label) => {
        setTasks([...tasks, { id: uuid(), label}]);
    };

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask}}>
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskContextProvider;
