import React, { createContext, useReducer } from 'react';
import { taskReducer } from '../reducers/taskReducer';

export const TaskContext = createContext();

const TaskContextProvider = (props) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export default TaskContextProvider;
