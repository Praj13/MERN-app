import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import PasswordInput from '../../components/Input/PasswordInput';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
  <>
  <Navbar/>
  <div className="flex items-center justify-center mt-28">
    <div className='w-96 border rounded bg-white px-7 py-10'>
      <form onSubmit={()=>{}}>
        <h4 className="text-2xl mb-7">Login</h4>
        <input type="text" placeholder='Email' className="w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none"/>
<PasswordInput/>
        <button type="submit" className="w-full text-sm bg-blue-500 text-white p-2 rounded my-1 hover:bg-black">Login</button>
        <p className="text-sm text-center mt-4">Not registered yet?
          <Link to="/signup" className='font-medium text-blue-500 underline'>Create an account</Link>
        </p>
      </form>
    </div>
  </div>
  </>
  )
}

export default Login
