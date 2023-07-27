import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart, UserState } from "./types3";

export const initialState: UserState = {
  cart: [],
  isLoading: false,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  
};

// console.log(initialState.cart)

const cartSlice = createSlice({
  name: "cartItems",
  initialState,

  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      const itemInCart = state.cart.find(
        (item: any) => item.id === action.payload.id
      );
      console.log("added to cart");
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<Cart>) => {
      const removeFromCart = state.cart.filter(
        (item: any) => item.id !== action.payload.id
      );
      state.cart = removeFromCart;
    },

    incrementQuantity: (state, action) => {
      console.log("increment");
      const item: any = state.cart.find(
        (item: any) => item.id === action.payload.id
      );
      item.quantity++;
    },

    decrementQuantity: (state, action: any) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      } else if (state.cart[itemIndex].quantity === 1) {
        const nextCartItems = state.cart.filter(
          (item: any) => item.id !== action.payload.id
        );

        state.cart = nextCartItems;
      }
    },
    getTotals(state, action) {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity }:any = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },

    // getCartTotal: (state) => {
    //   let { totalQuantity, totalPrice } = state.cart.reduce(
    //     (cartTotal, cartItem) => {
    //       console.log("carttotal", cartTotal);
    //       console.log("cartitem", cartItem);
    //       const { price, quantity }:any = cartItem;
    //       console.log(price, quantity);
    //       const itemTotal = price * quantity;
    //       cartTotal.totalPrice += itemTotal;
    //       cartTotal.totalQuantity += quantity;
    //       return cartTotal;
    //     },
    //     {
    //       totalPrice: 0,
    //       totalQuantity: 0,
    //     }
    //   );
    //   state.totalPrice = parseInt(totalPrice.toFixed(2));
    //   state.totalQuantity = totalQuantity;
    // },
    clearCart: (state:any) =>{
      state.cart =[]
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  getTotals,clearCart
} = cartSlice.actions;
export default cartSlice.reducer;
