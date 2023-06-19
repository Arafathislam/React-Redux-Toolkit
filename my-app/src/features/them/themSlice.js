import { createSlice } from '@reduxjs/toolkit'

export const themSlice = createSlice({
  name: 'them',
  initialState: {
    color: "",
  },
  reducers: {

    changeTextColor: (state, action) => {
      state.color = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeTextColor } = themSlice.actions

export default themSlice.reducer