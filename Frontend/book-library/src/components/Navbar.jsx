import React from 'react'
import { Link } from 'react-router-dom'
import { GiSecretBook } from 'react-icons/gi'
import { BiSearch } from 'react-icons/bi'
import { HiHome } from 'react-icons/hi'
import { IoMdCart, IoIosListBox } from 'react-icons/io'

const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-teal-500 to-blue-400 shadow-lg p-2 flex flex-col sm:items-center w-full'>

            <nav className='flex  sm:gap-4 gap-2 sm:justify-between items-center sm:w-10/12   '>

                <h3 className=' md:text-3xl  font-semibold text-white flex  items-center '><GiSecretBook /> BookPoint</h3>
                <div className='flex  w-full h-10 md:w-6/12 lg:w-5/12  '>
                    <input type="text" placeholder='Search books...' className='border max-sm:text-sm w-full outline-none px-2 py-1 text-gray-600' />
                    <button className='px-3 h-full sm:bg-slate-800 bg-sky-800 md:bg-yellow-500 lg:bg-purple-700 xl:bg-gray-800  text-white'><BiSearch fontSize={24} /></button>
                </div>
                <div className=" flex gap-5 lg:gap-10 items-center max-sm:hidden">
<Link to={"/"}>
                    <span title='Home' className='cursor-pointer hover:opacity-75 duration-300 text-gray-800' ><HiHome fontSize={25} /></span>
</Link>
<Link to={"/cart"}>
                    <span title='Cart' className='cursor-pointer hover:opacity-75 duration-300 text-gray-800' ><IoMdCart fontSize={25} /></span>
</Link>
<Link to={"/order"}>
                    <span title='Orders' className='cursor-pointer hover:opacity-75 duration-300 text-gray-800' ><IoIosListBox fontSize={25} /></span>
</Link>
                </div>

            </nav>
        </div>
    )
}

export default Navbar