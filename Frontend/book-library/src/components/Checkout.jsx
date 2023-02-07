import React, { useEffect, useState } from 'react'
import { IoIosCheckmarkCircle, IoIosListBox, IoMdCheckmarkCircle } from 'react-icons/io'
import { HiHome } from 'react-icons/hi'


import Navbar from './Navbar'
import Options from './Options'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <div className='max-w-screen'>
            <Navbar />

            <div className=' pt-16 w-screen h-screen flex flex-col justify-center items-center'>
                <IoIosCheckmarkCircle fontSize={75} className='text-green-600' />
                <div className='text-gray-600 text-center flex flex-col gap-2'>
                    <h2 className='text-4xl font-semibold'>You're all set!</h2>
                    <p >Thanks for being awesome,</p>
                    <p className='text-xs'>* Now you can track your orders clicking order history</p>
                </div>
                <div className="flex text-white gap-5 p-3">
                    <Link to={"/"}>
                    <button className='border-2 px-4 py-1 cursor-pointer rounded-md bg-blue-600 flex items-center gap-1 '>< HiHome /> Home</button>
                    </Link>
                    <Link to={'/order'}>
                    <button className='border-2 px-4 py-1 cursor-pointer rounded-md bg-blue-600 flex items-center gap-1'><IoIosListBox /> Orders</button>
                    </Link>
                </div>
            </div>
            {/* component for small devices */}
            <div className="sm:hidden h-auto w-full bg-white  fixed bottom-0">
                <Options />
            </div>
        </div>

    )
}

export default Checkout