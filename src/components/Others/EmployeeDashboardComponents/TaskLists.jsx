import React from 'react'
import TaskListCards from './TaskListCards'

const TaskLists = ({setLoginUser,data}) => {
    return (
        <div className='py-2'>
            <div className='w items-center flex justify-between'>
                <h2 className='text-xl font-semibold text-amber-500'>Your Tasks</h2>
                <p className='text-sm'>14, December 2025</p>
            </div>
            
            <TaskListCards setLoginUser={setLoginUser} data={data}/>
        </div>
    )
}

export default TaskLists