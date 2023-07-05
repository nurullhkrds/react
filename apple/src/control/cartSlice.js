import ItemList from "../ItemList";
import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    
  cartItems:ItemList,
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state, action) => {
      const cartItem = state.cartItems.find((item)=>item.id===action.payload);

                cartItem.quantity++;
                console.log(cartItem.quantity)

    },
    decrease: (state, action) => {
        const cartItem = state.cartItems.find((item)=>
      
                item.id===action.payload

          );

          cartItem.quantity--;
          console.log(cartItem.quantity)

    },
    calculater: (state) => {
      let total = 0;
      let quantity = 0;
      state.cartItems.forEach((item) => {
        total += item.quantity * item.price;
        quantity += item.quantity;
      });
      state.quantity = quantity;
      state.total = total;
    },

  },
});

export const { increase, decrease,calculater } = cartSlice.actions;

export default cartSlice.reducer;
