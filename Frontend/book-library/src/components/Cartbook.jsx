import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Cartbook = () => {
    return (
        <div className='flex border-b p-2  border-gray-300 w-full '>
            <div className='w-3/12  flex flex-col p-1'>
                <img className='object-cover mx-auto  w-6/12' src="https://rukminim1.flixcart.com/image/612/612/kge0n0w0/regionalbooks/p/t/s/annihilation-of-caste-original-imafwmd4eshge5hx.jpeg?q=70" alt="" />
            </div>
            {/* description */}
            <div className='w-4/12 flex flex-col justify-center'>
                <div className='text-xs '>
                    <p>Dr Basbsaheb Ambedkar Jeevan Charit{"(Meri Kahani Meri..."}</p>
                </div>
                <div className='text-white py-1'>
                    <div className='bg-green-500 p-1 w-fit flex gap-1'>
                        <span className='text-xs'>4.5</span>
                        <AiFillStar fontSize={15} />
                    </div>

                </div>
                <span className=' '>
                    $9.45
                </span>
            </div>
        </div>

    )
}

export default Cartbook