import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState, Product } from "./types2";

export const initialState: UserState = {
  product: [],
  isLoading: false,
};

export const shopSlice = createSlice({
  name: "itemList",
  initialState,

  reducers: {
    getApiFetch: (state) => {
      state.isLoading = true;
    },
    getApiSuccess: (state, action: PayloadAction<Product[]>) => {
      // console.log("api success called");
      state.product = action.payload;
      state.isLoading = false;
    },
    getApiFailed: (state) => {
      state.isLoading = false;
    },
    // // deleteProduct: (state: any, action) => {
    // //   state.product = state.product.filter(
    // //     (item: any) => item.id !== action.payload.id
    // //   );
    // },
  },
});

export const {
  getApiFetch,
  getApiSuccess,
  getApiFailed,
  // deleteProduct,
} = shopSlice.actions;
export default shopSlice.reducer;
