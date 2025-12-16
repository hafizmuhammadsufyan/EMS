import React from 'react'

const TaskOverviewCards = ({data}) => {


    return (
        <div className='flex gap-4'>
            <div className='bg-purple-500 text-white w-[24%] shrink-0 py-4 px-3 rounded-2xl shadow-xl mt-6'>
                <div className='flex items-center justify-between mb-3'>
                    <i className="ri-list-check-3 text-2xl"></i>
                    <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>Newly Added</p>
                </div>
                <h2 className='text-3xl font-bold'>{data.taskStats.newTask}</h2>
                <p className='text-sm font-normal pt-1'>New Task</p>
            </div>
            <div className='bg-green-500 text-white w-[24%] shrink-0 py-4 px-3 rounded-2xl shadow-xl mt-6'>
                <div className='flex items-center justify-between mb-3'>
                    <i className="ri-check-double-fill text-2xl"></i>
                    <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>Finished</p>
                </div>
                <h2 className='text-3xl font-bold'>{data.taskStats.completed}</h2>
                <p className='text-sm font-normal pt-1'>Completed Task</p>
            </div>
            <div className='bg-pink-600 text-white w-[24%] shrink-0 py-4 px-3 rounded-2xl shadow-xl mt-6'>
                <div className='flex items-center justify-between mb-3'>
                    <i className="ri-run-fill text-2xl"></i>
                    <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>Ongoing</p>
                </div>
                <h2 className='text-3xl font-bold'>{data.taskStats.active}</h2>
                <p className='text-sm font-normal pt-1'>Active Task</p>
            </div>
            <div className='bg-red-500 text-white w-[24%] shrink-0 py-4 px-3 rounded-2xl shadow-xl mt-6'>
                <div className='flex items-center justify-between mb-3'>
                    <i className="ri-error-warning-fill text-2xl"></i>
                    <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>Needs Review</p>
                </div>
                <h2 className='text-3xl font-bold'>{data.taskStats.failed}</h2>
                <p className='text-sm font-normal pt-1'>Failed Task</p>
            </div>
        </div>
    )
}

export default TaskOverviewCards