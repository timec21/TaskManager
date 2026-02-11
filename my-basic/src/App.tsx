import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import './App.css'
import TaskList from './components/TaskList'
import React from 'react';
import TaskDetail from './components/TaskDetail';
import { TaskProvider } from './TaskContext';

function App() {
  return (
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element= {<TaskList ></TaskList>} ></Route>
          <Route path="/task/:taskId" element={<TaskDetail/>}></Route>
        </Routes>
      </Router>
    </TaskProvider>
  )
}

export default App;
