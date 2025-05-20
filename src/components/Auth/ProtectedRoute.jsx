import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { logOut } from '../../features/AuthSlice/AuthSlice'


const ProtectedRoute = () => {

    const dispatch = useDispatch()
    const { isAuthenticate, userLogin } = useSelector(state => state.Auth)
    const navigate = useNavigate('')

    const handleLogOut = () => {
        dispatch(logOut())
        navigate('/login')
    }

    return (
        <div>
            {
                isAuthenticate &&
                <div className='flex  justify-end items-center flex-wrap'>
                    <h2 className='m-3'>Welcome , <span className='font-semibold'>{userLogin?.name}</span></h2>
                    <Button sx={{ fontSize: '10px', fontWeight: 'bold' }} variant='outlined' size='small' onClick={handleLogOut}>LogOut</Button>
                </div>
            }
            {isAuthenticate ? <Outlet /> : <Navigate to='/' />}
        </div>
    )
}

export default ProtectedRoute