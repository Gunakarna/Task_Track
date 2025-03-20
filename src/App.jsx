import React, { useState } from 'react'
import TaskForm from './TaskForm'
import TaskList from './TaskList';

export default function App() {
const[tasks,setTasks]=useState([]);

const addTask = (text)=>{
  const newTask = {id:Date.now(), text, completed: false};
  setTasks([...tasks, newTask])
};

const toggleTask = (id)=>{
  setTasks(tasks.map((task)=>(
  task.id == id ? {...task, completed: !task.completed } : task
  )))
}

const DeletedList = (id)=>{
  const filteredlist = tasks.filter((task)=>{
     return task['id'] !== id
})  
setTasks(filteredlist)
}

  return (
    <div className='Task-container' >
       <h2>Task manager</h2>
     <TaskForm  addTask={addTask}  />
    <p className='task-list-count'>Tasks: {tasks.length}</p>
  <TaskList tasks={tasks} toggleTask={toggleTask} DeletedList= {DeletedList} />
   </div>
  )
}
