import React from 'react'
import { IoMdCart, IoIosListBox } from 'react-icons/io'
import { HiHome } from 'react-icons/hi'
import { Link } from 'react-router-dom'


const Options = () => {
    return (
        <div className='flex border-t-2 border-gray-800'>
            <span className='grow text-gray-800 p-1 flex items-center justify-center border-r-2 border-gray-800'>
                <Link to={"/"}>
                    <HiHome fontSize={24} />
                </Link>
            </span>
            <span className='grow text-gray-800 p-1 flex items-center justify-center border-r-2 border-gray-800'>
                <Link to={"/cart"}>
                    <IoMdCart fontSize={24} />
                </Link>
            </span>
            <span className='grow p-1 text-gray-800 flex items-center justify-center border-r-2 border-gray-800'>
                <Link to={""}>
                    <IoIosListBox fontSize={24} />
                </Link>
            </span>
            <span className="grow p-1 flex items-center justify-center ">

                <span title='Profile' className='w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white '>V</span>
            </span>


        </div>
    )
}

export default Options