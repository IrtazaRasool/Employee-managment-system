import React from 'react'

const AcceptTask = ({data, id}) => {
  return (
    <div className='h-full  flex-shrink-0 w-[300px] bg-green-600 rounded-xl overflow-hidden'>
    <div className=' flex justify-between items-center h-[30%] px-5'>
        <h3 className='bg-gray-900 px-3 py-1 text-sm rounded-md'>{data.category}</h3>
        <h4 className='text-base' >{data.taskDate}</h4>
    </div >
    <div className='px-5'>
         <h2 className='text-2xl font-semibold' >{data.taskTitle}</h2>
        <p className='text-lg mt-2'>{data.taskDescription}</p>
    </div>
    <div className='flex justify-around my-12'>
        <button className='bg-green-900 rounded-sm px-2 h-10'>Mark as Completed</button>
        <button className='bg-red-600 rounded-sm px-2' >Mark as Failed</button>
    </div>
   
</div>
  )
}

export default AcceptTask