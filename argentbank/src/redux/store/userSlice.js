import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  firstName: null,
  lastName: null,
  userName: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.userName = action.payload.userName
    },
    clearUser: (state) => {
      state.firstName = null
      state.lastName = null
      state.userName = null
    },
  },
})

export const { setUser, clearUser } = userSlice.actions
export default userSlice.reducer
