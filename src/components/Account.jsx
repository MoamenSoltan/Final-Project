import React from 'react'
import { useMainContext } from '../contexts/MainContext'

const Account = () => {
    const {login,setLogin,signUp,setSignUp}=useMainContext()
  return (
    <div className='flex items-center justify-center p-4 rounded-lg '>
        <span className='font-semibold'>Not Signed in ?</span>
        <button onClick={()=>{setLogin(true)}} className='ml-2 px-2 py-1 text-white font-bold rounded-xl bg-blue-600 hover:bg-blue-500'>Log In</button>
        <button onClick={()=>{setSignUp(true)}} className='ml-2 px-2 py-1 text-black font-bold rounded-xl bg-white hover:bg-gray-300'>Sign Up</button>
    </div>
  )
}

export default Account