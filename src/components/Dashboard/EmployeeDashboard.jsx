import React from 'react'
import Header from '../Others/Header/Header'
import EmployeeTaskDetail from '../Others/EmployeeDashboardComponents/EmployeeTaskDetail'

const EmployeeDashboard = ({logoutHandler, data}) => {

  return (
    <div>
        <Header logoutHandler={logoutHandler} data={data}/>
        <EmployeeTaskDetail data={data}/>
    </div>
  )
}

export default EmployeeDashboard