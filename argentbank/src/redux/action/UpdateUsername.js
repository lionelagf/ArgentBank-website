import { setUser } from '../store/userSlice'
import { store } from '../store/store'

const updateUsername = (userName) => {
  return async (dispatch) => {
    const state = store.getState()
    const token = state.login.token

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userName }),
    })

    if (response.ok) {
      const data = await response.json()
      dispatch(setUser(data.body)) // Dispatch the action to set user profile
    }
  }
}

export default updateUsername
