import { setUser } from '../store/userSlice'
import { store } from '../store/store'

const fetchProfile = () => {
  return async (dispatch) => {
    const state = store.getState()
    const token = state.login.token

    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (response.ok) {
      const data = await response.json()
      dispatch(setUser(data.body)) // Dispatch the action to set user profile
    }
  }
}

export default fetchProfile
