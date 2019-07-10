import React from 'react';
import TaskContextProvider from './contexts/TasksContext';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <TaskList />
      </TaskContextProvider>
    </div>
  );
}

export default App;
