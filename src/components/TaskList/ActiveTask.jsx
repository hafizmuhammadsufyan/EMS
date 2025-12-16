import React from 'react'
import CompleteBtn from '../Others/EmployeeDashboardComponents/CompleteBtn'

const ActiveTask = ({data}) => {
    return (
        <div className='w-[20vw] flex flex-col justify-between bg-blue-400 shrink-0 rounded-xl pt-4 pb-8 px-3 '>
            <div className='flex justify-between items-center'>
                <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>{data.category}</p>
                <p className='text-[10px] font-light'>{data.date}</p>
            </div>
            <div>
                <h3 className='text-[16px] w-[50%] py-2 font-bold'>{data.title}</h3>
                <p className='text-[12px] font-medium'>{data.description}</p>
            </div>
            <div className='flex gap-1 mt-6'>
                <button className='bg-green-600 py-1 px-1.5 whitespace-nowrap text-[13px] font-bold  rounded cursor-pointer active:scale-95'>Mark as Completed</button>
                <button className='bg-red-600 py-1 px-1.5 whitespace-nowrap text-[13px] font-bold  rounded cursor-pointer active:scale-95'>Mark as Failed</button>
            </div>
        </div>
    )
}

export default ActiveTask