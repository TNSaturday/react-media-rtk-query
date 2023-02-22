import { createSlice, nanoid } from "@reduxjs/toolkit";

interface User {
  id: string;
  name: string;
  email: string;
}

const initialState = {
  users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const usersReducer = usersSlice.reducer;
