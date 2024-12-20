import React, { createContext, useEffect, useState } from "react";
import { employeeData , adminData } from "../Utils/constants.jsx";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [authData, setAuthData] = useState({ employee: [], admin: [] });

   
  useEffect(() => {
    const userData = { employee: employeeData, admin: adminData };
    setAuthData(userData);
}, []); // Only runs once on component mount


  // useEffect(() => {
  //   // Save data to localStorage
  //   setStorage();

  //   // Retrieve data from localStorage
  //   const storedData = getLocalStorage();

  //   // Log and set the retrieved data
  //   console.log("Retrieved Data from LocalStorage:", storedData);
  //   setUser(storedData); // Ensure this aligns with the expected structure

    
  // }, []); // Dependency array ensures this runs only once


  return (
    <AuthContext.Provider value={[authData, setAuthData]}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
