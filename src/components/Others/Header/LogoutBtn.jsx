import React from 'react'

const LogoutBtn = ({ logoutHandler }) => {




    return (
        <div className='bg-amber-500 text-white font-semibold lg:text-lg flex gap-1.5 active:scale-95 py-1.5 px-5 rounded-lg cursor-pointer'>
            <i className="ri-logout-box-r-line cursor-pointer"></i>
            <button onClick={() => { logoutHandler() }} className='cursor-pointer'>Logout</button>
        </div>
    )
}

export default LogoutBtn