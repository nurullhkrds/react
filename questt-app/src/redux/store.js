import { configureStore } from '@reduxjs/toolkit'
import postSlice from './slices/postSlice'
import authSlice from './slices/authSlice'
import likeSlice from './slices/likeSlice'
import commentSlice from './slices/commentSlice'

export const store = configureStore({
  reducer: {
    post:postSlice,
    auth:authSlice,
    like:likeSlice,
    comment:commentSlice,
  },
})