import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import EmployeeTaskDetail from './components/Others/EmployeeDashboardComponents/EmployeeTaskDetail'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const [logginUserData, setLogginUserData] = useState(null)

  const authData = useContext(AuthContext)

  useEffect(() => {
    const loggedinUser = JSON.parse(localStorage.getItem('loggedinUser'))

    if (loggedinUser) {
      setUser(loggedinUser.role);
      setLogginUserData(loggedinUser.data);

    }

  }, [])

  const logoutHandler = () => {

    setUser(null)
    localStorage.removeItem('loggedinUser')

  }


  const loginHandler = (email, password) => {
    if (authData && authData.admin.find((e) => email == e.email && password == e.password)) {

      const admin = authData.admin.find((e) => email == e.email && password == e.password)

      if (admin) {
        setUser("admin")
        localStorage.setItem("loggedinUser", JSON.stringify({ role: "admin", data: admin }))
        setLogginUserData(admin)
      }
    } else if (authData && authData.employees.find((e) => email == e.email && password == e.password)) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('employee')
        localStorage.setItem("loggedinUser", JSON.stringify({ role: "employee", data: employee }))
        setLogginUserData(employee)
      }
    } else {
      alert("Invalid Credentials")
    }
  }


  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ""}
      {user == "admin" ? <AdminDashboard logoutHandler={logoutHandler} data={logginUserData} /> : ""}
      {user == "employee" ? <EmployeeDashboard logoutHandler={logoutHandler} data={logginUserData} /> : ""}
    </>
  )
}

export default App