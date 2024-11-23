import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  //consts
  const [user, setUser] = useState(null);
  const [empId, setEmpid] = useState("");
  const [adminId, setAdminId] = useState("");

  const authData = useContext(AuthContext);
  const employee = "employee";
  const admin = "admin";

  //funtions

  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.admin.find((e) => e.email == email && e.password == password)
    ) {
      const adId = authData.admin.find(
        (e) => e.email == email && e.password == password
      );
      setAdminId(adId.id);
      localStorage.setItem("LoggedInUser", JSON.stringify({ role: admin }));
      setUser("admin");
    } else if (
      authData &&
      authData.employee.find((e) => e.email == email && e.password == password)
    ) {
      const emp = authData.employee.find(
        (e) => e.email == email && e.password == password
      );
      setEmpid(emp.id);
      setUser("employee");

      localStorage.setItem("LoggedInUser", JSON.stringify({ role: employee }));
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard data={authData.admin} id={adminId} user={user} />
      ) : user === "employee" ? (
        <EmployeeDashboard data={authData.employee} id={empId} user={user} />
      ) : null}
    </>
  );
};

export default App;
