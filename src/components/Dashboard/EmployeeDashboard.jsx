import React from 'react'
import Header from '../Others/Header/Header'
import EmployeeTaskDetail from '../Others/EmployeeDashboardComponents/EmployeeTaskDetail'
import GobackBtn from '../Others/Header/GobackBtn'

const EmployeeDashboard = ({ loginHandler, logoutHandler, data }) => {

  return (
    <div>
      <Header goBack={<GobackBtn loginHandler={loginHandler} />} loginHandler={loginHandler} logoutHandler={logoutHandler} data={data} />
      <EmployeeTaskDetail data={data} />
    </div>
  )
}

export default EmployeeDashboard