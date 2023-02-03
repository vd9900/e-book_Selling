import React from 'react'
import Cartbook from './Cartbook'
import Navbar from './Navbar'
import Options from './Options'

const Cart = () => {
    return (
        <div className='max-w-screen '>
            <Navbar />
            <div className='h-screen  flex flex-col p-4'>
                    {/* <h1>Cart</h1> */}
                <div className=' sm:w-10/12 mx-auto bg-white flex p-2 '>

                    <div className='sm:w-9/12 p-2'>
                        <Cartbook/>
                    </div>
                    <div className=" bg-black  w-3/12">
                        sdfa
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