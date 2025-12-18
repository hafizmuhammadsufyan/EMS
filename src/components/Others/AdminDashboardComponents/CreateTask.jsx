import React, { useContext, useState } from 'react'

const CreateTask = () => {


    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const data = JSON.parse(localStorage.getItem('employees'))

    const newTask = { active: false, newTask: true, completed: false, failed: false, title, date, category, description, }


    let id = data.length

    const employeeCreator = (e) => {

        id += 1

        let newUser = {
            id: id,
            email,
            name,
            password,
            taskStats: {
                active: 0,
                completed: 0,
                failed: 0,
                newTask: 0
            },
            tasks: []

        }

        data.push(newUser)


        localStorage.setItem("employees", JSON.stringify(data))

        setName("")
        setEmail("")
        setPassword("")

    }


    const taskCreator = (e) => {

        data.forEach(elem => {

            if (assignTo == elem.name) {
                elem.tasks.push(newTask)
                elem.taskStats.newTask += 1

            }


        });


        localStorage.setItem("employees", JSON.stringify(data))

        setTitle("")
        setDate("")
        setAssignTo("")
        setCategory("")
        setDescription("")

    }

    return (
        <div className='w-full flex-wrap items-center justify-center flex gap-4 py-2 px-6'>
            <div className='w-[49%] shrink-0'>
                <form onSubmit={(e) => { taskCreator(e) }} className='flex gap-4 flex-wrap py-4 px-6 shadow-[0px_10px_12px_gray] rounded-2xl items-start justify-between border-t-2 border-amber-500'>
                    <div className='flex flex-col gap-3'>
                        <h3>Task Title</h3>
                        <input
                            onChange={(e) => { setTitle(e.target.value) }}
                            value={title}
                            className='border outline-none border-amber-500 rounded py-1 px-3'
                            type="text"
                            placeholder='e.g: Make UI Design' />
                        <h3>Assigning Date</h3>
                        <input
                            onChange={(e) => { setDate(e.target.value) }}
                            value={date}
                            className='border outline-none border-amber-500 rounded py-1 px-3'
                            type="date" />
                        <h3>Assign To:</h3>
                        <input
                            onChange={(e) => { setAssignTo(e.target.value) }}
                            value={assignTo}
                            className='border outline-none border-amber-500 rounded py-1 px-3'
                            type="text"
                            placeholder='Employee Name' />
                        <h3>Category</h3>
                        <input
                            onChange={(e) => { setCategory(e.target.value) }}
                            value={category}
                            className='border outline-none border-amber-500 rounded py-1 px-3'
                            type="text"
                            placeholder='e.g: Design, Development' />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <textarea
                            onChange={(e) => { setDescription(e.target.value) }}
                            value={description}
                            placeholder='Task descriptionription'
                            className='border outline-none border-amber-500 rounded py-1 px-3 w-70 h-40'>
                        </textarea>
                        <button className='bg-amber-500 text-white font-semibold text-lg active:scale-95 py-1.5 px-5 rounded text-center cursor-pointer'>Assign Task</button>
                    </div>
                </form>
            </div>
            <div className='w-[49%] shrink-0'>
                <form onSubmit={(e) => { employeeCreator(e) }} className='py-4 px-6 shadow-[0px_10px_12px_gray] rounded-2xl border-t-2 border-amber-500'>
                    <div className='flex flex-col gap-3'>
                        <h3>Employee Name</h3>
                        <input
                            onChange={(e) => { setName(e.target.value) }}
                            value={name}
                            className='border outline-none border-amber-500 rounded py-1 px-3'
                            type="text"
                            placeholder='Name' />
                        <h3>Email:</h3>
                        <input
                            onChange={(e) => { setEmail(e.target.value) }}
                            value={email}
                            className='border outline-none border-amber-500 rounded py-1 px-3'
                            type="email"
                            placeholder='Email' />
                        <h3>Password</h3>
                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            value={password}
                            className='border outline-none border-amber-500 rounded py-1 px-3'
                            type="password"
                            placeholder='Password' />
                        <button className='bg-amber-500 text-white font-semibold text-lg active:scale-95 py-1.5 px-5 rounded text-center cursor-pointer mb-7'>Create Employee</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask