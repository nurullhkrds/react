import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./control/cartSlice";

import { getDefaultMiddleware } from "@reduxjs/toolkit";

const customizedMiddleware=getDefaultMiddleware({
    serializableCheck:false
})


export const store=configureStore({
    reducer:{
        cart:cartReducer,
}
})
   

