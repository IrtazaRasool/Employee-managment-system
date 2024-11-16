import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setStorage } from "../Utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

useEffect(() => {
  setUser(getLocalStorage());
},[])


  return (
    <AuthContext.Provider value={user}>
      <div>{children}</div>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
