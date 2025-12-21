import React from 'react'
import Header from '../Others/Header/Header'
import CreateTask from '../Others/AdminDashboardComponents/CreateTask'
import EmployeeOverview from '../Others/AdminDashboardComponents/EmployeeOverview'
import EmployeeCharts from '../Others/AdminDashboardComponents/EmployeeCharts'

const AdminDashboard = ({loginHandler, logoutHandler, data }) => {



    return (
        <div>
            <Header logoutHandler={logoutHandler} data={data} />
            <CreateTask />
            <EmployeeCharts/>
            <EmployeeOverview loginHandler={loginHandler} />
        </div>
    )
}

export default AdminDashboard