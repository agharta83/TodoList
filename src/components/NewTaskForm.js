import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TasksContext';

const NewTaskForm = () => {
    const { dispatch } = useContext(TaskContext);
    const [ label, setLabel ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TASK', task:{label} });
        setLabel('');
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" placeholder="Add a task" value={label} onChange={ (e) => setLabel(e.target.value) } required />
            <input className="todo-submit" type="submit" value="Add" />
        </form>
    );
}

export default NewTaskForm;
