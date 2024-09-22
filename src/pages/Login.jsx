import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate= useNavigate()
  const [currentState, setCurrentState] = useState('Login')

  const handleSubmit = e=> {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center my-10 w-[90%] sm:max-w-96 mx-auto text-gray-800">
      <div className="flex items-center gap-4 my-4">
        <p className="prata text-3xl"> {currentState} </p>
        <p className="bg-gray-700 h-0.5 w-8"></p>
      </div>

     {currentState !== "Login" && <input type="text" placeholder="Name" className="border border-gray-700 outline-none px-3 py-2 w-full" required/> }
      <input type="email" placeholder="Email" className="border border-gray-700 outline-none px-3 py-2 w-full" required/>
      <input type="password" placeholder="Password" className="border border-gray-700 outline-none px-3 py-2 w-full" required/>

      <div className="flex items-center justify-between text-sm w-full mt-[-8px]">
       {currentState === 'Sign Up' && <p className="cursor-pointer">Forgot your password?</p> }
        <p className="cursor-pointer ml-auto" onClick={()=> currentState === 'Login' ? setCurrentState('Sign Up') : setCurrentState('Login')}> {currentState === "Login" ? "Create Account" : "Login"}</p>
      </div>

      <button type="submit" className="px-8 py-2 mt-5 bg-black text-white rounded-sm hover:-translate-y-1 active:translate-y-1 transition "> 
        {currentState === 'Login' ? 'Sign Up' : 'Login'}
      </button>
    </form>
  )
}

export default Login