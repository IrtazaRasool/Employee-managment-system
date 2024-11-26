import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='h-full  flex-shrink-0 w-[300px] bg-red-600 rounded-xl overflow-hidden'>
     <div className=' flex justify-between items-center h-[30%] px-5'>
        <h3 className='bg-gray-900 px-3 py-1 text-sm rounded-md'>{data.category}</h3>
        <h4 className='text-base' >{data.taskDate}</h4>
    </div >
    <div className='px-5'>
         <h2 className='text-2xl font-semibold' >{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}
        </p>
    </div>
    <div className='flex justify-around my-12 '>
        <button className='w-5/6 h-10 bg-red-400 rounded-sm px-2 overflow-hidden'>Failed</button>
    </div>
</div>
  )
}

export default FailedTask