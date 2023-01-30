import React, { useState } from 'react'
import { GiSecretBook } from 'react-icons/gi'
import { AiTwotoneStar } from 'react-icons/ai'

const SignIn = () => {
    const [changeSignUpToSignIn, setChangeSignUpToSignIn] = useState(true)
    console.log(changeSignUpToSignIn)
    return (
        <div className="h-screen flex items-center justify-center">
            <div className='w-6/12 h-3/5 flex  shadow-lg ' >
                {/* headline and title  */}
                <div className="w-1/2  bg-gradient-to-r from-teal-500 to-blue-400 p-6 flex flex-col">
                    {/* logo */}
                    <h3 className='text-4xl font-semibold text-white flex items-center justify-start'><GiSecretBook /> BookPoint</h3>
                    <div className="flex flex-col text-white font-mono my-auto  gap-1 ">
                        <span className='text-2xl'>The</span>
                        <span className='text-5xl'>World</span>
                        <span className='text-2xl'>belongs to those who</span>
                        <span className='text-5xl'>Read.</span>
                    </div>
                    <div className='flex items-center gap-2'>Join our 5M+ commuinty  <div className='flex text-yellow-400'>{[...Array(5)].map((a,i) => <AiTwotoneStar key={i} />)}</div></div>
                </div>

                {/* login component */}
                <div className={`${changeSignUpToSignIn ? "" : "hidden"} py-8 px-6  w-1/2 flex flex-col  `}>
                    <h3 className='text-4xl mx-auto underline'>Sign in</h3>
                    <form className='my-auto flex flex-col gap-5'>
                        <div className="">
                            <label
                                className="block text-gray-700 font-medium mb-2"
                                for="username"
                            >
                                Email <span className='text-red-700'>*</span>
                            </label>
                            <input
                                className="w-full border border-gray-400 rounded p-2 outline-none"
                                type="email"
                                id="username"
                                required
                            />
                        </div>
                        <div className="">
                            <label
                                className="block text-gray-700 font-medium mb-2"
                                for="password"
                            >
                                Password <span className='text-red-700'>*</span>
                            </label>
                            <input
                                className="w-full border border-gray-400 rounded p-2 outline-none"
                                type="password"
                                id="password"
                            />
                        </div>
                        <button className="my-2 bg-gradient-to-r from-teal-500 to-blue-400 opacity-80 text-white py-2 px-4 rounded hover:opacity-100"

                        >
                            Log In
                        </button>
                    </form>
                    <p className='flex font-bold gap-1'>New Here?<h3 className='underline text-teal-500 cursor-pointer'
                        onClick={() => setChangeSignUpToSignIn(false)}>
                        Sign Up</h3>now
                    </p>
                </div>
                {/* Sign Up */}
                <div className={`${changeSignUpToSignIn ? "hidden" : ""} py-8 px-6  w-1/2 flex flex-col  `}>
                    <h3 className='text-4xl mx-auto underline'>SignUp</h3>
                    <form className='my-auto flex flex-col gap-3'>
                        <div className="">
                            <label
                                className="block text-gray-700 font-medium mb-2"
                                for="username"
                            >
                                Full name <span className='text-red-700'>*</span>
                            </label>
                            <input
                                className="w-full border border-gray-400 rounded p-2 outline-none"
                                type="text"
                                required
                            />
                        </div>
                        <div className="">
                            <label
                                className="block text-gray-700 font-medium mb-2"
                                for="username"
                            >
                                Email <span className='text-red-700'>*</span>
                            </label>
                            <input
                                className="w-full border border-gray-400 rounded p-2 outline-none"
                                type="email"
                                id="username"
                                required
                            />
                        </div>
                        <div className="">
                            <label
                                className="block text-gray-700 text-sm font-medium mb-2"
                                for="newpassword"
                            >
                                Create a strong password <span className='text-red-700'>*</span>
                            </label>
                            <input
                                className="w-full border border-gray-400 rounded p-2 outline-none"
                                type="password"
                                id="newpassword"
                            />
                        </div>
                        <button className="my-2 bg-gradient-to-r from-teal-500 to-blue-400 opacity-80 text-white py-2 px-4 rounded hover:opacity-100"

                        >
                            Sign Up
                        </button>
                    </form>
                    <p className='flex font-bold gap-1'>Go to
                        <h3 className='underline text-teal-500 cursor-pointer'
                            onClick={() => setChangeSignUpToSignIn(true)}>Log in</h3>
                    </p>
                </div>
            </div>
        </div>


    )
}

export default SignIn