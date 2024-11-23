import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "./AllTask";

const AdminDashboard = ({data, id, user}) => {
 
  return (
    <div className="h-screen w-full p-10">
      <Header data={data} id={id} user={user}  />
      <CreateTask data={data} id={id} />
      <AllTask data={data} id={id} />
    </div>
  );
};

export default AdminDashboard;
