import React from 'react'
import { FiMenu } from "react-icons/fi";
import { useMainContext } from '../contexts/MainContext';
import Account from './Account';
import avatar from '../data/avatar.jpg'
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar = () => {
    const {activeMenu,setActiveMenu,hasAccount}=useMainContext()
  return (
    <div>
        <div className='w-screen bg-main-bg h-16 p-2 md:p-4 relative top-0 flex-1 flex justify-between items-center '>
            {/* close sidebar button */}
            <div>
                <button onClick={()=>{setActiveMenu((prev)=>!prev)}} className='rounded-full text-2xl hover:bg-gray-200 p-1'>
                <FiMenu />
                </button>
            </div>

            {/* rest of nav bar */}
           {
            hasAccount?(
                <div className='flex justify-center items-center p-2 hover:cursor-pointer hover:bg-gray-300 rounded-xl '>
                    <img src={avatar} alt="" className='w-10 rounded-full' />
                    <span className='ml-2 text-lg'>hi,  <span className='font-semibold'>Mo'men</span> </span>
                    <RiArrowDropDownLine className='ml-2'/>
                </div>
            ):( 
            
            <div>
                <Account/>
            </div>)
           }
        </div>
    </div>
  )
}

export default NavBar