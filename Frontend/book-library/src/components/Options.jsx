import React from 'react'
import { IoMdCart, IoIosListBox } from 'react-icons/io'


const Options = () => {
    return (
        <div className='flex border-t-2 border-gray-800'>
            <span className='grow text-gray-800 p-1 flex items-center justify-center border-r-2 border-gray-800'><IoMdCart fontSize={24} /></span>
            <span className='grow p-1 text-gray-800 flex items-center justify-center border-r-2 border-gray-800'><IoIosListBox fontSize={24} /></span>
            <span className="grow p-1 flex items-center justify-center ">

                <span title='Profile' className='w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white '>V</span>
            </span>


        </div>
    )
}

export default Options