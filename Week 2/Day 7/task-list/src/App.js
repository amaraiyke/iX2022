import React, {useState} from 'react'

// Import Bootstrap Styling from Node Modules
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


//import the task class from the models folder
 import {Task} from './models/task'

// Import Components from components folder

import TaskInput from './components/TaskInput'
import TaskTable from './components/TaskTable'

export default function App() {
  //used to set the state of the tasks 
  const [tasks, setTasks] = useState([]);

  function onTaskCreate(name) {
    //create the task
    const task = new Task (
      new Date().getTime(),
      name,
      false,
    )

    //tasks.push(task)
    //setTasks(tasks)
    setTasks([...tasks, task]);
 
    //add the task to the task state
  }

  function onTaskCompleteToggle(taskId) {
    //toggle the completed state
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;
    //update the tasks state
    setTasks(tasks.map((task) => {
      return task.id === taskId ? taskToToggle : task;
    }));
  
  }

  function onTaskRemove(taskId) {
    //filter the tasks to keep which don't have the id passed in
    setTasks(tasks.filter((task) => task.id !== taskId));
    //update the task state with the filtered list
  }
  
  return (
    <div className='container my-4'>
    
      <div className='card card-body text-center'>
        
        <h1>Task List</h1>

        <hr/>

        <h3>Our Simple Task List</h3>

        <TaskInput onTaskCreate={onTaskCreate}/>

        <TaskTable tasks={tasks}  onTaskCompleteToggle={onTaskCompleteToggle}
        onTaskRemove={onTaskRemove}/>
      </div>
    </div>
  
  )
}
