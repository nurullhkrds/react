import { configureStore } from '@reduxjs/toolkit'
import speedSlice from './speedSlice'

export const store = configureStore({
  reducer: {
    speed:speedSlice

  },
})