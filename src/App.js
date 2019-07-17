import React from 'react';
import TaskContextProvider from './contexts/TasksContext';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskForm';

function App() {

  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <TaskList />
        <NewTaskForm />
      </TaskContextProvider>
    </div>
  );
}

export default App;
