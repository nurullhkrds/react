import { configureStore } from '@reduxjs/toolkit'
import playerReducer from "../store/player"


export const store = configureStore({
  reducer: {
    player:playerReducer,
  },
})