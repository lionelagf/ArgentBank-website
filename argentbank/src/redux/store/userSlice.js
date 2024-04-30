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
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
