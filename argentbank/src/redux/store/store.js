import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import userSlice from './userSlice'
import { thunk } from 'redux-thunk'
import { persistReducer, persistStore, PERSIST } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const userPersistConfig = {
  key: 'user',
  storage,
}
const loginPersistConfig = {
  key: 'login',
  storage,
}

const persistedUserSlice = persistReducer(userPersistConfig, userSlice)
const persistedLoginSlice = persistReducer(loginPersistConfig, loginSlice)

export const store = configureStore({
  reducer: {
    login: persistedLoginSlice,
    user: persistedUserSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(thunk),
  devTools: true,
})

export const persistedStore = persistStore(store)