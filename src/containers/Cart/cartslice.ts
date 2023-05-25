import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, UserState } from "./types3";

export const initialState: UserState = {
  cart: [],
  isLoading: false,
};

// console.log(initialState.cart)

const cartSlice = createSlice({
  name: "cartItems",
  initialState,

  reducers: {
    
      addToCart: (state, action: PayloadAction<Cart>) => {
        const itemInCart = state.cart.find((item:any) => item.id === action.payload.id);
        if (itemInCart) {
          itemInCart.quantity++;
        } else {
          state.cart.push({
            ...action.payload, quantity: 1
          });
        }
      },
    
      removeFromCart: (state, action: PayloadAction<Cart[]>) => {
        const removeFromCart = state.cart.filter((item:any) => item.id !== action.payload);
        state.cart = removeFromCart
      
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;