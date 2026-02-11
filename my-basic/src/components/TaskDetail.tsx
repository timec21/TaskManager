import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { TaskContext } from '../TaskContext';
import { Input, Button, ListGroup, ListGroupItem } from 'reactstrap';
import alertify from 'alertifyjs';


export default function TaskDetail() {
    const {taskId} = useParams();
    const {taskList, setTaskList} = useContext(TaskContext);
    const task = taskList[taskId]; 
    const [updateTask, setUpdateTask] = useState('');
    const navigate = useNavigate();

    const handleUpdateTask = () => {
        if(updateTask.trim() === ''){
            alertify.error('Görev adı boş olamaz!');
            return
        };
        const newTaskList = [...taskList];
        newTaskList[taskId] = updateTask;

        setTaskList(newTaskList);
        alertify.success("Görev başarıyla güncellendi!");
        setUpdateTask('');

    }
  return (
    <div className='container mt-4'>
      <h1>Görev Detayı:</h1>
      <ListGroup>
        <ListGroupItem>
            <strong>Görev: </strong>{task}
        </ListGroupItem>
      </ListGroup>
      <div className='mt-3'>
        <Input
        type="text"
        value={updateTask}
        onChange={(e) => setUpdateTask(e.target.value)}
        placeholder='Görevi güncelle' className='mb-2'>
        </Input>
        <Button color="primary" onClick={handleUpdateTask} className="m-2">Güncelle</Button>

      </div>
    </div>
  )
}
