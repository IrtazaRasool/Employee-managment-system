import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskLIst = ({data, id}) => {
  return (
    <>
   
    <div id='taskList' className='h-[55%] w-full py-5  flex gap-12 flex-nowrap overflow-x-auto mx-14' >
    {data[id-1].tasks.map((e, i)=>{
        if(e.active){
            return(<AcceptTask key={i}/>)
        }
        if (e.newTask) {
            return(<NewTask key={i}/>)
        }
        if (e.completed) {
            return(<CompleteTask key={i}/>)
        }
        if (e.failed) {
            return(<FailedTask key={i}/>)
        }
         
        })}
    
        
    </div></>
  )
}

export default TaskLIst