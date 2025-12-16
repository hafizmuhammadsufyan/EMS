import React from 'react'
import TaskOverview from './TaskOverview'
import TaskLists from './TaskLists'

const EmployeeTaskDetail = ({data}) => {
  return (
    <div className='py-2 px-6'>
      <TaskOverview data={data}/>
      <TaskLists data={data}/>
    </div>
  )
}

export default EmployeeTaskDetail