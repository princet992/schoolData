import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    users: [],
    userLogin: null,
    isAuthenticate: false,
  },
  reducers: {
    addUser: (state, action) => {
      const existingUser = state.users.find(
        (user) => user.id === action.payload.id
      );
      if (!existingUser) {
        state.users.push(action.payload);
      } else {
        alert("User is already registered");
      }
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    },
    login: (state, action) => {
      const user = state.users.find(
        (u) =>
          u.email === action.payload.email &&
          u.password === action.payload.password
      );
      if (user) {
        state.userLogin = user;
        state.isAuthenticate = true;
      } else {
        alert("invalid user");
      }
    },
    logOut: (state) => {
      (state.userLogin = null), (state.isAuthenticate = false);
    },
  },
});

export const { addUser, login, logOut, removeUser } = AuthSlice.actions;

export default AuthSlice.reducer;
