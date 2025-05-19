import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, redirect, useLocation } from 'react-router-dom'
import Home from '../../pages/Home'
import Login from './Login'

const ProtectedRoute = () => {
    
    const { users } = useSelector(state => state.Auth)
    const location = useLocation()
    const data = location.state;
    const userData = users?.find(user => (
        user.email === data?.email && user.password === data?.password
    ))
    // const [user, setuser] = useState(userData)
    // const handleLogout = () =>{
    //     setuser({})
    // }

    // console.log(user)
    return (
        <div>
            {userData &&
            <div>
                <h2>Welcome , <span className='font-semibold'>{userData?.name}</span></h2>
                {/* <button onClick={handleLogout}>Logout</button> */}
                </div>
            }
            {userData ?
                <Home />
                :
                // <Login/>
                <Navigate to='/login' />
            }
        </div>
    )
}

export default ProtectedRoute