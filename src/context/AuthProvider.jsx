import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState(null)
  const [refresh, setRefresh] = useState(false)

  const triggerRefresh = () => {
    setRefresh(prev => !prev)
  }

  useEffect(() => {
    const prevEmployees = localStorage.getItem('employees')

    if (!prevEmployees) {

      setLocalStorage()

    }
    const { employees, admin } = getLocalStorage()
    setUserData({ employees, admin });

  }, [refresh])

  const contextData = {
    userData,
    setUserData,
    triggerRefresh,
    refresh
  }


  return (
    <div>
      <AuthContext.Provider value={contextData}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider