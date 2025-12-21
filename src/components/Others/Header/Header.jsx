import React from 'react'
import Profile from './Profile'
import LogoutBtn from './LogoutBtn'

const Header = ({ goBack, loginHandler, logoutHandler, data }) => {

    return (
        <div className='bg-amber-100 w-screen border-b-2 border-amber-500 flex py-4 lg:px-8 px-4 items-center lg:justify-around md:justify-around justify-between'>
            <Profile data={data} />
            <div className={goBack ? "flex lg:flex-row md:flex-row flex-col gap-3": ""}>
                <LogoutBtn loginHandler={loginHandler} logoutHandler={logoutHandler} />
                {goBack}
            </div>

        </div>
    )
}

export default Header