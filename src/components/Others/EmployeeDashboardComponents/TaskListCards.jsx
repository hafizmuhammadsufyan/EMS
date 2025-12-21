import React, { useState } from 'react'
import CompleteBtn from './CompleteBtn'
import FailedBtn from './FailedBtn'
import ActiveTask from '../../TaskList/ActiveTask'
import CompleteTask from '../../TaskList/CompleteTask'
import FailedTask from '../../TaskList/FailedTask'
import NewTask from '../../TaskList/NewTask'
import Filters from './Filters'

const TaskListCards = ({setLoginUser, data }) => {

    const [active, setActive] = useState(true)
    const [completed, setCompleted] = useState(true)
    const [newTask, setNewTask] = useState(true)
    const [failed, setFailed] = useState(true)

    return (
        <div>
            <Filters setActive={setActive} setCompleted={setCompleted} setNewTask={setNewTask} setFailed={setFailed}/>
            <div className='py-2 px-4 flex lg:flex-nowrap flex-wrap lg:overflow-auto gap-4 text-white'>

                {data.tasks.map((elem, idx) => {
                    if (elem.active && active) return <ActiveTask setLoginUser={setLoginUser} key={idx} data={elem} empData={data} />
                    if (elem.newTask && newTask) return <NewTask setLoginUser={setLoginUser} key={idx} data={elem} empData={data} />
                    if (elem.completed && completed) return <CompleteTask key={idx} data={elem} empData={data} />
                    if (elem.failed && failed) return <FailedTask key={idx} data={elem} empData={data} />
                })}
            </div>
        </div>
    )
}

export default TaskListCards