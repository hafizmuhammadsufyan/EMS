import React from 'react'
import CompleteBtn from './CompleteBtn'
import FailedBtn from './FailedBtn'

const TaskListCards = () => {
    return (
        <div className='py-2 px-4 flex overflow-auto gap-4 text-white'>
            <div className='w-[20vw] flex flex-col justify-between bg-red-400 shrink-0 rounded-xl pt-4 pb-8 px-3 '>
                <div className='flex justify-between items-center'>
                    <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>Sales</p>
                    <p className='text-[10px] font-light'>2025-01-27</p>
                </div>
                <div>
                    <h3 className='text-[16px] w-[20%] py-2 font-bold'>Presentation Preparation</h3>
                    <p className='text-[12px] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus reprehenderit quibusdam cumque voluptatem eos suscipit dicta similique aspernatur cum ipsa!</p>
                </div>
                <div>
                    <CompleteBtn />
                    <FailedBtn />
                </div>
            </div>

            <div className='w-[20vw] flex flex-col justify-between bg-red-400 shrink-0 rounded-xl pt-4 pb-8 px-3 '>
                <div className='flex justify-between items-center'>
                    <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>Sales</p>
                    <p className='text-[10px] font-light'>2025-01-27</p>
                </div>
                <div>
                    <h3 className='text-[16px] w-[20%] py-2 font-bold'>Presentation Preparation</h3>
                    <p className='text-[12px] font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam aliquam rem perspiciatis et repellendus impedit in officiis, omnis sint harum ea? Veritatis quam facilis iusto optio sapiente illum tempore quia!</p>
                </div>
                <div>
                    <CompleteBtn />
                    <FailedBtn />
                </div>
            </div>
            <div className='w-[20vw] flex flex-col justify-between bg-red-400 shrink-0 rounded-xl pt-4 pb-8 px-3 '>
                <div className='flex justify-between items-center'>
                    <p className='text-xs font-medium bg-transparent shadow-[inset_2px_2px_4px_rgba(0,0,0,0.25)] py-1 px-2 rounded-full'>Sales</p>
                    <p className='text-[10px] font-light'>2025-01-27</p>
                </div>
                <h3 className='text-[16px] w-[20%] py-2 font-bold'>Presentation Preparation</h3>
                <p className='text-[12px] font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem impedit, repellat sunt alias maxime provident blanditiis asperiores magni iusto animi, a reiciendis, recusandae facere id molestiae? Nihil natus sint officiis numquam harum repudiandae exercitationem aliquid repellendus unde ipsum aliquam, illo aut ad qui modi, quam blanditiis fugit deserunt id atque.</p>
                <CompleteBtn />
                <FailedBtn />
            </div>

        </div>
    )
}

export default TaskListCards