import React, { useState } from 'react'

const Login = ({loginHandler}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const submitHandler = (e) => {
        e.preventDefault()

        loginHandler(email, password)


        setEmail("")
        setPassword("")
    }


    return (
        <div className='h-screen w-screen flex lg:flex-row flex-col lg:gap-0 gap-20 lg:items-center lg:justify-center'>
            <div className='lg:w-[50vw] w-full p-6 h-full flex flex-col items-center justify-between'>
                <div>
                    <h1 className='text-4xl mb-8 font-semibold text-amber-500'>EMS</h1>
                </div>
                <div className='h-20 w-20 mb-8'>
                    <img className='rounded-full h-20 w-20' src="./ceo.jpg" alt="" />
                </div>
                <div className='flex w-100 mb-5 lg:justify-between justify-around'>
                    <h2 className='text-2xl font-normal border-b-4 border-b-amber-500'>Sign In</h2>
                    <div className='flex gap-3 items-center justify-center'>
                        <p className='text-sm text-gray-400'>Login as:</p>
                        <button className='text-sm font-medium cursor-pointer'>User</button>
                        <button className='text-sm font-medium text-amber-400 border-b-2 cursor-pointer'>Admin</button>
                    </div>
                </div>
                <form onSubmit={(e) => { submitHandler(e) }} className="w-full max-w-sm p-8 rounded-2xl  flex flex-col gap-6">

                    <div className="flex items-center border border-yellow-300 rounded-full px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-yellow-400">
                        <i className="ri-mail-line text-yellow-500 text-lg mr-3"></i>
                        <input
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                            type="email"
                            placeholder="Email Address"
                            className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                        />
                    </div>

                    <div className="flex items-center border border-yellow-300 rounded-full px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-yellow-400">
                        <i className="ri-lock-line text-yellow-500 text-lg mr-3"></i>
                        <input
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            required
                            type="password"
                            placeholder="Password"
                            className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                        />
                    </div>

                    <button className="bg-amber-500 cursor-pointer text-white py-3 rounded-full font-semibold text-lg shadow-md active:scale-95 transition-all">
                        Log In
                    </button>

                    <p className="text-center text-sm text-gray-400 hover:text-yellow-500 cursor-pointer">
                        Forgot Password?
                    </p>

                </form>

            </div>
            <div className='lg:w-[50vw] w-full h-full'>
                <img className='object-cover h-full w-full' src="./loginPageImg.webp" alt="" />
            </div>
        </div>
    )
}

export default Login