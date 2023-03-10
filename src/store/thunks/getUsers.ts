import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../slice/usersSlice";
import pause from "../../utils/pause";

const getUsers = createAsyncThunk("users/get", async () => {
  const response = await axios.get<IUser[]>("http://localhost:5174/users");
  // TODO: remove when testing finished
  await pause(500);

  return response.data;
});

export { getUsers };
