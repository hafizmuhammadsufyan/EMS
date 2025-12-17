import React from 'react'
import CompleteBtn from './CompleteBtn'
import FailedBtn from './FailedBtn'
import ActiveTask from '../../TaskList/ActiveTask'
import CompleteTask from '../../TaskList/CompleteTask'
import FailedTask from '../../TaskList/FailedTask'
import NewTask from '../../TaskList/NewTask'

const TaskListCards = ({ data }) => {


    return (
        <div className='py-2 px-4 flex overflow-auto gap-4 text-white'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) return <ActiveTask key={idx} data={elem} />
                if (elem.newTask) return <NewTask key={idx} data={elem} />
                if (elem.completed) return <CompleteTask key={idx} data={elem} />
                if (elem.failed) return <FailedTask key={idx} data={elem} />
            })}
        </div>
    )
}

export default TaskListCards