import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredentials) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/api/v1/user/login`,
        userCredentials
      )
      const token = response.data.body.token // Contient le token
      

      localStorage.setItem('userToken', token)

      // Stockez le jeton d'authentification et les autres informations dans le Redux Store
      return token
    } catch (error) {
      throw error
    }
  }
)

// Action asynchrone pour la déconnexion de l'utilisateur
export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async () => {
    // Supprimez le jeton d'authentification du localStorage
    localStorage.removeItem('user');
    // Mettez à jour l'état de connexion à false
    return false;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    user: null, // Maintenant un objet contenant toutes les informations de l'utilisateur
    error: null,
    isLoggedIn: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true
        state.user = null
        state.error = null
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        state.error = null
        state.isLoggedIn = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.user = null
        console.log(action.error.message)
        if (action.error.message === 'Request failed with status code 400') {
          state.error = 'Accès refusé ! Identifiants invalides'
        } else {
          state.error = action.error.message
        }
      })
  },
})

export default userSlice.reducer;