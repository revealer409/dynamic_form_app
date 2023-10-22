import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../utils/UseAuth'
 import React from 'react'
function PublicRoutes() {
    const token = useAuth()
    return token ? <Navigate to='/' /> : <Outlet />
}

export default PublicRoutes