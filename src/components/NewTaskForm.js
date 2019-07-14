import React, { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TasksContext';

const NewTaskForm = () => {
    const { addTask } = useContext(TaskContext);
    const [ label, setLabel ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.value);
        addTask(label);
        setLabel('');
    }

    return (
        <form id="form" onSubmit={handleSubmit}>
            <input className="todo-input" type="text" placeholder="Add a task" value={label} onChange={ (e) => setLabel(e.target.value) } />
            <input className="todo-submit" type="submit" value="Add" />
        </form>
    );
}

export default NewTaskForm;
