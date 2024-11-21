import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import TaskLIst from '../TaskList/TaskLIst'

const EmployeeDashboard = ({data,id}) => {
  return (
    <div className=' bg-[#1C1C1C] h-screen p-8'>
        <Header data={data} id={id} />
        <TaskNumber data={data} id={id}/>
        <TaskLIst data={data} id={id}/>
    </div>
  )
}

export default EmployeeDashboard