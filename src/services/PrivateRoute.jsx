import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({element}) => {

const {isAuthenticated} = useContext(AuthContext)

console.log(isAuthenticated);
  return ( isAuthenticated ? element : <Navigate to="/login"/>    
  )
}

export default PrivateRoute