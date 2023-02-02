import React from 'react'
import { GiSecretBook } from 'react-icons/gi'

const Navbar = () => {
    return (
        <div className='shadow-lg p-2 flex flex-col'>

            <nav className='flex gap-4 justify-around'>

                <h3 className=' text-3xl font-semibold text-teal-500 flex  '><GiSecretBook /> BookPoint</h3>
                <div className='flex border px-1 w-4/12'>
                <input type="text" placeholder='What book are you looking for today? ' className=' grow outline-none p-1 text-gray-600' />
                <button className='p-2 bg-black text-white'>sear</button>
                </div>
                <div className="flex gap-10 items-center">
                    <span className='cursor-pointer hover:text-teal-400 duration-300' >Order</span>
                    <span className='cursor-pointer hover:text-teal-400 duration-300' >Cart</span>
                    <span className='w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white text-2xl'>V</span>
                </div>

            </nav>
        </div>
    )
}

export default Navbar