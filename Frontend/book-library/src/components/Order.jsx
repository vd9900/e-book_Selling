import React from 'react'
import Navbar from './Navbar'
import Options from './Options'

const Order = () => {
    return (
        <div className=''>

            <Navbar />
            <div className='h-screen flex flex-col pt-16 '>
                <div className='mx-auto   w-10/12 p-1'>
                    <p className='text-2xl text-gray-700 font-mono font-medium'>
                        All orders
                    </p>
                </div>
                <div className='relative sm:w-10/12 h-c  sm:mx-auto bg-white flex flex-col gap-2 lg:flex-row sm:p-2 '>
         <div className='font-semibold border-b-2 border-gray-300 w-full flex px-2'>
        <span className='w-2/12 '>Order ID</span>
        <span className='w-5/12 '>Book name</span>
        <span className='w-2/12 '>Price</span>
        <span className='w-2/12 '>Date</span>
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


export default Order