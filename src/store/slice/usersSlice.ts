import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { getUsers } from "../thunks/getUsers";

export interface IUser {
  id: number;
  name: string;
}

interface IUserState {
  users: IUser[];
  isLoading: boolean;
  error: SerializedError | null;
}

const initialState: IUserState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;
