import React from 'react'
import { useAuth } from './Context/AuthContext'

const Logout = () => {

  const { loggedInUser, logout } = useAuth();
  
  return (
    <div>
      {loggedInUser && <button onClick={logout}>Logout</button>}
    </div>
  )
}

export default Logout
