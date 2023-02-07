import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { GoPlus } from 'react-icons/go'
import { HiMinus } from 'react-icons/hi'

const Cartbook = () => {
    return (
        <div className='flex flex-col  sm:flex-row border-b px-3 py-1  border-gray-300 w-full '>
            <div className='py-2'>
                <input type="checkbox" className='w-5 h-5 outline-none ' />
            </div>
            {/* <div className='w-full '>
            </div> */}
            <div className='sm:w-3/12  flex flex-col p-1'>
                <img className='object-cover mx-auto  w-6/12' src="https://rukminim1.flixcart.com/image/612/612/kge0n0w0/regionalbooks/p/t/s/annihilation-of-caste-original-imafwmd4eshge5hx.jpeg?q=70" alt="" />
            </div>
            {/* description */}
            <div className=' sm:w-4/12 flex flex-col justify-center'>
                <div className='max-sm:py-2'>
                    <p>Dr Basbsaheb Ambedkar Jeevan Charit Meri Kahani Meri..</p>
                </div>
                <div className='text-white py-1'>
                    <div className='bg-green-500 p-1 w-fit flex gap-1'>
                        <span className='text-xs'>4.5</span>
                        <AiFillStar fontSize={15} />
                    </div>

                </div>
                <span className='text-2xl font-semibold'>
                    $9.45
                </span>
            </div>
            <div className='flex sm:gap-8 py-1 justify-center items-center sm:w-5/12 '>
                <div className="flex flex-col w-8/12  ">
                    <div className='mx-auto font-semibold text-lg text-gray-700'><span>Quantiy</span></div>
                    <div className='  flex  grow gap-1 p-2 text-gray-700'>
                        <button className=' grow border border-gray-600  max-sm:py-1 px-2 flex justify-center items-center'><GoPlus /></button>
                        <span className=' grow border-gray-600 max-sm:py-1  border-2  px-2   flex items-center justify-center'>1</span>
                        <button className=' border grow border-gray-600 max-sm:py-1  px-2 flex items-center justify-center '><HiMinus /></button>
                    </div>
                </div>
                <div className="w-4/12 flex  justify-center h-12 text-red-500 ">
                    <RiDeleteBin6Line className='cursor-pointer hover:opacity-80 mt-auto' fontSize={25} />
                </div>
            </div>


        </div>

    )
}

export default Cartbook