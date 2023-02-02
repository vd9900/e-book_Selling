import React from 'react'
import Navbar from './Navbar'
import { BiPurchaseTag } from 'react-icons/bi'
import { IoMdCart } from 'react-icons/io'

function Product() {
    return (
        <div className='flex flex-col'>
            <Navbar />
            <div className='w-10/12  mx-auto flex bg-white py-8 justify-center  items-center' >
                <div className='flex flex-col gap-4' >
                    <div className='w-7/12 mx-auto'>
                        <img src="https://rukminim1.flixcart.com/image/612/612/kge0n0w0/regionalbooks/p/t/s/annihilation-of-caste-original-imafwmd4eshge5hx.jpeg?q=70" alt="" />
                    </div>
                    <div className='flex gap-2'>
                        <button className="grow py-2  bg-gray-800 text-white flex items-center justify-center"><IoMdCart fontSize={22}/> ADD TO CART</button>
                        <button className="grow py-2 bg-gray-800 text-white flex items-center justify-center"><BiPurchaseTag fontSize={22} /> BUY NOW</button>
                    </div>
                </div>
                <div className='w-6/12 '>

                </div>

            </div>
        </div>

    )
}

export default Product