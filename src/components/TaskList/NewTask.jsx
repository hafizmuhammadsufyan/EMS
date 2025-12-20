import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const NewTask = ({setLoginUser, empData, data }) => {

    const { triggerRefresh } = useContext(AuthContext)

    const acceptTask = () => {
        const prevData = JSON.parse(localStorage.getItem('employees'))



        prevData.forEach((emp) => {
            if (emp.id === empData.id) {
                emp.tasks.forEach((task) => {
                    if (task.title === data.title) {
                        task.newTask = false
                        task.active = true
                        emp.taskStats.newTask -= 1
                        emp.taskStats.active += 1
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
        <div className='w-[20vw] flex flex-col justify-between bg-yellow-500 shrink-0 rounded-xl pt-4 pb-8 px-3 '>
            <div className='flex justify-between items-center'>
                <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>{data.category}</p>
                <p className='text-[10px] font-medium'>{data.date}</p>
            </div>
            <div>
                <h3 className='text-[16px] w-[50%] py-2 font-bold'>{data.title}</h3>
                <p className='text-[12px] font-medium'>{data.description}</p>
            </div>
            <div>
                <button onClick={() => { acceptTask() }} className='bg-green-600 text-lg font-bold py-0.5 w-full rounded mt-6 cursor-pointer active:scale-95'>Accept</button>
            </div>
        </div>
    )
}

export default NewTask