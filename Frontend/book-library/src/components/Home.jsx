import React from 'react'
import Book from './Book'
import Navbar from './Navbar'
import Options from './Options'

const Home = () => {
    return (
        <div className='max-w-screen '>
            <Navbar />
            <div className='h-screen  flex flex-col p-2'>
                <div className=' sm:w-10/12 mx-auto  '>
                    {/* Recommend component */}
                    <div className="">
                        <span className='text-xl font-medium'><p>Recommend Books for you</p></span>
                        <div className='flex  p-5 bg-gray-50'>
                            <a href="/product">

                                <Book />
                            </a>
                            <a href="/product">
                                <Book />
                            </a>
                            <Book />
                            <Book />
                            <Book />
                        </div>

                    </div>
                    {/* all books component */}
                    <div className="">

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

export default Home