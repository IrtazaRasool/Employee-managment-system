import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskLIst from '../TaskList/TaskLIst'

const EmployeeDashboard = () => {
  return (
    <div className=' bg-[#1C1C1C] h-screen p-8'>
        <Header/>
        <TaskNumber/>
        <TaskLIst/>
    </div>
  )
}

export default EmployeeDashboard