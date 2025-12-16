import React from 'react'
import TaskOverviewCards from './TaskOverviewCards'

const TaskOverview = () => {
    return (
        <div className='border-l-5 border-amber-500 py-5 px-5 rounded-2xl'>
            <h1 className='text-2xl font-semibold text-amber-500'>Task Overview</h1>
            <TaskOverviewCards/>
        </div>
    )
}

export default TaskOverview