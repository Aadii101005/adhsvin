import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import React from 'react'

const AdminRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth)
  
  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/" replace />
  }
  
  return children
}

export default AdminRoute
