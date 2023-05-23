import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserState, User } from "./types";

export const initialState: UserState = {
  users: [],
  isLoading: false,
};

export const userSlice = createSlice({
  name: "userList",
  initialState,

  reducers: {
    getUsersFetch: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
      state.isLoading = false;
    },
    getUserFailed: (state) => {
      state.isLoading = false;
    },
    deleteUser: (state: any, action) => {
      state.users = state.users.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  getUsersFetch,
  getUserSuccess,
  getUserFailed,
  deleteUser,
} = userSlice.actions;
export default userSlice.reducer;
