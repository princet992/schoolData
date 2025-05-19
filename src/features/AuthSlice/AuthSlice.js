import { createSlice } from "@reduxjs/toolkit";


const AuthSlice = createSlice({
    name: 'Auth',
    initialState: {
        users: []
    },
    reducers: {
        addUser: (state, action) => {
            const existingUser = state.users.find(user => user.id === action.payload.id)
            if (!existingUser) {
                state.users.push(action.payload)
            } else {
                alert('User is already registered')
            }
        }
    }
})

export const {addUser} = AuthSlice.actions;

export default AuthSlice.reducer;