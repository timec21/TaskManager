import {BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
import './App.css'
import TaskList from './components/TaskList'
import TaskDetail from './components/TaskDetail';

function App() {
  const tasks = ["Görev 1", "Görev 2", "Görev 3"];
  return (
      <Router>
        <Routes>
          <Route path="/" element= {<TaskList tasks={tasks}></TaskList>} ></Route>
          <Route path="/task/:taskId" element={<TaskDetail tasks={tasks}/>}></Route>
        </Routes>
      </Router>
  )
}

export default App;
