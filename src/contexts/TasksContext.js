import React, { createContext, useReducer, useEffect } from 'react';
import { taskReducer } from '../reducers/taskReducer';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, dispatch] = useReducer(taskReducer, [], () => {
        const localData = localStorage.getItem('tasks');

        const datas = localData ? JSON.parse(localData) : [];

        return datas;
    });

    useEffect( () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskContextProvider;
