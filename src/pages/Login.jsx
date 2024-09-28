import { useState, useContext, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"

const Login = () => {
  const [currentState, setCurrentState] = useState('Login')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const { token, setToken } = useContext(ShopContext)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    setLoading(true)

    try {
      if (currentState === 'Login') {
        const res = await axios.post('http://localhost:5000/api/user/login', { email, password })
        if (res.data.success) {
          setToken(res.data.token)
          localStorage.setItem('token', res.data.token)
          navigate('/')
          toast.success("Logged in successfully!")
        } else {
          toast.error(res.data.message)
        }
      } else {
        const res = await axios.post('http://localhost:5000/api/user/register', { name, email, password })
        if (res.data.success) {
          setCurrentState('Login')
          toast.success("Account created successfully!")
        } else {
          toast.error(res.data.message)
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message || "Something went wrong")
    }
    setLoading(false)
  }

  // if there is a token, redirect to home page
  useEffect(() => {
    if (token) {
      navigate('/')
      toast.info("Already logged in!")
    }
  }, [token])

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center my-10 w-[90%] sm:max-w-96 mx-auto text-gray-800">
      <div className="flex items-center gap-4 my-4">
        <p className="prata text-3xl"> {currentState} </p>
        <p className="bg-gray-700 h-0.5 w-8"></p>
      </div>

      {currentState !== "Login" && <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="border border-gray-700 outline-none px-3 py-2 w-full" required />}
      <input type="email" name="email" placeholder="Email" className="border border-gray-700 outline-none px-3 py-2 w-full"
        value={email} onChange={e => setEmail(e.target.value)} required />
      <input type="password" name="password" placeholder="Password" className="border border-gray-700 outline-none px-3 py-2 w-full"
        value={password} onChange={e => setPassword(e.target.value)} required />

      <div className="flex items-center justify-between text-sm w-full mt-[-8px]">
        {currentState === 'Sign Up' && <p className="cursor-pointer">Forgot your password?</p>}
        <p className="cursor-pointer ml-auto" onClick={() => currentState === 'Login' ? setCurrentState('Sign Up') : setCurrentState('Login')}> {currentState === "Login" ? "Create Account" : "Login"}</p>
      </div>

      <button type="submit" disabled={loading} className="px-8 py-2 mt-5 bg-black text-white rounded-sm hover:-translate-y-1 active:translate-y-1 transition disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
        {/* {currentState === 'Login' ? 'Login' : 'Sign Up'} */}
        {loading ?
          <div className="w-5 h-5 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
          : currentState === 'Login' ? 'Login' : 'Sign Up'}
      </button>
    </form>
  )
}

export default Login