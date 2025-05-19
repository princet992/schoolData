import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'


const ProtectedRoute = () => {

    const { users } = useSelector(state => state.Auth)
    const navigate = useNavigate('')
    const location = useLocation()
    const data = location.state;
    const userData = users?.find(user => (
        user.email === data?.email && user.password === data?.password
    ))

    return (
        <div>
            {userData &&
                <div className='flex justify-between items-center flex-wrap'>
                    <h2 className='m-3'>Welcome , <span className='font-semibold'>{userData?.name}</span></h2>
                    <Button variant='contained' size='small' onClick={() => navigate('/studentForm')}>Add Student</Button>
                </div>
            }
            {userData ?
                <Outlet />
                :
                // <Login/>
                <Navigate to='/login' />
            }
        </div>
    )
}

export default ProtectedRoute