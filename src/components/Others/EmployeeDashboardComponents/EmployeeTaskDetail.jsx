import React from 'react'
import TaskOverview from './TaskOverview'
import TaskLists from './TaskLists'

const EmployeeTaskDetail = () => {
  return (
    <div className='py-2 px-6'>
      <TaskOverview/>
      <TaskLists/>
    </div>
  )
}

export default EmployeeTaskDetail