import React from 'react'

const Filters = ({ setActive, setCompleted, setNewTask, setFailed }) => {
    return (
        <div className='flex lg:flex-nowrap flex-wrap gap-4 my-2 px-6 py-2'>
            <button
                onClick={() => {
                    setActive(false)
                    setCompleted(false)
                    setNewTask(true)
                    setFailed(false)
                }}
                className='bg-purple-500 shadow-[2px_2px_5px_black] active:shadow-none active:scale-95 cursor-pointer pb-0.5 px-3 rounded text-white font-semibold'>New</button>
            <button
                onClick={() => {
                    setActive(false)
                    setCompleted(true)
                    setNewTask(false)
                    setFailed(false)
                }}
                className='bg-green-500 shadow-[2px_2px_5px_black] active:shadow-none active:scale-95 cursor-pointer pb-0.5 px-3 rounded text-white font-semibold'>Completed</button>
            <button
                onClick={() => {
                    setActive(true)
                    setCompleted(false)
                    setNewTask(false)
                    setFailed(false)
                }}
                className='bg-pink-500 shadow-[2px_2px_5px_black] active:shadow-none active:scale-95 cursor-pointer pb-0.5 px-3 rounded text-white font-semibold'>Active</button>
            <button
                onClick={() => {
                    setActive(false)
                    setCompleted(false)
                    setNewTask(false)
                    setFailed(true)
                }}
                className='bg-red-500 shadow-[2px_2px_5px_black] active:shadow-none active:scale-95 cursor-pointer pb-0.5 px-3 rounded text-white font-semibold'>Failed</button>
            <button
                onClick={() => {
                    setActive(true)
                    setCompleted(true)
                    setNewTask(true)
                    setFailed(true)
                }}
                className='bg-gray-500 shadow-[2px_2px_5px_black] active:shadow-none active:scale-95 cursor-pointer pb-0.5 px-3 rounded text-white font-semibold'>All Tasks</button>
        </div>
    )
}

export default Filters