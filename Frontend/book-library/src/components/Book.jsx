import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Book = () => {
    return (
        <div className='px-4 py-2  bg-white cursor-pointer transition ease-in-out delay-200  hover:-translate-y-1 hover:scale-105 hover:shadow-lg  duration-300  flex flex-col'>
            <div className=' py-3 px-4 mx-auto'>

                <img className='h-52 w-52 object-contain' src="https://rukminim1.flixcart.com/image/612/612/kge0n0w0/regionalbooks/p/t/s/annihilation-of-caste-original-imafwmd4eshge5hx.jpeg?q=70" alt="" />
            </div>
            <div className='text-xs '>
                <p>Dr Basbsaheb Ambedkar Jeevan Charit{"(Meri Kahani Meri..."}</p>
            </div>
            <div className='text-white py-1'>
                <div className='bg-green-500 p-1 w-fit flex gap-1'>
                    <span className='text-xs'>4.5</span>
                    <AiFillStar fontSize={15} />
                </div>

            </div>
            <div className=''>
                <span className=' hover:text-black'>
                    $9.45
                </span>
            </div>
            <div className='flex gap-1 py-1'>
                <div className='  flex grow gap-1'>
                    <button className=' grow border border-gray-600  py-1'>+</button>
                    <span className=' grow border-gray-600  py-1 border-2 flex items-center justify-center'>1</span>
                    <button className=' border grow border-gray-600  py-1'>-</button>
                </div>
                <a href="/cart">

                    <button className=' p-2  rounded-md text-white text-xs border bg-gray-800'>Add to Cart</button>
                </a>
            </div>

        </div>
    )
}

export default Book