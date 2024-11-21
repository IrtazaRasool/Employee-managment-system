import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskLIst = () => {
  return (
    <div id='taskList' className='h-[55%] w-full py-5  flex gap-12 flex-nowrap overflow-x-auto mx-14' >
        <AcceptTask/>
        <NewTask/>
        <CompleteTask/>
        <FailedTask/>
        
    </div>
  )
}

export default TaskLIst