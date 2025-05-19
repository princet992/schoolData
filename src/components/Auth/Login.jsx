import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const { users } = useSelector(state => state.Auth)
    const [alert, setalert] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleClose = () => {
        setalert(false)
    }

    const formSubmit = (data) => {
        const savedUser = users.find(user => (
            user.email === data.email && user.password === data.password
        ))
        if (savedUser) {
            navigate('/home', { state: data })
        } else {
            setalert(true)
            // navigate('/')
        }
    };
    return (
        <>

            <div
                className="grid place-items-center h-[calc(100vh-56px)]"
            >

                <Snackbar
                    open={alert}
                    autoHideDuration={1500}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "center", }}
                >
                    <Alert variant="filled" severity='error' onClick={handleClose}>
                        Invalid email password
                    </Alert>
                </Snackbar>
                <form
                    action=""
                    onSubmit={handleSubmit(formSubmit)}
                    className="max-w-[400px] p-3 rounded-lg bg-[#E6EBF1]"
                >
                    <h2 className="text-center text-xl font-semibold">Login Form</h2>
                    <div className="my-2 grid">
                        <label className="text-sm font-semibold">Email</label>
                        <input
                            type="text"
                            {...register("email", {
                                required: "Please enter email address",
                            })}
                            className="px-3 py-2 rounded-lg bg-[#fff] outline-0 my-2"
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="my-2 grid">
                        <label className="text-sm font-semibold">Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Please enter password",
                            })}
                            className="px-3 py-2 rounded-lg bg-[#fff] outline-0 my-2"
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                    </div>
                    <button className="px-3 py-2 rounded-lg w-full bg-[#31d511] text-white">
                        Login
                    </button>
                    <p className='text-sm my-2'>Dont't have an account <span className='text-[#1316e9] font-semibold' onClick={() => navigate('/')}>Click here</span> for signUp</p>
                </form>
            </div>
        </>
    )
}

export default Login