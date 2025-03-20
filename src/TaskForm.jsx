import React, { useState } from 'react';

function TaskForm({addTask}) {

const[value, setvalue]=useState("");
const handlesubmit = (e) =>{
    e.preventDefault();
  if(value.trim()){
    console.log("submitted success", value);
    addTask(value)
    setvalue("")
  } 
   }

  return (

      <form onSubmit={handlesubmit}>
        <div className='Task-form-action'>
          <input type='text' 
          placeholder='Type Task'
           className='input-task'
           onChange={(e)=>setvalue(e.target.value)}
           value={value}
           />
          <button  type='submit' className='Add-btn'  >Add</button>
          <br/>
        </div>
      </form>

  )
}

export default TaskForm
