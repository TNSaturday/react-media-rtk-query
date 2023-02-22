import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../slice/usersSlice";

const getUsers = createAsyncThunk("users/get", async () => {
  const response = await axios.get<IUser[]>("http://localhost:5174/users");

  return response.data;
});

export { getUsers };
