import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import userSlice from './userSlice'
import { thunk } from 'redux-thunk'
import { persistReducer, persistStore, PERSIST } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedUserSlice = persistReducer(persistConfig, userSlice)
const persistedLoginSlice = persistReducer(persistConfig, loginSlice)

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
