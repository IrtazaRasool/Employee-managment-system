import React, { useState } from "react";

const Login = ({handleLogin}) => {

// consts
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


//funtions

    const submitHandler =(e)=>{
        e.preventDefault();
        handleLogin(email, password);
        setEmail("")
        setPassword("")        
        
    }



// main
  return (
    <>
      <div className="flex w-screen h-screen justify-center items-center">
        <div className=" flex flex-col items-center border-2 border-emerald-600 px-10 py-12 rounded-xl ">
            <h1 className="text-3xl mb-10">Login</h1>
          <form className="flex justify-center items-center flex-col gap-5" onSubmit={(e)=>{
            submitHandler(e)
          }}>
            <input
            value={email}
              required
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              className=" w-96 outline-none text-xl py-3 px-5 border-2 border-emerald-600 rounded-full text-white placeholder:text-white bg-transparent"
              type="email"
              placeholder="Email"
            />
            <input
            value={password}
              required
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              className=" w-96 outline-none text-xl py-3 px-5 border-2 border-emerald-600 rounded-full text-white placeholder:text-white bg-transparent"
              type="password"
              placeholder="Password"
            />
            <button className="bg-emerald-400 text-2xl rounded-full w-48 h-12">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;