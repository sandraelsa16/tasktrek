import React from 'react'
import Tag from './Tag'
import deleteImg from '../assets/delete.png'
import './TaskCard.css'
const TaskCard = ({title,tags,handleDelete,index}) => {
  return (
    <article className='task_card'>
        <p className='task_text'>{title}</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
             {
              tags.map((tags,index)=> <Tag key={index} tagName={tags} selected/>)
             }
             
            </div>
            <div className='task_delete'
             onClick={()=> 
                handleDelete(index)}>
                <img src={deleteImg} className='delete_icon' alt="" />
            </div>
        </div>
    </article>
  )
}

export default TaskCard
