import React from 'react'
import Cartbook from './Cartbook'
import Navbar from './Navbar'
import Options from './Options'
import { RxArrowRight } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Cart = () => {
    return (
        <div className='max-w-screen '>

            <Navbar />
            <div className='h-screen  flex flex-col sm:p-4 pt-16'>
                {/* <h1>Cart</h1> */}
                <div className='relative lg:w-10/12  sm:mx-auto bg-white flex flex-col gap-2 lg:flex-row sm:p-2 '>

                    <div className='lg:w-9/12 sm:pt-10'>
                        <Cartbook />
                        <Cartbook />
                        <Cartbook />
                        <Cartbook />
                        <Cartbook />
                        <Cartbook />
                        <Cartbook />
                        <Cartbook />
                        <Cartbook />
                        <Cartbook />
                        <Cartbook />
                    </div>
                    <div className="  lg:w-3/12 h-64 sticky top-12 pt-6 mb-16">
                        <div className='w-full  shadow-lg flex flex-col p-3 gap-3'>
                            <span><p className='font-semibold'>Order Details</p></span>
                            {/* details */}
                            <div className='px-1 flex flex-col text-sm gap-1'>
                                <span className='text-xs text-gray-600 ml-auto'>Date:13-02-2023</span>
                                <div className="border-b border-gray-300 py-1 flex justify-between px-2 ">Proudcts <span className='font-semibold'>2</span></div>
                                <div className="border-b border-gray-300 py-1 flex justify-between px-2">Delivery <span className='font-semibold'>Free</span></div>
                                <div className="border-b border-gray-300 py-1 flex flex-col justify-between px-2 text-lg">Total <span className='font-semibold text-2xl ml-auto'>₹499</span></div>
                            </div>
                            <Link to={"/checkout"}>

                                <button className='flex items-center bg-slate-800 text-white px-2 py-1 mx-1 rounded-md  gap-2 cursor-pointer hover:bg-opacity-95'>Checkout now <RxArrowRight /></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* component for small devices */}
            <div className="sm:hidden h-auto w-full bg-white  fixed bottom-0">
                <Options />
            </div>
        </div>

    )
}

export default Cart