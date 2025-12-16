import React from 'react'
import Header from '../Others/Header/Header'

const AdminDashboard = () => {
    return (
        <div>
            <Header />
            <div className='w-screen flex gap-4 py-2 px-6'>
                <div className='w-[50%]'>
                    <form className='flex py-4 px-6 shadow-[0px_10px_12px_gray] rounded-2xl items-start justify-between border-t-2 border-amber-500'>
                        <div className='flex flex-col gap-3'>
                            <h3>Task Title</h3>
                            <input className='border outline-none border-amber-500 rounded py-1 px-3' type="text" placeholder='e.g: Make UI Design' />
                            <h3>Assigning Date</h3>
                            <input className='border outline-none border-amber-500 rounded py-1 px-3' type="date" />
                            <h3>Assign To:</h3>
                            <input className='border outline-none border-amber-500 rounded py-1 px-3' type="text" placeholder='Employee Name' />
                            <h3>Category</h3>
                            <input className='border outline-none border-amber-500 rounded py-1 px-3' type="text" placeholder='e.g: Design, Development' />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <textarea placeholder='Task Description' className='border outline-none border-amber-500 rounded py-1 px-3 w-70 h-40'></textarea>
                            <button className='bg-amber-500 text-white font-semibold text-lg active:scale-95 py-1.5 px-5 rounded text-center cursor-pointer'>Assign Task</button>

                        </div>
                    </form>
                </div>
                <div className='w-[50%]'>
                    <form className='py-4 px-6 shadow-[0px_10px_12px_gray] rounded-2xl border-t-2 border-amber-500'>
                        <div className='flex flex-col gap-3'>
                            <h3>Employee Name</h3>
                            <input className='border outline-none border-amber-500 rounded py-1 px-3' type="text" placeholder='Name' />
                            <h3>Email:</h3>
                            <input className='border outline-none border-amber-500 rounded py-1 px-3' type="email" placeholder='Email' />
                            <h3>Password</h3>
                            <input className='border outline-none border-amber-500 rounded py-1 px-3' type="password" placeholder='Password' />
                            <button className='bg-amber-500 text-white font-semibold text-lg active:scale-95 py-1.5 px-5 rounded text-center cursor-pointer mb-7'>Create Employee</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard