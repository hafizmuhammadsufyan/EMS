import React from 'react'
import CompleteBtn from './CompleteBtn'
import FailedBtn from './FailedBtn'

const TaskListCards = () => {
    return (
        <div className='py-2 px-4 flex gap-4 text-white'>
            <div className='w-[15%] h-46 bg-red-400 rounded-xl py-2 px-2 '>
                <div className='flex justify-between items-center'>
                    <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>Sales</p>
                    <p className='text-[10px] font-light'>2025-01-27</p>
                </div>
                <h3 className='text-[16px] py-2 font-bold'>Presentation Preparation</h3>
                <p className='text-[10px] font-light'>Prepare Presentation Slides</p>
                <CompleteBtn/>
                <FailedBtn/>
            </div>
        </div>
    )
}

export default TaskListCards