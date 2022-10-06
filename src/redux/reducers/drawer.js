import { createSlice } from '@reduxjs/toolkit';

export const drawer = createSlice({
  name: 'drawer',
  initialState: {
    drawer: false
  },
  reducers: {
    changeDrawer: (state) => {
      state.drawer = !state.drawer
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeDrawer } = drawer.actions

export default drawer.reducer