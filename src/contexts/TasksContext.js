import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { id: 5, label: 'farine', done: true, fav: false },
        { id: 12, label: 'lait', done: false, fav: false },
        { id: 4, label: 'sucre', done: false, fav: true },
    ]);

    const addTask = (id, label, done, fav) => {
        setTasks([...tasks, { id: uuid(), label, done, fav }]);
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
