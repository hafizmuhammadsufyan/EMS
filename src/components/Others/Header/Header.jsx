import React from 'react'
import Profile from './Profile'
import LogoutBtn from './LogoutBtn'

const Header = ({ logoutHandler , data }) => {

    return (
        <div className='bg-amber-100 border-b-2 border-amber-500 flex py-4 px-8 items-center justify-around'>
            <Profile data={data}/>
            <LogoutBtn logoutHandler={logoutHandler} />
        </div>
    )
}

export default Header