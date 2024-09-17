import React from 'react'

import './TaskColumn.css'
import TaskCard from './TaskCard'
const TaskColumn = ({icon,headingName,tasks,status,handleDelete}) => {
  return (
    <section className='task_column'>
        <h2 className='task_column'> <img className='task_column_icon' src={icon} alt="" />{headingName}</h2>

        {
          tasks.map((task,index)=>task.status===status &&( 
          <TaskCard 
          key={index}
          title={task.task}
          tags={task.tags}
          handleDelete={handleDelete}
          index={index}
          />))
        }
    </section>
    
  )
}

export default TaskColumn
