import React, { useContext } from 'react'
import { AuthContext } from '../../../context/AuthProvider'

const EmployeeOverview = ({ loginHandler }) => {


    const { employees } = useContext(AuthContext)


    return (
        <div>
            <div className='py-3 px-6'>
                <div className='flex w-full'>
                    <div className='w-1/5'>
                        <h1 className='border-t-2 text-center px-3 border-l-2 border-b-2 mt-3'>Name</h1>
                    </div>
                    <div className='w-1/5'>

                        <h1 className='border-t-2 text-center border-b-2 mt-3 '>Active Tasks</h1>
                    </div>
                    <div className='w-1/5'>

                        <h1 className='border-t-2 text-center border-b-2 mt-3 '>New Tasks</h1>
                    </div>
                    <div className='w-1/5'>

                        <h1 className='border-t-2 text-center border-b-2 mt-3 '>Completed Tasks</h1>
                    </div>
                    <div className='w-1/5'>
                        <h1 className='border-t-2 text-center border-b-2 mt-3 '>Failed Tasks</h1>
                    </div>
                    <div className='w-1/5'>
                        <h1 className='border-t-2 text-center border-b-2 border-r-2 mt-3 '>See Profile</h1>
                    </div>
                </div>
            </div>
            <div className='px-6'>
                {employees.map((elem, idx) => {
                    return (

                        <div key={idx}>
                            <div className='flex w-full'>
                                <div className='w-1/5'>
                                    <h1 className='text-center border-t-2 border-l-2 border-b-2 mb-3'>{elem.name}</h1>
                                </div>
                                <div className='w-1/5'>

                                    <h1 className='text-center border-t-2 border-b-2 mb-3 '>{elem.taskStats.active}</h1>
                                </div>
                                <div className='w-1/5'>

                                    <h1 className='text-center border-t-2 border-b-2 mb-3 '>{elem.taskStats.newTask}</h1>
                                </div>
                                <div className='w-1/5'>

                                    <h1 className='text-center border-t-2 border-b-2 mb-3 '>{elem.taskStats.completed}</h1>
                                </div>
                                <div className='w-1/5'>
                                    <h1 className='text-center border-t-2 border-b-2 mb-3 '>{elem.taskStats.failed}</h1>
                                </div>
                                <div className='w-1/5'>
                                    <h1 className='text-center border-t-2 border-b-2 border-r-2 mb-3 '><button className='bg-green-300 px-3 cursor-pointer' onClick={(e) => {

                                        loginHandler(elem.email, elem.password)
                                    }}>View Employee</button></h1>
                                </div>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default EmployeeOverview