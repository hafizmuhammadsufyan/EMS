import React from 'react'
import Header from '../Others/Header/Header'
import CreateTask from '../Others/AdminDashboardComponents/CreateTask'
import EmployeeOverview from '../Others/AdminDashboardComponents/EmployeeOverview'

const AdminDashboard = ({ loginHandler, logoutHandler, data }) => {

    return (
        <div>
            <Header logoutHandler={logoutHandler} data={data} />
            <CreateTask />
            <EmployeeOverview />
        </div>
    )
}

export default AdminDashboard