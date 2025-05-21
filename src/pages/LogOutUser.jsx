import { Button } from '@mui/material'
import React from 'react'
import { logOut } from '../features/AuthSlice/AuthSlice'

function LogOutUser() {
  return (
    <>
    <Button variant='outlined' onClick={()=>logOut()}> LogOut</Button>
    </>
  )
}

export default LogOutUser