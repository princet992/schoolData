import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        users: [],
        userLogin: null,
        isAuthenticate: false,
        isAdmin: false
    },
    reducers: {
        addUser: (state, action) => {
            const existingUser = state.users.find(user => user.id === action.payload.id)
            if (!existingUser) {
                state.users.push(action.payload)
            } else {
                alert('User is already registered')
            }
        },
        login: (state, action) => {
            const user = state.users.find(u => (
                u.email === action.payload.email && u.password === action.payload.password && u.role !== 'admin'
            ))
            console.log(user)
            const admin = state.users.find(user => user.role === 'admin')
            if (user) {
                state.userLogin = user;
                state.isAuthenticate = true;
            }
            else if (admin) {
                state.isAdmin = true;
                state.userLogin = null;
                state.isAuthenticate = false;
            } else {
                alert('invalid user')
            }
        },
        logOut: (state) => {
            state.userLogin = null,
                state.isAuthenticate = false
        }
    }
})

export const { addUser, login, logOut } = AuthSlice.actions;

export default AuthSlice.reducer;