import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "Themes",
  initialState: {
    theme: "light",
  },
  reducers: {
    toggleTheme:(state,action) =>{
      state.theme === 'light'?
      state.theme = 'dark':state.theme = 'light'
    }
  },
});

export const {toggleTheme} = ThemeSlice.actions;
export default ThemeSlice.reducer;
