import React from 'react'

const TaskNumber = ({data,id}) => {
  return (
    <div className='flex w-full justify-evenly pt-10 pb-10  overflow-hidden'>
        <div className='h-40 w-[20%] py-10 px-10 bg-green-700 rounded-xl  overflow-hidden'>
                <h2 className='text-5xl font-semibold overflow-hidden'>{data.employee[id-1].taskCounts.active}</h2>
                <h3 className='text-3xl font-med mt-2'>Active</h3>
        </div>
        <div className='h-40 w-[20%] py-10 px-10 bg-yellow-400 rounded-xl text-black overflow-hidden' >
                <h2 className='text-5xl font-semibold overflow-hidden'>{data.employee[id-1].taskCounts.newTask}</h2>
                <h3 className='text-3xl font-med mt-2'>New Task</h3>
        </div>
        <div className='h-40 w-[20%] py-10 px-10 bg-blue-400 rounded-xl  overflow-hidden'>
                <h2 className='text-5xl font-semibold overflow-hidden'>{data.employee[id-1].taskCounts.completed}</h2>
                <h3 className='text-3xl font-med mt-2'>Completed</h3>
        </div>
        <div className='h-40 w-[20%] py-10 px-10 bg-red-600 rounded-xl overflow-hidden'>
                <h2 className='text-5xl font-semibold overflow-hidden'>{data.employee[id-1].taskCounts.failed}</h2>
                <h3 className='text-3xl font-med mt-2'>Failed</h3>
        </div>
        
      
 
    </div>
  )
}

export default TaskNumber