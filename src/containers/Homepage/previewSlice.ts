import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState,Preview } from "./types4";

export const initialState: UserState = {
  preview: [],
  isLoading: false,
};

export const previewSlice = createSlice({
  name: "preview",
  initialState,

  reducers: {
    getApiFetch: (state) => {
      state.isLoading = true;
      console.log('fetch')
    },
    getApiSuccess: (state, action: PayloadAction<Preview[]>) => {
      console.log('success')
      state.preview = action.payload;
      state.isLoading = false;
    },
    getApiFailed: (state) => {
      state.isLoading = false;
    },
    
  },
});

export const {
  getApiFetch,
  getApiSuccess,
  getApiFailed,
} = previewSlice.actions;
export default previewSlice.reducer;
