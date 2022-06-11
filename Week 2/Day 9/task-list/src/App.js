import React, {useEffect, useState} from 'react'

// Import Bootstrap Styling from Node Modules
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


//import the task class from the models folder
 import {Task} from './models/task'

// Import Components from components folder

import TaskInput from './components/TaskInput';
import TaskTable from './components/TaskTable';


// import the instance of our task service
import TaskService from './services/task.service';


export default function App() {
  //used to set the state of the tasks 
  const [tasks, setTasks] = useState([]);

  //useEffect is run when the component loads
  useEffect(() => {
    fetchTasks(); //calls the function to fetch tasks
  }, []);

  async function fetchTasks() {
    const tasks = await TaskService.fetchTasks(); //fetches tasks from our Task Service file which fetches from our server
    setTasks(tasks); //set tasks array for Task Table to update the state of the tasks to whatever was returned from the server
  };

  async function onTaskCreate(name) {
    //create the new task, get the task back from the createTask function and
    //that gets saved to server 
    const task = await TaskService.createTask(new Task (
      null,
      name,
      false,
    ));
    
    //new task was saved in our Tasks array which is rendered to our Task Table
    setTasks([...tasks, task]);
 
    //add the task to the task state
  }

  async function onTaskCompleteToggle(taskId) {
    //toggle the completed state
    const taskToToggle = tasks.find((task) => task.id === taskId);
    taskToToggle.complete = !taskToToggle.complete;

     //update the task on firebase
     await TaskService.updateTask(taskToToggle);

    //update the tasks state
    setTasks(tasks.map((task) => {
      return task.id === taskId ? taskToToggle : task;
    }));
  
  }

  async function onTaskRemove(taskId) {
    //delete the task on firebase
    await TaskService.deleteTask(taskId);

    
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
