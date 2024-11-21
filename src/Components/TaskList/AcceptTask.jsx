import React from 'react'

const AcceptTask = () => {
  return (
    <div className='h-full  flex-shrink-0 w-[300px] bg-green-600 rounded-xl overflow-hidden'>
    <div className=' flex justify-between items-center h-[30%] px-5'>
        <h3 className='bg-gray-900 px-3 py-1 text-sm rounded-md'>High</h3>
        <h4 className='text-base' >20 sep 2024</h4>
    </div >
    <div className='px-5'>
         <h2 className='text-2xl font-semibold' >Make a video</h2>
        <p className='text-sm mt-2'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem eligendi ducimus saepe eum? Quas, fugiat.
        </p>
    </div>
    <div className='flex justify-around my-12'>
        <button className='bg-green-900 rounded-sm px-2 h-10'>Mark as Completed</button>
        <button className='bg-red-600 rounded-sm px-2' >Mark as Failed</button>
    </div>
   
</div>
  )
}

export default AcceptTask