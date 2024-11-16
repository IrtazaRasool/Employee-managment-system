import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/localStorage";
import { AuthContext } from "./Context/AuthProvider";

const App = () => {
  //consts
  const [user, setUser] = useState(null);

  const data = useContext(AuthContext)

  //funtions

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == 123) {
      setUser("admin");
    } else if (email == "user@me.com" && password == 123) {
      setUser("employee");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? <EmployeeDashboard /> : <AdminDashboard />}
    </>
  );
};

export default App;
