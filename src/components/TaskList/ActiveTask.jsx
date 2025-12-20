import React, { useContext } from 'react'
import CompleteBtn from '../Others/EmployeeDashboardComponents/CompleteBtn'
import { AuthContext } from '../../context/AuthProvider'

const ActiveTask = ({ setLoginUser, empData, data }) => {


    const { triggerRefresh } = useContext(AuthContext)


    const markCompleted = () => {
        const prevData = JSON.parse(localStorage.getItem('employees'))
        prevData.forEach((emp) => {
            if (emp.id === empData.id) {
                emp.tasks.forEach((task) => {
                    if (task.title === data.title) {
                        task.active = false
                        task.newTask = false
                        task.completed = true
                        emp.taskStats.active -= 1
                        emp.taskStats.completed += 1
                    }
                    setLoginUser(emp)

                    localStorage.setItem("loggedinUser", JSON.stringify({ role: "employee", data: emp }))

                })
            }
        })
        localStorage.setItem('employees', JSON.stringify(prevData))

        // triggerRefresh()


    }

    const markFailed = () => {
        const prevData = JSON.parse(localStorage.getItem('employees'))

        prevData.forEach((emp) => {
            if (emp.id === empData.id) {
                emp.tasks.forEach((task) => {
                    if (task.title === data.title) {
                        task.active = false
                        task.newTask = false
                        task.failed = true
                        emp.taskStats.active -= 1
                        emp.taskStats.failed += 1
                    }

                    setLoginUser(emp)

                    localStorage.setItem("loggedinUser", JSON.stringify({ role: "employee", data: emp }))
                })
            }
        })
        localStorage.setItem('employees', JSON.stringify(prevData))

        triggerRefresh()

    }

    return (
        <div className='w-[20vw] flex flex-col justify-between bg-blue-400 shrink-0 rounded-xl pt-4 pb-8 px-3 '>
            <div className='flex justify-between items-center'>
                <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>{data.category}</p>
                <p className='text-[10px] font-medium'>{data.date}</p>
            </div>
            <div>
                <h3 className='text-[16px] w-[50%] py-2 font-bold'>{data.title}</h3>
                <p className='text-[12px] font-medium'>{data.description}</p>
            </div>
            <div className='flex w-full justify-between gap-1 mt-6'>
                <button onClick={() => { markCompleted() }} className='bg-green-600 py-1 px-3 text-[13px] font-bold  rounded cursor-pointer active:scale-95'>Mark Completed</button>
                <button onClick={() => { markFailed() }} className='bg-red-600 py-1 px-3 text-[13px] font-bold  rounded cursor-pointer active:scale-95'>Mark Failed</button>
            </div>
        </div>
    )
}

export default ActiveTask