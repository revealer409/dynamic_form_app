import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../utils/UseAuth'
import React from 'react'

function PrivateRoutes() {
    const token = useAuth()
    return token ? <Outlet /> : <Navigate to='/admin/login' />
}

export default PrivateRoutes