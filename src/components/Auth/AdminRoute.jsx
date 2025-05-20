import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = () => {
    const { isAdmin } = useSelector(state => state.Auth)
    return (
        <>
            {isAdmin ? <Outlet /> : <Navigate to='/login' />}
        </>
    )
}

export default AdminRoute 