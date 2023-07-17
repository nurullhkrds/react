import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: false,
  controls: false,
  playing: false,
};

export const playingSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setCurrent: (state, action) => {
      state.current = action.payload;
    },
    setControls: (state, action) => {
      state.controls = action.payload;
    },
    setPlaying: (state, action) => {
      state.playing = action.payload;
    },
  },
});

export const { 
    setControls, setCurrent, setPlaying } = playingSlice.actions;

export default playingSlice.reducer;
