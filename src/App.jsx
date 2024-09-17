import React, { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './Components/TaskForm'
import TaskColumn from './Components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doingIcon from './assets/glowing-star.png'
import doneIcon from './assets/check-mark-button.png'

const oldTask = localStorage.getItem("tasks")
console.log(oldTask);

const App = () => {
   const [tasks,setTasks]=useState(JSON.parse(oldTask) || [])

   useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
   },[tasks])
  //  console.log(tasks);

   const handleDelete = (taskIndex)=>{
      const newTask = tasks.filter((task,index)=> index !== taskIndex)
      setTasks(newTask)
   }
   
   
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn headingName='To do' icon={todoIcon} tasks={tasks} status="todo" handleDelete={handleDelete}/>
        <TaskColumn headingName='Doing' icon={doingIcon} tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn headingName='Done' icon={doneIcon} tasks={tasks} status="done" handleDelete={handleDelete}/>
        
      </main>
    </div>
  )
}

export default App

