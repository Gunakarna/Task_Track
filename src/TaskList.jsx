import React from 'react'

function TaskList({tasks , toggleTask , DeletedList}) {
  return (
    <div>
      <ul className='Task-order' >
        {tasks.map((task,index)=>(
            <li key={index} className='Task-list'>
              <span className={task['completed'] == true && 'task-item'} onClick={()=> toggleTask(task['id'])} 
               >{task['text']}</span>
               <span className='deleted' onClick={()=>DeletedList(task['id'])}>x</span>
              </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList
