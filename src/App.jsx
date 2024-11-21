import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  //consts
  const [user, setUser] = useState(null);
  const [empid, setEmpid] = useState("")

  const authData = useContext(AuthContext);



  //funtions

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == 123) {
      setUser("admin");
    } else if (
      authData &&
      authData.employee.find((e) => e.email == email && e.password == password)
    ) {

        const emp = authData.employee.find((e) => e.email == email && e.password == password)
        setEmpid(emp.id)
      setUser( "employee");
      console.log(empid)
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <AdminDashboard />:( user == "employee"?<EmployeeDashboard data={authData} id={empid}/> : null) }
    </>
  );
};

export default App;
