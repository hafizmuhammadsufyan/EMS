import React from 'react'

const GobackBtn = ({loginHandler}) => {
    return (
        <div className='bg-amber-500 text-white font-semibold text-lg flex gap-1.5 active:scale-95 py-1.5 px-5 rounded-lg cursor-pointer'>
            <i className="ri-logout-box-line cursor-pointer"></i>
            <button onClick={()=>{loginHandler("admin@company.com","123")}} className='cursor-pointer'>GoTo Admin</button>
        </div>
    )
}

export default GobackBtn