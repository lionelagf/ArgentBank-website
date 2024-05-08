import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginReducer: (state, action) => {
      state.token = action.payload.token
    },
    logoutReducer: (state) => {
      state.token = null
    },
  },
})

export const { loginReducer, logoutReducer } = loginSlice.actions
export default loginSlice.reducer
