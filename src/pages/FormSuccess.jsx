import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const FormSuccess = () => {
    const {userLogin} = useSelector(state=>state.Auth)
    const navigate = useNavigate();
  return (
    <div className='text-center'>
         <h2 className='text-center my-5'>Form Success</h2>
        <h2 className=" text-xl font-semibold py-5">Congrats <span className='text-[#3668f1]'>{userLogin?.name}</span> , your application has been Submitted Successfully</h2>
          <Button variant='outlined' onClick={()=>navigate('/studentForm',{replace:true})}>Go Back</Button>
    </div>
  )
}

export default FormSuccess