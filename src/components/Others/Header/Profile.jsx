import React from 'react'

const Profile = ({data}) => {

    return (
        <div className='flex gap-3 items-center'>
            <div className='bg-white text-amber-500 p-7 rounded-full text-3xl ml h-12 w-12 flex items-center justify-center'>
                <i className="ri-user-3-line"></i>
            </div>
            <div>
                <span className='text-[12px] font-semibold'>Welcome</span> <br />
                <h1 className='text-2xl text-amber-500 font-bold'>{data.name}</h1>
            </div>
        </div>
    )
}

export default Profile