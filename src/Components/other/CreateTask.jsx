import React from 'react'

const CreateTask = () => {
  return (
   <>
    <div className="my-8">
        <form className="flex w-full bg-[#1C1C1C] items-start justify-between p-10 ">
          <div className="w-1/2">
            <div className="mx-3 my-1">
              <h3>Task Title</h3>
              <input className="w-3/4 h-8 p-2 bg-transparent outline-none rounded-md border-2 border-gray-700 my-1" type="text" placeholder="Make a UI design " />
            </div>
            <div className="mx-3 my-1">
              <h3>Date</h3>
              <input type="date" className="w-3/4 h-8 p-2 bg-transparent outline-none rounded-md border-2 border-gray-700 my-1" />
            </div>

            <div className="mx-3 my-1">
              <h3>Assign To</h3>
              <input className="w-3/4 bg-transparent h-8 p-2 outline-none rounded-md border-2 border-gray-700 my-1" type="text" placeholder="Employee Name" />
            </div>

            <div className="mx-3 my-1">
              <h3>Catergory</h3>
              <input className="w-3/4 bg-transparent  h-8 p-2  outline-none rounded-md border-2 border-gray-700 my-1" type="text" placeholder="design, dev etc" />
            </div>
          </div>

          <div className="w-1/2  flex flex-col   ">
            <h3 className="mb-1">Desciption</h3>
            <textarea className="bg-transparent border-2  outline-none border-gray-700 w-full " name="" id=""  rows="8"></textarea>
            <button className="bg-green-600 w-full text-sm h-8 mt-5 rounded-md "  >Create Task</button>
          </div>

         
        </form>
      </div>
   </>
  )
}

export default CreateTask