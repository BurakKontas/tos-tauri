import { createSlice } from '@reduxjs/toolkit';

export const theme = createSlice({
  name: 'theme',
  initialState: {
    theme: "light"
  },
  reducers: {
    changeTheme: (state) => {
      ((state.theme === "light") ? state.theme = "dark" : state.theme = "light");
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = theme.actions

export default theme.reducer