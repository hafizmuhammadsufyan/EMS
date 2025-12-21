import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className='lg:w-[20vw] w-full flex flex-col justify-between bg-red-400 shrink-0 rounded-xl pt-4 pb-8 px-3 '>
            <div className='flex justify-between items-center'>
                <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>{data.category}</p>
                <p className='text-[10px] font-medium'>{data.date}</p>
            </div>
            <div>
                <h3 className='text-[16px] w-[50%] py-2 font-bold'>{data.title}</h3>
                <p className='text-[12px] font-medium'>{data.description}</p>
            </div>
            <div>
                <button className='bg-red-600 text-lg mt-6 font-bold w-full py-0.5 rounded'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask