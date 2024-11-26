import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const CreateTask = () => {

 const [authData, setauthData] = useContext(AuthContext)

 const dumy = authData
  //consts
  
  const [taskTitle, setTaskTitle] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [asignTo, setAsignTo] = useState("")
  const [taskDate, setTaskDate] = useState("")
  const [category, setCategory] = useState("")

  const [newTask, setNewTask] = useState({})



  //funtion
  const handleSubmit =(e)=>{
    e.preventDefault();
    setNewTask({  active: false,
      newTask: true,
      completed: false,
      failed: false, taskTitle,taskDescription, taskDate,category  })
      console.log(newTask)

       authData.employee.forEach((emp)=>{
          if(asignTo == emp.firstName){
            emp.tasks.push(newTask)
            emp.taskCounts.newTask = emp.taskCounts.newTask+1
            console.log(emp.taskCounts.newTask)
            setauthData(emp)
          
          }
      })

    // setTaskTitle('')
    // setTaskDate('')
    // setAsignTo('')
    // setCategory('')
    // setTaskDescription('')
   
  }


  return (
   <>
    <div className="my-8">
        <form className="flex w-full bg-[#1C1C1C] items-start justify-between p-10 " onSubmit={(e)=>{
            handleSubmit(e)
        }}>
          <div className="w-1/2">
            <div className="mx-3 my-1">
              <h3>Task Title</h3>
              <input className="w-3/4 h-8 p-2 bg-transparent outline-none rounded-md border-2 border-gray-700 my-1"
              onChange={(e)=>{
                setTaskTitle(e.target.value);
              }}
              value={taskTitle}
              required
              type="text" placeholder="Make a UI design " />
            </div>
            <div className="mx-3 my-1">
              <h3>Date</h3>
              <input type="date" className="w-3/4 h-8 p-2 bg-transparent outline-none rounded-md border-2 border-gray-700 my-1" 
              onChange={(e)=>{
                setTaskDate(e.target.value);
              }}
              value={taskDate}
              required
              />
            </div>

            <div className="mx-3 my-1">
              <h3>Assign To</h3>
              <input className="w-3/4 bg-transparent h-8 p-2 outline-none rounded-md border-2 border-gray-700 my-1"
              onChange={(e)=>{
                setAsignTo(e.target.value);
              }}
              value={asignTo}
              required
              type="text" placeholder="Employee Name" />
            </div>

            <div className="mx-3 my-1">
              <h3>Catergory</h3>
              <input className="w-3/4 bg-transparent  h-8 p-2  outline-none rounded-md border-2 border-gray-700 my-1"
              onChange={(e)=>{
                setCategory(e.target.value);
              }}
              value={category}
              required
              type="text" placeholder="design, dev etc" />
            </div>
          </div>

          <div className="w-1/2  flex flex-col   ">
            <h3 className="mb-1">Desciption</h3>
            <textarea className="bg-transparent border-2  outline-none border-gray-700 w-full "
            onChange={(e)=>{
              setTaskDescription(e.target.value);
            }}
            value={taskDescription}
            placeholder='Redesign the user interface...'
            name="" id=""  rows="8"></textarea>
            <button className="bg-green-600 w-full text-sm h-8 mt-5 rounded-md "  >Create Task</button>
          </div>

         
        </form>
      </div>
   </>
  )
}

export default CreateTask