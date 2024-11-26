import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [authData ] = useContext(AuthContext);

  if (!authData || !authData.employee) {
    return <div>Loading...</div>;
  }
  return (
    <>
    <div className="bg-[#1C1C1C] mt-5 rounded p-5">
      <div className="bg-black m-4 py-2 px-5 flex justify-between rounded text-lg font-bold">
        <div className="w-40 text-center">
          <h2>Name</h2>
        </div>
        <div className="w-40 text-center">
          <h2>Active</h2>
        </div>
        <div className="w-40 text-center">
          <h2>New Task</h2>
        </div>
        <div className="w-40 text-center">
          <h2>Completed</h2>
        </div>
        <div className="w-40 text-center">
          <h2>Failed</h2>
        </div>
      </div>

      <div>
        {authData.employee.map((employee, i) => (
          <div
            className="outline m-4 py-2 px-4 flex justify-between rounded"
            key={i}
          >
            <div className="w-40 text-center">
              <h2 className="text-lg font-bold">{employee.firstName}</h2>
            </div>
            <div className="w-40 text-center">
              <h2 className="text-green-400 text-lg font-bold">
                {employee.taskCounts.active}
              </h2>
            </div>
            <div className="w-40 text-center">
              <h2 className="text-yellow-400 text-lg font-bold">
                {employee.taskCounts.newTask}
              </h2>
            </div>
            <div className="w-40 text-center">
              <h2 className="text-blue-400 text-lg font-bold">
                {employee.taskCounts.completed}
              </h2>
            </div>
            <div className="w-40 text-center">
              <h2 className="text-red-500 text-lg font-bold">
                {employee.taskCounts.failed}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};

export default AllTask;
