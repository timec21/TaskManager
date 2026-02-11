import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { TaskContext } from '../TaskContext';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default function TaskDetail() {
    const {taskId} = useParams();
    const {taskList} = useContext(TaskContext);
    const task = taskList[taskId]; 
  return (
    <div className='container mt-4'>
      <h1>Görev Detayı:</h1>
      <ListGroup>
        <ListGroupItem>
            <strong>Görev:</strong>{task}
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
