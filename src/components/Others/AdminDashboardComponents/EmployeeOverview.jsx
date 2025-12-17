import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const EmployeeOverview = ({ loginHandler }) => {


    const { employees } = useContext(AuthContext)


    return (
        <div>
            <div className=' mt-7 px-6'>
                <div className='flex w-full text-center bg-amber-500 text-white font-bold mb-2 py-2 px-6'>
                    <h1 className='w-1/6'>Name</h1>
                    <h1 className='w-1/6'>Active Tasks</h1>
                    <h1 className='w-1/6'>New Tasks</h1>
                    <h1 className='w-1/6'>Completed Tasks</h1>
                    <h1 className='w-1/6'>Failed Tasks</h1>
                    <h1 className='w-1/6'>See Profile</h1>
                </div>
            </div>
            <div className='px-6'>
                {employees.map((elem, idx) => {
                    return (

                        <div key={idx}>
                            <div className='flex text-lg font-bold text-center w-full border-b border-b-amber-500 mb-2 py-3 px-6'>
                                <h1 className='w-1/6'>{elem.name}</h1>
                                <h1 className='w-1/6 text-blue-600'>{elem.taskStats.active}</h1>
                                <h1 className='w-1/6 text-yellow-400'>{elem.taskStats.newTask}</h1>
                                <h1 className='w-1/6 text-green-600'>{elem.taskStats.completed}</h1>
                                <h1 className='w-1/6 text-red-600'>{elem.taskStats.failed}</h1>
                                <h1 className='w-1/6'>
                                    <button className='bg-indigo-500 px-3 py-0.5 text-white rounded active:scale-95 cursor-pointer'
                                        onClick={(e) => { loginHandler(elem.email, elem.password) }}>View Employee
                                    </button>
                                </h1>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default EmployeeOverview