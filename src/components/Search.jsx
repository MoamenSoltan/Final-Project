import React from 'react'
import { CiSearch } from "react-icons/ci";


const Search = () => {
  return (
    <div className=' flex items-center gap-1 justify-between pb-4  rounded-lg border-b-1 '>
        <button className='text-3xl  text-gray-900 ' onClick={()=>{}}>
            <CiSearch/>
        </button>
        <input type="text" name=''  placeholder='search' className='p-2 rounded-xl bg-gray-100 outline-none' />
    </div>
  )
}

export default Search