import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import Search from './Search';
import { ChatsDummy } from '../data/data';
import { MdOutlineCancel } from "react-icons/md";
import { useMainContext } from '../contexts/MainContext';


const SideBar = () => {

  const setDots=(string,limit)=>{

    if(string.length > limit) {
      string= string.substring(0, limit) + '...';
    }
    return string;
  }


  const {setActiveMenu,hasAccount}=useMainContext()

  return (
    <div className='flex  flex-col gap-4 relative '>

       <div className='relative mb-5'>
       <button onClick={()=>{setActiveMenu(prev=>!prev)}} className='absolute right-1 hover:bg-gray-300 rounded-full w-4 '><MdOutlineCancel/></button>
       </div>
        <div className='flex items-center justify-between text-gray-900 font-semibold border-b-1 pb-4 box-border '>
          <span>Chats</span>
          <BsThreeDotsVertical className='rounded-full bg-main-bg p-1 hover:bg-gray-300 hover:cursor-pointer text-2xl  ' />
        </div>

        {/* search bar */}
        <div>
          <Search/>
        </div>


        {/* chats */}
       {
        hasAccount ? ( <div className='mt-5 flex flex-col  justify-between items-center '>
          {
            ChatsDummy.map((chats, index) =>(
              <div key={index} className='flex w-full pb-2 mb-4 border-b-1 hover:bg-gray-100 rounded-lg hover:cursor-pointer py-2'>
                <div>
                  <img src={chats.img} width={50} className='rounded-full'  />
                </div>
                <div className='ml-4'>
                  <span className=' text-gray-900 font-semibold'>{chats.name}</span>
                  <p>{setDots(chats.lastMessage,10)}</p>
                </div>
              </div>
            ))
          }
        </div>): (
          <div className='flex w-full justify-center items-center mt-5 text-gray-900 font-semibold text-xl text-center'>
            Please sign in first to view your chats !
          </div>
        )
       } 
        
    </div>
  )
}

export default SideBar