import { configureStore } from "@reduxjs/toolkit";
import noteSlider from './slider/NoteSlider'


export const store=configureStore({
    reducer:{
        notes:noteSlider

    }
})