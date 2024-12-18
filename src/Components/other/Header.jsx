import React from 'react'

const Header = ({data, id , user, changeUser}) => {

  const handleLogout =()=>{
   
    changeUser("")
  }


  return (
    <div className='flex items-end justify-between'>

        <h1 className='text-2xl font-medium'>Hello <br/>  <span className='text-3xl font-semibold'>  {user === 'admin' 
      ? "Admin"
      : user === 'employee' 
      ? data[id - 1]?.firstName 
      : null}👋</span></h1>
        <button className='bg-red-500 text-lg font-medium text-white px-5 py-2 rounded-md' onClick={handleLogout}> Log Out</button>
    </div>
  )
}

export default Header