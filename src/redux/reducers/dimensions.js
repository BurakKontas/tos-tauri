import { createSlice } from '@reduxjs/toolkit';

export const dimensions = createSlice({
  name: 'dimensions',
  initialState: {
    height:600,
    width:800,
  },
  reducers: {
    setDimensions: (state,action) => {
        state.height = action.payload.height;
        state.width = action.payload.width;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDimensions } = dimensions.actions

export default dimensions.reducer