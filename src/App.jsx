import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import EmployeeTaskDetail from './components/Others/EmployeeDashboardComponents/EmployeeTaskDetail'
import { AuthContext } from './context/AuthProvider'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const [logginInUserData, setLogginInUserData] = useState("")

  const authData = useContext(AuthContext)

  useEffect(() => {
    getLocalStorage()
  },)
  



  const loginHandler = (email, password) => {
    if (email == "admin@me.com" && password == "123") {

      setUser("admin")
      localStorage.setItem("loggedinUser", JSON.stringify({role:"admin"}))

    } else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser('employee')
        // setLogginInUserData(employee)
        localStorage.setItem("loggedinUser", JSON.stringify({role:"employee"}))
        console.log(logginInUserData);
        

      }
    } else {
      alert("Invalid Credentials")
    }
  }


  return (
    <>
      {!user ? <Login loginHandler={loginHandler} /> : ''}
      {user == "admin" ? <AdminDashboard /> : ""}
      {user == "employee" ? <EmployeeDashboard /> : ""}
    </>
  )
}

export default App